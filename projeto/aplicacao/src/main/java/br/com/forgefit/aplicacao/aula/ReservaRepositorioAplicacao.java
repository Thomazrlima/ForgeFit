package br.com.forgefit.aplicacao.aula;

import java.util.List;

import br.com.forgefit.dominio.aluno.Matricula;

public interface ReservaRepositorioAplicacao {
    List<CancelamentoResumo> buscarReservasConfirmadas(Matricula matricula);
}
