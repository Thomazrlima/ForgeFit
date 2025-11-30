package br.com.forgefit.dominio.ranking.strategy;

/**
 * Estratégia de cálculo para torneios/competições.
 * 
 * Aplica multiplicadores dobrados para incentivar participação
 * durante eventos especiais e torneios.
 */
public class CalculoPontuacaoTorneioStrategy implements CalculoPontuacaoStrategy {

    private static final double MULTIPLICADOR_TORNEIO = 2.0;  // Pontos dobrados
    
    private static final double BONUS_SEQUENCIA_TORNEIO = 0.25;  // 25% extra por aula consecutiva
    private static final int MAX_BONUS_SEQUENCIA = 5;  // Máximo de 5 aulas para bônus
    
    private static final double BONUS_NOTA_MAXIMA = 1.5;  // 50% bônus para nota 5

    @Override
    public int calcularPontosFrequencia(int pontosBase, int aulasConsecutivas) {
        // Pontos dobrados + bônus por sequência (limitado)
        int aulasParaBonus = Math.min(aulasConsecutivas, MAX_BONUS_SEQUENCIA);
        double multiplicadorSequencia = 1.0 + (aulasParaBonus * BONUS_SEQUENCIA_TORNEIO);
        
        return (int) Math.round(pontosBase * MULTIPLICADOR_TORNEIO * multiplicadorSequencia);
    }

    @Override
    public int calcularPontosGuilda(int pontosBase, int nivelGuilda) {
        // Pontos dobrados para atividades de guilda durante torneio
        return (int) Math.round(pontosBase * MULTIPLICADOR_TORNEIO);
    }

    @Override
    public int calcularPontosPerformance(int pontosBase, double nota) {
        double multiplicador = MULTIPLICADOR_TORNEIO;
        
        // Bônus extra para nota máxima
        if (nota >= 5.0) {
            multiplicador *= BONUS_NOTA_MAXIMA;
        }
        
        return (int) Math.round(pontosBase * multiplicador);
    }

    @Override
    public String getNome() {
        return "Torneio";
    }
}
