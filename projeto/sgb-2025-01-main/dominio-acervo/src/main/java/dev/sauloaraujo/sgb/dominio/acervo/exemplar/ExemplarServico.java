package dev.sauloaraujo.sgb.dominio.acervo.exemplar;

import static org.apache.commons.lang3.Validate.notNull;

public class ExemplarServico {
	private final ExemplarRepositorio exemplarRepositorio;

	public ExemplarServico(ExemplarRepositorio exemplarRepositorio) {
		notNull(exemplarRepositorio, "O repositório de exemplares não pode ser nulo");

		this.exemplarRepositorio = exemplarRepositorio;
	}

	public void salvar(Exemplar exemplar) {
		notNull(exemplar, "O exemplar não pode ser nulo");

		exemplarRepositorio.salvar(exemplar);
	}

	public Exemplar obter(ExemplarId id) {
		notNull(id, "O id do exemplar não pode ser nulo");

		return exemplarRepositorio.obter(id);
	}
}