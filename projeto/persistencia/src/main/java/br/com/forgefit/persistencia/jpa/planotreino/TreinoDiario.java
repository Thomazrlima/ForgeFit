package br.com.forgefit.persistencia.jpa.planotreino;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "TRD_TREINO_DIARIO")
public class TreinoDiario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "TRD_ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "PLT_ID", nullable = false)
	private PlanoDeTreino planoDeTreino;
	
	@Column(name = "TRD_LETRA", nullable = false, length = 20)
	private String letra;
	
	@Column(name = "TRD_TIPO", nullable = false, length = 50)
	private String tipo;
	
	@OneToMany(mappedBy = "treinoDiario", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "IEX_POSICAO")
	private List<ItemDeExercicio> exercicios = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public PlanoDeTreino getPlanoDeTreino() {
		return planoDeTreino;
	}

	public void setPlanoDeTreino(PlanoDeTreino planoDeTreino) {
		this.planoDeTreino = planoDeTreino;
	}

	public String getLetra() {
		return letra;
	}

	public void setLetra(String letra) {
		this.letra = letra;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public List<ItemDeExercicio> getExercicios() {
		return exercicios;
	}

	public void setExercicios(List<ItemDeExercicio> exercicios) {
		this.exercicios = exercicios;
	}
}
