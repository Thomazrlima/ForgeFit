Feature: Cancelamento de reserva com política de reembolso

  # Regra 1 — Cancelamento com antecedência suficiente (reembolso total em até 15 dias)
  Scenario: Cancelamento com reembolso total processado
    Given existe uma reserva confirmada para o dia "10/09/2025" às "10:00" com duração de "60 minutos"
    When o aluno solicita o cancelamento em "20/08/2025"
    Then o sistema informa "cancelamento aprovado, reembolso integral em processamento"

  Scenario: Tentativa de cancelamento após prazo de reembolso total
    Given existe uma reserva confirmada para o dia "10/09/2025" às "10:00" com duração de "60 minutos"
    When o aluno solicita o cancelamento em "01/09/2025"
    Then o sistema informa "cancelamento aprovado, reembolso parcial em processamento"

  # Regra 2 — Cancelamento com antecedência parcial (reembolso parcial em até 7 dias)
  Scenario: Cancelamento com reembolso parcial processado
    Given existe uma reserva confirmada para o dia "15/09/2025" às "14:00" com duração de "90 minutos"
    When o aluno solicita o cancelamento em "10/09/2025"
    Then o sistema informa "cancelamento aprovado, reembolso parcial em processamento"

  Scenario: Tentativa de cancelamento fora do prazo parcial
    Given existe uma reserva confirmada para o dia "15/09/2025" às "14:00" com duração de "90 minutos"
    When o aluno solicita o cancelamento em "14/09/2025"
    Then o sistema informa "cancelamento realizado sem direito a reembolso"

  # Regra 3 — Cancelamento fora do prazo (sem reembolso em menos de 1 dia)
  Scenario: Cancelamento fora do prazo sem reembolso
    Given existe uma reserva confirmada para o dia "12/09/2025" às "09:00" com duração de "120 minutos"
    When o aluno solicita o cancelamento em "11/09/2025"
    Then o sistema informa "cancelamento realizado sem direito a reembolso"

  # Regra 4 — Cancelamento duplicado (não permitir cancelar duas vezes a mesma reserva)
  Scenario: Cancelamento realizado com sucesso
    Given existe uma reserva confirmada para o dia "18/09/2025" às "11:00" com duração de "75 minutos"
    When o aluno solicita o cancelamento em "10/09/2025"
    Then o sistema informa "cancelamento aprovado, reembolso parcial em processamento"

  Scenario: Tentativa de cancelamento duplicado
    Given existe uma reserva confirmada para o dia "18/09/2025" às "11:00" com duração de "75 minutos"
    And o aluno já realizou o cancelamento desta reserva
    When o aluno solicita novo cancelamento da mesma reserva
    Then o sistema informa "nenhuma reserva encontrada para cancelamento"

  # Regra 5 — Cancelamento de reserva inexistente
  Scenario: Cancelamento realizado de uma reserva existente
    Given existe uma reserva confirmada para o dia "22/09/2025" às "15:00" com duração de "45 minutos"
    When o aluno solicita o cancelamento em "10/09/2025"
    Then o sistema informa "cancelamento aprovado, reembolso parcial em processamento"

  Scenario: Tentativa de cancelar reserva inexistente
    Given não existe reserva confirmada para o aluno na data "22/09/2025" às "15:00"
    When o aluno solicita o cancelamento em "10/09/2025"
    Then o sistema informa "nenhuma reserva encontrada para cancelamento"
