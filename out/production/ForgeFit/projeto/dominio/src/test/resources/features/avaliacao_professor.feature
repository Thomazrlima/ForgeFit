Feature: Avaliação de Professores
  # Regra de negócio 1: Avaliar professor com métricas obrigatórias

  Scenario: Avaliação realizada com sucesso
    Given que um aluno teve aula com o professorId "1"
    When o aluno preenche as métricas de didática com "5" estrelas, atenção com "4" estrelas e pontualidade com "1" estrela
    Then o sistema em relação a avaliação do professor informa "A avaliação foi registrada com sucesso"

  Scenario: Avaliação não realizada por falta de métricas
    Given que um aluno teve aula com o professorId "2"
    When o aluno não preenche todas as métricas obrigatórias
    Then o sistema em relação a avaliação do professor informa "É necessário preencher todas as métricas de avaliação"
  # Regra de negócio 2: Inserir comentário opcional

  Scenario: Comentário adicional incluído
    Given que um aluno teve aula com o professorId "3"
    When o aluno insere um comentário falando "Me ajudou muito a me adaptar a academia" junto com as métricas
    Then o comentário "Me ajudou muito a me adaptar a academia" é armazenado com sucesso

  Scenario: Comentário vazio
    Given que um aluno teve aula com o professorId "4"
    When o aluno preenche as métricas de didática com "3" estrelas, atenção com "3" estrelas e pontualidade com "5" estrela
    And o aluno não insere comentário
    Then a avaliação é registrada apenas com as métricas e informa "A avaliação foi registrada com sucesso"
