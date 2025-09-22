Feature: Controle de frequência e política de bloqueio por faltas

# Regra 1 — Registrar presença de aluno

# Sucesso
Scenario: Registrar presença com sucesso
  Given existe um aluno matriculado em uma aula agendada para o dia "10/09/2025"
  And o status da frequência do aluno está "pendente"
  When o aluno confirma presença na aula em "10/09/2025"
  Then o sistema informa "presença registrada com sucesso"

# Falha
Scenario: Tentativa de registrar presença sem matrícula
  Given não existe matrícula do aluno para a aula agendada em "10/09/2025"
  When o aluno tenta confirmar presença
  Then o sistema informa "não foi possível registrar presença, matrícula inexistente"

# Regra 2 — Registrar falta justificada

# Sucesso
Scenario: Registrar falta justificada com sucesso
  Given existe um aluno matriculado em uma aula agendada para o dia "12/09/2025"
  And o aluno não participou da aula em "12/09/2025"
  And o aluno enviou uma justificativa aceita pelo sistema em "13/09/2025"
  When a justificativa é processada
  Then o sistema informa "falta justificada registrada, não contabilizada para bloqueio"

# Falha
Scenario: Tentativa de registrar falta justificada sem justificativa aceita
  Given existe um aluno matriculado em uma aula agendada para o dia "12/09/2025"
  And o aluno não participou da aula em "12/09/2025"
  And o aluno enviou uma justificativa não aceita pelo sistema em "13/09/2025"
  When a justificativa é processada
  Then o sistema informa "falta não justificada registrada, contabilizada para bloqueio"

# Regra 3 — Acionar bloqueio por faltas

# Sucesso
Scenario: Aplicar bloqueio ao aluno por excesso de faltas
  Given o aluno possui "3" faltas não justificadas até o dia "15/09/2025"
  And o status do aluno está "ativo"
  When o aluno tenta reservar uma nova aula para o dia "20/09/2025"
  Then o sistema informa "reserva rejeitada, aluno bloqueado por excesso de faltas"

# Falha
Scenario: Aluno tenta reservar sem ter atingido limite de faltas
  Given o aluno possui "1" falta não justificada até o dia "15/09/2025"
  And o status do aluno está "ativo"
  When o aluno tenta reservar uma nova aula para o dia "20/09/2025"
  Then o sistema informa "reserva confirmada, aluno permanece ativo"

# Regra 4 — Desbloqueio após presença consecutiva

# Sucesso
Scenario: Desbloquear aluno após cumprir presenças exigidas
  Given o aluno está com status "bloqueado"
  And o histórico de frequência mostra "3" presenças consecutivas entre "16/09/2025" e "20/09/2025"
  When o aluno tenta reservar uma nova aula para o dia "25/09/2025"
  Then o sistema informa "aluno desbloqueado, reserva confirmada"

# Falha
Scenario: Tentativa de desbloqueio sem cumprir presenças exigidas
  Given o aluno está com status "bloqueado"
  And o histórico de frequência mostra apenas "1" presença consecutiva entre "16/09/2025" e "20/09/2025"
  When o aluno tenta reservar uma nova aula para o dia "25/09/2025"
  Then o sistema informa "aluno continua bloqueado, reserva rejeitada"
