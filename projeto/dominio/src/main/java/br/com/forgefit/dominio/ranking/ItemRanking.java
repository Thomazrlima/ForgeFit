package br.com.forgefit.dominio.ranking;

import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.aluno.Cpf;

public class ItemRanking {
    private final Cpf cpf;
    private int pontosFrequencia;
    private int pontosGuilda;
    private int pontosPerformance;
    private int pontuacaoTotal;
    private int posicao;
    private int numeroDeAulasParticipadas;
    private double mediaPerformance;
    private int numeroDeAvaliacoes; // Contador separado para avaliações

    public ItemRanking(Cpf cpf) {
        notNull(cpf, "O CPF não pode ser nulo");
        this.cpf = cpf;
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
        this.pontuacaoTotal = Math.max(0, this.pontuacaoTotal - pontos);
    }

    public void ajustarPontos(int ajuste) {
        this.pontuacaoTotal = Math.max(0, this.pontuacaoTotal + ajuste);
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
    public Cpf getCpf() {
        return cpf;
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
