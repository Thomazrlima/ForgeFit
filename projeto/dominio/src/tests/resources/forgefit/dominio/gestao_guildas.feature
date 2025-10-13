Feature: Gestão e Participação em Guildas

    Scenario: Aluno cria uma nova guilda com sucesso
        Given um aluno está cadastrado com CPF "123.456.789-00"
        When o aluno cria uma nova guilda chamada "Confra dos Amigos"
        Then a guilda "Confra dos Amigos" é criada com sucesso

    Scenario: Aluno tenta criar uma guilda com um nome que já existe
        Given já existe uma guilda chamada "Confra dos Amigos"
        When um aluno tenta criar outra guilda com o mesmo nome
        Then o sistema informa que o "nome da guilda já está em uso"

    Scenario: Aluno entra em uma guilda com um código de convite válido
        Given o aluno com CPF "123.456.789-00" criou a guilda "Confra dos Amigos" e possui o código de convite
        When um aluno utiliza o código de convite para entrar na guilda
        Then o aluno se torna membro da guilda

    Scenario: Aluno tenta entrar em uma guilda com um código de convite inválido
        Given não existe uma guilda com o código de convite "INVALIDO123"
        When um aluno tenta entrar na guilda com o código de convite "INVALIDO123"
        Then o sistema informa que o "código de convite é inválido"

    Scenario: Mestre da guilda altera os dados com sucesso
        Given o aluno com CPF "123.456.789-00" é o mestre da guilda "Confra dos Amigos"
        When o mestre altera a descrição da guilda para "Guilda dos melhores amigos que treinam juntos"
        Then a descrição da guilda é atualizada com sucesso

    Scenario: Aluno comum tenta alterar os dados da guilda
        Given um aluno com CPF "123.456.789-00" é um membro da guilda "Confra dos Amigos" mas não é o mestre
        When o aluno tenta alterar a descrição da guilda para "Nova descrição"
        Then o sistema informa que "apenas o mestre da guilda pode editar seus dados"

    Scenario: Membro regular sai de uma guilda
        Given o aluno com CPF "123.456.789-00" é membro da guilda "Confra dos Amigos"
        When o aluno tenta sair da guilda
        Then o aluno não é mais membro da guilda

    Scenario: Mestre da guilda tenta sair da guilda
        Given o aluno com CPF "123.456.789-00" é o mestre da guilda "Confra dos Amigos"
        When o mestre tenta sair da guilda
        Then o sistema informa que "o mestre não pode sair da guilda"

    Scenario: Mestre da guilda exclui a guilda com sucesso
        Given o aluno com CPF "123.456.789-00" é o mestre da guilda "Confra dos Amigos"
        When o mestre exclui a guilda
        Then o status da guilda é alterado para "INATIVA" 

    Scenario: Aluno comum tenta excluir a guilda
        Given o aluno com CPF "123.456.789-00" é um membro da guilda "Confra dos Amigos" mas não é o mestre
        When o aluno tenta excluir a guilda
        Then o sistema informa que "apenas o mestre pode excluir a guilda"
