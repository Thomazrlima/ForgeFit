package dev.sauloaraujo.sgb;

import java.io.IOException;

import org.springframework.boot.SpringApplication;

public class BackendDesenvolvimentoAplicacao {
	public static void main(String[] args) throws IOException {
		var aplicacao = new SpringApplication(BackendAplicacao.class);
		aplicacao.setAdditionalProfiles("desenvolvimento");
		aplicacao.run(args);
	}
}