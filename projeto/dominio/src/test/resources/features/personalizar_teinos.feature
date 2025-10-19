Feature: Personalização de treinos

#REGRA 1 - Personalizar treino do aluno

  Scenario: Personalização do treino do aluno
    Given o professor com CPF "123.456.789-01" seleciona um aluno com treinos "A" e "B" já definidos
    When o treino "B" é selecionado, e escolhe o tipo "perna" e os exercicios que irao compor o treino daqele aluno
    Then o treino é cadastrado/atualizado

#REGRA 2 - Validar limite de treinos

  Scenario: Validar limite de 7 treinos por aluno
    Given o professor com CPF "123.456.789-01" seleciona um aluno com treinos "A", "B", "C", "D", "E","F" e "G", Disponiveis
    When o Professor decide adicionar um novo treino("J")
    Then o treino não é cadastrado pois superou o numero de dias da semana

#REGRA 3 - Criar novo treino 

  Scenario: Criar treino "B" automaticamente
    Given o aluno com CPF "123.456.789-00" e com treino "A" já definido
    When o professor cria um novo treino do tipo "perna" e escolhe os exercicios "Agachamento", "Leg Press" e "Cadeira Extensora"
    Then o treino é cadastrado/atualizado se tornando automaticamente se torna o treino "B"

#REGRA 4 - Limite de treinos na criação

  Scenario: Validar limite ao criar novo treino
    Given o aluno com CPF "123.456.789-00" e com treinos "A", "B", "C", "D", "E","F" e "G" já definidos
    When o professor tenta criar um novo treino do tipo "braço" e escolhe os exercicios "Rosca Direta", "Rosca Martelo" e "Tríceps Testa"
    Then o treino não é cadastrado pois superou o numero de dias da semana, impossibilitando a criação do treino "H"

#REGRA 5 - Exclusão de treino com reordenação

  Scenario: Excluir treino "B" e reordenar automaticamente
    Given o aluno com CPF "123.456.789-00" e com treinos "A", "B", "C", "D", "E","F" e "G" já definidos
    When o professor exclui o treino "B"
    Then o treino é excluído com sucesso, ficando disponivel para a criação de um novo treino
    And o treino "A" permanece inalterado e a ordem dos treinos "C", "D", "E", "F" e "G" é alterada para "B", "C", "D", "E" e "F" respectivamente

 