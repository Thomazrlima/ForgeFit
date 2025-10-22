package br.com.forgefit.dominio.aula;

import br.com.forgefit.dominio.aluno.AlunoService;
import br.com.forgefit.dominio.aluno.Matricula;

import java.time.LocalDateTime;

import static org.apache.commons.lang3.Validate.notNull;

public class ReservaService {
    private final AulaRepositorio aulaRepositorio;
    private final AlunoService alunoService;
    private final ReembolsoService reembolsoService;

    public ReservaService(AulaRepositorio aulaRepositorio, AlunoService alunoService,
            ReembolsoService reembolsoService) {
        notNull(aulaRepositorio, "O repositório de aulas não pode ser nulo");
        notNull(reembolsoService, "O serviço de reembolso não pode ser nulo");
        this.aulaRepositorio = aulaRepositorio;
        this.alunoService = alunoService;
        this.reembolsoService = reembolsoService;
    }

    public Reserva reservarVaga(Matricula alunoMatricula, AulaId aulaId) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(aulaId, "O id da aula não pode ser nulo");

        Aula aula = obterAula(aulaId);

        if (aula.temVagaDisponivel()) {
            Reserva reserva = new Reserva(alunoMatricula, LocalDateTime.now());
            aula.adicionarReserva(reserva);
            aulaRepositorio.salvar(aula);
            return reserva;
        }

        entrarNaListaDeEspera(alunoMatricula, aula);
        return null; 
    }

    private void entrarNaListaDeEspera(Matricula alunoMatricula, Aula aula) {
        PosicaoListaDeEspera posicao = new PosicaoListaDeEspera(alunoMatricula, LocalDateTime.now());
        aula.adicionarNaListaDeEspera(posicao);
        aulaRepositorio.salvar(aula);
    }

    public void cancelarReserva(Matricula alunoMatricula, AulaId aulaId) {
        cancelarReserva(alunoMatricula, aulaId, LocalDateTime.now());
    }

    public void cancelarReserva(Matricula alunoMatricula, AulaId aulaId, LocalDateTime momentoCancelamento) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(aulaId, "O id da aula não pode ser nulo");
        notNull(momentoCancelamento, "O momento do cancelamento não pode ser nulo");

        Aula aula = obterAula(aulaId);

        double credito = reembolsoService.calcularCreditoDeReembolso(aulaId, aula, momentoCancelamento);

        alunoService.adicionarCreditos(alunoMatricula, credito);

        aula.cancelarReserva(alunoMatricula);
        aulaRepositorio.salvar(aula);

        promoverPrimeiroDaListaSeHouver(aula);
    }

    private void promoverPrimeiroDaListaSeHouver(Aula aula) {
        aula.removerPrimeiroDaListaDeEspera().ifPresent(posicao -> {
            
            Matricula proximoAlunoMatricula = posicao.getAlunoMatricula();

            // Lógica para criar uma nova reserva para o aluno promovido
            Reserva novaReserva = new Reserva(proximoAlunoMatricula, LocalDateTime.now());
            aula.adicionarReserva(novaReserva);
            aulaRepositorio.salvar(aula);
        });
    }

    private Aula obterAula(AulaId aulaId) {
        return aulaRepositorio.obterPorId(aulaId)
            .orElseThrow(() -> new IllegalArgumentException("Aula não encontrada"));
    }
}
