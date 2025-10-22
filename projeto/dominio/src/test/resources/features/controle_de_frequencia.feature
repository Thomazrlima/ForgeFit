Feature: Controle de frequência e política de bloqueio por faltas
  # Regra 1 — Registrar frequência (presença ou falta)

  Scenario: Registrar presença do aluno na aula
    Given o aluno com matrícula "123.456.789-00" está matriculado em uma aula agendada no dia "16/10/2025" com horário "08:00" e duração de "60min"
    When o aluno passa pela catraca no horário da aula
    Then o sistema registra "PRESENÇA" para o aluno no dia "16/10/2025" com horário "08:00" e duração "60min"

  Scenario: Registrar falta do aluno na aula
    Given o aluno com matrícula "123.456.789-00" está matriculado em uma aula agendada no dia "16/10/2025" com horário "08:00" e duração de "60min"
    When o aluno não passa pela catraca no horário da aula
    Then o sistema registra "FALTA" para o aluno no dia "16/10/2025" com horário "08:00" e duração "60min"
  # Regra 2 — Aplicar bloqueio por excesso de faltas

  Scenario: Aluno tenta reservar já estando bloqueado por excesso de faltas
    Given o aluno com matrícula "234.567.890-12" possui "3" falta(s) nos últimos "30" dias
    When o aluno tenta reservar uma aula no dia "20/09/2025"
    Then o sistema rejeita a reserva e informa "Aluno bloqueado por excesso de faltas."

  Scenario: Aluno tenta reservar sem atingir limite de faltas
    Given o aluno com matrícula "345.678.901-23" possui "1" falta(s) nos últimos "30" dias
    When o aluno tenta reservar uma aula no dia "20/09/2025"
    Then o sistema confirma a reserva e informa "Reserva confirmada."
  # Regra 3 — Desbloqueio após período de bloqueio

  Scenario: Desbloquear aluno após término do período de bloqueio
    Given o aluno com matrícula "456.789.012-34" está bloqueado até "24/09/2025"
    When chega o dia "25/09/2025" e o aluno tenta reservar uma aula
    Then o sistema desbloqueia o aluno, confirma a reserva e informa "Reserva confirmada."

  Scenario: Tentativa de reserva durante período de bloqueio
    Given o aluno com matrícula "567.890.123-45" está bloqueado até "24/09/2025"
    When o aluno tenta reservar uma aula no dia "23/09/2025"
    Then o sistema rejeita a reserva e informa "Aluno bloqueado."
