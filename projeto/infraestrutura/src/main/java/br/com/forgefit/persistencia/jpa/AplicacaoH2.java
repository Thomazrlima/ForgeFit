package br.com.forgefit.persistencia.jpa;

import static org.springframework.boot.SpringApplication.run;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class AplicacaoH2 {
	public static void main(String[] args) {
		System.setProperty("spring.profiles.active", "h2");
		try (ConfigurableApplicationContext contexto = run(AplicacaoH2.class, args)) {
			System.out.println("\n===========================================");
			System.out.println("  ForgeFit rodando com H2 Database");
			System.out.println("  Console H2: http://localhost:8080/h2-console");
			System.out.println("  JDBC URL: jdbc:h2:mem:forgefit");
			System.out.println("  Username: sa");
			System.out.println("  Password: (vazio)");
			System.out.println("===========================================\n");
		}
	}
}
