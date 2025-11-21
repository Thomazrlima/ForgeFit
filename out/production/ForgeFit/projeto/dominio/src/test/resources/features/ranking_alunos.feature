Feature: Ranking de Alunos
  #Regra de negócio: Acúmulo de pontos

  Scenario: Acumular pontos por frequência nas aulas
    Given que o aluno com matrícula "123.456.789-01" possui "50" pontos totais
    When o aluno comparece à aula de "Cross Training" no dia "15/10/2025" às "18h00" e recebe "10" pontos por frequência
    Then o aluno passa a ter "60" pontos totais

  Scenario: Acumular pontos por participação em guilda
    Given que a aluna com matrícula "234.567.890-12" possui "100" pontos totais
    When a aluna participa da atividade coletiva da guilda Fênix no dia "16/10/2025" e recebe "15" pontos
    Then a aluna passa a ter "115" pontos totais

  Scenario: Acumular pontos por avaliação de performance
    Given que o aluno com matrícula "345.678.901-23" possui "200" pontos totais
    When o professor avalia o aluno com nota "9,5" na aula de Yoga e o sistema converte em "20" pontos
    Then o aluno passa a ter "220" pontos totais
  #Regra de negócio: Critérios de desempate

  Scenario: Desempate por maior frequência em aulas
    Given que o aluno com matrícula "456.789.012-34" possui "300" pontos e participou de "12" aulas
    And o aluno com matrícula "567.890.123-45" possui "300" pontos e participou de "10" aulas
    When o sistema aplicar o critério de desempate
    Then o aluno com matrícula "456.789.012-34" é classificado à frente do aluno com matrícula "567.890.123-45"

  Scenario: Desempate por média de performance
    Given que o aluno com matrícula "678.901.234-56" possui "450" pontos com média de "9,0" em performance
    And o aluno com matrícula "789.012.345-67" possui "450" pontos com média de "8,5" em performance
    When o sistema aplicar o critério de desempate
    Then o aluno com matrícula "678.901.234-56" é classificado à frente do aluno com matrícula "789.012.345-67"
  #Regra de negócio: Penalidades e ajustes

  Scenario: Perda de pontos por falta não justificada
    Given que o aluno com matrícula "890.123.456-78" possui "80" pontos totais
    When o aluno tem falta não justificada na aula do dia "18/10/2025" e perde "5" pontos
    Then o aluno passa a ter "75" pontos totais

  Scenario: Ajuste manual de pontos pelo administrador
    Given que o aluno com matrícula "012.345.678-90" possui "150" pontos totais
    When a administradora com matrícula "901.234.567-89" registra um ajuste de "-10" pontos
    Then o aluno passa a ter "140" pontos totais

  Scenario: Adicionar pontos manualmente pelo administrador
    Given que o aluno com matrícula "123.456.789-02" possui "200" pontos totais
    When a administradora com matrícula "901.234.567-89" registra um ajuste de "+25" pontos
    Then o aluno passa a ter "225" pontos totais
  #Regra de negócio: Premiações e recompensas

  Scenario: Recompensa mensal por engajamento contínuo
    Given que o aluno com matrícula "234.567.890-13" possui "420" pontos de engajamento
    When o sistema gerar o ranking mensal e o aluno manteve presença em todas as semanas
    Then o aluno recebe o título de Aluno Destaque do Mês
  #Regra de negócio: Transparência e visualização

  Scenario: Exibir detalhamento da pontuação no painel do aluno
    Given que o aluno com matrícula "345.678.901-24" possui "180" pontos totais
    When o aluno acessar seu painel de desempenho
    Then o sistema exibe "60" pontos de frequência, "50" pontos de guilda e "70" pontos de performance
  #Regra de negócio: Reset de pontos e novo ciclo

  Scenario: Reset de ranking no início de novo ciclo mensal
    Given que o aluno com matrícula "456.789.012-35" possui "500" pontos acumulados em outubro
    When o sistema iniciar o novo ciclo em "01/11/2025"
    Then os pontos do aluno são zerados e ele inicia novembro com "0" pontos

  Scenario: Preservar histórico de pontos após reset
    Given que o aluno com matrícula "567.890.123-46" finalizou outubro com "480" pontos
    When o sistema arquivar o ranking de outubro
    Then o histórico preserva os "480" pontos de outubro e o aluno inicia novembro com "0" pontos
