package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

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
    
    /**
     * Verifica se a reserva pode ser cancelada.
     */
    public boolean podeSerCancelada() {
        return status == StatusReserva.CONFIRMADA;
    }
    
    /**
     * Cancela a reserva pelo aluno com cálculo de reembolso.
     * PADRÃO DDD: Método rico que retorna evento de domínio.
     * 
     * @param dataAtual data do cancelamento
     * @param dataAula data da aula (necessária para calcular antecedência)
     * @return evento de cancelamento com tipo de reembolso
     * @throws IllegalStateException se reserva já foi cancelada
     */
    public ReservaCanceladaEvento cancelarPeloAluno(LocalDateTime dataAtual, LocalDateTime dataAula) {
        if (!podeSerCancelada()) {
            throw new IllegalStateException("Reserva já foi cancelada");
        }
        
        // Calcula dias de antecedência
        long diasAntecedencia = ChronoUnit.DAYS.between(dataAtual.toLocalDate(), dataAula.toLocalDate());
        
        // Determina tipo de reembolso baseado na regra de negócio
        TipoReembolso tipoReembolso = TipoReembolso.calcularPorAntecedencia(diasAntecedencia);
        
        this.status = StatusReserva.CANCELADA_PELO_ALUNO;
        
        return new ReservaCanceladaEvento(
            alunoMatricula,
            dataAula,
            dataAtual,
            tipoReembolso,
            diasAntecedencia
        );
    }

    /**
     * @deprecated Use cancelarPeloAluno(dataAtual, dataAula) que retorna evento
     */
    @Deprecated
    public void cancelarPeloAluno() {
        this.status = StatusReserva.CANCELADA_PELO_ALUNO;
    }

    public void cancelarPelaAcademia() {
        this.status = StatusReserva.CANCELADA_PELA_ACADEMIA;
    }
}
