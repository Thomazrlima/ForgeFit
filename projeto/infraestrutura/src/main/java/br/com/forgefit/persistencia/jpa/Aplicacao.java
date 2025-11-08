package br.com.forgefit.persistencia.jpa;

import static org.springframework.boot.SpringApplication.run;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class Aplicacao {
	public static void main(String[] args) {
		try (ConfigurableApplicationContext contexto = run(Aplicacao.class, args)) {

		}
	}
}
