package br.com.forgefit.dominio.aula;

/**
 * Value Object que representa o tipo de reembolso aplicado ao cancelamento.
 * Imutável e baseado em regras de negócio de antecedência.
 */
public enum TipoReembolso {
    /**
     * Reembolso total (100%) - cancelamento com 15+ dias de antecedência
     */
    INTEGRAL("Reembolso integral", 1.0),
    
    /**
     * Reembolso parcial (50%) - cancelamento entre 5 e 14 dias de antecedência
     */
    PARCIAL("Reembolso parcial", 0.5),
    
    /**
     * Sem reembolso - cancelamento com menos de 5 dias de antecedência
     */
    SEM_REEMBOLSO("Sem reembolso", 0.0);
    
    private final String descricao;
    private final double percentual;
    
    TipoReembolso(String descricao, double percentual) {
        this.descricao = descricao;
        this.percentual = percentual;
    }
    
    public String getDescricao() {
        return descricao;
    }
    
    public double getPercentual() {
        return percentual;
    }
    
    /**
     * Calcula o tipo de reembolso baseado nos dias de antecedência.
     * REGRA DE NEGÓCIO:
     * - >= 15 dias: Reembolso integral
     * - 5 a 14 dias: Reembolso parcial (50%)
     * - < 5 dias: Sem reembolso
     */
    public static TipoReembolso calcularPorAntecedencia(long diasAntecedencia) {
        if (diasAntecedencia >= 15) {
            return INTEGRAL;
        } else if (diasAntecedencia >= 5) {
            return PARCIAL;
        } else {
            return SEM_REEMBOLSO;
        }
    }
}
