package dev.sauloaraujo.sgb.dominio.acervo.autor;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

public class Autor {
	private final AutorId id;

	private String nome;

	public Autor(String nome) {
		id = null;

		setNome(nome);
	}

	public Autor(AutorId id, String nome) {
		notNull(id, "O id não pode ser nulo");
		this.id = id;

		setNome(nome);
	}

	public AutorId getId() {
		return id;
	}

	public void setNome(String nome) {
		notNull(nome, "O nome não pode ser nulo");
		notBlank(nome, "O nome não pode estar em branco");

		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}

	@Override
	public String toString() {
		return nome;
	}
}