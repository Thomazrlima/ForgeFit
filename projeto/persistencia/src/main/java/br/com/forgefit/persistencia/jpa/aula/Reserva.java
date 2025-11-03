package br.com.forgefit.persistencia.jpa.aula;

import java.util.Date;

import br.com.forgefit.persistencia.jpa.enums.StatusReserva;
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
@Table(name = "RES_RESERVA")
public class Reserva {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "RES_ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "AUL_ID", nullable = false)
	private Aula aula;
	
	@Column(name = "RES_ALUNO_MATRICULA", nullable = false, length = 50)
	private String alunoMatricula;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "RES_DATA_RESERVA", nullable = false)
	private Date dataReserva;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "RES_STATUS", nullable = false)
	private StatusReserva status = StatusReserva.CONFIRMADA;

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

	public String getAlunoMatricula() {
		return alunoMatricula;
	}

	public void setAlunoMatricula(String alunoMatricula) {
		this.alunoMatricula = alunoMatricula;
	}

	public Date getDataReserva() {
		return dataReserva;
	}

	public void setDataReserva(Date dataReserva) {
		this.dataReserva = dataReserva;
	}

	public StatusReserva getStatus() {
		return status;
	}

	public void setStatus(StatusReserva status) {
		this.status = status;
	}
}
