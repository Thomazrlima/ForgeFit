Feature: Controle de frequência e política de bloqueio por faltas

Scenario: Registrar presença de aluno
  Given um aluno matriculado em uma aula
  When ele participa da aula
  Then a frequência do aluno é registrada como presente

Scenario: Registrar falta justificada
  Given um aluno matriculado em uma aula
  And apresenta justificativa aceita
  When ele não participa da aula
  Then a frequência do aluno é registrada como falta justificada
  And não conta para bloqueio por faltas

Scenario: Acionar bloqueio por faltas
  Given um aluno acumulou faltas não justificadas acima do limite
  When ele tenta reservar uma nova aula
  Then o bloqueio por faltas é aplicado
  And a reserva é negada temporariamente

Scenario: Desbloqueio após presença consecutiva
  Given um aluno está bloqueado por faltas
  And ele compareceu às aulas consecutivas exigidas
  When ele tenta reservar uma nova aula
  Then o bloqueio é removido
  And a reserva é permitida
