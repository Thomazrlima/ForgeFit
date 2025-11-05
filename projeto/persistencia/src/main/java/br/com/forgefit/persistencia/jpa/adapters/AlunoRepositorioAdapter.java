package br.com.forgefit.persistencia.jpa.adapters;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.persistencia.jpa.aluno.AlunoRepositorioJpa;

@Component("alunoRepositorio")
public class AlunoRepositorioAdapter implements br.com.forgefit.dominio.aluno.AlunoRepositorio {
	
	@Autowired
	private AlunoRepositorioJpa repositorioJpa;

	@Override
	public void salvar(br.com.forgefit.dominio.aluno.Aluno aluno) {
		// Por enquanto, apenas stub - implementação completa requer mapper
		throw new UnsupportedOperationException("Método salvar não implementado");
	}

	@Override
	public Optional<br.com.forgefit.dominio.aluno.Aluno> obterPorMatricula(Matricula matricula) {
		// Por enquanto, apenas stub - implementação completa requer mapper
		return Optional.empty();
	}

	@Override
	public Optional<br.com.forgefit.dominio.aluno.Aluno> obterAlunoPorCpf(Cpf cpf) {
		// Por enquanto, apenas stub - implementação completa requer mapper
		return Optional.empty();
	}
}
