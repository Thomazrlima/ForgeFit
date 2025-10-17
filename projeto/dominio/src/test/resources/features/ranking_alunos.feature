Feature: Ranking de Alunos

  #Regra de negócio: Acúmulo de pontos
  Scenario: Acumular pontos por frequência nas aulas
    Given que o aluno João tenha comparecido à aula de Cross Training no dia 15/10/2025 às 18h00
    When o sistema registrar a presença do aluno
    Then o aluno recebe 10 pontos por frequência
    And o total de pontos é atualizado no ranking geral

  Scenario: Acumular pontos por participação em guilda
    Given que a aluna Maria tenha participado da atividade coletiva da guilda Fênix no dia 16/10/2025
    When o sistema registrar a contribuição
    Then a aluna recebe 15 pontos de engajamento
    And o ranking da guilda e o ranking geral são atualizados

  Scenario: Acumular pontos por avaliação de performance
    Given que o professor tenha avaliado o aluno Pedro com nota 9,5 na aula de Yoga do dia 17/10/2025
    When a avaliação for registrada
    Then o sistema converte a nota em 20 pontos de performance
    And adiciona esses pontos ao total acumulado do aluno

  #Regra de negócio: Atualização e Ppríodo de Ranking

  Scenario: Atualização semanal do ranking
    Given que a semana vigente termine no dia 20/10/2025
    When o sistema executar o fechamento semanal
    Then o ranking semanal é recalculado com base nas pontuações acumuladas até essa data
    And os 10 primeiros alunos são destacados no painel principal

  Scenario: Atualização mensal do ranking
    Given que o mês de outubro de 2025 tenha sido encerrado
    When o sistema consolidar as pontuações mensais
    Then o ranking mensal é gerado
    And os alunos com mais de 500 pontos recebem uma medalha digital de consistência

  #Regra de negócio: Critérios de desempate

  Scenario: Desempate por maior frequência em aulas
    Given que dois alunos tenham a mesma pontuação total no ranking
    And o aluno A tenha participado de 12 aulas
    And o aluno B tenha participado de 10 aulas
    When o sistema aplicar o critério de desempate
    Then o aluno A é classificado à frente do aluno B

  Scenario: Desempate por média de performance
    Given que dois alunos empatem em pontuação e frequência
    And o aluno C tenha média de 9,0 em performance
    And o aluno D tenha média de 8,5
    When o sistema recalcular o ranking
    Then o aluno C assume a posição superior

  #Regra de negócio: Penalidades e ajustes

  Scenario: Perda de pontos por falta não justificada
    Given que o aluno Rafael tenha falta não justificada na aula do dia 18/10/2025 às 19h00
    When o sistema processar a ausência
    Then o aluno perde 5 pontos no ranking semanal
    And o histórico de faltas é atualizado

  Scenario: Ajuste manual de pontos pelo administrador
    Given que a administradora Ana precise corrigir a pontuação de um aluno
    When ela registrar o ajuste de -10 pontos no sistema
    Then o total de pontos do aluno é atualizado imediatamente
    And o log de auditoria registra o motivo do ajuste

  #Regra de negócio: Premiações e recompensas

  Scenario: Premiação semanal dos melhores colocados
    Given que o ranking semanal tenha sido finalizado
    When o sistema identificar os 3 primeiros colocados
    Then cada aluno recebe um cupom de R$ 20 de desconto em reservas
    And os alunos são notificados por aplicativo e e-mail

  Scenario: Recompensa mensal por engajamento contínuo
    Given que o aluno Lucas tenha mantido presença em todas as semanas do mês
    And acumulado mais de 400 pontos de engajamento
    When o sistema gerar o ranking mensal
    Then o aluno recebe o título de Aluno Destaque do Mês
    And é exibido no mural principal do aplicativo

  #Regra de negócio: Transparência e visualização

  Scenario: Exibir detalhamento da pontuação no painel do aluno
    Given que o aluno acesse seu painel de desempenho
    When o sistema carregar o histórico
    Then exibe o detalhamento de pontos por categoria (frequência, guilda, performance)
    And mostra a posição atual no ranking semanal e mensal

  Scenario: Exibir evolução histórica de posições
    Given que o aluno possua histórico de ranking das últimas 4 semanas
    When ele acessar a aba Minha Evolução
    Then o sistema apresenta um gráfico de progresso com variação de posições
    And destaca conquistas e marcos alcançados

  #Regra de negócio: Reset de pontos e novo ciclo

  Scenario: Reset de ranking no início de novo ciclo mensal
    Given que o mês de outubro encerre no dia 31/10/2025
    When o sistema iniciar o novo ciclo em 01/11/2025
    Then o ranking semanal é zerado
    And os pontos passam a ser acumulados para o ciclo de novembro

  Scenario: Preservar histórico após o reset mensal
    Given que o ranking de outubro tenha sido encerrado
    When o sistema iniciar o novo ciclo
    Then o histórico de outubro é arquivado
    And pode ser consultado na seção Histórico de rankings
