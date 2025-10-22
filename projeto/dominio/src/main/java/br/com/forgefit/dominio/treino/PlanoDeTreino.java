package br.com.forgefit.dominio.treino;

import br.com.forgefit.dominio.professor.ProfessorId;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

public class PlanoDeTreino {
    private final PlanoDeTreinoId id;
    private final ProfessorId professorId;
    private final LocalDate dataCriacao;
    private final LocalDate dataValidadeSugerida;
    private final List<TreinoDiario> treinosDaSemana;

    public PlanoDeTreino(PlanoDeTreinoId id, ProfessorId professorId, LocalDate dataCriacao, LocalDate dataValidadeSugerida, List<TreinoDiario> treinos) {
        notNull(id, "O id não pode ser nulo");
        notNull(professorId, "O ID do professor não pode ser nulo");
        notNull(dataCriacao, "A data de criação não pode ser nula");
        notNull(treinos, "A lista de treinos não pode ser nula");

        this.id = id;
        this.professorId = professorId;
        this.dataCriacao = dataCriacao;
        this.dataValidadeSugerida = dataValidadeSugerida;
        this.treinosDaSemana = treinos;
    }

    public PlanoDeTreinoId getId() {
        return id;
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

    public List<TreinoDiario> getTreinosDaSemana() {
        return Collections.unmodifiableList(treinosDaSemana);
    }

    public boolean isAtivo() {
        if (dataValidadeSugerida == null) {
            return true;
        }
        return !LocalDate.now().isAfter(dataValidadeSugerida);
    }
}

