Feature: Cupom/Benefícios Empilháveis

  # Regra de negócio: Elegibilidade do benefício
  Scenario: Aplicar benefício quando aluno é elegível
    Dado que o aluno atenda às condições do benefício ativo
    Quando o aluno reservar a aula e aplicar o benefício
    Então o sistema aplica o benefício ao subtotal
    E registra o uso do benefício para esse aluno

  Scenario: Rejeitar benefício quando aluno não é elegível
    Dado que o aluno não atenda às condições do benefício ativo
    Quando o aluno tentar aplicar o benefício na reserva
    Então o sistema recusa a aplicação
    E informa o motivo de inelegibilidade

  # Regra de negócio: Teto de desconto
  Scenario: Empilhar benefícios respeitando o teto de desconto
    Dado que haja dois benefícios empilháveis e um teto de 30% de desconto
    Quando o aluno aplicar ambos na mesma reserva
    Então o sistema limita o total ao teto de 30%
    E exibe o cálculo detalhado ao aluno

  Scenario: Bloquear empilhamento que excede o teto
    Dado que o somatório dos benefícios aplicados ultrapasse o teto definido
    Quando o aluno tentar confirmar a reserva
    Então o sistema ajusta automaticamente ao teto e bloqueia excesso
    E informa que o limite máximo de desconto foi atingido

  # Regra de negócio: Limite de uso por aluno
  Scenario: Respeitar limite de uso por aluno
    Dado que o benefício tenha limite de 3 usos por aluno
    E o aluno tenha usado o benefício 2 vezes
    Quando o aluno aplicar o benefício novamente
    Então o sistema autoriza o terceiro uso
    E atualiza o contador para 3/3

  Scenario: Recusar uso acima do limite por aluno
    Dado que o benefício tenha limite de 3 usos por aluno
    E o aluno já tenha usado o benefício 3 vezes
    Quando o aluno tentar aplicar o benefício
    Então o sistema recusa a aplicação
    E informa que o limite de uso foi alcançado

  # Regra de negócio: Validade do benefício
  Scenario: Validar janela de validade do benefício
    Dado que o benefício esteja dentro do período de validade
    Quando o aluno aplicar o benefício na reserva
    Então o sistema aceita o benefício
    E registra a data e hora da aplicação

  Scenario: Recusar benefício expirado
    Dado que o benefício esteja fora do período de validade
    Quando o aluno tentar aplicá-lo
    Então o sistema recusa a aplicação
    E informa que o benefício está expirado

  # Regra de negócio: Tipos de benefícios
  Scenario: Combinar tipos compatíveis (percentual + cashback)
    Dado que os tipos percentual e cashback sejam empilháveis
    Quando o aluno aplicar um cupom de 10% e um cashback de R$ 5
    Então o sistema aplica primeiro o desconto e depois calcula o cashback
    E mantém a transparência do cálculo no resumo da reserva

  Scenario: Impedir combinação de tipos não compatíveis (dois percentuais)
    Dado que cupons percentuais não sejam empilháveis entre si
    Quando o aluno tentar aplicar dois cupons percentuais
    Então o sistema mantém apenas o melhor benefício
    E informa que cupons do mesmo tipo não podem ser combinados

  # Regra de negócio: Prioridade de aplicação
  Scenario: Prioridade de aplicação (fixo → percentual → cashback)
    Dado que a regra de prioridade seja desconto fixo, depois percentual, depois cashback
    Quando o aluno aplicar R$ 20 fixo, 10% e cashback de R$ 5
    Então o sistema aplica os benefícios nessa ordem definida
    E apresenta o valor final consistente com a prioridade

  Scenario: Corrigir ordem incorreta de aplicação
    Dado que a mesma regra de prioridade esteja vigente
    Quando uma ordem diferente seja tentada pelo usuário
    Então o sistema reordena automaticamente para a prioridade correta
    E informa a ordem aplicada no detalhamento

  # Regra de negócio: Valor mínimo de compra
  Scenario: Respeitar valor mínimo da compra para o benefício
    Dado que o benefício exija valor mínimo de R$ 100
    E a reserva do aluno some R$ 120
    Quando o aluno aplicar o benefício
    Então o sistema aceita a aplicação
    E mantém o registro do critério atendido

  Scenario: Rejeitar benefício por não atingir valor mínimo
    Dado que o benefício exija valor mínimo de R$ 100
    E a reserva do aluno some R$ 80
    Quando o aluno tentar aplicar o benefício
    Então o sistema recusa a aplicação
    E sugere como atingir o valor mínimo

  # Regra de negócio: Reserva antecipada
  Scenario: Incentivo a reserva antecipada dentro da janela
    Dado que o benefício de reserva antecipada exija 48 horas de antecedência
    E a aula comece em 72 horas
    Quando o aluno aplicar o benefício
    Então o sistema concede o desconto de reserva antecipada
    E registra a antecedência cumprida

  Scenario: Negar benefício de reserva antecipada fora da janela
    Dado que o benefício exija 48 horas de antecedência
    E a aula comece em 24 horas
    Quando o aluno tentar aplicar o benefício
    Então o sistema recusa a aplicação
    E informa que o prazo mínimo não foi atendido

  # Regra de negócio: Compatibilidade com aulas promocionais
  Scenario: Não empilhar com aula já promocional; manter o melhor
    Dado que a aula já tenha preço promocional não empilhável
    Quando o aluno aplicar um cupom adicional
    Então o sistema compara e mantém o melhor entre preço promocional e cupom
    E informa que não há empilhamento para essa aula

  Scenario: Bloquear empilhamento proibido em aula promocional
    Dado que a aula esteja marcada como “não empilhável”
    Quando o aluno tentar combinar qualquer cupom com a promoção
    Então o sistema bloqueia a combinação
    E exibe mensagem sobre a restrição de empilhamento

  # Regra de negócio: Cancelamento com benefícios
  Scenario: Cancelamento reverte cashback e devolve contagem de uso
    Dado que a reserva tenha sido concluída com cashback e seja cancelada conforme política
    Quando o cancelamento for processado
    Então o sistema estorna o cashback pendente e devolve 1 uso do benefício ao aluno
    E atualiza o histórico financeiro da reserva

  Scenario: Cancelamento fora da política não devolve benefícios
    Dado que a reserva seja cancelada fora das regras de reembolso
    Quando o cancelamento for processado
    Então o sistema não restitui cashback nem libera contagem de uso
    E informa as regras aplicadas ao aluno
