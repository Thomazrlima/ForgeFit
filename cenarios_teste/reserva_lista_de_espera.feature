Feature: Reserva de Aula com Lista de Espera e Promoção Automática

  # Regra de negócio: Publicação e disponibilidade da aula
  Scenario: Aula publicada fica disponível para reserva
    Dado que exista uma aula publicada com capacidade disponível
    Quando um aluno acessar a aula e solicitar a reserva
    Então a reserva é criada e a vaga do aluno é garantida
    E o sistema notifica o aluno e o professor sobre a nova reserva

  Scenario: Aula não publicada não pode ser reservada
    Dado que exista uma aula ainda não publicada
    Quando um aluno tentar reservar essa aula
    Então o sistema recusa a reserva
    E o aluno é informado de que a aula ainda não está disponível para reservas

  # Regra de negócio: Garantia e duplicidade de reservas
  Scenario: Reserva efetivada enquanto há vagas
    Dado que exista uma aula publicada com 1 vaga restante
    Quando um aluno solicitar a reserva
    Então a reserva é concluída com sucesso
    E a capacidade da aula é decrementada em 1

  Scenario: Impedir dupla reserva do mesmo aluno
    Dado que um aluno já possua reserva ativa na mesma aula
    Quando o aluno tentar reservar novamente essa aula
    Então o sistema bloqueia a nova reserva
    E o aluno é informado de que já possui uma vaga garantida

  # Regra de negócio: Lista de espera
  Scenario: Ingresso na lista de espera quando a aula está lotada
    Dado que a capacidade da aula tenha sido atingida
    Quando um novo aluno solicitar a reserva
    Então o aluno é incluído na lista de espera em ordem de chegada
    E o sistema notifica o aluno sobre sua posição na fila

  Scenario: Não permitir fila para quem já está reservado ou já está na fila
    Dado que um aluno já esteja reservado ou já esteja na lista de espera dessa aula
    Quando o aluno tentar entrar novamente na lista de espera
    Então o sistema recusa a inclusão duplicada
    E o aluno é informado do motivo da recusa

  # Regra de negócio: Promoção automática da lista de espera
  Scenario: Promoção automática com aceite dentro da janela
    Dado que haja lista de espera e uma vaga seja liberada
    E o primeiro da fila tenha uma janela de aceite ativa
    Quando o aluno aceitar a vaga dentro do prazo
    Então a reserva é criada para esse aluno
    E o sistema remove o aluno da lista de espera e envia notificação de confirmação

  Scenario: Expirou a janela de aceite e próximo da fila é convidado
    Dado que haja lista de espera e uma vaga seja liberada
    E o primeiro da fila não aceite a vaga dentro do prazo
    Quando o prazo expirar
    Então o sistema convida automaticamente o próximo elegível da fila
    E o primeiro da fila perde o direito àquela vaga e é notificado da expiração

  # Regra de negócio: Cancelamento e reembolso
  Scenario: Cancelamento com antecedência gera reembolso conforme política
    Dado que um aluno possua reserva ativa e cancele dentro do prazo de reembolso
    Quando o sistema processar o cancelamento
    Então o crédito interno é calculado conforme percentual previsto pela política
    E a vaga é liberada para promoção automática na lista de espera

  Scenario: Cancelamento fora do prazo não gera reembolso
    Dado que um aluno possua reserva ativa e cancele após o prazo de reembolso
    Quando o sistema processar o cancelamento
    Então nenhum reembolso é devido
    E o aluno é notificado sobre a regra aplicada

  # Regra de negócio: Reativação de promoção após cancelamento
  Scenario: Cancelamento reativa promoção para a lista de espera
    Dado que exista lista de espera para a aula
    E um aluno com reserva ativa cancele dentro ou fora do prazo financeiro
    Quando a vaga for liberada
    Então o sistema inicia imediatamente a promoção automática para o primeiro da fila
    E mantém o mesmo fluxo de janela de aceite

  Scenario: Não havendo lista de espera, vaga fica aberta para reserva direta
    Dado que não exista lista de espera para a aula
    E um aluno com reserva ativa cancele a participação
    Quando a vaga for liberada
    Então a vaga retorna ao inventário da aula para reserva direta
    E o sistema atualiza a capacidade e exibe a vaga disponível para todos os alunos
