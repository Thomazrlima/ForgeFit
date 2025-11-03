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
@Table(name = "LES_LISTA_ESPERA")
public class PosicaoListaDeEspera {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "LES_ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "AUL_ID", nullable = false)
	private Aula aula;
	
	@Column(name = "LES_ALUNO_MATRICULA", nullable = false, length = 50)
	private String alunoMatricula;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "LES_TIMESTAMP_ENTRADA", nullable = false)
	private Date timestampEntrada;

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

	public Date getTimestampEntrada() {
		return timestampEntrada;
	}

	public void setTimestampEntrada(Date timestampEntrada) {
		this.timestampEntrada = timestampEntrada;
	}
}
