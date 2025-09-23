Feature: Controle de frequência e política de bloqueio por faltas

# Regra 1 — Acionar bloqueio por faltas

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

# Regra 2 — Desbloqueio após presença consecutiva

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
