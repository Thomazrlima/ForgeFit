Feature: Criação e Gerenciamento de Treinos

  # Regra de negócio 1: Registrar exercícios, cargas e ciclos
  Scenario: Exercício registrado com sucesso
    Dado que um aluno possui um plano de treino ativo
    E deseja adicionar um novo exercício
    Quando o aluno informa o exercício, sua carga e ciclos
    Então o exercício é registrado no plano de treino
    E o sistema confirma o registro do exercício

  Scenario: Falha ao registrar exercício sem informações completas
    Dado que um aluno possui um plano de treino ativo
    E deseja adicionar um novo exercício
    Quando o aluno não informa todas as informações necessárias (carga ou ciclos)
    Então o sistema informa que o exercício não pôde ser registrado
    E solicita o preenchimento de todas as informações obrigatórias

  # Regra de negócio 2: Conclusão de exercício após repetições
  Scenario: Exercício concluído após repetições
    Dado que um aluno possui um plano de treino ativo
    E o exercício possui uma quantidade definida de repetições
    Quando o aluno realiza o exercício até atingir a quantidade definida
    Então o exercício é marcado como concluído
    E o sistema registra a conclusão no histórico do aluno

  Scenario: Exercício não concluído por não atingir repetições
    Dado que um aluno possui um plano de treino ativo
    E o exercício possui uma quantidade definida de repetições
    Quando o aluno não realiza todas as repetições necessárias
    Então o exercício permanece em andamento
    E o sistema informa que ainda não foi concluído

  # Regra de negócio 3: Liberação de próximo conjunto de exercícios
  Scenario: Novo conjunto de exercícios liberado
    Dado que um aluno possui um plano de treino ativo
    E completou todos os exercícios do conjunto atual
    Quando o sistema verifica o status do plano
    Então o próximo conjunto de exercícios é liberado
    E o histórico de evolução do aluno é atualizado

  Scenario: Conjunto de exercícios não liberado
    Dado que um aluno possui um plano de treino ativo
    E ainda não concluiu todos os exercícios do conjunto atual
    Quando o sistema verifica o status do plano
    Então o próximo conjunto de exercícios não é liberado
    E o sistema informa que ainda há exercícios pendentes
