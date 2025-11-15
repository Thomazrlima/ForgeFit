package br.com.forgefit.aplicacao.aula;

/**
 * DTO para receber avaliação de aula.
 * Baseado na interface ClassRating do mockData.ts
 */
public class AvaliacaoResumo {

    private Integer didatica;
    private Integer atencao;
    private Integer pontualidade;
    private String comentarios;

    // Construtor vazio
    public AvaliacaoResumo() {
    }

    // Getters e Setters
    public Integer getDidatica() {
        return didatica;
    }

    public void setDidatica(Integer didatica) {
        this.didatica = didatica;
    }

    public Integer getAtencao() {
        return atencao;
    }

    public void setAtencao(Integer atencao) {
        this.atencao = atencao;
    }

    public Integer getPontualidade() {
        return pontualidade;
    }

    public void setPontualidade(Integer pontualidade) {
        this.pontualidade = pontualidade;
    }

    public String getComentarios() {
        return comentarios;
    }

    public void setComentarios(String comentarios) {
        this.comentarios = comentarios;
    }

    /**
     * Valida se a avaliação possui os campos obrigatórios
     */
    public boolean isValid() {
        return didatica != null && didatica >= 1 && didatica <= 5
                && atencao != null && atencao >= 1 && atencao <= 5
                && pontualidade != null && pontualidade >= 1 && pontualidade <= 5;
    }

    /**
     * Calcula a média das notas
     */
    public double calcularMedia() {
        if (!isValid()) {
            return 0.0;
        }
        return (didatica + atencao + pontualidade) / 3.0;
    }
}
