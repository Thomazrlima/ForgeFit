package br.com.forgefit.persistencia.jpa.aluno;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepositorioJpa extends JpaRepository<Aluno, String> {
	Aluno findByCpf(String cpf);
}
