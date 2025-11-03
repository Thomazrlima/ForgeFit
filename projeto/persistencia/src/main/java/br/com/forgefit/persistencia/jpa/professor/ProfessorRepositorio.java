package br.com.forgefit.persistencia.jpa.professor;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepositorio extends JpaRepository<Professor, Integer> {
	Professor findByCpf(String cpf);
}
