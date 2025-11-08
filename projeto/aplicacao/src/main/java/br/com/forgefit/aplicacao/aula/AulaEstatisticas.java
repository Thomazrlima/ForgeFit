package br.com.forgefit.aplicacao.aula;

/**
 * DTO para estatísticas gerais de aulas.
 * Útil para dashboards e relatórios.
 */
public interface AulaEstatisticas {
    
    /**
     * Total de aulas ativas no período.
     */
    Long getTotalAulas();
    
    /**
     * Total de reservas confirmadas.
     */
    Long getTotalReservas();
    
    /**
     * Número de aulas com vagas disponíveis.
     */
    Long getAulasComVagas();
    
    /**
     * Número de aulas lotadas.
     */
    Long getAulasLotadas();
    
    /**
     * Taxa média de ocupação (percentual).
     */
    Double getTaxaOcupacaoMedia();
    
    /**
     * Modalidade mais popular (com mais reservas).
     */
    String getModalidadeMaisPopular();
}
