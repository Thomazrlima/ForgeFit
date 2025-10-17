package br.com.forgefit.dominio.aula;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

import br.com.forgefit.dominio.aluno.Cpf;
import static org.apache.commons.lang3.Validate.notNull;

public class Aula {

    private AulaId id;
    private final LocalDate data;
    private final LocalTime hora;
    
    // Reservas simuladas para testes
    private final Map<Cpf, Boolean> reservas = new HashMap<>();

    /*--------------------------------------------------*/
    /* Construtores */

    // Construtor principal para o domínio
    public Aula(AulaId id, LocalDate data, LocalTime hora) {
        this.id = notNull(id, "ID da aula não pode ser nulo.");
        this.data = notNull(data, "Data da aula não pode ser nula.");
        this.hora = notNull(hora, "Hora da aula não pode ser nula.");
    }

    // Construtor simplificado para testes em memória
    public Aula(AulaId id, LocalDate data) {
        this.id = notNull(id, "ID da aula não pode ser nulo.");
        this.data = notNull(data, "Data da aula não pode ser nula.");
        this.hora = LocalTime.of(0, 0); // Hora fictícia para testes
    }

    /*--------------------------------------------------*/
    /* Getters */

    public AulaId getId() { return id; }
    public LocalDate getData() { return data; }
    public LocalTime getHora() { return hora; }
    public void setId(AulaId id) {
        this.id = notNull(id, "ID da aula não pode ser nulo.");
    }

    /*--------------------------------------------------*/
    /* ReservaService - cancelamento real de reserva */

    public ReservaCanceladaEvento cancelarReserva(Cpf alunoId, LocalDate dataCancelamento) {
        notNull(alunoId, "Aluno não pode ser nulo.");
        notNull(dataCancelamento, "Data do cancelamento não pode ser nula.");

        if (!reservas.containsKey(alunoId)) {
            throw new IllegalArgumentException("Aluno não possui reserva nesta aula.");
        }

        if (reservas.get(alunoId)) {
            throw new IllegalArgumentException("Reserva já cancelada.");
        }

        reservas.put(alunoId, true); // Marca como cancelada

        TipoReembolso reembolso = TipoReembolso.PARCIAL_OU_NENHUM;
        if (dataCancelamento.isBefore(this.data.minusDays(1))) {
            reembolso = TipoReembolso.INTEGRAL;
        }

        return new ReservaCanceladaEvento(alunoId, this.id, reembolso);
    }

    /*--------------------------------------------------*/
    /* Métodos de simulação para testes (BDD / Repositório em memória) */

    public boolean possuiReservaAtiva(Cpf alunoId) {
        return reservas.containsKey(alunoId) && !reservas.get(alunoId);
    }

    public void simularReservaParaTeste(Cpf alunoId, boolean cancelada) {
        reservas.put(alunoId, cancelada);
    }

    /*--------------------------------------------------*/
    /* Enum e classe para eventos de reserva */

    public enum TipoReembolso {
        INTEGRAL,
        PARCIAL_OU_NENHUM
    }

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
