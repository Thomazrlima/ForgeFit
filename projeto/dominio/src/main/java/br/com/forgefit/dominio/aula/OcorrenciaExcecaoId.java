package br.com.forgefit.dominio.aula;

import java.util.Objects;

import static org.apache.commons.lang3.Validate.isTrue;

public class OcorrenciaExcecaoId {
    private final int id;

    public OcorrenciaExcecaoId(int id) {
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
        OcorrenciaExcecaoId that = (OcorrenciaExcecaoId) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
