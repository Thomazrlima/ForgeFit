package br.com.forgefit.dominio.treino;

import java.time.LocalDate;
import java.util.List;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.professor.ProfessorId;

public class PlanoDeTreinoCompleto {
    private final PlanoDeTreinoId id;
    private final Matricula alunoMatricula;
    private final ProfessorId professorId;
    private final LocalDate dataCriacao;
    private final LocalDate dataValidadeSugerida;
    private final List<TreinoDiario> treinos;
    private static final int LIMITE_MAX_TREINOS = 7;

    public PlanoDeTreinoCompleto(PlanoDeTreinoId id, Matricula alunoMatricula, ProfessorId professorId,
                                 LocalDate dataCriacao, LocalDate dataValidadeSugerida,
                                 List<TreinoDiario> treinos) {
        this.id = id;
        this.alunoMatricula = alunoMatricula;
        this.professorId = professorId;
        this.dataCriacao = dataCriacao;
        this.dataValidadeSugerida = dataValidadeSugerida;
        this.treinos = treinos;
    }

    public PlanoDeTreinoId getId() { return id; }
    public Matricula getAlunoMatricula() { return alunoMatricula; }
    public ProfessorId getProfessorId() { return professorId; }
    public LocalDate getDataCriacao() { return dataCriacao; }
    public LocalDate getDataValidadeSugerida() { return dataValidadeSugerida; }
    public List<TreinoDiario> getTreinos() { return treinos; }
    public int getQuantidadeTreinos() { return treinos.size(); }
    public static int getLimiteMaxTreinos() { return LIMITE_MAX_TREINOS; }
}
