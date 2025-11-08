package br.com.forgefit.persistencia.jpa;

import br.com.forgefit.aplicacao.torneio.TorneioRepositorioAplicacao;
import br.com.forgefit.aplicacao.torneio.TorneioResumo;
import br.com.forgefit.persistencia.jpa.enums.StatusTorneio;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "TOR_TORNEIO")
class Torneio {

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

@Entity
@Table(name = "PRK_POSICAO_RANKING")
class PosicaoRanking {

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

@Embeddable
class Premio {

	private String nome;

	private String urlImagem;

	public Premio() {
	}

	public Premio(String nome, String urlImagem) {
		this.nome = nome;
		this.urlImagem = urlImagem;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUrlImagem() {
		return urlImagem;
	}

	public void setUrlImagem(String urlImagem) {
		this.urlImagem = urlImagem;
	}
}

interface TorneioJpaRepository extends JpaRepository<Torneio, Integer>, TorneioRepositorioAplicacao {

	List<Torneio> findByStatus(StatusTorneio status);

	@org.springframework.data.jpa.repository.Query("""
			select t
			  from Torneio t
			  where t.status = 'ATIVO'
				and :dataAtual between t.dataInicio and t.dataFim
			""")
	Torneio buscarTorneioAtivo(Date dataAtual);

	@Override
	@org.springframework.data.jpa.repository.Query("""
		SELECT t.id as id,
			   t.nome as nome,
			   t.dataInicio as dataInicio,
			   t.dataFim as dataFim,
			   t.premioPrimeiroLugar.nome as nomePremio1,
			   t.premioSegundoLugar.nome as nomePremio2,
			   t.premioTerceiroLugar.nome as nomePremio3
		FROM Torneio t
		WHERE t.status = 'ATIVO'
		ORDER BY t.dataInicio DESC
		""")
	List<TorneioResumo> listarTorneiosAtivos();

	@Override
	@org.springframework.data.jpa.repository.Query("""
		SELECT t.id as id,
			   t.nome as nome,
			   t.dataInicio as dataInicio,
			   t.dataFim as dataFim,
			   t.premioPrimeiroLugar.nome as nomePremio1,
			   t.premioSegundoLugar.nome as nomePremio2,
			   t.premioTerceiroLugar.nome as nomePremio3
		FROM Torneio t
		WHERE t.status = 'FINALIZADO'
		ORDER BY t.dataFim DESC
		""")
	List<TorneioResumo> listarTorneiosFinalizados();
}

@org.springframework.stereotype.Repository("torneioRepositorio")
class TorneioRepositorioImpl implements br.com.forgefit.dominio.torneio.TorneioRepositorio, TorneioRepositorioAplicacao {
	@org.springframework.beans.factory.annotation.Autowired
	TorneioJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	br.com.forgefit.persistencia.jpa.JpaMapeador mapeador;

	// Métodos do TorneioRepositorio (domínio)
	@Override
	public void salvar(br.com.forgefit.dominio.torneio.Torneio torneio) {
		Torneio torneioJpa = mapeador.map(torneio, Torneio.class);
		repositorio.save(torneioJpa);
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.torneio.Torneio> obterPorId(br.com.forgefit.dominio.torneio.TorneioId id) {
		return repositorio.findById(id.getId())
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.torneio.Torneio.class));
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.torneio.Torneio> buscarTorneioAtivo(java.time.LocalDate dataAtual) {
		Date dataDate = br.com.forgefit.persistencia.jpa.DateTimeConverter.toDate(dataAtual);
		Torneio torneioJpa = repositorio.buscarTorneioAtivo(dataDate);
		return java.util.Optional.ofNullable(torneioJpa)
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.torneio.Torneio.class));
	}

	@Override
	public List<br.com.forgefit.dominio.torneio.Torneio> listarTorneios() {
		return repositorio.findAll().stream()
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.torneio.Torneio.class))
			.toList();
	}

	// Métodos do TorneioRepositorioAplicacao
	@Override
	public List<TorneioResumo> listarTorneiosAtivos() {
		return repositorio.listarTorneiosAtivos();
	}

	@Override
	public List<TorneioResumo> listarTorneiosFinalizados() {
		return repositorio.listarTorneiosFinalizados();
	}
}
