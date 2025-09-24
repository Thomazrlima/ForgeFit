Feature: Cancelamento de reserva com política de reembolso

# Regra 1 — Cancelamento com antecedência suficiente (reembolso total em até 15 dias)

Scenario: Cancelamento com reembolso total processado
  Given existe uma reserva confirmada para o dia "10/09/2025"
  When o aluno solicita o cancelamento em "20/08/2025"
  Then o sistema informa "cancelamento aprovado, reembolso integral em processamento"

Scenario: Tentativa de cancelamento após prazo de reembolso total
  Given existe uma reserva confirmada para o dia "10/09/2025"
  When o aluno solicita o cancelamento em "01/09/2025"
  Then o sistema informa "cancelamento aprovado, reembolso parcial em processamento"

# Regra 2 — Cancelamento com antecedência parcial (reembolso parcial em até 7 dias)

Scenario: Cancelamento com reembolso parcial processado
  Given existe uma reserva confirmada para o dia "15/09/2025"
  When o aluno solicita o cancelamento em "10/09/2025"
  Then o sistema informa "cancelamento aprovado, reembolso parcial em processamento"

Scenario: Tentativa de cancelamento fora do prazo parcial
  Given existe uma reserva confirmada para o dia "15/09/2025"
  When o aluno solicita o cancelamento em "14/09/2025"
  Then o sistema informa "cancelamento realizado sem direito a reembolso"

# Regra 3 — Cancelamento fora do prazo (sem reembolso em menos de 1 dia)

Scenario: Cancelamento fora do prazo sem reembolso
  Given existe uma reserva confirmada para o dia "12/09/2025"
  When o aluno solicita o cancelamento em "11/09/2025 22:00"
  Then o sistema informa "cancelamento realizado sem direito a reembolso"

Scenario: Tentativa de cancelar reserva inexistente
  Given não existe reserva confirmada para o aluno na data "10/09/2025"
  When o aluno solicita o cancelamento em "05/09/2025"
  Then o sistema informa "nenhuma reserva encontrada para cancelamento"
