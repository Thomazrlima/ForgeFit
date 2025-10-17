package br.com.forgefit.dominio.aula;

import java.util.Objects;

public class AulaId {
    private final int id;

    public AulaId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj != null && obj instanceof AulaId) {
            AulaId other = (AulaId) obj;
            return id == other.id;
        }
        return false;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return String.valueOf(id);
    }
}
