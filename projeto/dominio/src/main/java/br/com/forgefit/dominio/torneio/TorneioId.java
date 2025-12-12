package br.com.forgefit.dominio.torneio;

import static org.apache.commons.lang3.Validate.isTrue;

import java.util.Objects;

public class TorneioId {
    private final int id;

    public TorneioId(int id) {
        isTrue(id >= 0, "O id não pode ser negativo");
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj != null && obj instanceof TorneioId) {
            TorneioId torneioId = (TorneioId) obj;
            return id == torneioId.id;
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

