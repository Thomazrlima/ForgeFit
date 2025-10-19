package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.Duration;
import java.time.LocalDateTime;

/**
 * Serviço de reembolso conforme definido no ForgeFit.cml
 * Calcula crédito de reembolso baseado na política de cancelamento
 */
public class ReembolsoService {

    // Política de reembolso: 15 dias de antecedência = 100%, 5 dias = 50%
    private static final long HORAS_MINIMAS_REEMBOLSO_TOTAL = 15 * 24; // 15 dias = 360 horas
    private static final double PERCENTUAL_REEMBOLSO_TOTAL = 1.0; // 100%
    private static final double PERCENTUAL_REEMBOLSO_PARCIAL = 0.5; // 50%
    private static final long HORAS_MINIMAS_REEMBOLSO_PARCIAL = 5 * 24; // 5 dias = 120 horas

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

        // Se cancelou com mais de 5 dias (120 horas): reembolso parcial (50%)
        if (horasAntecedencia >= HORAS_MINIMAS_REEMBOLSO_PARCIAL) {
            return calcularValorBase() * PERCENTUAL_REEMBOLSO_PARCIAL;
        }

        // Menos de 5 dias: sem reembolso
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
}
