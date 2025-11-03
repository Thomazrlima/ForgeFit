package br.com.forgefit.persistencia.jpa.torneio;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.forgefit.persistencia.jpa.enums.StatusTorneio;
import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "TOR_TORNEIO")
public class Torneio {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "TOR_ID")
	private Integer id;
	
	@Column(name = "TOR_NOME", nullable = false, length = 255)
	private String nome;
	
	@Embedded
	@AttributeOverrides({
		@AttributeOverride(name = "nome", column = @Column(name = "TOR_PREMIO_1_NOME", length = 255)),
		@AttributeOverride(name = "urlImagem", column = @Column(name = "TOR_PREMIO_1_URL_IMAGEM", length = 500))
	})
	private Premio premioPrimeiroLugar;
	
	@Embedded
	@AttributeOverrides({
		@AttributeOverride(name = "nome", column = @Column(name = "TOR_PREMIO_2_NOME", length = 255)),
		@AttributeOverride(name = "urlImagem", column = @Column(name = "TOR_PREMIO_2_URL_IMAGEM", length = 500))
	})
	private Premio premioSegundoLugar;
	
	@Embedded
	@AttributeOverrides({
		@AttributeOverride(name = "nome", column = @Column(name = "TOR_PREMIO_3_NOME", length = 255)),
		@AttributeOverride(name = "urlImagem", column = @Column(name = "TOR_PREMIO_3_URL_IMAGEM", length = 500))
	})
	private Premio premioTerceiroLugar;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "TOR_STATUS", nullable = false)
	private StatusTorneio status = StatusTorneio.PLANEJADO;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "TOR_DATA_INICIO", nullable = false)
	private Date dataInicio;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "TOR_DATA_FIM", nullable = false)
	private Date dataFim;
	
	@OneToMany(mappedBy = "torneio", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "PRK_POSICAO")
	private List<PosicaoRanking> rankingFinal = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Premio getPremioPrimeiroLugar() {
		return premioPrimeiroLugar;
	}

	public void setPremioPrimeiroLugar(Premio premioPrimeiroLugar) {
		this.premioPrimeiroLugar = premioPrimeiroLugar;
	}

	public Premio getPremioSegundoLugar() {
		return premioSegundoLugar;
	}

	public void setPremioSegundoLugar(Premio premioSegundoLugar) {
		this.premioSegundoLugar = premioSegundoLugar;
	}

	public Premio getPremioTerceiroLugar() {
		return premioTerceiroLugar;
	}

	public void setPremioTerceiroLugar(Premio premioTerceiroLugar) {
		this.premioTerceiroLugar = premioTerceiroLugar;
	}

	public StatusTorneio getStatus() {
		return status;
	}

	public void setStatus(StatusTorneio status) {
		this.status = status;
	}

	public Date getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(Date dataInicio) {
		this.dataInicio = dataInicio;
	}

	public Date getDataFim() {
		return dataFim;
	}

	public void setDataFim(Date dataFim) {
		this.dataFim = dataFim;
	}

	public List<PosicaoRanking> getRankingFinal() {
		return rankingFinal;
	}

	public void setRankingFinal(List<PosicaoRanking> rankingFinal) {
		this.rankingFinal = rankingFinal;
	}
}
