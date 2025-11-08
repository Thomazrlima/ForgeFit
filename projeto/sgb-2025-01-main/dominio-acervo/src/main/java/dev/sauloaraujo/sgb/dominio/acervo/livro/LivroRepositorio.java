package dev.sauloaraujo.sgb.dominio.acervo.livro;

public interface LivroRepositorio {
	void salvar(Livro livro);

	Livro obter(Isbn isbn);
}