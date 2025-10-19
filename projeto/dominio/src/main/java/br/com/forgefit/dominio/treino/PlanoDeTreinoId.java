package br.com.forgefit.dominio.treino;

import static org.apache.commons.lang3.Validate.isTrue;

import java.util.Objects;

public class PlanoDeTreinoId {
    private final int id;

    public PlanoDeTreinoId(int id) {
        isTrue(id > 0, "O id deve ser positivo");
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj != null && obj instanceof PlanoDeTreinoId) {
            PlanoDeTreinoId planoDeTreinoId = (PlanoDeTreinoId) obj;
            return id == planoDeTreinoId.id;
        }
        return false;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return Integer.toString(id);
    }
}

