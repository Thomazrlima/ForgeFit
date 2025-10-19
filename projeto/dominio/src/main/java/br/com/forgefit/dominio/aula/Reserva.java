package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aula.enums.StatusReserva;

public class Reserva {
    private final Cpf alunoId;
    private final LocalDateTime dataDaReserva;
    private StatusReserva status;

    public Reserva(Cpf alunoId, LocalDateTime dataDaReserva) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(dataDaReserva, "A data da reserva não pode ser nula");
        
        this.alunoId = alunoId;
        this.dataDaReserva = dataDaReserva;
        this.status = StatusReserva.CONFIRMADA;
    }

    public Cpf getAlunoId() {
        return alunoId;
    }

    public LocalDateTime getDataDaReserva() {
        return dataDaReserva;
    }

    public StatusReserva getStatus() {
        return status;
    }

    public void cancelarPeloAluno() {
        this.status = StatusReserva.CANCELADA_PELO_ALUNO;
    }

    public void cancelarPelaAcademia() {
        this.status = StatusReserva.CANCELADA_PELA_ACADEMIA;
    }
}
