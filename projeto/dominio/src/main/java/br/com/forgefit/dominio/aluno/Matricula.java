package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

import java.util.Objects;

public class Matricula {
    private final String valor;

    // Construtor vazio protegido para frameworks (JPA, ModelMapper)
    protected Matricula() {
        this.valor = null;
    }

    public Matricula(String valor) {
        notNull(valor, "A matrícula não pode ser nula");
        notBlank(valor, "A matrícula não pode estar em branco");
        this.valor = valor;
    }

    public String getValor() {
        return valor;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj != null && obj instanceof Matricula) {
            Matricula other = (Matricula) obj;
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

