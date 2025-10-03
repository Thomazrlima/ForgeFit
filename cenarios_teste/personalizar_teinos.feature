Feature: Personaização de treinos

  Scenario: Personaização do treino do aluno
    Given o professor seleciona um aluno com treinos "A" e "B", Disponiveis
    When o treino "B" é selecionado, é direcionado a escolher o tipo e os exercicios que irao compor o treino daqele aluno
    Then o treino é cadastrado/atualizado
    And o aluno ja pode utilizar seu novo conjunto que compõe o treino "B'"

  Scenario: Tentativa de editar ou deletar p treini
    Given o professor seleciona um aluno com treinos "A", "B", "C", "D", "E","F" e "G ", Disponiveis
    When o Professor decide adicionar um novo treino("J")
    Then o treino não é cadastrado pois superou o numero de dias da semana

