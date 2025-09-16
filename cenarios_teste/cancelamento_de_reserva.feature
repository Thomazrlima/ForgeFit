Feature: Cancelamento de reserva com política de reembolso

# Regra 1 — Cancelamento com antecedência suficiente (reembolso total)

# Sucesso
Scenario: Cancelamento com reembolso total processado
  Given o sistema contém uma reserva confirmada para um aluno
  And o prazo de cancelamento total ainda está válido
  When o cancelamento é solicitado
  Then o sistema altera o status da reserva para cancelada
  And registra crédito de 100% do valor

# Falha
Scenario: Tentativa de cancelamento após prazo de reembolso total
  Given o sistema contém uma reserva confirmada para um aluno
  And o prazo de cancelamento total já expirou
  When o cancelamento é solicitado
  Then o sistema rejeita a operação
  And mantém a reserva como confirmada

# Regra 2 — Cancelamento com antecedência parcial (reembolso parcial)

# Sucesso
Scenario: Cancelamento com reembolso parcial processado
  Given o sistema contém uma reserva confirmada para um aluno
  And o prazo de cancelamento parcial ainda está válido
  When o cancelamento é solicitado
  Then o sistema altera o status da reserva para cancelada
  And registra crédito proporcional ao percentual de reembolso definido

# Falha
Scenario: Tentativa de cancelamento fora do prazo parcial
  Given o sistema contém uma reserva confirmada para um aluno
  And o prazo de cancelamento parcial já expirou
  When o cancelamento é solicitado
  Then o sistema rejeita a operação
  And mantém a reserva como confirmada

# Regra 3 — Cancelamento fora do prazo (sem reembolso)

# Sucesso
Scenario: Cancelamento fora do prazo sem reembolso
  Given o sistema contém uma reserva confirmada para um aluno
  And o prazo de cancelamento já expirou
  When o cancelamento é solicitado
  Then o sistema altera o status da reserva para cancelada
  And não registra reembolso

# Falha
Scenario: Tentativa de cancelar reserva inexistente
  Given o sistema não contém reserva confirmada para o aluno
  When o cancelamento é solicitado
  Then o sistema rejeita a operação

# Regra 4 — Promoção de lista de espera após cancelamento

# Sucesso
Scenario: Promover aluno da lista de espera após cancelamento
  Given o sistema contém uma aula com lista de espera preenchida
  And uma reserva confirmada foi cancelada
  When o cancelamento é processado
  Then o sistema promove o primeiro aluno da lista de espera para reserva confirmada
  And notifica o aluno para aceitar ou recusar no prazo definido

# Falha
Scenario: Cancelamento sem alunos em lista de espera
  Given o sistema contém uma aula sem alunos em lista de espera
  And uma reserva confirmada foi cancelada
  When o cancelamento é processado
  Then o sistema apenas libera a vaga
  And não realiza promoção de aluno