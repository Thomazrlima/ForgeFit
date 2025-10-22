package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.isTrue;
import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.time.LocalDate;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.Modalidade;
import br.com.forgefit.dominio.aula.enums.StatusAula;
import br.com.forgefit.dominio.aula.enums.StatusReserva;
import br.com.forgefit.dominio.professor.ProfessorId;

/**
 * Agregado Aula conforme definido no ForgeFit.cml
 */
public class Aula {
    private final AulaId id;
    private final ProfessorId professorId;
    private final Modalidade modalidade;
    private final Espaco espaco;
    private final int capacidade;
    private LocalDateTime inicio;
    private LocalDateTime fim;
    private Recorrencia recorrencia; // Pode ser nulo para aulas únicas

    private StatusAula status;
    private final List<Reserva> reservas;
    private final List<PosicaoListaDeEspera> listaDeEspera;
    private final List<OcorrenciaExcecao> excecoes;

    // Construtor unificado - a lógica de recorrência será tratada no AulaService
    public Aula(AulaId id, ProfessorId professorId, Modalidade modalidade, Espaco espaco, int capacidade,
            LocalDateTime inicio, LocalDateTime fim, Recorrencia recorrencia) {
        notNull(id, "O ID da aula não pode ser nulo");
        notNull(professorId, "O ID do professor não pode ser nulo");
        notNull(modalidade, "A modalidade não pode ser nula");
        notNull(espaco, "O espaço não pode ser nulo");
        isTrue(capacidade > 0, "A capacidade deve ser maior que zero");
        notNull(inicio, "A data/hora de início não pode ser nula");
        notNull(fim, "A data/hora de fim não pode ser nula");
        isTrue(fim.isAfter(inicio), "A hora de fim deve ser após a hora de início");

        this.id = id;
        this.professorId = professorId;
        this.modalidade = modalidade;
        this.espaco = espaco;
        this.capacidade = capacidade;
        this.inicio = inicio;
        this.fim = fim;
        this.recorrencia = recorrencia;
        this.status = StatusAula.ATIVA;
        this.reservas = new ArrayList<>();
        this.listaDeEspera = new ArrayList<>();
        this.excecoes = new ArrayList<>();
    }

    // Construtor para Aula Única (sem recorrência)
    public Aula(AulaId id, ProfessorId professorId, Modalidade modalidade, Espaco espaco, int capacidade,
            LocalDateTime inicio, LocalDateTime fim) {
        this(id, professorId, modalidade, espaco, capacidade, inicio, fim, null);
    }

    // Getters
    public AulaId getId() {
        return id;
    }

    public ProfessorId getProfessorId() {
        return professorId;
    }

    public Modalidade getModalidade() {
        return modalidade;
    }

    public Espaco getEspaco() {
        return espaco;
    }

    public int getCapacidade() {
        return capacidade;
    }

    public LocalDateTime getInicio() {
        return inicio;
    }

    public LocalDateTime getFim() {
        return fim;
    }

    public StatusAula getStatus() {
        return status;
    }

    public List<Reserva> getReservas() {
        return new ArrayList<>(reservas);
    }

    public List<PosicaoListaDeEspera> getListaDeEspera() {
        return new ArrayList<>(listaDeEspera);
    }

    public Optional<Recorrencia> getRecorrencia() {
        return Optional.ofNullable(recorrencia);
    }

    public List<OcorrenciaExcecao> getExcecoes() {
        return new ArrayList<>(excecoes);
    }

    // Métodos de negócio
    public int getVagasDisponiveis() {
        long reservasConfirmadas = reservas.stream()
                .filter(r -> r.getStatus() == StatusReserva.CONFIRMADA)
                .count();
        return (int) (capacidade - reservasConfirmadas);
    }

    public boolean temVagaDisponivel() {
        return getVagasDisponiveis() > 0;
    }

