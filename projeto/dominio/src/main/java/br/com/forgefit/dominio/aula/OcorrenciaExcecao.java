package br.com.forgefit.dominio.aula;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import static org.apache.commons.lang3.Validate.notNull;

public class OcorrenciaExcecao {
    private final OcorrenciaExcecaoId id;
    private final LocalDate dataOriginalDaOcorrencia;
    private boolean cancelada;
    private LocalDateTime novoInicio;
    private LocalDateTime novoFim;

    public OcorrenciaExcecao(OcorrenciaExcecaoId id, LocalDate dataOriginalDaOcorrencia) {
        notNull(id, "O id não pode ser nulo");
        notNull(dataOriginalDaOcorrencia, "A data original da ocorrência não pode ser nula");
        this.id = id;
        this.dataOriginalDaOcorrencia = dataOriginalDaOcorrencia;
        this.cancelada = false;
    }

    public void cancelar() {
        this.cancelada = true;
        this.novoInicio = null;
        this.novoFim = null;
    }

    public void reagendar(LocalDateTime novoInicio, LocalDateTime novoFim) {
        notNull(novoInicio, "A nova data de início não pode ser nula");
        notNull(novoFim, "A nova data de fim não pode ser nula");
        this.cancelada = false;
        this.novoInicio = novoInicio;
        this.novoFim = novoFim;
    }
    
    public OcorrenciaExcecaoId getId() {
        return id;
    }

    public LocalDate getDataOriginalDaOcorrencia() {
        return dataOriginalDaOcorrencia;
    }

    public boolean isCancelada() {
        return cancelada;
    }

    public LocalDateTime getNovoInicio() {
        return novoInicio;
    }

    public LocalDateTime getNovoFim() {
        return novoFim;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OcorrenciaExcecao that = (OcorrenciaExcecao) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
