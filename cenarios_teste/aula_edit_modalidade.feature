Feature: Cadastrar e Editar Aula da Modalidade com Conflito de Agenda

  Scenario: Cadastrar ou editar aula sem conflito de agenda
    Given um "usuárioProfessor" autenticado deseja cadastrar ou editar uma "aula" de "modalidade"
    When o "usuárioProfessor" informa dados válidos e não há conflito de agenda do "usuárioProfessor" 
    Then a "aula" é cadastrada ou atualizada com sucesso
    And o sistema confirma a operação

  Scenario: Tentativa de cadastrar ou editar "aula" com conflito de agenda
    Given um "usuárioProfessor"  autenticado deseja cadastrar ou editar uma aula de "modalidade"
    When o "usuárioProfessor" informa dados que geram conflito na agenda do "usuárioProfessor"
    Then a "aula" não é cadastrada ou atualizada
    And o sistema informa sobre o conflito de agenda 

