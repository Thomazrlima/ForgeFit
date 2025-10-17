package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

import java.util.Objects;

public class Cpf {
    private final String numero;

    public Cpf(String numero) {
        notNull(numero, "O CPF não pode ser nulo.");
        notBlank(numero, "O CPF não pode estar em branco.");
        
        if (!numero.matches("\\d{11}")) {
            throw new IllegalArgumentException("Formato de CPF inválido. Deve ter 11 dígitos numéricos.");
        }
        
        this.numero = numero;
    }

    public String getNumero() {
        return numero;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj != null && obj instanceof Cpf) {
            Cpf other = (Cpf) obj;
            return numero.equals(other.numero);
        }
        return false;
    }

    @Override
    public int hashCode() {
        return Objects.hash(numero);
    }

    @Override
    public String toString() {
        return numero;
    }
}