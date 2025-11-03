package br.com.forgefit.persistencia.jpa.aluno;

import java.util.Date;

import br.com.forgefit.persistencia.jpa.enums.StatusFrequencia;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "FRQ_FREQUENCIA")
public class Frequencia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "FRQ_ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "ALU_MATRICULA", nullable = false)
	private Aluno aluno;
	
	@Column(name = "FRQ_AULA_ID", nullable = false)
	private Integer aulaId;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "FRQ_DATA_OCORRENCIA", nullable = false)
	private Date dataOcorrencia;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "FRQ_STATUS", nullable = false)
	private StatusFrequencia status;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Aluno getAluno() {
		return aluno;
	}

	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}

	public Integer getAulaId() {
		return aulaId;
	}

	public void setAulaId(Integer aulaId) {
		this.aulaId = aulaId;
	}

	public Date getDataOcorrencia() {
		return dataOcorrencia;
	}

	public void setDataOcorrencia(Date dataOcorrencia) {
		this.dataOcorrencia = dataOcorrencia;
	}

	public StatusFrequencia getStatus() {
		return status;
	}

	public void setStatus(StatusFrequencia status) {
		this.status = status;
	}
}
