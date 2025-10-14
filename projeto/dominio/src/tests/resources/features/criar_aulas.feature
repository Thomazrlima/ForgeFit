#Regra 1 -- Criar aula

Feature: Criação de aulas
  Como professor
  Quero criar aulas na plataforma
  Para que os alunos possam participar e visualizar

  Scenario: Criar aula
    Given o professor está na plataforma 
    When o professor cria uma "aula de boxe" informando nome, horário "19:00",e data "08/02/2022"
    Then a aula é salva no sistema
    ##And a aula fica disponível para edições

  Scenario: Tentativa de criar aula com conflito
    Given o professor está na plataforma
    When o professor tenta criar uma "aula de boxe" no horário "19:00" de "08/02/2022", já ocupado
    #Then a aula não é criada
    Then o sistema informa conflito de agenda com a mensagem: "08/02/2022 às 19:00 já está ocupado para aula de boxe"

  #Regra 2 - aulas recorrentes

    Scenario: Criar aula
    Given o professor está na plataforma
    When o professor cria uma "aula de boxe" para o o dia "08/02/2022" e seleciona "sim" para "aulas recorrentes", com "15" repetições
    Then Todos a mesma "aula" é marcada "15" vezes para as "quartas-feira"s atuais e seguintes


    Scenario: Criar aula
    Given o professor está na plataforma
    When o professor cria uma aula recorrente e o dia "08/02/2022" choca com alguma aula presente ou futura
    Then a aula não é salva no sistema


    #Regre 3 - editar aula

    Given o professor quer editar a "aula de boxe"
    When o professor altera o status do dia "08/02/2022"para "09/02/2022" de "quinta-feira"
    Then a "aula" é atualizada e lançada no sistema com as "novas datas"
    And os alunos são notificados


    Given o professor quer editar a "aula de boxe" 
    When o professor altera o status do dia "08/02/2022" para "09/02/2022" de "quinta-feira"
    And a "quinta-feira" já está preenchida no horario e dia escolhido por outra aula
    Then não é possivel salvar a alterção da "aula"


#regra 4 - excluir aula


    Given o professor quer excluir a "aula de boxe"
    When o professor seleciona a "lixeira" na sua "tela de gerenciamento"
    Then a "aula" é excluida com sucesso
    And o horario é liberado para ser preenchido por novas aulas, sem problema de conflito 

#Regra 5 - alterar recorrencia de aula

    Given o professor quer alterar a recorrencia da "aula de boxe"
    When o professor altera a recorrencia de "SEMANAL" para "MENSAL"
    Then a recorrencia é alterada com sucesso
    And as aulas que ultrapassam o novo limite são excluidas do sistema
   

    Given o professor quer alterar a recorrencia da "aula de boxe"
    When o professor altera a recorrencia de "SEMANAL" para "MENSAL"
    Then a recorrencia é alterada com sucesso
    And são criadas novas aulas até atingir o novo limite
   