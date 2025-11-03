package br.com.forgefit.persistencia.jpa.avaliacao;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "AVA_AVALIACAO")
public class Avaliacao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "AVA_ID")
	private Integer id;
	
	@Column(name = "AVA_ALUNO_MATRICULA", nullable = false, length = 50)
	private String alunoMatricula;
	
	@Column(name = "AVA_PROFESSOR_ID", nullable = false)
	private Integer professorId;
	
	@Column(name = "AVA_AULA_ID", nullable = false)
	private Integer aulaId;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "AVA_DATA_OCORRENCIA_AULA", nullable = false)
	private Date dataOcorrenciaAula;
	
	@Embedded
	private Notas notas;
	
	@Column(name = "AVA_COMENTARIO", length = 1000)
	private String comentario;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "AVA_DATA_AVALIACAO", nullable = false)
	private Date dataAvaliacao;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAlunoMatricula() {
		return alunoMatricula;
	}

	public void setAlunoMatricula(String alunoMatricula) {
		this.alunoMatricula = alunoMatricula;
	}

	public Integer getProfessorId() {
		return professorId;
	}

	public void setProfessorId(Integer professorId) {
		this.professorId = professorId;
	}

	public Integer getAulaId() {
		return aulaId;
	}

	public void setAulaId(Integer aulaId) {
		this.aulaId = aulaId;
	}

	public Date getDataOcorrenciaAula() {
		return dataOcorrenciaAula;
	}

	public void setDataOcorrenciaAula(Date dataOcorrenciaAula) {
		this.dataOcorrenciaAula = dataOcorrenciaAula;
	}

	public Notas getNotas() {
		return notas;
	}

	public void setNotas(Notas notas) {
		this.notas = notas;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public Date getDataAvaliacao() {
		return dataAvaliacao;
	}

	public void setDataAvaliacao(Date dataAvaliacao) {
		this.dataAvaliacao = dataAvaliacao;
	}
}
