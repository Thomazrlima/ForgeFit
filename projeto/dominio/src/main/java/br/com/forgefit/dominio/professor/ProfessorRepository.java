package br.com.forgefit.dominio.professor;

import java.util.Optional;

public interface ProfessorRepository {
    void salvar(Professor professor);
    Optional<Professor> obterPorId(ProfessorId id);
}
