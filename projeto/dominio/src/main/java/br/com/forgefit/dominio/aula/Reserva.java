package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.enums.StatusReserva;

public class Reserva {
    private final Matricula alunoMatricula;
    private final LocalDateTime dataDaReserva;
    private StatusReserva status;

    public Reserva(Matricula alunoMatricula, LocalDateTime dataDaReserva) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(dataDaReserva, "A data da reserva não pode ser nula");
        
        this.alunoMatricula = alunoMatricula;
        this.dataDaReserva = dataDaReserva;
        this.status = StatusReserva.CONFIRMADA;
    }

    public Matricula getAlunoMatricula() {
        return alunoMatricula;
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
