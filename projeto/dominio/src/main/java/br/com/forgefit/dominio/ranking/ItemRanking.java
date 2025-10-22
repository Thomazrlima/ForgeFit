package br.com.forgefit.dominio.ranking;

import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.aluno.Matricula;

public class ItemRanking {
    private final Matricula alunoMatricula;
    private int pontosFrequencia;
    private int pontosGuilda;
    private int pontosPerformance;
    private int pontuacaoTotal;
    private int posicao;
    private int numeroDeAulasParticipadas;
    private double mediaPerformance;
    private int numeroDeAvaliacoes; // Contador separado para avaliações

    public ItemRanking(Matricula alunoMatricula) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        this.alunoMatricula = alunoMatricula;
        this.pontosFrequencia = 0;
        this.pontosGuilda = 0;
        this.pontosPerformance = 0;
        this.pontuacaoTotal = 0;
        this.posicao = 0;
        this.numeroDeAulasParticipadas = 0;
        this.mediaPerformance = 0.0;
        this.numeroDeAvaliacoes = 0;
    }

    public void adicionarPontosFrequencia(int pontos) {
        this.pontosFrequencia += pontos;
        this.numeroDeAulasParticipadas++;
        recalcularTotal();
    }

    public void adicionarPontosGuilda(int pontos) {
        this.pontosGuilda += pontos;
        recalcularTotal();
    }

    public void adicionarPontosPerformance(int pontos, double nota) {
        this.pontosPerformance += pontos;
        // Recalcula média de performance
        double somaNotas = mediaPerformance * numeroDeAvaliacoes;
        this.numeroDeAvaliacoes++;
        this.mediaPerformance = (somaNotas + nota) / numeroDeAvaliacoes;
        recalcularTotal();
    }

    public void removerPontos(int pontos) {
        // Remove proporcionalmente dos componentes para manter integridade
        int pontosARemover = Math.min(pontos, this.pontuacaoTotal);
        
        // Remove primeiro de performance, depois guilda, depois frequência
        if (pontosARemover > 0 && this.pontosPerformance > 0) {
            int removerPerformance = Math.min(pontosARemover, this.pontosPerformance);
            this.pontosPerformance -= removerPerformance;
            pontosARemover -= removerPerformance;
        }
        
        if (pontosARemover > 0 && this.pontosGuilda > 0) {
            int removerGuilda = Math.min(pontosARemover, this.pontosGuilda);
            this.pontosGuilda -= removerGuilda;
            pontosARemover -= removerGuilda;
        }
        
        if (pontosARemover > 0 && this.pontosFrequencia > 0) {
            int removerFrequencia = Math.min(pontosARemover, this.pontosFrequencia);
            this.pontosFrequencia -= removerFrequencia;
            pontosARemover -= removerFrequencia;
        }
        
        recalcularTotal();
    }

    public void ajustarPontos(int ajuste) {
        if (ajuste > 0) {
            // Adiciona aos pontos de frequência (ajuste positivo)
            this.pontosFrequencia += ajuste;
        } else {
            // Remove pontos (ajuste negativo)
            removerPontos(Math.abs(ajuste));
        }
        recalcularTotal();
    }

    private void recalcularTotal() {
        this.pontuacaoTotal = pontosFrequencia + pontosGuilda + pontosPerformance;
    }

    public void setPosicao(int posicao) {
        this.posicao = posicao;
    }

    public void zerarPontos() {
        this.pontosFrequencia = 0;
        this.pontosGuilda = 0;
        this.pontosPerformance = 0;
        this.pontuacaoTotal = 0;
        this.numeroDeAulasParticipadas = 0;
        this.mediaPerformance = 0.0;
        this.numeroDeAvaliacoes = 0;
    }

    // Getters
    public Matricula getAlunoMatricula() {
        return alunoMatricula;
    }

    public int getPontosFrequencia() {
        return pontosFrequencia;
    }

    public int getPontosGuilda() {
        return pontosGuilda;
    }

    public int getPontosPerformance() {
        return pontosPerformance;
    }

    public int getPontuacaoTotal() {
        return pontuacaoTotal;
    }

    public int getPosicao() {
        return posicao;
    }

    public int getNumeroDeAulasParticipadas() {
        return numeroDeAulasParticipadas;
    }

    public double getMediaPerformance() {
        return mediaPerformance;
    }
}
