package dev.sauloaraujo.sgb.dominio.acervo.autor;

public interface AutorRepositorio {
	void salvar(Autor autor);

	Autor obter(AutorId id);
}