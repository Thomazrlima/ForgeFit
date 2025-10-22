Feature: Personalização de treinos

#REGRA 1 - Criar plano de treino com dois treinos

  Scenario: Criação de plano de treino com treinos "A" e "B"
    Given o professorId "1" seleciona o aluno com matrícula "123.456.789-00"
    When o professor cria um plano de treino com treino "A" de superiores e treino "B" de inferiores
    Then o plano de treino é criado com sucesso com "2" treinos diários
#REGRA 2 - Criar plano com um único treino

  Scenario: Criar plano de treino com apenas treino "A"
    Given o aluno com matrícula "123.456.789-00" não possui plano de treino ativo
    When o professorId "1" cria um plano de treino com apenas treino "A" de corpo inteiro
    Then o plano de treino é criado com sucesso
#REGRA 3 - Criar plano completo com 7 treinos (limite máximo)

  Scenario: Criar plano de treino com todos os 7 dias da semana
    Given o aluno com matrícula "123.456.789-00" necessita de um plano completo
    When o professorId "1" cria um plano de treino com 7 treinos de "A" até "G"
    Then o plano de treino é criado com sucesso com 7 treinos diários
#REGRA 4 - Validar limite máximo de 7 treinos

  Scenario: Tentar criar plano com 8 treinos (mais que o limite)
    Given o professorId "1" está criando um plano para o aluno com matrícula "123.456.789-00"
    When o professor tenta criar um plano de treino com "8" treinos diários
    Then a criação do plano falha com mensagem informando que não é possível criar mais de "7" treinos
#REGRA 5 - Criar plano com validade sugerida

  Scenario: Criar plano de treino com data de validade sugerida
    Given o aluno com matrícula "123.456.789-00" está iniciando um novo ciclo de treino
    When o professorId "1" cria um plano de treino com validade sugerida de "90" dias
    Then o plano de treino é criado com sucesso com validade de "90" dias
#REGRA 6 - Criar plano sem validade sugerida

  Scenario: Criar plano de treino sem data de validade
    Given o aluno com matrícula "123.456.789-00" necessita de um plano permanente
    When o professorId "1" cria um plano de treino sem validade sugerida
    Then o plano de treino é criado com sucesso sem data de validade
