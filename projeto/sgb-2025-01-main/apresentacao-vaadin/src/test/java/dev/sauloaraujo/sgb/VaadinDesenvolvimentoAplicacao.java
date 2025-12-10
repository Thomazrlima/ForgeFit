package dev.sauloaraujo.sgb;

import java.io.IOException;

import org.springframework.boot.SpringApplication;

public class VaadinDesenvolvimentoAplicacao {
	public static void main(String[] args) throws IOException {
		var aplicacao = new SpringApplication(VaadinAplicacao.class);
		aplicacao.setAdditionalProfiles("desenvolvimento");
		aplicacao.run(args);
	}
}