Feature: Criação em Lote de Aulas Recorrentes por Modalidade

  Scenario: Criar aulas recorrentes em lote com sucesso
    Given um usuário autenticado deseja criar aulas recorrentes de uma modalidade
    When o usuário informa dados válidos e não há conflitos de agenda
    Then as aulas recorrentes são criadas com sucesso
    And o sistema confirma a criação em lote

  Scenario: Tentativa de criar aula recorrentes em lote com conflito
    Given um usuário autenticado deseja criar aulas recorrentes de uma modalidade
    When o usuário informa dados que geram conflito com aulas já existentes
    Then as aulas não são criadas
    And o sistema informa sobre o conflito de agenda