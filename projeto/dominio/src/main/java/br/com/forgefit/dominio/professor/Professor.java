package br.com.forgefit.dominio.professor;

import br.com.forgefit.dominio.aluno.Cpf;

import java.time.LocalDate;
import java.util.Objects;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

public class Professor {
    private final ProfessorId id;
    private final Cpf cpf;
    private String nome;
    private LocalDate dataNascimento;

    public Professor(ProfessorId id, Cpf cpf, String nome, LocalDate dataNascimento) {
        notNull(id, "O id do professor não pode ser nulo");
        notNull(cpf, "O CPF do professor não pode ser nulo");
        notBlank(nome, "O nome do professor não pode ser em branco");
        notNull(dataNascimento, "A data de nascimento do professor não pode ser nula");

        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }
    
    public ProfessorId getId() {
        return id;
    }

    public Cpf getCpf() {
        return cpf;
    }

    public String getNome() {
        return nome;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Professor professor = (Professor) o;
        return id.equals(professor.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
