package dev.sauloaraujo.sgb.dominio.acervo.exemplar;

import static org.apache.commons.lang3.Validate.notNull;

import dev.sauloaraujo.sgb.dominio.administracao.socio.SocioId;

public class Emprestimo {
	private final Periodo periodo;
	private final SocioId tomador;

	public Emprestimo(Periodo periodo, SocioId tomador) {
		notNull(periodo, "O período não pode ser nulo");
		this.periodo = periodo;

		notNull(tomador, "O tomador não pode ser nulo");
		this.tomador = tomador;
	}

	public Periodo getPeriodo() {
		return periodo;
	}

	public SocioId getTomador() {
		return tomador;
	}
}