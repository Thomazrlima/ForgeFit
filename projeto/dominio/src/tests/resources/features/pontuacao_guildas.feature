Feature: Pontuação e Torneios de Guilda

  # Regra de negócio: Check-in diário
  Scenario: Check-in realizado com sucesso
    Dado que um aluno está em uma guilda
    Quando ele realiza o check-in do dia
    Então o sistema registra a presença
    E adiciona a pontuação fixa ao aluno e à guilda

  Scenario: Check-in repetido no mesmo dia
    Dado que um aluno já realizou o check-in do dia
    Quando ele tenta registrar novamente
    Então o sistema informa que o check-in já foi feito
    E não adiciona pontuação duplicada

  # Regra de negócio: Histórico de pontos
  Scenario: Consultar histórico de pontos existente
    Dado que um aluno possui check-ins registrados
    Quando ele solicita o histórico de pontos
    Então o sistema exibe as presenças registradas
    E mostra a evolução da pontuação ao longo do tempo

  Scenario: Consultar histórico de pontos inexistente
    Dado que um aluno ainda não realizou check-ins
    Quando ele solicita o histórico de pontos
    Então o sistema informa que não há registros disponíveis

  # Regra de negócio: Ranking semanal e mensal
  Scenario: Consultar ranking válido
    Dado que existem alunos com pontuação registrada
    Quando o ranking semanal ou mensal for solicitado
    Então o sistema exibe a lista de alunos ordenada pela pontuação
    E indica os primeiros colocados

  Scenario: Consultar ranking sem registros
    Dado que não existem alunos com pontuação registrada
    Quando o ranking semanal ou mensal for solicitado
    Então o sistema informa que não há registros disponíveis

  # Regra de negócio: Torneio entre guildas
  Scenario: Torneio iniciado com sucesso
    Dado que a academia deseja iniciar um torneio
    Quando existem guildas participantes
    Então o sistema inicia o torneio
    E gera um ranking de guildas com base na pontuação

  Scenario: Torneio sem guildas participantes
    Dado que a academia deseja iniciar um torneio
    Quando não existem guildas cadastradas
    Então o sistema informa que não é possível iniciar o torneio

  # Regra de negócio: Premiação no torneio
  Scenario: Premiação atribuída à guilda vencedora
    Dado que um torneio foi concluído
    Quando uma guilda atinge a maior pontuação
    Então o sistema declara essa guilda como vencedora
    E atribui a premiação definida

  Scenario: Premiação sem guilda vencedora
    Dado que um torneio foi concluído
    Quando nenhuma guilda alcança a pontuação mínima
    Então o sistema informa que não há vencedores
    E nenhuma premiação é atribuída
