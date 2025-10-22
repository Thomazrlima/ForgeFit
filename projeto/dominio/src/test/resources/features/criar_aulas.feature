Feature: Criação e gerenciamento de aulas

#REGRA 1 - Criar aula única

  Scenario: Criar aula única com sucesso
    Given o professorId "1" está autenticado na plataforma
    When o professor cria uma aula única de "BOXE" na "AREA_DE_LUTAS" com capacidade "20" para o dia "08/02/2025" às "19:00"
    Then o sistema informa: "A aula foi criada com sucesso!"

  Scenario: Criar aula única com conflito de horário
    Given o professorId "1" está autenticado na plataforma
    When o professor tenta criar uma aula de "BOXE" na "AREA_DE_LUTAS" para o dia "08/02/2025" às "19:00" já ocupado
    Then o sistema informa conflito de horário e a aula não é criada
#REGRA 2 - Criar aula recorrente

  Scenario: Criar aula recorrente semanal
    Given o professorId "1" está autenticado na plataforma
    When o professor cria uma aula recorrente de "BOXE" na "AREA_DE_LUTAS" às quartas-feiras às "19:00" com recorrência "SEMANAL"
    Then o sistema informa: "A aula recorrente foi criada com sucesso!"

  Scenario: Criar aula recorrente com conflito em ocorrência futura
    Given o professorId "1" está autenticado na plataforma
    When o professor tenta criar uma aula recorrente que conflita com uma aula existente em ocorrência futura
    Then o sistema informa:"Conflito em ocorrência futura" e a aula recorrente não é criada
#REGRA 3 - Alterar horário principal da aula

  Scenario: Alterar horário principal da aula recorrente
    Given existe uma aula recorrente de "BOXE" criada pelo professorId "1"
    When o professor altera o horário principal da aula de "19:00" para "20:00"
    Then o horário principal é alterado com sucesso para todas as ocorrências futuras

  Scenario: Alterar horário principal com conflito
    Given existe uma aula recorrente de "BOXE" criada pelo professorId "1"
    When o professor tenta alterar o horário principal para um horário já ocupado
    Then o sistema informa:"Conflito de horário" e a alteração não é realizada
#REGRA 4 - Reagendar ocorrência única de aula recorrente

  Scenario: Reagendar uma única ocorrência de aula recorrente
    Given existe uma aula recorrente de "BOXE" às quartas-feiras às "19:00"
    When o professor reagenda apenas a ocorrência do dia "15/02/2025" para "16/02/2025" às "20:00"
    Then a ocorrência única é reagendada com sucesso

  Scenario: Reagendar ocorrência única com conflito
    Given existe uma aula recorrente de "BOXE" às quartas-feiras às "19:00"
    When o professor tenta reagendar a ocorrência do dia "15/02/2025" para um horário já ocupado
    Then o sistema informa: "Conflito de horário" e a ocorrência não é reagendada
#REGRA 5 - Cancelar ocorrência única de aula recorrente

  Scenario: Cancelar uma única ocorrência de aula recorrente
    Given existe uma aula recorrente de "BOXE" às quartas-feiras às "19:00"
    When o professor cancela apenas a ocorrência do dia "15/02/2025"
    Then a ocorrência única é cancelada com sucesso e as demais ocorrências permanecem ativas
#REGRA 6 - Cancelar aula definitivamente

  Scenario: Cancelar aula única definitivamente
    Given existe uma aula única de "BOXE" criada para o dia "08/02/2025"
    When o professor cancela a aula definitivamente
    Then a aula é cancelada e o horário fica disponível para novas aulas

  Scenario: Cancelar aula recorrente definitivamente
    Given existe uma aula recorrente de "BOXE" às quartas-feiras
    When o professor cancela a aula recorrente definitivamente
    Then todas as ocorrências futuras são canceladas no sistema
