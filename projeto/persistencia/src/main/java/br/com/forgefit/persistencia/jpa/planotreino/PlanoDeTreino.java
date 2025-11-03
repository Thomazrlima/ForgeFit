package br.com.forgefit.persistencia.jpa.planotreino;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "PLT_PLANO_TREINO")
public class PlanoDeTreino {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PLT_ID")
	private Integer id;
	
	@Column(name = "PLT_PROFESSOR_ID", nullable = false)
	private Integer professorResponsavelId;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "PLT_DATA_CRIACAO", nullable = false)
	private Date dataCriacao;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "PLT_DATA_VALIDADE_SUGERIDA")
	private Date dataValidadeSugerida;
	
	@OneToMany(mappedBy = "planoDeTreino", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "TRD_POSICAO")
	private List<TreinoDiario> treinosDaSemana = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getProfessorResponsavelId() {
		return professorResponsavelId;
	}

	public void setProfessorResponsavelId(Integer professorResponsavelId) {
		this.professorResponsavelId = professorResponsavelId;
	}

	public Date getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public Date getDataValidadeSugerida() {
		return dataValidadeSugerida;
	}

	public void setDataValidadeSugerida(Date dataValidadeSugerida) {
		this.dataValidadeSugerida = dataValidadeSugerida;
	}

	public List<TreinoDiario> getTreinosDaSemana() {
		return treinosDaSemana;
	}

	public void setTreinosDaSemana(List<TreinoDiario> treinosDaSemana) {
		this.treinosDaSemana = treinosDaSemana;
	}
}
