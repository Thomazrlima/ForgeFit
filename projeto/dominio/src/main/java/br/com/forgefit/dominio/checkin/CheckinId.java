package br.com.forgefit.dominio.checkin;

import static org.apache.commons.lang3.Validate.isTrue;

import java.util.Objects;

public class CheckinId {
    private final int id;

    public CheckinId(int id) {
        isTrue(id > 0, "O id deve ser positivo");
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj != null && obj instanceof CheckinId) {
            CheckinId checkinId = (CheckinId) obj;
            return id == checkinId.id;
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

