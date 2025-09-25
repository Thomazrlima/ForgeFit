Feature: Reserva de Aula com Lista de Espera e Promoção Automática

  # Regra de negócio: Publicação e disponibilidade da aula
  Scenario: Aula publicada fica disponível para reserva
    Given que exista uma aula publicada com capacidade disponível
    When um aluno acessar a aula e solicitar a reserva
    Then a reserva é criada e a vaga do aluno é garantida
    And o sistema notifica o aluno e o professor sobre a nova reserva

  Scenario: Aula não publicada não pode ser reservada
    Given que exista uma aula ainda não publicada
    When um aluno tentar reservar essa aula
    Then o sistema recusa a reserva
    And o aluno é informado de que a aula ainda não está disponível para reservas

  # Regra de negócio: Garantia e duplicidade de reservas
  Scenario: Reserva efetivada enquanto há vagas
    Given que exista uma aula publicada com 1 vaga restante
    When um aluno solicitar a reserva
    Then a reserva é concluída com sucesso
    And a capacidade da aula é decrementada em 1

  Scenario: Impedir dupla reserva do mesmo aluno
    Given que um aluno já possua reserva ativa na mesma aula
    When o aluno tentar reservar novamente essa aula
    Then o sistema bloqueia a nova reserva
    And o aluno é informado com a mensagem "Você já possui uma vaga para essa aula."

  # Regra de negócio: Lista de espera
  Scenario: Ingresso na lista de espera quando a aula está lotada
    Given que a capacidade da aula tenha sido atingida
    When um novo aluno solicitar a reserva
    Then o aluno é incluído na lista de espera em ordem de chegada
    And o aluno é notificado com a mensagem "Você está na posição x na lista de espera."

  Scenario: Não permitir fila para quem já está reservado ou já está na fila
    Given que um aluno já esteja reservado ou já esteja na lista de espera dessa aula
    When o aluno tentar entrar novamente na lista de espera
    Then o sistema recusa a inclusão duplicada
    And o aluno é informado do motivo da recusa

  # Regra de negócio: Promoção automática da lista de espera
  Scenario: Promoção automática com aceite dentro da janela
    Given que haja lista de espera e uma vaga seja liberada
    When o aluno aceitar a vaga dentro do prazo
    Then a reserva é criada para esse aluno

  Scenario: Expirou a janela de aceite e próximo da fila é convidado
    Given que haja lista de espera e uma vaga seja liberada
    When o prazo expirar
    Then o sistema convida automaticamente o próximo elegível da fila

  # Regra de negócio: Cancelamento e reembolso
  Scenario: Cancelamento com antecedência gera reembolso conforme política
    Given que um aluno possua reserva ativa e cancele dentro do prazo de reembolso
    When o sistema processar o cancelamento
    Then o crédito interno é calculado conforme percentual previsto pela política
    And a vaga é liberada para promoção automática na lista de espera

  Scenario: Cancelamento fora do prazo não gera reembolso
    Given que um aluno possua reserva ativa e cancele após o prazo de reembolso
    When o sistema processar o cancelamento
    Then nenhum reembolso é devido
    And o aluno é notificado sobre a regra aplicada

  # Regra de negócio: Reativação de promoção após cancelamento
  Scenario: Cancelamento reativa promoção para a lista de espera
    Given que exista lista de espera para a aula
    When a vaga for liberada
    Then o sistema inicia imediatamente a promoção automática para o primeiro da fila

  Scenario: Não havendo lista de espera, vaga fica aberta para reserva direta
    Given que não exista lista de espera para a aula
    When a vaga for liberada
    Then a vaga retorna ao inventário da aula para reserva direta
