package br.com.forgefit.aplicacao.treino;

/**
 * DTO para resumo de exercício na camada de aplicação.
 */
public class ExercicioResumo {
    private String exercicio;
    private Integer series;
    private String contagem;

    public String getExercicio() {
        return exercicio;
    }

    public void setExercicio(String exercicio) {
        this.exercicio = exercicio;
    }

    public Integer getSeries() {
        return series;
    }

    public void setSeries(Integer series) {
        this.series = series;
    }

    public String getContagem() {
        return contagem;
    }

    public void setContagem(String contagem) {
        this.contagem = contagem;
    }
}
