Feature: Reserva de Aula com Lista de Espera e Promoção Automática

  # Regra de negócio: Aula ativa e com vagas disponíveis pode ser reservada
  Scenario: Aula ativa fica disponível para reserva
    Given que exista uma aula ATIVA marcada para 15/10/2025 18:00 com capacidade 15 e 10 reservas confirmadas
    When um aluno solicitar a reserva
    Then a reserva é criada com status CONFIRMADA
    And o sistema registra a nova reserva para essa ocorrência

  Scenario: Aula cancelada não pode ser reservada
    Given que exista uma aula com status CANCELADA marcada para 16/10/2025 19:00
    When um aluno tentar reservar essa aula
    Then o sistema recusa a reserva
    And o aluno é informado de que a aula está cancelada

  # Regra de negócio: Garantia e duplicidade de reservas
  Scenario: Reserva efetivada enquanto há vagas
    Given que exista uma aula publicada marcada para o dia 17/10/2025 às 07h00, com 1 vaga restante
    When um aluno solicitar a reserva
    Then a reserva é concluída com sucesso
    And a capacidade da aula é decrementada em 1

  Scenario: Impedir dupla reserva do mesmo aluno
    Given que o aluno João já possua uma reserva ativa para a aula marcada no dia 18/10/2025 às 09h00
    When João tentar reservar novamente essa aula
    Then o sistema bloqueia a nova reserva
    And o aluno é informado com a mensagem "Você já possui uma vaga para essa aula."

  # Regra de negócio: Lista de espera
  Scenario: Ingresso na lista de espera quando a aula está lotada
    Given que a aula de Yoga Avançado marcada para o dia 19/10/2025 às 08h00 tenha atingido sua capacidade máxima de 15 alunos
    When um novo aluno solicitar a reserva
    Then o aluno é incluído na lista de espera em ordem de chegada
    And o aluno é notificado com a mensagem "Você está na posição 1 na lista de espera."

  Scenario: Não permitir fila para quem já está reservado ou já está na fila
    Given que o aluno Maria já esteja reservada ou na lista de espera da aula marcada para o dia 20/10/2025 às 18h30
    When Maria tentar entrar novamente na lista de espera
    Then o sistema recusa a inclusão duplicada
    And o aluno é informado do motivo da recusa

  # Regra de negócio: Promoção automática da lista de espera
  Scenario: Promoção automática com aceite dentro da janela
    Given que haja uma lista de espera de 3 alunos para a aula de Pilates Funcional, marcada para o dia 21/10/2025 às 07h30, e uma vaga seja liberada
    When o aluno em primeiro da fila aceitar a vaga dentro do prazo de 30 minutos
    Then a reserva é criada para esse aluno

  Scenario: Expirou a janela de aceite e próximo da fila é convidado
    Given que haja lista de espera para a aula de Spinning, marcada para o dia 22/10/2025 às 19h00, e uma vaga seja liberada
    When o prazo de 30 minutos expirar sem resposta
    Then o sistema convida automaticamente o próximo elegível da fila

  # Regra de negócio: Cancelamento e reembolso
  Scenario: Cancelamento com antecedência gera reembolso conforme política
    Given que o aluno Pedro possua reserva ativa na aula do dia 23/10/2025 às 08h00 e cancele com 24 horas de antecedência, dentro do prazo de reembolso
    When o sistema processar o cancelamento
    Then o crédito interno é calculado conforme percentual previsto pela política
    And a vaga é liberada para promoção automática na lista de espera

  Scenario: Cancelamento fora do prazo não gera reembolso
    Given que o aluno Lucas possua reserva ativa na aula do dia 24/10/2025 às 19h00 e cancele 2 horas antes, fora do prazo de reembolso
    When o sistema processar o cancelamento
    Then nenhum reembolso é devido
    And o aluno é notificado sobre a regra aplicada

  # Regra de negócio: Reativação de promoção após cancelamento
  Scenario: Cancelamento reativa promoção para a lista de espera
    Given que exista lista de espera para a aula de Cross Training, marcada para o dia 25/10/2025 às 09h00
    When uma vaga for liberada
    Then o sistema inicia imediatamente a promoção automática para o primeiro da fila

  Scenario: Não havendo lista de espera, vaga fica aberta para reserva direta
    Given que a aula de Alongamento do dia 26/10/2025 às 17h00 não possua lista de espera
    When uma vaga for liberada
    Then a vaga retorna ao inventário da aula para reserva direta

