package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;
import java.util.Optional;

import br.com.forgefit.dominio.aluno.Cpf;

public class ReservaService {
    private final AulaRepositorio aulaRepositorio;

    public ReservaService(AulaRepositorio aulaRepositorio) {
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        this.aulaRepositorio = aulaRepositorio;
    }

    public Reserva reservarVaga(Cpf alunoId, AulaId aulaId) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(aulaId, "O id da aula não pode ser nulo");

        var aula = aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));

        var reserva = new Reserva(alunoId, LocalDateTime.now());
        aula.adicionarReserva(reserva);
        aulaRepositorio.salvar(aula);

        return reserva;
    }

    public void entrarNaListaDeEspera(Cpf alunoId, AulaId aulaId) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(aulaId, "O id da aula não pode ser nulo");

        var aula = aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));

        var posicao = new PosicaoListaDeEspera(alunoId, LocalDateTime.now());
        aula.adicionarNaListaDeEspera(posicao);
        aulaRepositorio.salvar(aula);
    }

    public void cancelarReserva(Cpf alunoId, AulaId aulaId) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(aulaId, "O id da aula não pode ser nulo");

        var aula = aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));

        aula.cancelarReserva(alunoId);
        aulaRepositorio.salvar(aula);

        // Promove automaticamente o primeiro da lista de espera se houver
        promoverPrimeiroDaListaSeHouver(aula);
    }

    private void promoverPrimeiroDaListaSeHouver(Aula aula) {
        if (!aula.getListaDeEspera().isEmpty() && aula.temVagaDisponivel()) {
            var proximoOpt = aula.removerPrimeiroDaListaDeEspera();
            if (proximoOpt.isPresent()) {
                var reserva = new Reserva(proximoOpt.get().getAlunoId(), LocalDateTime.now());
                aula.adicionarReserva(reserva);
                aulaRepositorio.salvar(aula);
            }
        }
    }
}
