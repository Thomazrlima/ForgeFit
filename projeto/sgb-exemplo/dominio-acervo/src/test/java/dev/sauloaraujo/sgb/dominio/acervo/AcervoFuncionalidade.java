package dev.sauloaraujo.sgb.dominio.acervo;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.ArrayList;
import java.util.List;

import dev.sauloaraujo.sgb.dominio.acervo.autor.AutorServico;
import dev.sauloaraujo.sgb.dominio.acervo.exemplar.EmprestimoServico;
import dev.sauloaraujo.sgb.dominio.acervo.exemplar.ExemplarServico;
import dev.sauloaraujo.sgb.dominio.acervo.livro.IsbnFabrica;
import dev.sauloaraujo.sgb.dominio.acervo.livro.LivroServico;
import dev.sauloaraujo.sgb.dominio.evento.EventoBarramento;
import dev.sauloaraujo.sgb.dominio.evento.EventoObservador;
import dev.sauloaraujo.sgb.infraestrutura.persistencia.memoria.Repositorio;

public class AcervoFuncionalidade implements EventoBarramento {
	protected IsbnFabrica isbnFabrica;
	protected AutorServico autorServico;
	protected LivroServico livroServico;
	protected ExemplarServico exemplarServico;
	protected EmprestimoServico emprestimoServico;
	protected List<Object> eventos;

	public AcervoFuncionalidade() {
		isbnFabrica = new IsbnFabrica();

		var repositorio = new Repositorio();

		autorServico = new AutorServico(repositorio);
		livroServico = new LivroServico(repositorio);
		exemplarServico = new ExemplarServico(repositorio);
		emprestimoServico = new EmprestimoServico(repositorio, this);

		eventos = new ArrayList<>();
	}

	@Override
	public <E> void adicionar(EventoObservador<E> observador) {
		throw new UnsupportedOperationException();
	}

	@Override
	public void postar(Object evento) {
		notNull(evento, "O evento não pode ser nulo");

		eventos.add(evento);
	}
}