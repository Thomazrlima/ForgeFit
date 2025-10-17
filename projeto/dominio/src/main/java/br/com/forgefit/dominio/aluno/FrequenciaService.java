package br.com.forgefit.dominio.aluno;

import java.time.LocalDate;
import br.com.forgefit.dominio.aluno.enums.StatusFrequencia;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.evento.EventoBarramento;
import br.com.forgefit.dominio.repositorio.RepositorioGeral;

public class FrequenciaService {
    private final RepositorioGeral repositorio;
    private final EventoBarramento barramento;

    public FrequenciaService(RepositorioGeral repositorio, EventoBarramento barramento) {
        this.repositorio = repositorio;
        this.barramento = barramento;
    }

    public static class AlunoBloqueadoEvento {
        private final Cpf cpf;
        public AlunoBloqueadoEvento(Cpf cpf) { this.cpf = cpf; }
        public Cpf getCpf() { return cpf; }
    }

    public void registrarFrequencia(Cpf alunoCpf, AulaId aulaId, LocalDate dataAula, StatusFrequencia status) {
        Aluno aluno = repositorio.obterPorCpf(alunoCpf)
                .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado."));

        aluno.adicionarRegistroFrequencia(new RegistroFrequencia(aulaId, dataAula, status));

        if (aluno.estaBloqueado()) {
            barramento.postar(new AlunoBloqueadoEvento(alunoCpf));
        }

        repositorio.salvar(aluno);
    }
}
