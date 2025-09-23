Feature: Controle de frequência e política de bloqueio por faltas

# Regra 1 — Registrar frequência (presença ou falta)
Scenario: Registrar presença do aluno na aula
  Given o aluno está matriculado em uma aula agendada no dia "15/09/2025"
  And o aluno passou pela catraca no horário da aula
  When o sistema processa a frequência
  Then registra "presença" para o aluno no dia "15/09/2025"

Scenario: Registrar falta do aluno na aula
  Given o aluno está matriculado em uma aula agendada no dia "15/09/2025"
  And o aluno não passou pela catraca no horário da aula
  When o sistema processa a frequência
  Then registra "falta" para o aluno no dia "15/09/2025"

# Regra 2 — Aplicar bloqueio por excesso de faltas
Scenario: Aplicar bloqueio ao aluno por excesso de faltas
  Given o aluno possui "3" faltas não justificadas nos últimos "30" dias
  And o status do aluno está "ativo"
  When o aluno tenta reservar uma aula no dia "20/09/2025"
  Then o sistema rejeita a reserva
  And informa "aluno bloqueado por excesso de faltas"

Scenario: Aluno tenta reservar sem atingir limite de faltas
  Given o aluno possui "1" falta não justificada nos últimos "30" dias
  And o status do aluno está "ativo"
  When o aluno tenta reservar uma aula no dia "20/09/2025"
  Then o sistema confirma a reserva
  And informa "aluno permanece ativo"

# Regra 3 — Desbloqueio após período de bloqueio
Scenario: Desbloquear aluno após término do período de bloqueio
  Given o aluno está com status "bloqueado" até "24/09/2025"
  When chega o dia "25/09/2025"
  And o aluno tenta reservar uma aula
  Then o sistema desbloqueia o aluno
  And confirma a reserva
  And informa "aluno desbloqueado, reserva confirmada"

Scenario: Tentativa de reserva durante período de bloqueio
  Given o aluno está com status "bloqueado" até "24/09/2025"
  When o aluno tenta reservar uma aula no dia "23/09/2025"
  Then o sistema rejeita a reserva
  And informa "aluno bloqueado, aguardar término do período de bloqueio"
