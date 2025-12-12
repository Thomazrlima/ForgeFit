package br.com.forgefit.aplicacao.treino;

import java.util.List;

/**
 * DTO para resumo de treino diário na camada de aplicação.
 */
public class TreinoDiarioResumo {
    private String letra;
    private String tipo;
    private Integer quantidadeExercicios;
    private List<ExercicioResumo> exercicios;

    public String getLetra() {
        return letra;
    }

    public void setLetra(String letra) {
        this.letra = letra;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getQuantidadeExercicios() {
        return quantidadeExercicios;
    }

    public void setQuantidadeExercicios(Integer quantidadeExercicios) {
        this.quantidadeExercicios = quantidadeExercicios;
    }

    public List<ExercicioResumo> getExercicios() {
        return exercicios;
    }

    public void setExercicios(List<ExercicioResumo> exercicios) {
        this.exercicios = exercicios;
    }
}
