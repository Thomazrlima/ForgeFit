package br.com.forgefit.dominio.treino;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

public class PlanoDeTreino {
    private final PlanoDeTreinoId id;
    private final LocalDate dataCriacao;
    private final LocalDate dataValidadeSugerida;

    public PlanoDeTreino(PlanoDeTreinoId id, LocalDate dataCriacao, LocalDate dataValidadeSugerida) {
        notNull(id, "O id não pode ser nulo");
        this.id = id;

        notNull(dataCriacao, "A data de criação não pode ser nula");
        this.dataCriacao = dataCriacao;

        this.dataValidadeSugerida = dataValidadeSugerida;
    }

    public PlanoDeTreinoId getId() {
        return id;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public LocalDate getDataValidadeSugerida() {
        return dataValidadeSugerida;
    }

    public boolean isAtivo() {
        if (dataValidadeSugerida == null) {
            return true;
        }
        return !LocalDate.now().isAfter(dataValidadeSugerida);
    }
}

