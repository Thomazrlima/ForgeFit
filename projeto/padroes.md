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

### Benefícios da Implementação
- **Desacoplamento**: FrequenciaService não conhece detalhes de implementação dos observadores
- **Extensibilidade**: Novos observadores podem ser adicionados sem modificar o subject
- **Manutenibilidade**: Cada tipo de notificação tem sua própria classe com responsabilidade única
---
