package br.com.forgefit.aplicacao.treino;

import java.time.LocalDate;
import java.util.List;

/**
 * DTO para resumo de plano de treino na camada de aplicação.
 */
public class PlanoTreinoResumo {
    private Integer id;
    private Integer professorId;
    private LocalDate dataCriacao;
    private LocalDate dataValidadeSugerida;
    private boolean ativo;
    private Integer quantidadeTreinos;
    private List<TreinoDiarioResumo> treinos;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProfessorId() {
        return professorId;
    }

    public void setProfessorId(Integer professorId) {
        this.professorId = professorId;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public LocalDate getDataValidadeSugerida() {
        return dataValidadeSugerida;
    }

    public void setDataValidadeSugerida(LocalDate dataValidadeSugerida) {
        this.dataValidadeSugerida = dataValidadeSugerida;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public Integer getQuantidadeTreinos() {
        return quantidadeTreinos;
    }

    public void setQuantidadeTreinos(Integer quantidadeTreinos) {
        this.quantidadeTreinos = quantidadeTreinos;
    }

    public List<TreinoDiarioResumo> getTreinos() {
        return treinos;
    }

    public void setTreinos(List<TreinoDiarioResumo> treinos) {
        this.treinos = treinos;
    }
}
