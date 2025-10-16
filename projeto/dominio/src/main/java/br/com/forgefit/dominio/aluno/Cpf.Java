package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.isTrue;
import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

import java.util.Objects;

public class Cpf {

    private final String numero;

    public Cpf(String numero) {
        notNull(numero, "O número do CPF não pode ser nulo");
        notBlank(numero, "O número do CPF não pode estar em branco");

        String limpo = numero.replaceAll("[^0-9]", "");
        isTrue(limpo.length() == 11, "O CPF deve ter 11 dígitos");
        // isTrue(CpfValidator.isValid(limpo), "O CPF é inválido"); // Assumindo um validador externo

        this.numero = limpo;
    }

    public String getNumero() {
        return numero;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Cpf cpf = (Cpf) obj;
        return Objects.equals(numero, cpf.numero);
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