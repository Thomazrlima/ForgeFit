Feature: Acompanhamento de Bioimpedância

  # Regra de negócio 1: Registrar nova avaliação física

  Scenario: Registro de avaliação física com todos os dados válidos
    Given que o aluno é cadastrado com o CPF "902.142.720-60"
    When o aluno registra uma nova avaliação física informando:
     O porcentual de massa gorda como "18.5",
     A massa gorda como "12.3" kg,
     A massa magra como "54.2" kg,
     A massa muscular esquelética como "28.4" kg,
     O percentual de água corporal como "60.1",
     O nível de gordura visceral como "7",
     A taxa metabolica basal como "1650" kcal,
     A massa óssea como "3.2" kg,
     O índice de massa corporal como "22.4",
     O tamanho do braço relaxado como "32.0" cm,
     O tamanho do braço contraído como "34.0" cm,
     O tamanho do antebraço como "27.5" cm,
     O tamanho do torax peitoral como "95.0" cm,
     O tamanho da cintura como "80.0" cm,
     O tamanho do abdomen como "83.0" cm,
     O tamanho do quadril como "90.0" cm,
     O tamanho da coxa como "55.0" cm,
     O tamanho da panturrilha como "37.0" cm
    Then o sistema informa "Avaliação física salva com sucesso"

  Scenario: Registro de avaliação física com dados incompletos
    Given que o aluno é cadastrado com o CPF "902.142.720-60"
    When o aluno tenta registrar uma avaliação física com os campos:
     Porcentual de massa gorda como "",
     Massa magra como "" kg,
     Tamanho da cintura como ""
    Then o sistema informa "É necessário preencher todos os campos da avaliação física"

  # Regra de negócio 2: Consultar histórico de avaliações

  Scenario: Consulta de histórico com avaliações registradas
    Given que o aluno possui uma avaliação com a data "20-02-2025"
    When o aluno solicita o histórico de avaliações
    Then o sistema exibe a lista com os dados de cada avaliação:
     Avaliação de "20-02-2025":
      O porcentual de massa gorda como "18.5",
      A massa gorda como "12.3" kg,
      A massa magra como "54.2" kg,
      A massa muscular esquelética como "28.4" kg,
      O percentual de água corporal como "60.1",
      O nível de gordura visceral como "7",
      A taxa metabolica basal como "1650" kcal,
      A massa óssea como "3.2" kg,
      O índice de massa corporal como "22.4",
      O tamanho do braço relaxado como "32.0" cm,
      O tamanho do braço contraído como "34.0" cm,
      O tamanho do antebraço como "27.5" cm,
      O tamanho do torax peitoral como "95.0" cm,
      O tamanho da cintura como "80.0" cm,
      O tamanho do abdomen como "83.0" cm,
      O tamanho do quadril como "90.0" cm,
      O tamanho da coxa como "55.0" cm,
      O tamanho da panturrilha como "37.0" cm

  Scenario: Consulta de histórico sem avaliações registradas
    Given que o aluno com o CPF "159.621.460-00" ainda não possui avaliações físicas registradas
    When o aluno solicita o histórico de avaliações
    Then o sistema informa "Esse aluno não tem avaliações registradas"

  # Regra de negócio 3: Analisar progresso físico

  Scenario: Aluno apresenta evolução corporal positiva
    Given que o aluno possui uma avaliação física de "20-02-2025" e outra de "20-04-2025"
    When o sistema compara os campos:
     Massa muscular esquelética de "20-02-2025" como "28.4" e de "20-04-2025" como "30.2",
     Nível de gordura visceral de "20-02-2025" como "7" e de "20-04-2025" como "6",
     Tamanho de cintura de "20-02-2025" como "80.0" e de "20-04-2025" como "76.0"
    Then o sistema informa "Você demonstrou evolução em:
    Massa muscular esquelética,
    Nível de gordura visceral e
    Tamanho de cintura. Parabéns!"

  Scenario: Aluno sem evolução ou com regressão corporal
    Given que o aluno possui uma avaliação física de "20-04-2025" e outra de "20-06-2025"
    When o sistema compara os campos:
         Massa muscular esquelética de "20-04-2025" como "30.2" e de "20-06-2025" como "29.4",
         Nível de gordura visceral de "20-04-2025" como "6" e de "20-06-2025" como "6",
         Tamanho de cintura de "20-04-2025" como "76.0" e de "20-06-2025" como "78.0"
    Then o sistema informa "Você não mostrou evolução nos seus treinos... É melhor revisar o seu treino com um professor"
