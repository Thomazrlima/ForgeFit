package dev.sauloaraujo.dominio.analise.emprestimo;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import dev.sauloaraujo.sgb.dominio.acervo.exemplar.Emprestimo;
import dev.sauloaraujo.sgb.dominio.acervo.exemplar.ExemplarId;

public class EmprestimoRegistro {
	private final EmprestimoRegistroId id;

	private ExemplarId exemplar;
	private Emprestimo emprestimo;
	private LocalDate devolucao;

	public EmprestimoRegistro(ExemplarId exemplar, Emprestimo emprestimo) {
		id = null;

		setExemplar(exemplar);
		setEmprestimo(emprestimo);
	}

	public EmprestimoRegistro(EmprestimoRegistroId id, ExemplarId exemplar, Emprestimo emprestimo,
			LocalDate devolucao) {
		notNull(id, "O id não pode ser nulo");
		this.id = id;

		setExemplar(exemplar);
		setEmprestimo(emprestimo);
		setDevolucao(devolucao);
	}

	public EmprestimoRegistroId getId() {
		return id;
	}

	private void setExemplar(ExemplarId exemplar) {
		notNull(exemplar, "O código do exemplar não pode ser nulo");

		this.exemplar = exemplar;
	}

	public ExemplarId getExemplar() {
		return exemplar;
	}

	private void setEmprestimo(Emprestimo emprestimo) {
		notNull(emprestimo, "O empréstimo não pode ser nulo");

		this.emprestimo = emprestimo;
	}

	public Emprestimo getEmprestimo() {
		return emprestimo;
	}

	public void setDevolucao(LocalDate devolucao) {
		this.devolucao = devolucao;
	}

	public LocalDate getDevolucao() {
		return devolucao;
	}
}