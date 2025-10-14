Feature: Personaização de treinos

  Scenario: Personaização do treino do aluno
    Given o professor seleciona um aluno com treinos "A" e "B" já definidos
    When o treino "B" é selecionado, e escolhe o tipo "perna" e os exercicios que irao compor o treino daqele aluno
    Then o treino é cadastrado/atualizado

  Scenario: Tentativa de editar ou deletar o treino
    Given o professor seleciona um aluno com treinos "A", "B", "C", "D", "E","F" e "G", Disponiveis
    When o Professor decide adicionar um novo treino("J")
    Then o treino não é cadastrado pois superou o numero de dias da semana

