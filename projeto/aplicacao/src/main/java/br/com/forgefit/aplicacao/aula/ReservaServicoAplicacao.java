package br.com.forgefit.aplicacao.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.util.List;

import br.com.forgefit.dominio.aluno.Matricula;

public class ReservaServicoAplicacao {
    private final ReservaRepositorioAplicacao repositorio;

    public ReservaServicoAplicacao(ReservaRepositorioAplicacao repositorio) {
        notNull(repositorio, "O repositório de reservas não pode ser nulo");
        this.repositorio = repositorio;
    }

    public List<CancelamentoResumo> pesquisarReservasParaCancelamento(Matricula matricula) {
        notNull(matricula, "A matrícula não pode ser nula");
        return repositorio.buscarReservasConfirmadas(matricula);
    }
}
