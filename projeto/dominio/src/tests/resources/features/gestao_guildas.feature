Feature: Gestão e Participação em Guildas

  # Regra de negócio: Criar guilda
  Scenario: Criar guilda com sucesso
    Dado que um aluno deseja criar uma guilda
    Quando ele fornece um nome válido e único
    Então a guilda é criada com sucesso
    E o aluno se torna o líder da guilda

  Scenario: Criar guilda com nome inválido
    Dado que um aluno deseja criar uma guilda
    Quando ele fornece um nome já existente ou inválido
    Então o sistema informa que a criação da guilda não é possível

  # Regra de negócio: Entrar em guilda
  Scenario: Entrar em guilda com código válido
    Dado que um aluno deseja participar de uma guilda
    Quando ele insere um código de guilda válido
    Então o sistema confirma a entrada do aluno na guilda
    E o aluno passa a fazer parte do histórico da guilda

  Scenario: Entrar em guilda com código inválido
    Dado que um aluno deseja participar de uma guilda
    Quando ele insere um código de guilda inexistente ou incorreto
    Então o sistema informa que o código é inválido
    E o aluno não consegue entrar na guilda

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
