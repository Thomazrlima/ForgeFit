Feature: Cupom/Benefícios Empilháveis

  # Regra de negócio: Elegibilidade do benefício
  Scenario: Aplicar benefício quando aluno é elegível
    Given que o aluno atenda às condições do benefício ativo
    When o aluno reservar a aula e aplicar o benefício
    Then o sistema aplica o benefício ao subtotal
    And registra o uso do benefício para esse aluno

  Scenario: Rejeitar benefício quando aluno não é elegível
    Given que o aluno não atenda às condições do benefício ativo
    When o aluno tentar aplicar o benefício na reserva
    Then o sistema recusa a aplicação
    And informa o motivo de inelegibilidade

  # Regra de negócio: Teto de desconto
  Scenario: Empilhar benefícios respeitando o teto de desconto
    Given que haja dois benefícios empilháveis e um teto de 30% de desconto
    When o aluno aplicar ambos na mesma reserva
    Then o sistema limita o total ao teto de 30%
    And exibe o cálculo detalhado ao aluno

  Scenario: Bloquear empilhamento que excede o teto
    Given que o somatório dos benefícios aplicados ultrapasse o teto definido
    When o aluno tentar confirmar a reserva
    Then o sistema ajusta automaticamente ao teto e bloqueia excesso
    And informa que o limite máximo de desconto foi atingido

  # Regra de negócio: Limite de uso por aluno
  Scenario: Respeitar limite de uso por aluno
    Given que o benefício tenha limite de 3 usos por aluno
    And o aluno tenha usado o benefício 2 vezes
    When o aluno aplicar o benefício novamente
    Then o sistema autoriza o terceiro uso

  Scenario: Recusar uso acima do limite por aluno
    Given que o benefício tenha limite de 3 usos por aluno
    And o aluno já tenha usado o benefício 3 vezes
    When o aluno tentar aplicar o benefício
    Then o sistema recusa a aplicação

  # Regra de negócio: Validade do benefício
  Scenario: Validar janela de validade do benefício
    Given que o benefício esteja dentro do período de validade
    When o aluno aplicar o benefício na reserva
    Then o sistema aceita o benefício
    And registra a data e hora da aplicação

  Scenario: Recusar benefício expirado
    Given que o benefício esteja fora do período de validade
    When o aluno tentar aplicá-lo
    Then o sistema recusa a aplicação
    And informa que o benefício está expirado

  # Regra de negócio: Tipos de benefícios
  Scenario: Combinar tipos compatíveis (percentual + cashback)
    Given que os tipos percentual e cashback sejam empilháveis
    When o aluno aplicar um cupom de 10% e um cashback de R$ 5
    Then o sistema aplica primeiro o desconto e depois calcula o cashback
    And mantém a transparência do cálculo no resumo da reserva

  Scenario: Impedir combinação de tipos não compatíveis (dois percentuais)
    Given que cupons percentuais não sejam empilháveis entre si
    When o aluno tentar aplicar dois cupons percentuais
    Then o sistema mantém apenas o melhor benefício
    And informa que cupons do mesmo tipo não podem ser combinados

  # Regra de negócio: Prioridade de aplicação
  Scenario: Prioridade de aplicação (fixo → percentual → cashback)
    Given que a regra de prioridade seja desconto fixo, depois percentual, depois cashback
    When o aluno aplicar R$ 20 fixo, 10% e cashback de R$ 5
    Then o sistema aplica os benefícios nessa ordem definida
    And apresenta o valor final consistente com a prioridade

  Scenario: Corrigir ordem incorreta de aplicação
    Given que a mesma regra de prioridade esteja vigente
    When uma ordem diferente seja tentada pelo usuário
    Then o sistema reordena automaticamente para a prioridade correta
    And informa a ordem aplicada no detalhamento

  # Regra de negócio: Valor mínimo de compra
  Scenario: Respeitar valor mínimo da compra para o benefício
    Given que o benefício exija valor mínimo de R$ 100
    And a reserva do aluno some R$ 120
    When o aluno aplicar o benefício
    Then o sistema aceita a aplicação

  Scenario: Rejeitar benefício por não atingir valor mínimo
    Given que o benefício exija valor mínimo de R$ 100
    And a reserva do aluno some R$ 80
    When o aluno tentar aplicar o benefício
    Then o sistema recusa a aplicação

  # Regra de negócio: Reserva antecipada
  Scenario: Incentivo a reserva antecipada dentro da janela
    Given que o benefício de reserva antecipada exija 48 horas de antecedência
    And a aula comece em 72 horas
    When o aluno aplicar o benefício
    Then o sistema concede o desconto de reserva antecipada

  Scenario: Negar benefício de reserva antecipada fora da janela
    Given que o benefício exija 48 horas de antecedência
    And a aula comece em 24 horas
    When o aluno tentar aplicar o benefício
    Then o sistema recusa a aplicação

  # Regra de negócio: Compatibilidade com aulas promocionais
  Scenario: Não empilhar com aula já promocional; manter o melhor
    Given que a aula já tenha preço promocional não empilhável
    When o aluno aplicar um cupom adicional
    Then o sistema compara e mantém o melhor entre preço promocional e cupom
    And informa que não há empilhamento para essa aula

  Scenario: Bloquear empilhamento proibido em aula promocional
    Given que a aula esteja marcada como “não empilhável”
    When o aluno tentar combinar qualquer cupom com a promoção
    Then o sistema bloqueia a combinação
    And exibe mensagem sobre a restrição de empilhamento

  # Regra de negócio: Cancelamento com benefícios
  Scenario: Cancelamento reverte cashback e devolve contagem de uso
    Given que a reserva tenha sido concluída com cashback e seja cancelada conforme política
    When o cancelamento for processado
    Then o sistema estorna o cashback pendente e devolve 1 uso do benefício ao aluno
    And atualiza o histórico financeiro da reserva

  Scenario: Cancelamento fora da política não devolve benefícios
    Given que a reserva seja cancelada fora das regras de reembolso
    When o cancelamento for processado
    Then o sistema não restitui cashback nem libera contagem de uso
    And informa as regras aplicadas ao aluno
