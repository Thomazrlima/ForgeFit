package dev.sauloaraujo.sgb.aplicacao.analise;

import dev.sauloaraujo.dominio.analise.emprestimo.EmprestimoRegistro;
import dev.sauloaraujo.sgb.dominio.acervo.exemplar.Emprestimo;
import dev.sauloaraujo.sgb.dominio.acervo.exemplar.ExemplarId;

public interface EmprestimoRegistroRepositorioAplicacao {
	EmprestimoRegistro buscar(ExemplarId exemplar, Emprestimo emprestimo);
}