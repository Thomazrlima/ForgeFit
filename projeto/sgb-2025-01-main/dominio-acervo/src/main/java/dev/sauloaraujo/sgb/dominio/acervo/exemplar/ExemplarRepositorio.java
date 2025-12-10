package dev.sauloaraujo.sgb.dominio.acervo.exemplar;

import java.util.List;

import dev.sauloaraujo.sgb.dominio.acervo.livro.Isbn;

public interface ExemplarRepositorio {
	void salvar(Exemplar exemplar);

	Exemplar obter(ExemplarId id);

	List<Exemplar> pesquisarDisponiveis(Isbn livro);
}