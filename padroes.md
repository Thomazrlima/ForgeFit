# Padrões de Projeto - ForgeFit

Este documento lista os padrões de projeto adotados no sistema ForgeFit, incluindo as classes criadas e/ou alteradas para cada padrão.

---

## 1. Observer (Observador)

**Autor**: Thomaz Lima ([@Thomazrlima](https://github.com/Thomazrlima)) - 📧 trl@cesar.school

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

**Autor**: Vinícius de Andrade ([@viniciusdandrade](https://github.com/viniciusdandrade)) - 📧 vaj@cesar.school

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

## 3. Iterator (Iterador)

**Autor**: Leonardo Matos ([@LeoGutzeitt](https://github.com/LeoGutzeitt)) - 📧 lgbm@cesar.school

**Contexto**: Criação de Aulas e Verificação de Conflitos

**Objetivo**: Fornecer uma forma de percorrer sequencialmente uma coleção de aulas sem expor sua representação interna, facilitando a verificação de conflitos de horário ao criar novas aulas.

**Implementação**:

### Aggregate (Agregado)

- **`AulaCollection`** (`dominio/src/main/java/br/com/forgefit/dominio/aula/AulaCollection.java`)
  - Encapsula uma lista de aulas
  - Fornece o método `iterator()` que retorna um iterador para percorrer as aulas
  - Abstrai a estrutura interna de armazenamento das aulas

### Iterator (Iterador)

- **`AulaIterator`** (`dominio/src/main/java/br/com/forgefit/dominio/aula/AulaIterator.java`)
  - Implementa a interface `Iterator<Aula>` do Java
  - Mantém estado da posição atual na iteração
  - Métodos: `hasNext()`, `next()`, `reset()`
  - Método adicional `reset()` permite reiniciar a iteração do início

### Client (Cliente)

- **`AulaConflitoChecker`** (`dominio/src/main/java/br/com/forgefit/dominio/aula/AulaConflitoChecker.java`)
  - Utiliza o iterator para verificar conflitos de horário
  - Percorre todas as aulas existentes comparando com nova aula
  - Método: `existeConflito()` - verifica se há sobreposição de horários no mesmo espaço
  - Isolamento: o cliente não precisa conhecer como as aulas estão armazenadas internamente

### Uso no Sistema

O padrão Iterator é utilizado principalmente durante a **criação de aulas** (tanto únicas quanto recorrentes) para:

1. **Verificar conflitos de horário**: Ao criar uma aula, o sistema itera sobre todas as aulas existentes para garantir que não haja sobreposição de horários no mesmo espaço físico
2. **Validação de disponibilidade**: Permite verificar se um professor ou espaço está disponível em determinado horário
3. **Reagendamento**: Ao reagendar aulas, o iterator é usado para validar se o novo horário está disponível

---

## 4. Template Method (Método Template)

**Autor**: Gustavo Mourato ([@gustavoyoq](https://github.com/gustavoyoq)) - 📧 gmam@cesar.school

**Contexto**: Avaliação de Bioimpedância

**Objetivo**: Definir o esqueleto do algoritmo de registro de avaliações físicas, permitindo que subclasses implementem etapas específicas (como validação de regras de negócio) sem alterar a estrutura geral do fluxo.

**Implementação**:

### Abstract Class (Classe Abstrata)

- **`AvaliacaoFisicaTemplateMethod`** (`aplicacao/src/main/java/br/com/forgefit/aplicacao/avaliacaoFisica/AvaliacaoFisicaTemplateMethod.java`)
  - Define o método template `registrarAvaliacao()` como `final`
  - Métodos abstratos: `validarRegrasNegocio()`
  - Hook methods: `prepararDadosEspecificos()`, `executarAcoesPosRegistro()`, `gerarMensagemSucesso()`
  - Sequência do algoritmo:
    1. Validar dados de entrada
    2. Criar objeto Matrícula
    3. Validar regras de negócio específicas
    4. Preparar dados específicos (hook)
    5. Persistir avaliação no repositório
    6. Executar ações pós-registro (hook)
    7. Gerar mensagem de sucesso

### Concrete Class (Classe Concreta)

#### 1. AvaliacaoFisicaServicoAplicacao

- **Arquivo**: `aplicacao/src/main/java/br/com/forgefit/aplicacao/avaliacaoFisica/AvaliacaoFisicaServicoAplicacao.java`
- **Responsabilidade**: Implementação específica para avaliações de bioimpedância
- **Comportamento**:
  - Implementa `validarRegrasNegocio()` com validações específicas:
    - Percentual de gordura entre 0 e 100
    - Massa magra maior que zero
    - Massa gorda não negativa
    - Percentual de água corporal entre 0 e 100
    - Nível de gordura visceral mínimo 1
  - Métodos adicionais: `buscarHistoricoAluno()`, `listarAlunos()`

### Uso no Sistema

O padrão Template Method é utilizado no **registro de avaliações físicas** para:

1. **Garantir fluxo consistente**: Todas as avaliações seguem a mesma sequência de passos
2. **Permitir extensibilidade**: Novas implementações podem sobrescrever hooks para comportamentos específicos
3. **Centralizar persistência**: O salvamento no repositório é feito no template, garantindo que todas as avaliações sejam persistidas

---

## 5. Proxy (Proxy)

**Autor**: Paulo Rosado ([@paulorosadodev](https://github.com/paulorosadodev))

**Contexto**: Consulta de Detalhes de Guilda

**Objetivo**: Controlar o acesso aos dados "pesados" (pontuação total e lista de membros) de uma guilda através de lazy-loading, carregando esses dados do banco apenas quando realmente acessados e utilizando cache para evitar múltiplas consultas desnecessárias.

**Implementação**:

### Subject (Sujeito)

- **`GuildaDetalhesResumo`** (`aplicacao/src/main/java/br/com/forgefit/aplicacao/guilda/GuildaDetalhesResumo.java`)
  - Interface que define o contrato para objetos que representam detalhes de uma guilda
  - Métodos: `getId()`, `getNome()`, `getDescricao()`, `getImagemUrl()`, `getCodigoConvite()`, `getMestreMatricula()`, `getPontuacaoTotal()`, `getMembros()`
  - Métodos auxiliares: `isValid()`, `getNomeTrimmed()`, `getNumeroMembros()`, `getPontuacaoTotalOuZero()`

### Proxy (Proxy)

- **`GuildaDetalhesResumoProxy`** (`infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/GuildaDetalhesResumoProxy.java`)
  - Implementa `GuildaDetalhesResumo`
  - Armazena dados "baratos" diretamente (id, nome, descrição, imagemUrl, codigoConvite, mestreMatricula)
  - Implementa lazy-loading para dados "pesados":
    - `pontuacaoTotal`: Carregado sob demanda via `GuildaJpaRepository.calcularPontuacaoTotalPorGuildaId()`
    - `membros`: Carregado sob demanda via `GuildaJpaRepository.buscarMembrosPorGuildaId()`
  - Utiliza cache interno para evitar múltiplas consultas ao banco quando os getters são chamados repetidamente
  - Flags `pontuacaoCarregada` e `membrosCarregados` controlam quando a primeira carga ocorre

### RealSubject (Sujeito Real - Conceitual)

- **Consultas ao Banco de Dados**:
  - `GuildaJpaRepository.calcularPontuacaoTotalPorGuildaId()`: Consulta SQL agregada que calcula a pontuação total da guilda a partir do ranking
  - `GuildaJpaRepository.buscarMembrosPorGuildaId()`: Consulta SQL complexa que retorna lista de membros com suas informações (matrícula, nome, avatar, pontuação, data de entrada)

### Client (Cliente)

- **`GuildaRepositorioImpl`** (`infraestrutura/src/main/java/br/com/forgefit/persistencia/jpa/GuildaJpa.java`)
  - Método `buscarDetalhesPorId()` cria e retorna uma instância de `GuildaDetalhesResumoProxy`
  - Substituiu a implementação anterior que usava um objeto anônimo com lazy-load implícito
  - O cliente não precisa conhecer os detalhes de quando os dados pesados são carregados

### Uso no Sistema

O padrão Proxy é utilizado na **consulta de detalhes de guilda** (`GET api/guildas/{id}/detalhes`) para:

1. **Otimização de performance**: Dados pesados (pontuação e membros) só são carregados quando realmente necessários, evitando consultas desnecessárias ao banco
2. **Cache transparente**: Múltiplas chamadas aos getters `getPontuacaoTotal()` e `getMembros()` não geram consultas repetidas, utilizando valores em cache
3. **Transparência**: O cliente (controlador, serviço de aplicação) não precisa saber que está lidando com um Proxy - a interface `GuildaDetalhesResumo` permanece a mesma
4. **Separação de responsabilidades**: O Proxy encapsula a lógica de lazy-loading e cache, mantendo o código do repositório limpo e focado na persistência

---
