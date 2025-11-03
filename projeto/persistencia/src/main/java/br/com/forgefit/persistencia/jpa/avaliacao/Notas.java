package br.com.forgefit.persistencia.jpa.avaliacao;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class Notas {
	
	@Column(name = "AVA_NOTA_PONTUALIDADE")
	private Integer pontualidade;
	
	@Column(name = "AVA_NOTA_DIDATICA")
	private Integer didatica;
	
	@Column(name = "AVA_NOTA_ATENCAO")
	private Integer atencao;

	public Notas() {
	}

	public Notas(Integer pontualidade, Integer didatica, Integer atencao) {
		this.pontualidade = pontualidade;
		this.didatica = didatica;
		this.atencao = atencao;
	}

	public Integer getPontualidade() {
		return pontualidade;
	}

	public void setPontualidade(Integer pontualidade) {
		this.pontualidade = pontualidade;
	}

	public Integer getDidatica() {
		return didatica;
	}

	public void setDidatica(Integer didatica) {
		this.didatica = didatica;
	}

	public Integer getAtencao() {
		return atencao;
	}

	public void setAtencao(Integer atencao) {
		this.atencao = atencao;
	}
}
