package br.com.forgefit.persistencia.jpa.torneio;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "PRK_POSICAO_RANKING")
public class PosicaoRanking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PRK_ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "TOR_ID", nullable = false)
	private Torneio torneio;
	
	@Column(name = "PRK_POSICAO", nullable = false)
	private Integer posicao;
	
	@Column(name = "PRK_GUILDA_ID", nullable = false)
	private Integer guildaId;
	
	@Column(name = "PRK_PONTUACAO", nullable = false)
	private Integer pontuacaoNoTorneio = 0;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Torneio getTorneio() {
		return torneio;
	}

	public void setTorneio(Torneio torneio) {
		this.torneio = torneio;
	}

	public Integer getPosicao() {
		return posicao;
	}

	public void setPosicao(Integer posicao) {
		this.posicao = posicao;
	}

	public Integer getGuildaId() {
		return guildaId;
	}

	public void setGuildaId(Integer guildaId) {
		this.guildaId = guildaId;
	}

	public Integer getPontuacaoNoTorneio() {
		return pontuacaoNoTorneio;
	}

	public void setPontuacaoNoTorneio(Integer pontuacaoNoTorneio) {
		this.pontuacaoNoTorneio = pontuacaoNoTorneio;
	}
}
