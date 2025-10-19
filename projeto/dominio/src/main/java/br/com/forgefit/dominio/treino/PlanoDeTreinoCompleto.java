package br.com.forgefit.dominio.treino;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.ProfessorId;

/**
 * Plano de treino completo com todos os treinos diários
 */
public class PlanoDeTreinoCompleto {
    private final PlanoDeTreinoId id;
    private final Cpf alunoCpf;
    private final ProfessorId professorId;
    private final LocalDate dataCriacao;
    private final LocalDate dataValidadeSugerida;
    private final List<TreinoDiario> treinos;
    
    private static final int LIMITE_MAX_TREINOS = 7; // 7 dias da semana

    public PlanoDeTreinoCompleto(PlanoDeTreinoId id, Cpf alunoCpf, ProfessorId professorId,
                                 LocalDate dataCriacao, LocalDate dataValidadeSugerida,
                                 List<TreinoDiario> treinos) {
        notNull(id, "O ID não pode ser nulo");
        notNull(alunoCpf, "O CPF do aluno não pode ser nulo");
        notNull(professorId, "O ID do professor não pode ser nulo");
        notNull(dataCriacao, "A data de criação não pode ser nula");
        notNull(treinos, "A lista de treinos não pode ser nula");
        
        if (treinos.size() > LIMITE_MAX_TREINOS) {
            throw new IllegalArgumentException(
                "Não é possível ter mais de " + LIMITE_MAX_TREINOS + " treinos (dias da semana)");
        }
        
        this.id = id;
        this.alunoCpf = alunoCpf;
        this.professorId = professorId;
        this.dataCriacao = dataCriacao;
        this.dataValidadeSugerida = dataValidadeSugerida;
        this.treinos = new ArrayList<>(treinos);
    }

    public PlanoDeTreinoId getId() {
        return id;
    }

    public Cpf getAlunoCpf() {
        return alunoCpf;
    }

    public ProfessorId getProfessorId() {
        return professorId;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public LocalDate getDataValidadeSugerida() {
        return dataValidadeSugerida;
    }

    public List<TreinoDiario> getTreinos() {
        return new ArrayList<>(treinos);
    }

    public int getQuantidadeTreinos() {
        return treinos.size();
    }

    public boolean isAtivo() {
        if (dataValidadeSugerida == null) {
            return true;
        }
        return !LocalDate.now().isAfter(dataValidadeSugerida);
    }

    public static int getLimiteMaxTreinos() {
        return LIMITE_MAX_TREINOS;
    }
}
