package br.com.forgefit.dominio.guilda;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

import java.util.Objects;
import java.util.UUID;

public class CodigoConvite {
    private final String valor;

    public CodigoConvite(String valor) {
        notNull(valor, "O código de convite não pode ser nulo");
        notBlank(valor, "O código de convite não pode estar em branco");
        this.valor = valor;
    }

    public static CodigoConvite gerar() {
        return new CodigoConvite(UUID.randomUUID().toString().substring(0, 8).toUpperCase());
    }

    public String getValor() {
        return valor;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj != null && obj instanceof CodigoConvite) {
            CodigoConvite other = (CodigoConvite) obj;
            return valor.equals(other.valor);
        }
        return false;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor);
    }

    @Override
    public String toString() {
        return valor;
    }
}

