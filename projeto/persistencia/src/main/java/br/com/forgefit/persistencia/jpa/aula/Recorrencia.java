package br.com.forgefit.persistencia.jpa.aula;

import java.util.Date;
import java.util.List;

import br.com.forgefit.persistencia.jpa.enums.DiaDaSemana;
import br.com.forgefit.persistencia.jpa.enums.TipoRecorrencia;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Embeddable
public class Recorrencia {
	
	@Enumerated(EnumType.STRING)
	@Column(name = "AUL_RECOR_TIPO")
	private TipoRecorrencia tipo;
	
	@ElementCollection
	@CollectionTable(name = "RCD_RECORRENCIA_DIAS", joinColumns = @JoinColumn(name = "AUL_ID"))
	@Column(name = "RCD_DIA_SEMANA")
	@Enumerated(EnumType.STRING)
	private List<DiaDaSemana> diasDaSemana;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "AUL_RECOR_DATA_FIM")
	private Date dataFimRecorrencia;

	public TipoRecorrencia getTipo() {
		return tipo;
	}

	public void setTipo(TipoRecorrencia tipo) {
		this.tipo = tipo;
	}

	public List<DiaDaSemana> getDiasDaSemana() {
		return diasDaSemana;
	}

	public void setDiasDaSemana(List<DiaDaSemana> diasDaSemana) {
		this.diasDaSemana = diasDaSemana;
	}

	public Date getDataFimRecorrencia() {
		return dataFimRecorrencia;
	}

	public void setDataFimRecorrencia(Date dataFimRecorrencia) {
		this.dataFimRecorrencia = dataFimRecorrencia;
	}
}
