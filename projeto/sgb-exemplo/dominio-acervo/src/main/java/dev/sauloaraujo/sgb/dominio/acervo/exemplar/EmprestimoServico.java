package dev.sauloaraujo.sgb.dominio.acervo.exemplar;

import static org.apache.commons.lang3.Validate.notNull;

import dev.sauloaraujo.sgb.dominio.acervo.livro.Isbn;
import dev.sauloaraujo.sgb.dominio.administracao.socio.SocioId;
import dev.sauloaraujo.sgb.dominio.evento.EventoBarramento;

public class EmprestimoServico {
	private final ExemplarRepositorio exemplarRepositorio;
	private final EventoBarramento barramento;

	public EmprestimoServico(ExemplarRepositorio exemplarRepositorio, EventoBarramento barramento) {
		notNull(exemplarRepositorio, "O repositório de exemplares não pode ser nulo");
		notNull(barramento, "O barramento de eventos não pode ser nulo");

		this.exemplarRepositorio = exemplarRepositorio;
		this.barramento = barramento;
	}

	public void realizarEmprestimo(ExemplarId exemplarId, SocioId tomador) {
		notNull(exemplarRepositorio, "O id do exemplar não pode ser nulo");
		notNull(exemplarRepositorio, "O id do tomador não pode ser nulo");

		var exemplar = exemplarRepositorio.obter(exemplarId);
		var evento = exemplar.realizarEmprestimo(tomador);
		exemplarRepositorio.salvar(exemplar);
		barramento.postar(evento);
	}

	public void realizarEmprestimo(Isbn livroId, SocioId tomador) {
		notNull(livroId, "O id do livro não pode ser nulo");
		notNull(tomador, "O id do tomador não pode ser nulo");

		var disponiveis = exemplarRepositorio.pesquisarDisponiveis(livroId);
		if (disponiveis.isEmpty()) {
			throw new IllegalArgumentException("O livro não possui exemplares disponíveis para empréstimo");
		}

		var exemplar = disponiveis.get(0);
		var exemplarId = exemplar.getId();

		realizarEmprestimo(exemplarId, tomador);
	}

	public void devolver(ExemplarId exemplarId) {
		notNull(exemplarId, "O id do exemplar não pode ser nulo");

		var exemplar = exemplarRepositorio.obter(exemplarId);
		var evento = exemplar.devolver();
		exemplarRepositorio.salvar(exemplar);
		barramento.postar(evento);
	}
}