package dev.sauloaraujo.sgb.dominio.acervo.livro;

public abstract class Isbn {
	private final String codigo;

	Isbn(String codigo) {
		var passou = testarCodigo(codigo);
		if (!passou) {
			throw new IllegalArgumentException("Código inválido");
		}

		this.codigo = codigo;
	}

	abstract boolean testarCodigo(String codigo);

	public String getCodigo() {
		return codigo;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj != null && obj instanceof Isbn) {
			var isbn = (Isbn) obj;
			return codigo.equals(isbn.codigo);
		}
		return false;
	}

	@Override
	public int hashCode() {
		return codigo.hashCode();
	}

	@Override
	public String toString() {
		return codigo;
	}
}