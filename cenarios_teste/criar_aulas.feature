#Regra 1 -- Criar aula

Feature: Criação de aulas
  Como professor
  Quero criar aulas na plataforma
  Para que os alunos possam participar e visualizar

  Scenario: Criar aula
    Given o professor está na plataforma 
    When o professor cria uma "aula de boxe" informando nome, horário "19:00", dia "quarta-feira" e data "08/02/2022"
    Then a aula é salva no sistema
    ##And a aula fica disponível para edições

  Scenario: Tentativa de criar aula com conflito
    Given o professor está na plataforma
    When o professor tenta criar uma "aula de boxe" no horário "19:00" do dia "quarta-feira" em "08/02/2022", já ocupado
    #Then a aula não é criada
    Then o sistema informa conflito de agenda com a mensagem: "08/02/2022 às 19:00 já está ocupado para aula de boxe"

  #Regra 2 - aulas recorrentes

    Scenario: Criar aula
    Given o professor está na plataforma
    When o professor cria uma "aula de boxe" para o o dia "08/02/2022" de "quarta-feira" e seleciona "sim" para "aulas recorrentes", com "15" repetições
    Then Todos a mesma "aula" é marcada "15" vezes para as "quartas-feira"s atuais e seguintes


     Scenario: Criar aula
    Given o professor está na plataforma
    When o professor cria uma aula recorrente e o dia "08/02/2022" de "quarta-feira" choca com alguma aula presente ou futura
    Then a aula não é salva no sistema

