Feature: Cancelamento de reserva com política de reembolso

Scenario: Cancelamento com antecedência suficiente para reembolso total
  Given um aluno possui uma reserva confirmada
  And ele cancela a reserva dentro do prazo para reembolso total
  When o cancelamento é processado
  Then o aluno recebe 100% do valor em crédito ou estorno

Scenario: Cancelamento com antecedência parcial
  Given um aluno possui uma reserva confirmada
  And ele cancela a reserva dentro do prazo para reembolso parcial
  When o cancelamento é processado
  Then o aluno recebe o percentual de reembolso correspondente

Scenario: Cancelamento fora do prazo
  Given um aluno possui uma reserva confirmada
  And ele cancela a reserva após o prazo permitido
  When o cancelamento é processado
  Then o aluno não recebe reembolso

Scenario: Promoção de lista de espera após cancelamento
  Given uma aula possui alunos na lista de espera
  And um aluno cancela sua reserva
  When o cancelamento é processado
  Then o primeiro aluno da lista de espera recebe a vaga automaticamente
  And é notificado para aceitar ou recusar dentro do prazo definido
