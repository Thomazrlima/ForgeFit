package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;

import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Cpf;

public class ReservaService {
    private final AulaRepositorio aulaRepositorio;
    private final AlunoRepositorio alunoRepositorio;
    private final ReembolsoService reembolsoService;

    public ReservaService(AulaRepositorio aulaRepositorio, AlunoRepositorio alunoRepositorio,
            ReembolsoService reembolsoService) {
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        notNull(alunoRepositorio, "O repositório de alunos não pode ser nulo");
        notNull(reembolsoService, "O serviço de reembolso não pode ser nulo");
        this.aulaRepositorio = aulaRepositorio;
        this.alunoRepositorio = alunoRepositorio;
        this.reembolsoService = reembolsoService;
    }

    public Reserva reservarVaga(Cpf alunoId, AulaId aulaId) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(aulaId, "O id da aula não pode ser nulo");

        var aula = aulaRepositorio.obterPorId(aulaId)
                .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));

        // Se a aula tem vaga disponível, cria reserva confirmada
        if (aula.temVagaDisponivel()) {
            var reserva = new Reserva(alunoId, LocalDateTime.now());
            aula.adicionarReserva(reserva);
            aulaRepositorio.salvar(aula);
            return reserva;
        } else {
            // Se não tem vaga, adiciona na lista de espera
            // Não retorna Reserva, apenas adiciona na lista
            entrarNaListaDeEspera(alunoId, aulaId);
            return null; // Indica que foi para lista de espera
        }
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
        cancelarReserva(alunoId, aulaId, LocalDateTime.now());
    }

    public void cancelarReserva(Cpf alunoId, AulaId aulaId, LocalDateTime momentoCancelamento) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(aulaId, "O id da aula não pode ser nulo");
        notNull(momentoCancelamento, "O momento do cancelamento não pode ser nulo");

        var aula = aulaRepositorio.obterPorId(aulaId)
                .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));

        // Calcula reembolso antes de cancelar
        double credito = reembolsoService.calcularCreditoDeReembolso(aulaId, aula, momentoCancelamento);

        // Se há direito a reembolso, adiciona crédito ao aluno
        if (credito > 0) {
            var aluno = alunoRepositorio.obterPorCpf(alunoId)
                    .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));
            aluno.adicionarCreditos(credito);
            alunoRepositorio.salvar(aluno);
        }

        // Cancela a reserva
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
