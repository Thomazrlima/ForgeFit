Feature: Controle de frequência e política de bloqueio por faltas

# Regra 1 — Registrar presença de aluno

# Sucesso
Scenario: Registrar presença com sucesso
  Given o sistema contém um aluno matriculado em uma aula agendada
  And o status da frequência do aluno está pendente
  When o aluno confirma presença na aula
  Then o sistema atualiza o status da frequência para presente

# Falha
Scenario: Tentativa de registrar presença sem matrícula
  Given o sistema não possui vínculo de matrícula do aluno na aula
  When o aluno tenta confirmar presença
  Then o sistema rejeita a operação
  And a frequência não é registrada

# Regra 2 — Registrar falta justificada

# Sucesso
Scenario: Registrar falta justificada com sucesso
  Given o sistema contém um aluno matriculado em uma aula agendada
  And o status da frequência do aluno está pendente
  And existe justificativa aceita no sistema
  When o aluno não participa da aula
  Then o sistema registra o status da frequência como falta justificada
  And o registro não contabiliza para bloqueio

# Falha
Scenario: Tentativa de registrar falta justificada sem justificativa aceita
  Given o sistema contém um aluno matriculado em uma aula agendada
  And o status da frequência do aluno está pendente
  And não existe justificativa aceita no sistema
  When o aluno não participa da aula
  Then o sistema registra o status da frequência como falta não justificada
  And o registro contabiliza para bloqueio

# Regra 3 — Acionar bloqueio por faltas

# Sucesso
Scenario: Aplicar bloqueio ao aluno por excesso de faltas
  Given o sistema contém um aluno com faltas não justificadas acima do limite
  And o status do aluno no sistema está como ativo
  When o aluno tenta reservar uma nova aula
  Then o sistema altera o status do aluno para bloqueado
  And a reserva é rejeitada

# Falha
Scenario: Aluno tenta reservar sem ter atingido limite de faltas
  Given o sistema contém um aluno com faltas não justificadas abaixo do limite
  And o status do aluno no sistema está como ativo
  When o aluno tenta reservar uma nova aula
  Then o sistema mantém o status do aluno como ativo
  And a reserva é confirmada

# Regra 4 — Desbloqueio após presença consecutiva

# Sucesso
Scenario: Desbloquear aluno após cumprir presenças exigidas
  Given o sistema contém um aluno com status bloqueado
  And o histórico de frequência do aluno mostra presenças consecutivas exigidas
  When o aluno tenta reservar uma nova aula
  Then o sistema altera o status do aluno para ativo
  And a reserva é confirmada

# Falha
Scenario: Tentativa de desbloqueio sem cumprir presenças exigidas
  Given o sistema contém um aluno com status bloqueado
  And o histórico de frequência do aluno não mostra presenças consecutivas exigidas
  When o aluno tenta reservar uma nova aula
  Then o sistema mantém o status do aluno como bloqueado
  And a reserva é rejeitada