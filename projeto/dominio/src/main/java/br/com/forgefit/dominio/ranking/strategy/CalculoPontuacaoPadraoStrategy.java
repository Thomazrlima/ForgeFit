package br.com.forgefit.dominio.ranking.strategy;

/**
 * Estratégia padrão de cálculo de pontuação.
 * 
 * Aplica os pontos diretamente sem modificadores.
 */
public class CalculoPontuacaoPadraoStrategy implements CalculoPontuacaoStrategy {

    @Override
    public int calcularPontosFrequencia(int pontosBase, int aulasConsecutivas) {
        // Cálculo direto, sem bônus
        return pontosBase;
    }

    @Override
    public int calcularPontosGuilda(int pontosBase, int nivelGuilda) {
        // Cálculo direto, sem multiplicador
        return pontosBase;
    }

    @Override
    public int calcularPontosPerformance(int pontosBase, double nota) {
        // Cálculo direto
        return pontosBase;
    }

    @Override
    public String getNome() {
        return "Padrão";
    }
}
