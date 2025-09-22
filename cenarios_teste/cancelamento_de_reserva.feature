Feature: Cancelamento de reserva com política de reembolso

# Regra 1 — Cancelamento com antecedência suficiente (reembolso total em até 15 dias)

# Sucesso
Scenario: Cancelamento com reembolso total processado
  Given existe uma reserva confirmada para o dia "10/09/2025"
  And o cancelamento é solicitado em "20/08/2025"
  When o aluno solicita o cancelamento
  Then o sistema informa "cancelamento aprovado, reembolso integral em processamento"

# Falha
Scenario: Tentativa de cancelamento após prazo de reembolso total
  Given existe uma reserva confirmada para o dia "10/09/2025"
  And o cancelamento é solicitado em "01/09/2025"
  When o aluno solicita o cancelamento
  Then o sistema informa "cancelamento aprovado, reembolso parcial em processamento"

# Regra 2 — Cancelamento com antecedência parcial (reembolso parcial em até 7 dias)

# Sucesso
Scenario: Cancelamento com reembolso parcial processado
  Given existe uma reserva confirmada para o dia "15/09/2025"
  And o cancelamento é solicitado em "10/09/2025"
  When o aluno solicita o cancelamento
  Then o sistema informa "cancelamento aprovado, reembolso parcial em processamento"

# Falha
Scenario: Tentativa de cancelamento fora do prazo parcial
  Given existe uma reserva confirmada para o dia "15/09/2025"
  And o cancelamento é solicitado em "14/09/2025"
  When o aluno solicita o cancelamento
  Then o sistema informa "cancelamento realizado sem direito a reembolso"

# Regra 3 — Cancelamento fora do prazo (sem reembolso em menos de 1 dia)

# Sucesso
Scenario: Cancelamento fora do prazo sem reembolso
  Given existe uma reserva confirmada para o dia "12/09/2025"
  And o cancelamento é solicitado em "11/09/2025 22:00"
  When o aluno solicita o cancelamento
  Then o sistema informa "cancelamento realizado sem direito a reembolso"

# Falha
Scenario: Tentativa de cancelar reserva inexistente
  Given não existe reserva confirmada para o aluno na data "10/09/2025"
  When o aluno solicita o cancelamento
  Then o sistema informa "nenhuma reserva encontrada para cancelamento"

# Regra 4 — Promoção de lista de espera após cancelamento

# Sucesso
Scenario: Promover aluno da lista de espera após cancelamento
  Given existe uma aula em "18/09/2025" com lista de espera preenchida
  And uma reserva confirmada foi cancelada em "10/09/2025"
  When o cancelamento é processado
  Then o sistema informa "aluno da lista de espera promovido, notificação enviada"

# Falha
Scenario: Cancelamento sem alunos em lista de espera
  Given existe uma aula em "18/09/2025" sem lista de espera
  And uma reserva confirmada foi cancelada em "10/09/2025"
  When o cancelamento é processado
  Then o sistema informa "vaga liberada, sem promoção de lista de espera"
