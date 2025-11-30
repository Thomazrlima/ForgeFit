package br.com.forgefit.dominio.ranking.strategy;

/**
 * Strategy Pattern - Interface para diferentes estratégias de cálculo de pontuação.
 * 
 * Permite implementar diferentes formas de calcular pontos no ranking:
 * - Cálculo padrão (pontos diretos)
 * - Cálculo com bônus por sequência
 * - Cálculo com multiplicador por período
 * - Cálculo com penalidades
 */
public interface CalculoPontuacaoStrategy {
    
    /**
     * Calcula os pontos de frequência baseado na presença em aulas.
     * 
     * @param pontosBase pontos base por presença
     * @param aulasConsecutivas número de aulas consecutivas (para bônus)
     * @return pontos calculados
     */
    int calcularPontosFrequencia(int pontosBase, int aulasConsecutivas);
    
    /**
     * Calcula os pontos de participação em guilda.
     * 
     * @param pontosBase pontos base da atividade
     * @param nivelGuilda nível da guilda (para multiplicadores)
     * @return pontos calculados
     */
    int calcularPontosGuilda(int pontosBase, int nivelGuilda);
    
    /**
     * Calcula os pontos de performance baseado em avaliações.
     * 
     * @param pontosBase pontos base
     * @param nota nota da avaliação (1-5)
     * @return pontos calculados
     */
    int calcularPontosPerformance(int pontosBase, double nota);
    
    /**
     * Retorna o nome da estratégia para identificação.
     * 
     * @return nome da estratégia
     */
    String getNome();
}
