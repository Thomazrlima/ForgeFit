package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.Duration;
import java.time.LocalDateTime;

/**
 * Serviço de reembolso conforme definido no ForgeFit.cml
 * Calcula crédito de reembolso baseado na política de cancelamento
 */
public class ReembolsoService {

    // Política de reembolso: ≥15 dias = 100%, 2-14 dias = 50%, ≤1 dia = 0%
    private static final long HORAS_MINIMAS_REEMBOLSO_TOTAL = 15 * 24; // 15 dias = 360 horas
    private static final double PERCENTUAL_REEMBOLSO_TOTAL = 1.0; // 100%
    private static final double PERCENTUAL_REEMBOLSO_PARCIAL = 0.5; // 50%
    private static final long HORAS_MINIMAS_REEMBOLSO_PARCIAL = 2 * 24; // 2 dias = 48 horas

    /**
     * Calcula o crédito de reembolso baseado na antecedência do cancelamento
     * 
     * @param aulaId              ID da aula cancelada
     * @param aula                A aula que está sendo cancelada
     * @param momentoCancelamento Momento em que o cancelamento foi solicitado
     * @return Valor do crédito de reembolso (pode ser 0 se não houver direito)
     */
    public double calcularCreditoDeReembolso(AulaId aulaId, Aula aula, LocalDateTime momentoCancelamento) {
        notNull(aulaId, "O ID da aula não pode ser nulo");
        notNull(aula, "A aula não pode ser nula");
        notNull(momentoCancelamento, "O momento do cancelamento não pode ser nulo");

        LocalDateTime inicioAula = aula.getInicio();
        Duration antecedencia = Duration.between(momentoCancelamento, inicioAula);
        long horasAntecedencia = antecedencia.toHours();

        // Se cancelou com mais de 15 dias (360 horas) de antecedência: reembolso total
        if (horasAntecedencia >= HORAS_MINIMAS_REEMBOLSO_TOTAL) {
            return calcularValorBase() * PERCENTUAL_REEMBOLSO_TOTAL;
        }

        // Se cancelou com 2 a 14 dias (48-359 horas): reembolso parcial (50%)
        if (horasAntecedencia >= HORAS_MINIMAS_REEMBOLSO_PARCIAL) {
            return calcularValorBase() * PERCENTUAL_REEMBOLSO_PARCIAL;
        }

        // Menos de 2 dias (≤1 dia antes): sem reembolso
        return 0.0;
    }

    /**
     * Calcula o valor base de uma reserva de aula
     * Aqui está fixo, mas poderia ser calculado baseado no tipo de aula
     */
    private double calcularValorBase() {
        return 20.0; // Valor fixo de R$ 20,00 por aula
    }

    /**
     * Verifica se há direito a reembolso
     */
    public boolean temDireitoAReembolso(Aula aula, LocalDateTime momentoCancelamento) {
        return calcularCreditoDeReembolso(aula.getId(), aula, momentoCancelamento) > 0;
    }

    /**
     * Obtém a mensagem apropriada baseada no valor do crédito calculado
     * Para uso em preview/informação antes do cancelamento
     * 
     * @param credito Valor do crédito de reembolso
     * @return Mensagem descritiva do status de elegibilidade
     */
    public String obterMensagemElegibilidade(double credito) {
        double valorBase = calcularValorBase();
        
        if (credito >= valorBase * PERCENTUAL_REEMBOLSO_TOTAL * 0.99) { // 100% com margem
            return "Reembolso integral (100%)";
        } else if (credito >= valorBase * PERCENTUAL_REEMBOLSO_PARCIAL * 0.99) { // 50% com margem
            return "Reembolso parcial (50%)";
        } else {
            return "Não elegível para reembolso";
        }
    }
    
    /**
     * Obtém a mensagem de confirmação após o cancelamento ser efetivado
     * Para uso em notificação pós-cancelamento
     * 
     * @param credito Valor do crédito de reembolso
     * @return Mensagem de confirmação do processamento
     */
    public String obterMensagemConfirmacao(double credito) {
        double valorBase = calcularValorBase();
        
        if (credito >= valorBase * PERCENTUAL_REEMBOLSO_TOTAL * 0.99) { // 100% com margem
            return "cancelamento aprovado, reembolso integral em processamento";
        } else if (credito >= valorBase * PERCENTUAL_REEMBOLSO_PARCIAL * 0.99) { // 50% com margem
            return "cancelamento aprovado, reembolso parcial em processamento";
        } else {
            return "cancelamento realizado sem direito a reembolso";
        }
    }
}
