package br.com.forgefit.persistencia.jpa.planotreino;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "IEX_ITEM_EXERCICIO")
public class ItemDeExercicio {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IEX_ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "TRD_ID", nullable = false)
	private TreinoDiario treinoDiario;
	
	@Column(name = "IEX_EXERCICIO", nullable = false, length = 100)
	private String exercicio;
	
	@Column(name = "IEX_SERIES")
	private Integer series;
	
	@Column(name = "IEX_CONTAGEM", length = 50)
	private String contagem;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public TreinoDiario getTreinoDiario() {
		return treinoDiario;
	}

	public void setTreinoDiario(TreinoDiario treinoDiario) {
		this.treinoDiario = treinoDiario;
	}

	public String getExercicio() {
		return exercicio;
	}

	public void setExercicio(String exercicio) {
		this.exercicio = exercicio;
	}

	public Integer getSeries() {
		return series;
	}

	public void setSeries(Integer series) {
		this.series = series;
	}

	public String getContagem() {
		return contagem;
	}

	public void setContagem(String contagem) {
		this.contagem = contagem;
	}
}
