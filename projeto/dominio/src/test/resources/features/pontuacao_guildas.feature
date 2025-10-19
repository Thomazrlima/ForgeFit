Feature: Pontuação e Torneios de Guilda

    Scenario: Aluno realiza um check-in de treino pela primeira vez no dia
        Given o aluno com CPF "123.456.789-00" com um plano de treino ativo é membro da guilda "Confra dos Amigos"
        When o aluno realiza o check-in do treino "A" na guilda "Confra dos Amigos" com a mensagem "Treino de peito concluído!"
        Then o sistema registra um check-in para o treino "A" na data "15/10/2025" com a mensagem "Treino de peito concluído!"
        And a pontuação do aluno e da guilda "Confra dos Amigos" é incrementada em 10 pontos

    Scenario: Aluno tenta realizar o mesmo check-in de treino novamente no mesmo dia
        Given o aluno com CPF "123.456.789-00" já realizou o check-in do seu treino "A" na guilda "Confra dos Amigos" hoje
        When o aluno tenta realizar o check-in do mesmo treino "A" na guilda "Confra dos Amigos" novamente
        Then o sistema informa que: "o check-in para este treino já foi realizado hoje"
        And a pontuação do aluno e da guilda não é alterada
    
    Scenario: Gerente cria um torneio com sucesso 
        Given um torneio com status "ATIVO" não existe no sistema
        When o gerente cria um novo torneio com data de início "01/11/2025" e data de fim "15/11/2025"
        Then o torneio é criado com o status "PLANEJADO"

    Scenario: Gerente tenta criar um torneio com datas inválidas
        Given um torneio com status "ATIVO" não existe no sistema
        When o gerente tenta criar um novo torneio com data de início "15/11/2025" e data de fim "01/11/2025"
        Then o sistema informa que: "datas do torneio são inválidas"

    Scenario: Gerente define um prêmio para um torneio planejado
        Given o torneio "Torneio de São João" foi criado para começar em "15/11/2025" e está com o status "PLANEJADO"
        When o gerente define o prêmio "1kg de Whey Protein" para o "PRIMEIRO_LUGAR" do torneio
        Then o sistema atribui o prêmio à posição correspondente do torneio

    Scenario: Gerente tenta definir um prêmio para um torneio que já começou
        Given o torneio "Torneio de São João" está "ATIVO"
        When o gerente tenta definir o prêmio "1kg de Whey Protein" para o "PRIMEIRO_LUGAR" do torneio
        Then o sistema informa que: "não é possível alterar os prêmios de um torneio ativo"

    Scenario: Sistema finaliza um torneio que já terminou
        Given o torneio "Torneio de São João" está com status "ATIVO", data de início "01/10/2025" e data de fim "10/10/2025"
        And apenas a guilda "Confra dos Amigos" participou do torneio com 2 check-ins
        When a data de fim é atingida
        Then o status do torneio é alterado para "FINALIZADO"
        And a guilda "Confra dos Amigos" é declarada vencedora do torneio com 20 pontos

    Scenario: Sistema finaliza um torneio sem nenhuma pontuação
        Given que o torneio "Copa de Inverno" está com status "ATIVO", com início em "01/11/2025" e fim em "10/11/2025"
        And nenhuma guilda realizou check-ins durante o seu período
        When a data de fim do torneio é atingida
        Then o status do torneio é alterado para "FINALIZADO"
        And o ranking do torneio é registrado como vazio, sem vencedores