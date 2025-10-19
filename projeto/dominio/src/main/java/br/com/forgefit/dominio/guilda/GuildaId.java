package br.com.forgefit.dominio.guilda;

import static org.apache.commons.lang3.Validate.isTrue;

import java.util.Objects;

public class GuildaId {
    private final int id;

    public GuildaId(int id) {
        isTrue(id > 0, "O id deve ser positivo");
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj != null && obj instanceof GuildaId) {
            GuildaId guildaId = (GuildaId) obj;
            return id == guildaId.id;
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

