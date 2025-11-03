package br.com.forgefit.persistencia.jpa.ranking;

import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.persistencia.jpa.enums.PeriodoRanking;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "RNK_RANKING")
public class Ranking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "RNK_ID")
	private Integer id;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "RNK_PERIODO", nullable = false, unique = true)
	private PeriodoRanking periodo;
	
	@OneToMany(mappedBy = "ranking", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "IRK_POSICAO")
	private List<ItemRanking> itens = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public PeriodoRanking getPeriodo() {
		return periodo;
	}

	public void setPeriodo(PeriodoRanking periodo) {
		this.periodo = periodo;
	}

	public List<ItemRanking> getItens() {
		return itens;
	}

	public void setItens(List<ItemRanking> itens) {
		this.itens = itens;
	}
}
