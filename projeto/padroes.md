# Padrões de Projeto - ForgeFit

Este documento lista os padrões de projeto adotados no sistema ForgeFit, incluindo as classes criadas e/ou alteradas para cada padrão.

---

## 1. Observer (Observador)

**Contexto**: Controle de Frequência

**Objetivo**: Notificar múltiplos componentes do sistema (logs, emails, notificações push) quando ocorrem mudanças no status de frequência dos alunos (bloqueios, advertências, desbloqueios).

**Implementação**:

### Subject (Sujeito)

- **`FrequenciaService`** (`dominio/src/main/java/br/com/forgefit/dominio/frequencia/FrequenciaService.java`)
  - Mantém lista de observadores registrados
  - Notifica observadores quando há mudanças de status
  - Métodos: `adicionarObservador()`, `removerObservador()`, `notificarBloqueio()`, `notificarAdvertencia()`, `notificarDesbloqueio()`

### Observer Interface (Interface do Observador)

- **`FrequenciaObserver`** (`dominio/src/main/java/br/com/forgefit/dominio/frequencia/FrequenciaObserver.java`)
  - Interface que define o contrato para observadores
  - Métodos: `notificarBloqueio()`, `notificarAdvertencia()`, `notificarDesbloqueio()`

### Concrete Observers (Observadores Concretos)

#### 1. FrequenciaLogObserver

- **Arquivo**: `aplicacao/src/main/java/br/com/forgefit/aplicacao/frequencia/FrequenciaLogObserver.java`
- **Responsabilidade**: Registra eventos de frequência nos logs do sistema usando SLF4J
- **Comportamento**:
  - Bloqueio: Log de nível INFO com detalhes das faltas e dias de bloqueio
  - Advertência: Log de nível WARN alertando sobre proximidade do bloqueio
  - Desbloqueio: Log de nível INFO confirmando liberação

#### 2. FrequenciaEmailObserver

- **Arquivo**: `aplicacao/src/main/java/br/com/forgefit/aplicacao/frequencia/FrequenciaEmailObserver.java`
- **Responsabilidade**: Envia notificações por email para os alunos
- **Dependências**: `EmailSender`, `UsuarioMockRepositorio`
- **Comportamento**:
  - Bloqueio: Email informando bloqueio, quantidade de faltas e duração
  - Advertência: Email alertando sobre risco de bloqueio iminente
  - Desbloqueio: Email confirmando que o aluno pode fazer novas reservas

#### 3. FrequenciaNotificacaoObserver

- **Arquivo**: `aplicacao/src/main/java/br/com/forgefit/aplicacao/frequencia/FrequenciaNotificacaoObserver.java`
- **Responsabilidade**: Simula envio de notificações push (mock)
- **Comportamento**:
  - Log simulando push notification com emojis
  - Pronto para integração com serviço real de notificações push

### Configuração

- **`FrequenciaConfig`** (`backend/src/main/java/br/com/forgefit/apresentacao/config/FrequenciaConfig.java`)
  - Configura beans do Spring para os três observadores
  - Registra automaticamente os observadores no `FrequenciaService`
  - Garante que todos os observadores sejam notificados simultaneamente

---

## 2. Strategy (Estratégia)

**Contexto**: Sistema de Ranking de Alunos

**Objetivo**: Permitir diferentes algoritmos de cálculo de pontuação no ranking, podendo variar conforme o contexto (período normal, torneio, bônus por engajamento) sem modificar o código cliente.

**Implementação**:

### Strategy Interface (Interface da Estratégia)

- **`CalculoPontuacaoStrategy`** (`dominio/src/main/java/br/com/forgefit/dominio/ranking/strategy/CalculoPontuacaoStrategy.java`)
  - Interface que define o contrato para estratégias de cálculo
  - Métodos: `calcularPontosFrequencia()`, `calcularPontosGuilda()`, `calcularPontosPerformance()`, `getNome()`

### Concrete Strategies (Estratégias Concretas)

#### 1. CalculoPontuacaoPadraoStrategy

- **Arquivo**: `dominio/src/main/java/br/com/forgefit/dominio/ranking/strategy/CalculoPontuacaoPadraoStrategy.java`
- **Responsabilidade**: Cálculo direto de pontos sem modificadores
- **Comportamento**: Retorna os pontos base sem aplicar bônus ou multiplicadores

#### 2. CalculoPontuacaoComBonusStrategy

- **Arquivo**: `dominio/src/main/java/br/com/forgefit/dominio/ranking/strategy/CalculoPontuacaoComBonusStrategy.java`
- **Responsabilidade**: Cálculo com bônus por consistência e engajamento
- **Comportamento**:
  - Bônus de frequência: 10% (3+ aulas), 25% (5+ aulas), 50% (10+ aulas consecutivas)
  - Multiplicador de guilda: 5% por nível
  - Bônus de performance: 20% para notas >= 4.0

#### 3. CalculoPontuacaoTorneioStrategy

- **Arquivo**: `dominio/src/main/java/br/com/forgefit/dominio/ranking/strategy/CalculoPontuacaoTorneioStrategy.java`
- **Responsabilidade**: Cálculo especial para períodos de torneio/competição
- **Comportamento**:
  - Pontos dobrados (multiplicador 2.0)
  - Bônus de sequência: 25% extra por aula consecutiva (máximo 5)
  - Bônus de nota máxima: 50% para nota 5.0

### Context (Contexto)

- **`RankingService`** (`dominio/src/main/java/br/com/forgefit/dominio/ranking/RankingService.java`)
  - Mantém referência à estratégia atual
  - Permite troca de estratégia em runtime via `setCalculoPontuacaoStrategy()`
  - Delega cálculos de pontuação para a estratégia configurada
  - Usa `CalculoPontuacaoPadraoStrategy` como padrão

---
