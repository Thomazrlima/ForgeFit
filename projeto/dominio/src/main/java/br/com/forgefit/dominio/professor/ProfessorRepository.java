package br.com.forgefit.dominio.professor;

public interface ProfessorRepository {
    void salvar(Professor professor);

    Professor obter(ProfessorId id);
}
