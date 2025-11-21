package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.isTrue;

import java.util.Objects;

public class AulaId {
    private final int id;

    // Construtor vazio protegido para frameworks (JPA, ModelMapper)
    protected AulaId() {
        this.id = 0;
    }

    public AulaId(int id) {
        isTrue(id > 0, "O id deve ser positivo");
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj != null && obj instanceof AulaId) {
            AulaId aulaId = (AulaId) obj;
            return id == aulaId.id;
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

