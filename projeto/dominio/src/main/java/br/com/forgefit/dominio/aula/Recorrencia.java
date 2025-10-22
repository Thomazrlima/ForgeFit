package br.com.forgefit.dominio.aula;

import br.com.forgefit.dominio.aula.enums.DiaDaSemana;
import br.com.forgefit.dominio.aula.enums.TipoRecorrencia;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import static org.apache.commons.lang3.Validate.notEmpty;
import static org.apache.commons.lang3.Validate.notNull;

public class Recorrencia {
    private final TipoRecorrencia tipo;
    private final List<DiaDaSemana> diasDaSemana;
    private final LocalDate dataFimRecorrencia;

    public Recorrencia(TipoRecorrencia tipo, List<DiaDaSemana> diasDaSemana, LocalDate dataFimRecorrencia) {
        notNull(tipo, "O tipo de recorrência não pode ser nulo");
        notEmpty(diasDaSemana, "A lista de dias da semana não pode ser vazia");
        notNull(dataFimRecorrencia, "A data de fim da recorrência não pode ser nula");

        this.tipo = tipo;
        this.diasDaSemana = diasDaSemana;
        this.dataFimRecorrencia = dataFimRecorrencia;
    }

    public TipoRecorrencia getTipo() {
        return tipo;
    }

    public List<DiaDaSemana> getDiasDaSemana() {
        return diasDaSemana;
    }

    public LocalDate getDataFimRecorrencia() {
        return dataFimRecorrencia;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Recorrencia that = (Recorrencia) o;
        return tipo == that.tipo && diasDaSemana.equals(that.diasDaSemana) && dataFimRecorrencia.equals(that.dataFimRecorrencia);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tipo, diasDaSemana, dataFimRecorrencia);
    }
}
