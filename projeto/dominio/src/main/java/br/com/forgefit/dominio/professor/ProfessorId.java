package br.com.forgefit.dominio.professor;

import static org.apache.commons.lang3.Validate.isTrue;

import java.util.Objects;

public class ProfessorId {
    private final int id;

    public ProfessorId(int id) {
        isTrue(id > 0, "O id deve ser positivo");
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProfessorId that = (ProfessorId) o;
        return id == that.id;
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
