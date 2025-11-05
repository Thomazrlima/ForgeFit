package br.com.forgefit.persistencia.jpa.adapters;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.forgefit.dominio.aula.Aula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.AulaRepositorio;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.professor.ProfessorId;
import br.com.forgefit.persistencia.jpa.aula.AulaRepositorioJpa;

@Component("aulaRepositorio")
public class AulaRepositorioAdapter implements AulaRepositorio {
	
	@Autowired
	private AulaRepositorioJpa repositorioJpa;

	@Override
	public void salvar(Aula aula) {
		throw new UnsupportedOperationException("Método não implementado");
	}

	@Override
	public Optional<Aula> obterPorId(AulaId aulaId) {
		return Optional.empty();
	}

	@Override
	public List<Aula> listarTodas() {
		return List.of();
	}

	@Override
	public List<Aula> buscarPorEspacoEPeriodo(Espaco espaco, LocalDateTime inicio, LocalDateTime fim) {
		return List.of();
	}

	@Override
	public List<Aula> buscarPorProfessorEPeriodo(ProfessorId professorId, LocalDateTime inicio, LocalDateTime fim) {
		return List.of();
	}
}
