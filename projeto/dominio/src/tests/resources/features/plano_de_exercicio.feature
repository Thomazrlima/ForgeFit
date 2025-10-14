Feature: Criação e Gerenciamento de Treinos

  # Regra de negócio 1: Registrar exercícios, cargas e ciclos

 #  Sucesso
Scenario: Exercício registrado com sucesso
    Given que um aluno possui um plano de treino ativo
    And o seu professor vai adicionar um exercício a ele
    When o professor informa o exercício "Supino Máquina", sua carga de "20kg" e ciclos "3"
    Then o sistema informa "O exercício foi registrado com sucesso!"

# Falha
Scenario: Falha ao registrar exercício sem informações completas
    Given que um aluno possui um plano de treino ativo
    And o seu professor vai adicionar um exercício a ele
    When o professor informa o exercício "Supino Máquina", sua carga de "20kg"
    Then o sistema informa "É necessário preencher todas as métricas do exercício"

# Regra de negócio 2: Conclusão de exercício após repetições

# Sucesso
Scenario: Exercício concluído após repetições
    Given que um aluno possui um plano de treino ativo
    When o aluno realiza o exercício "Cadeira Adutora" até atingir a quantidade definida "3" ciclos
    Then o sistema informa "Exercício concluido"

# Falha
Scenario: Exercício não concluído por não atingir repetições
    Given que um aluno possui um plano de treino ativo
    When o aluno realiza "2" ciclos do exercício "Cadeira Adutora" que tem uma meta de "3" ciclos
    Then o sistema informa "Ciclos totais do exercício não atingido"

# Regra de negócio 3: Liberação de próximo conjunto de exercícios

# Sucesso
Scenario: Novo conjunto de exercícios liberado
    Given que um aluno possui um plano de treino ativo
    And completou todos os exercícios do conjunto atual
    When o sistema verifica que todos os exercícios do plano estão completos
    Then o sistema informa "Plano de exercícios concluido"
    And o histórico de evolução do aluno é atualizado

# Falha
Scenario: Conjunto de exercícios não liberado
    Given que um aluno possui um plano de treino ativo
    And ainda não concluiu todos os exercícios do conjunto atual
    When o sistema verifica que todos os exercícios do plano estão completos
    Then o sistema informa "É necessário concluir todos os exercícios para terminar o plano de exercícios"
