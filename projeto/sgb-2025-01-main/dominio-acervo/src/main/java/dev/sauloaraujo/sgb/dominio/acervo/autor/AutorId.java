package dev.sauloaraujo.sgb.dominio.acervo.autor;

import static org.apache.commons.lang3.Validate.isTrue;

import java.util.Objects;

public class AutorId {
	private final int id;

	public AutorId(int id) {
		isTrue(id > 0, "O id deve ser positivo");

		this.id = id;
	}

	public int getId() {
		return id;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj != null && obj instanceof AutorId) {
			var autorId = (AutorId) obj;
			return id == autorId.id;
		}
		return false;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public String toString() {
		return Integer.toString(id);
	}
}