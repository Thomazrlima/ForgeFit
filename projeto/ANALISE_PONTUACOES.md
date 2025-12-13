# Análise Detalhada das Pontuações no Sistema ForgeFit

## Resumo Executivo

O sistema possui **3 tipos diferentes de pontuação** que estão sendo usadas de forma **desconectada**, causando inconsistências:

1. **Pontuação Total do Aluno** (`Aluno.pontuacaoTotal`)
2. **Pontuação Total da Guilda** (`Guilda.pontuacaoTotal`)
3. **Pontuação no Ranking** (`ItemRanking.pontuacaoTotal`)

## 1. Pontuação Total do Aluno (`Aluno.pontuacaoTotal`)

### Onde é armazenada:
- **Domínio**: `dominio/src/main/java/br/com/forgefit/dominio/aluno/Aluno.java`
  - Campo: `private int pontuacaoTotal`
  - Método: `adicionarPontos(int pontos)`

- **Banco de Dados**: Tabela `ALUNO`, coluna `PONTUACAO_TOTAL`
- **JPA**: `infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/Aluno.java`

### Como é atualizada:
- **Check-in de Treino**: Quando um aluno faz check-in de treino, `CheckinService.realizarCheckinDeTreino()` chama:
  ```java
  aluno.adicionarPontos(10); // 10 pontos fixos por check-in
  alunoRepositorio.salvar(aluno);
  ```

### Onde é usada:
- **Ranking de Membros da Guilda**: `GuildaJpaRepository.buscarMembrosPorGuildaId()` ordena por `a.pontuacao_total DESC`
- **Exibição no Frontend**: Mostrado na página de detalhes da guilda como pontuação individual do membro

### Problema identificado:
- Esta pontuação **NÃO** é registrada no `RankingService`, então não aparece no ranking geral de alunos!

---

## 2. Pontuação Total da Guilda (`Guilda.pontuacaoTotal`)

### Onde é armazenada:
- **Domínio**: `dominio/src/main/java/br/com/forgefit/dominio/guilda/Guilda.java`
  - Campo: `private int pontuacaoTotal`
  - Método: `adicionarPontos(int pontos)`

- **Banco de Dados**: Tabela `GUILDA`, coluna `PONTUACAO_TOTAL`
- **JPA**: `infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/GuildaJpa.java`

### Como é atualizada:
- **Check-in de Treino**: Quando um aluno faz check-in de treino, `CheckinService.realizarCheckinDeTreino()` chama:
  ```java
  guilda.adicionarPontos(10); // Mesmos 10 pontos do aluno
  guildaRepositorio.salvar(guilda);
  ```

### Onde é usada:
- **Listagem de Guildas**: `GuildaJpaRepository.listarGuildasAtivasOrdenadas()` ordena por `g.pontuacaoTotal DESC`
- **Ranking de Guildas**: Usado para ordenar guildas por pontuação total acumulada

### Problema identificado:
- Esta pontuação é acumulativa de **todos os check-ins** de todos os membros
- Mas no ranking de torneios, usa apenas check-ins do **período do torneio**

---

## 3. Pontuação no Ranking (`ItemRanking.pontuacaoTotal`)

### Onde é armazenada:
- **Domínio**: `dominio/src/main/java/br/com/forgefit/dominio/ranking/ItemRanking.java`
  - Campo: `private int pontuacaoTotal`
  - Calculado como: `pontosFrequencia + pontosGuilda + pontosPerformance`

- **Banco de Dados**: Tabela `ITEM_RANKING`, coluna `PONTUACAO_TOTAL`
- **JPA**: `infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/Ranking.java`

### Como é atualizada:
- **Pontos de Frequência**: `RankingService.registrarPontosFrequencia()` → `item.adicionarPontosFrequencia()`
- **Pontos de Guilda**: `RankingService.registrarPontosGuilda()` → `item.adicionarPontosGuilda()`
- **Pontos de Performance**: `RankingService.registrarPontosPerformance()` → `item.adicionarPontosPerformance()`

### Onde é usada:
- **Ranking de Alunos**: `RankingControlador.listarRanking()` retorna `RankingItemResumo` com `pontuacaoTotal`
- **Pódio**: Top 3 do ranking
- **Top N**: Top N alunos do ranking

### Problema identificado:
- **Os pontos de check-in NÃO estão sendo registrados no RankingService!**
- Quando um aluno faz check-in de treino, os pontos são adicionados apenas a `Aluno.pontuacaoTotal` e `Guilda.pontuacaoTotal`
- Mas **NÃO** são registrados em `ItemRanking` através de `RankingService.registrarPontosGuilda()`
- Resultado: O ranking de alunos não reflete os check-ins!

---

## 4. Pontuação em Torneios

### Como é calculada:
- **Query SQL**: `TorneioJpaRepository.buscarRankingPorTorneioAtivo()`
  ```sql
  COALESCE(SUM(c.pontuacao_total), 0) as pontuacaoNoTorneio
  FROM GUILDA g
  LEFT JOIN CHECKIN c ON c.guilda_id = g.id
    AND c.data_checkin >= :dataInicio
    AND c.data_checkin <= :dataFim
  ```

