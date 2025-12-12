package dev.sauloaraujo.sgb.dominio.administracao.socio;

import org.apache.commons.validator.routines.EmailValidator;

public class Email {
	private final String endereco;

	public Email(String endereco) {
		boolean passou = EmailValidator.getInstance().isValid(endereco);
		if (!passou) {
			throw new IllegalArgumentException("Endereço inválido");
		}

		this.endereco = endereco;
	}

	public String getEndereco() {
		return endereco;
	}

	@Override
	public String toString() {
		return endereco;
	}
}