    public void alterarHorarioPrincipal(LocalDateTime novoInicio, LocalDateTime novoFim) {
        notNull(novoInicio, "A data/hora de início não pode ser nula");
        notNull(novoFim, "A data/hora de fim não pode ser nula");
        isTrue(novoFim.isAfter(novoInicio), "A hora de fim deve ser após a hora de início");
        this.inicio = novoInicio;
        this.fim = novoFim;
    }

    public boolean isRecorrente() {
        return this.recorrencia != null;
    }

    public void adicionarExcecao(OcorrenciaExcecao excecao) {
        notNull(excecao, "A exceção não pode ser nula");
        this.excecoes.add(excecao);
    }

    public Optional<OcorrenciaExcecao> getExcecao(LocalDate data) {
        return excecoes.stream()
                .filter(e -> e.getDataOriginalDaOcorrencia().equals(data))
                .findFirst();
    }

    public void cancelar() {
        this.status = StatusAula.CANCELADA;

        // Cancela todas as reservas confirmadas
        for (Reserva reserva : reservas) {
            if (reserva.getStatus() == StatusReserva.CONFIRMADA) {
                reserva.cancelarPelaAcademia();
            }
        }

        // Limpa a lista de espera
        listaDeEspera.clear();
    }

    public void adicionarReserva(Reserva reserva) {
        notNull(reserva, "A reserva não pode ser nula");

        if (status == StatusAula.CANCELADA) {
            throw new IllegalStateException("Não é possível reservar vaga em aula cancelada");
        }

        if (alunoJaPossuiReserva(reserva.getAlunoMatricula())) {
            throw new IllegalStateException("O aluno já possui uma reserva para esta aula");
        }

        if (alunoJaEstaEmEspera(reserva.getAlunoMatricula())) {
            throw new IllegalStateException("O aluno já está na lista de espera desta aula");
        }

        if (!temVagaDisponivel()) {
            throw new IllegalStateException("Não há vagas disponíveis para esta aula");
        }

        reservas.add(reserva);
    }

    public void adicionarNaListaDeEspera(PosicaoListaDeEspera posicao) {
        notNull(posicao, "A posição não pode ser nula");

        if (alunoJaPossuiReserva(posicao.getAlunoMatricula())) {
            throw new IllegalStateException("O aluno já possui reserva confirmada para esta aula");
        }

        if (alunoJaEstaEmEspera(posicao.getAlunoMatricula())) {
            throw new IllegalStateException("O aluno já está na lista de espera");
        }

        listaDeEspera.add(posicao);
    }

    public boolean alunoJaPossuiReserva(Matricula matricula) {
        return reservas.stream()
                .anyMatch(r -> r.getAlunoMatricula().equals(matricula) && r.getStatus() == StatusReserva.CONFIRMADA);
    }

    public boolean alunoJaEstaEmEspera(Matricula matricula) {
        return listaDeEspera.stream()
                .anyMatch(p -> p.getAlunoMatricula().equals(matricula));
    }

    public void cancelarReserva(Matricula matricula) {
        notNull(matricula, "A matrícula não pode ser nula");

        Optional<Reserva> reservaOpt = reservas.stream()
                .filter(r -> r.getAlunoMatricula().equals(matricula) && r.getStatus() == StatusReserva.CONFIRMADA)
                .findFirst();

        if (reservaOpt.isEmpty()) {
            throw new IllegalArgumentException("Reserva não encontrada para este aluno");
        }

        reservaOpt.get().cancelarPeloAluno();
    }

    public Optional<Reserva> obterReserva(Matricula matricula) {
        return reservas.stream()
                .filter(r -> r.getAlunoMatricula().equals(matricula))
                .findFirst();
    }

    public Optional<PosicaoListaDeEspera> removerPrimeiroDaListaDeEspera() {
        if (listaDeEspera.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(listaDeEspera.remove(0));
    }

    public int getPosicaoNaListaDeEspera(Matricula matricula) {
        for (int i = 0; i < listaDeEspera.size(); i++) {
            if (listaDeEspera.get(i).getAlunoMatricula().equals(matricula)) {
                return i + 1; // Posição começa em 1
            }
        }
        return -1;
    }
}
