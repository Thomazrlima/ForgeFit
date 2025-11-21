package br.com.forgefit.dominio.professor;

import java.util.Optional;

public interface ProfessorRepository {
    void salvar(Professor professor);

    Professor obter(ProfessorId id);
    
    Optional<Professor> obterProfessorPorUserId(String userId);
}
