package br.com.forgefit.dominio.aula;

import java.time.LocalDate;
import java.time.LocalTime;

// Import da classe AulaId
import br.com.forgefit.dominio.aula.AulaId; 
// CORREÇÃO: Import da classe Cpf com C maiúsculo
import br.com.forgefit.dominio.aluno.Cpf;

import static org.apache.commons.lang3.Validate.notNull;

public class Aula {
    private final AulaId id;
    private final LocalDate data;
    private final LocalTime hora;
    
    public Aula(AulaId id, LocalDate data, LocalTime hora) {
        this.id = notNull(id, "ID da aula não pode ser nulo.");
        this.data = notNull(data, "Data da aula não pode ser nula.");
        this.hora = notNull(hora, "Hora da aula não pode ser nula.");
    }

    public AulaId getId() { return id; }
    public LocalDate getData() { return data; }
    public LocalTime getHora() { return hora; }

    // Implementação mínima para o ReservaService compilar
    public ReservaCanceladaEvento cancelarReserva(Cpf alunoId, LocalDate dataCancelamento) {
        // Implemente sua regra de negócio de cancelamento aqui.
        // Se a reserva já estiver cancelada, lance um erro:
        // throw new IllegalArgumentException("Reserva já cancelada.");

        TipoReembolso reembolso = TipoReembolso.PARCIAL_OU_NENHUM;
        // Exemplo: 24 horas antes do dia da aula
        if (dataCancelamento.isBefore(this.data.minusDays(1))) { 
             reembolso = TipoReembolso.INTEGRAL;
        }

        return new ReservaCanceladaEvento(alunoId, this.id, reembolso);
    }
    
    // Enum usado em ReservaService
    public enum TipoReembolso {
        INTEGRAL,
        PARCIAL_OU_NENHUM
    }

    // Classe estática usada em ReservaService
    public static class ReservaCanceladaEvento {
        private final Cpf alunoId;
        private final AulaId aulaId;
        private final TipoReembolso tipoReembolso;

        public ReservaCanceladaEvento(Cpf alunoId, AulaId aulaId, TipoReembolso tipoReembolso) {
            this.alunoId = alunoId;
            this.aulaId = aulaId;
            this.tipoReembolso = tipoReembolso;
        }

        public Cpf getAlunoId() { return alunoId; }
        public AulaId getAulaId() { return aulaId; }
        public TipoReembolso getTipoReembolso() { return tipoReembolso; }
    }
}