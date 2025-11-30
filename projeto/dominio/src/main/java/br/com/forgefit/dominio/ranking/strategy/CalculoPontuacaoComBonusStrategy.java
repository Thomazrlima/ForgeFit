package br.com.forgefit.dominio.ranking.strategy;

/**
 * Estratégia de cálculo com bônus por consistência.
 * 
 * Aplica multiplicadores baseados em:
 * - Sequência de aulas consecutivas
 * - Nível da guilda
 * - Qualidade da performance (nota alta)
 */
public class CalculoPontuacaoComBonusStrategy implements CalculoPontuacaoStrategy {

    private static final double BONUS_SEQUENCIA_3_AULAS = 1.1;   // 10% de bônus
    private static final double BONUS_SEQUENCIA_5_AULAS = 1.25;  // 25% de bônus
    private static final double BONUS_SEQUENCIA_10_AULAS = 1.5;  // 50% de bônus
    
    private static final double MULTIPLICADOR_GUILDA_BASE = 1.0;
    private static final double MULTIPLICADOR_POR_NIVEL = 0.05;  // 5% por nível
    
    private static final double NOTA_MINIMA_BONUS = 4.0;
    private static final double BONUS_NOTA_ALTA = 1.2;  // 20% de bônus para nota >= 4

    @Override
    public int calcularPontosFrequencia(int pontosBase, int aulasConsecutivas) {
        double multiplicador = 1.0;
        
        if (aulasConsecutivas >= 10) {
            multiplicador = BONUS_SEQUENCIA_10_AULAS;
        } else if (aulasConsecutivas >= 5) {
            multiplicador = BONUS_SEQUENCIA_5_AULAS;
        } else if (aulasConsecutivas >= 3) {
            multiplicador = BONUS_SEQUENCIA_3_AULAS;
        }
        
        return (int) Math.round(pontosBase * multiplicador);
    }

    @Override
    public int calcularPontosGuilda(int pontosBase, int nivelGuilda) {
        double multiplicador = MULTIPLICADOR_GUILDA_BASE + (nivelGuilda * MULTIPLICADOR_POR_NIVEL);
        return (int) Math.round(pontosBase * multiplicador);
    }

    @Override
    public int calcularPontosPerformance(int pontosBase, double nota) {
        double multiplicador = 1.0;
        
        if (nota >= NOTA_MINIMA_BONUS) {
            multiplicador = BONUS_NOTA_ALTA;
        }
        
        return (int) Math.round(pontosBase * multiplicador);
    }

    @Override
    public String getNome() {
        return "Com Bônus";
    }
}
