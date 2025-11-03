package br.com.forgefit.persistencia.jpa.aula;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "OEX_OCORRENCIA_EXCECAO")
public class OcorrenciaExcecao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "OEX_ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "AUL_ID", nullable = false)
	private Aula aula;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "OEX_DATA_ORIGINAL", nullable = false)
	private Date dataOriginalOcorrencia;
	
	@Column(name = "OEX_CANCELADA", nullable = false)
	private Boolean cancelada = false;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "OEX_NOVO_INICIO")
	private Date novoInicio;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "OEX_NOVO_FIM")
	private Date novoFim;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Aula getAula() {
		return aula;
	}

	public void setAula(Aula aula) {
		this.aula = aula;
	}

	public Date getDataOriginalOcorrencia() {
		return dataOriginalOcorrencia;
	}

	public void setDataOriginalOcorrencia(Date dataOriginalOcorrencia) {
		this.dataOriginalOcorrencia = dataOriginalOcorrencia;
	}

	public Boolean getCancelada() {
		return cancelada;
	}

	public void setCancelada(Boolean cancelada) {
		this.cancelada = cancelada;
	}

	public Date getNovoInicio() {
		return novoInicio;
	}

	public void setNovoInicio(Date novoInicio) {
		this.novoInicio = novoInicio;
	}

	public Date getNovoFim() {
		return novoFim;
	}

	public void setNovoFim(Date novoFim) {
		this.novoFim = novoFim;
	}
}
