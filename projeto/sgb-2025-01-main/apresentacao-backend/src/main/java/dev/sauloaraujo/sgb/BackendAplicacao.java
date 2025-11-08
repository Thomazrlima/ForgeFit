package dev.sauloaraujo.sgb;

import static org.springframework.boot.SpringApplication.run;

import java.io.IOException;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import dev.sauloaraujo.dominio.analise.emprestimo.EmprestimoRegistroRepositorio;
import dev.sauloaraujo.sgb.aplicacao.acervo.autor.AutorRepositorioAplicacao;
import dev.sauloaraujo.sgb.aplicacao.acervo.autor.AutorServicoAplicacao;
import dev.sauloaraujo.sgb.aplicacao.acervo.exemplar.ExemplarRepositorioAplicacao;
import dev.sauloaraujo.sgb.aplicacao.acervo.exemplar.ExemplarServicoAplicacao;
import dev.sauloaraujo.sgb.aplicacao.acervo.livro.LivroRepositorioAplicacao;
import dev.sauloaraujo.sgb.aplicacao.acervo.livro.LivroServicoAplicacao;
import dev.sauloaraujo.sgb.aplicacao.analise.EmprestimoRegistroRepositorioAplicacao;
import dev.sauloaraujo.sgb.aplicacao.analise.EmprestimoRegistroServicoAplicacao;
import dev.sauloaraujo.sgb.dominio.acervo.autor.AutorRepositorio;
import dev.sauloaraujo.sgb.dominio.acervo.autor.AutorServico;
import dev.sauloaraujo.sgb.dominio.acervo.exemplar.EmprestimoServico;
import dev.sauloaraujo.sgb.dominio.acervo.exemplar.ExemplarRepositorio;
import dev.sauloaraujo.sgb.dominio.acervo.exemplar.ExemplarServico;
import dev.sauloaraujo.sgb.dominio.acervo.livro.LivroRepositorio;
import dev.sauloaraujo.sgb.dominio.acervo.livro.LivroServico;
import dev.sauloaraujo.sgb.dominio.evento.EventoBarramento;

@SpringBootApplication
public class BackendAplicacao {
	@Bean
	public AutorServico autorServico(AutorRepositorio repositorio) {
		return new AutorServico(repositorio);
	}

	@Bean
	public AutorServicoAplicacao autorServicoAplicacao(AutorRepositorioAplicacao repositorio) {
		return new AutorServicoAplicacao(repositorio);
	}

	@Bean
	public ExemplarServico exemplarServico(ExemplarRepositorio repositorio) {
		return new ExemplarServico(repositorio);
	}

	@Bean
	public ExemplarServicoAplicacao exemplarServicoAplicacao(ExemplarRepositorioAplicacao repositorio) {
		return new ExemplarServicoAplicacao(repositorio);
	}

	@Bean
	public EmprestimoServico emprestimoServico(ExemplarRepositorio exemplarRepositorio, EventoBarramento barramento) {
		return new EmprestimoServico(exemplarRepositorio, barramento);
	}

	@Bean
	public LivroServico livroServico(LivroRepositorio repositorio) {
		return new LivroServico(repositorio);
	}

	@Bean
	public LivroServicoAplicacao livroServicoAplicacao(LivroRepositorioAplicacao repositorio) {
		return new LivroServicoAplicacao(repositorio);
	}

	@Bean
	public EmprestimoRegistroServicoAplicacao emprestimoRegistroServicoAplicacao(
			EmprestimoRegistroRepositorio repositorio, EmprestimoRegistroRepositorioAplicacao repositorioAplicacao,
			EventoBarramento servico) {
		return new EmprestimoRegistroServicoAplicacao(repositorio, repositorioAplicacao, servico);
	}

	public static void main(String[] args) throws IOException {
		run(BackendAplicacao.class, args);
	}
}