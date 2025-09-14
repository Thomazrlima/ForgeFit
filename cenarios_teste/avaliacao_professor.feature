Feature: Avaliação de Professores

  # Regra de negócio 1: Avaliar professor com métricas obrigatórias
  Scenario: Avaliação realizada com sucesso
    Dado que um aluno teve aula com o professor
    E o professor está disponível para avaliação
    Quando o aluno preenche as métricas de didática, atenção e pontualidade
    Então a avaliação é registrada com sucesso
    E o sistema confirma a avaliação do professor

  Scenario: Avaliação não realizada por falta de métricas
    Dado que um aluno teve aula com o professor
    E o professor está disponível para avaliação
    Quando o aluno não preenche todas as métricas obrigatórias
    Então o sistema informa que a avaliação não pôde ser concluída
    E solicita que todas as métricas sejam preenchidas

  # Regra de negócio 2: Inserir comentário opcional
  Scenario: Comentário adicional incluído
    Dado que um aluno teve aula com o professor
    E o professor está disponível para avaliação
    Quando o aluno insere um comentário junto com as métricas
    Então o comentário é armazenado com sucesso
    E a avaliação é concluída corretamente

  Scenario: Comentário vazio
    Dado que um aluno teve aula com o professor
    E o professor está disponível para avaliação
    Quando o aluno não insere comentário
    Então a avaliação é registrada apenas com as métricas
    E o sistema informa que o comentário é opcional

  # Regra de negócio 3: Avaliação anônima configurável
  Scenario: Avaliação anônima ativada
    Dado que um aluno teve aula com o professor
    E a opção de anonimato está ativada
    Quando o aluno realiza a avaliação
    Então a avaliação é registrada sem identificação do aluno
    E o professor recebe apenas as métricas e comentários

  Scenario: Avaliação anônima desativada
    Dado que um aluno teve aula com o professor
    E a opção de anonimato está desativada
    Quando o aluno realiza a avaliação
    Então a avaliação é registrada com a identificação do aluno
    E o professor recebe as métricas, comentários e autor da avaliação