### Onde é usada:
- **Ranking de Guildas no Torneio**: Soma apenas os check-ins dentro do período do torneio
- **Pódio do Torneio**: Top 3 guildas no período do torneio

### Problema identificado:
- Usa `c.pontuacao_total` do check-in (que é 10 pontos)
- Mas isso está correto, pois só conta check-ins do período do torneio

---

## Problemas Identificados

### 🔴 Problema Crítico 1: Check-ins não aparecem no Ranking de Alunos

**Situação atual:**
- Aluno faz check-in → `Aluno.pontuacaoTotal` aumenta em 10 pontos
- Mas `ItemRanking.pontuacaoTotal` **NÃO** aumenta
- Resultado: Ranking de alunos não reflete check-ins

**Causa:**
- `CheckinService.realizarCheckinDeTreino()` não chama `RankingService.registrarPontosGuilda()`

**Solução necessária:**
- Adicionar chamada a `RankingService.registrarPontosGuilda()` após criar o check-in

---

### 🟡 Problema Médio 2: Inconsistência entre Ranking de Alunos e Ranking de Guildas

**Situação atual:**
- Ranking de alunos usa `ItemRanking.pontuacaoTotal` (que não tem check-ins)
- Ranking de guildas usa `Guilda.pontuacaoTotal` (que tem check-ins)
- Resultado: Valores não batem

**Exemplo:**
- Aluno A tem 100 pontos de check-ins → `Aluno.pontuacaoTotal = 100`
- Mas `ItemRanking.pontuacaoTotal = 0` (sem check-ins registrados)
- Guilda tem 500 pontos de check-ins → `Guilda.pontuacaoTotal = 500`
- Mas ranking de alunos mostra 0 pontos para alunos que só fizeram check-ins

---

### 🟢 Problema Menor 3: Torneios funcionam corretamente

**Situação atual:**
- Torneios usam `SUM(c.pontuacao_total)` dos check-ins do período
- Isso está correto e funciona como esperado

---

## Recomendações

### 1. Integrar Check-ins com RankingService

**Arquivo**: `dominio/src/main/java/br/com/forgefit/dominio/checkin/CheckinService.java`

**Mudança necessária:**
```java
public CheckinService(
    CheckinRepositorio checkinRepositorio, 
    AlunoRepositorio alunoRepositorio,
    GuildaRepositorio guildaRepositorio,
    RankingService rankingService,  // ADICIONAR
    PeriodoRanking periodoRanking    // ADICIONAR
) {
    // ...
}

private Checkin criarEGravarCheckin(...) {
    // ... código existente ...
    
    // ADICIONAR: Registrar pontos no ranking
    PeriodoRanking periodoAtual = determinarPeriodoRanking(dataCheckin);
    rankingService.registrarPontosGuilda(
        aluno.getMatricula(), 
        pontuacao, 
        periodoAtual
    );
    
    return checkin;
}
```

### 2. Determinar Período do Ranking

**Necessário criar método para determinar o período do ranking baseado na data:**
- SEMANAL: Check-ins da semana atual
- MENSAL: Check-ins do mês atual
- GERAL: Todos os check-ins

### 3. Sincronizar Pontuações

**Opção A**: Manter `Aluno.pontuacaoTotal` e `ItemRanking.pontuacaoTotal` sincronizados
- Pros: Consistência total
- Contras: Duplicação de dados

**Opção B**: Usar apenas `ItemRanking.pontuacaoTotal` como fonte de verdade
- Pros: Fonte única de verdade
- Contras: Requer refatoração

**Opção C**: Manter ambos, mas garantir que sejam atualizados juntos
- Pros: Flexibilidade
- Contras: Requer cuidado para manter sincronização

---

## Arquivos Envolvidos

### Domínio
- `dominio/src/main/java/br/com/forgefit/dominio/checkin/CheckinService.java`
- `dominio/src/main/java/br/com/forgefit/dominio/aluno/Aluno.java`
- `dominio/src/main/java/br/com/forgefit/dominio/guilda/Guilda.java`
- `dominio/src/main/java/br/com/forgefit/dominio/ranking/RankingService.java`
- `dominio/src/main/java/br/com/forgefit/dominio/ranking/ItemRanking.java`

### Infraestrutura
- `infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/Aluno.java`
- `infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/GuildaJpa.java`
- `infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/Ranking.java`
- `infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/Checkin.java`
- `infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/Torneio.java`

### Backend
- `backend/src/main/java/br/com/forgefit/apresentacao/guilda/GuildaControlador.java`
- `backend/src/main/java/br/com/forgefit/apresentacao/ranking/RankingControlador.java`
- `backend/src/main/java/br/com/forgefit/apresentacao/torneio/TorneioControlador.java`

---

## Conclusão

O problema principal é que **os pontos de check-in não estão sendo registrados no RankingService**, causando inconsistência entre:
- Pontuação do aluno (`Aluno.pontuacaoTotal`)
- Pontuação no ranking (`ItemRanking.pontuacaoTotal`)
- Pontuação da guilda (`Guilda.pontuacaoTotal`)

A solução requer integrar o `CheckinService` com o `RankingService` para registrar os pontos de check-in no ranking de alunos.

