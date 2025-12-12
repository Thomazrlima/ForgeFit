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
@Table(name = "TORNEIO")
class Torneio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@Column(name = "NOME", nullable = false, length = 255)
	private String nome;

	@Embedded
	@AttributeOverrides({
		@AttributeOverride(name = "nome", column = @Column(name = "PREMIO_PRIMEIRO_LUGAR_NOME", length = 255)),
		@AttributeOverride(name = "urlImagem", column = @Column(name = "PREMIO_PRIMEIRO_LUGAR_URL_IMAGEM", length = 500))
	})
	private PremioJpa premioPrimeiroLugar;

	@Embedded
	@AttributeOverrides({
		@AttributeOverride(name = "nome", column = @Column(name = "PREMIO_SEGUNDO_LUGAR_NOME", length = 255)),
		@AttributeOverride(name = "urlImagem", column = @Column(name = "PREMIO_SEGUNDO_LUGAR_URL_IMAGEM", length = 500))
	})
	private PremioJpa premioSegundoLugar;

	@Embedded
	@AttributeOverrides({
		@AttributeOverride(name = "nome", column = @Column(name = "PREMIO_TERCEIRO_LUGAR_NOME", length = 255)),
		@AttributeOverride(name = "urlImagem", column = @Column(name = "PREMIO_TERCEIRO_LUGAR_URL_IMAGEM", length = 500))
	})
	private PremioJpa premioTerceiroLugar;

	@Enumerated(EnumType.STRING)
	@Column(name = "STATUS", nullable = false)
	private StatusTorneio status = StatusTorneio.PLANEJADO;

	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_INICIO", nullable = false)
	private Date dataInicio;

	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_FIM", nullable = false)
	private Date dataFim;

	@OneToMany(mappedBy = "torneio", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "POSICAO")
	private List<br.com.forgefit.persistencia.jpa.PosicaoRankingJpa> rankingFinal = new ArrayList<>();

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

	public PremioJpa getPremioPrimeiroLugar() {
		return premioPrimeiroLugar;
	}

	public void setPremioPrimeiroLugar(PremioJpa premioPrimeiroLugar) {
		this.premioPrimeiroLugar = premioPrimeiroLugar;
	}

	public PremioJpa getPremioSegundoLugar() {
		return premioSegundoLugar;
	}

	public void setPremioSegundoLugar(PremioJpa premioSegundoLugar) {
		this.premioSegundoLugar = premioSegundoLugar;
	}

	public PremioJpa getPremioTerceiroLugar() {
		return premioTerceiroLugar;
	}

	public void setPremioTerceiroLugar(PremioJpa premioTerceiroLugar) {
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

	public List<PosicaoRankingJpa> getRankingFinal() {
		return rankingFinal;
	}

	public void setRankingFinal(List<PosicaoRankingJpa> rankingFinal) {
		this.rankingFinal = rankingFinal;
	}
}

interface TorneioJpaRepository extends JpaRepository<Torneio, Integer> {

	List<Torneio> findByStatus(StatusTorneio status);

	@org.springframework.data.jpa.repository.Query("""
			select t
			  from Torneio t
			  where t.status = 'ATIVO'
				and :dataAtual between t.dataInicio and t.dataFim
			""")
	Torneio buscarTorneioAtivo(Date dataAtual);

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

	@org.springframework.data.jpa.repository.Query(value = """
		SELECT t.id as id,
			   t.nome as nome,
			   t.data_inicio as dataInicio,
			   t.data_fim as dataFim,
			   CASE 
				   WHEN t.status = 'ATIVO' AND :dataAtual between t.data_inicio and t.data_fim THEN 'ATIVO'
				   WHEN t.status = 'PLANEJADO' AND :dataAtual >= t.data_inicio AND :dataAtual <= t.data_fim THEN 'ATIVO'
				   WHEN t.status = 'PLANEJADO' THEN 'PLANEJADO'
				   ELSE t.status
			   END as status,
			   t.premio_primeiro_lugar_nome as premioPrimeiroLugarNome,
			   t.premio_primeiro_lugar_url_imagem as premioPrimeiroLugarUrlImagem,
			   t.premio_segundo_lugar_nome as premioSegundoLugarNome,
			   t.premio_segundo_lugar_url_imagem as premioSegundoLugarUrlImagem,
			   t.premio_terceiro_lugar_nome as premioTerceiroLugarNome,
			   t.premio_terceiro_lugar_url_imagem as premioTerceiroLugarUrlImagem
		FROM TORNEIO t
		WHERE (t.status = 'PLANEJADO' OR t.status = 'ATIVO')
		  AND :dataAtual <= t.data_fim
		ORDER BY t.data_inicio ASC
		LIMIT 1
		""", nativeQuery = true)
	br.com.forgefit.aplicacao.torneio.TorneioAtualResumo buscarTorneioAtual(@org.springframework.data.repository.query.Param("dataAtual") Date dataAtual);

	@org.springframework.data.jpa.repository.Query(value = """
		SELECT pr.guilda_id as guildaId,
			   g.nome as guildaNome,
			   g.imagem_url as guildaImagemUrl,
			   pr.pontuacao_no_torneio as pontuacaoNoTorneio,
			   (SELECT COUNT(*) FROM GUILDA_MEMBROS gm WHERE gm.guilda_id = g.id) as numeroMembros
		FROM TORNEIO_RANKING_FINAL pr
		JOIN GUILDA g ON g.id = pr.guilda_id
		WHERE pr.torneio_id = :torneioId
		ORDER BY pr.posicao ASC
		""", nativeQuery = true)
	List<br.com.forgefit.aplicacao.torneio.RankingGuildaNoTorneioResumo> buscarRankingPorTorneioFinalizado(@org.springframework.data.repository.query.Param("torneioId") Integer torneioId);

	@org.springframework.data.jpa.repository.Query(value = """
		SELECT pr.guilda_id as guildaId,
			   g.nome as guildaNome,
			   g.imagem_url as guildaImagemUrl,
			   pr.pontuacao_no_torneio as pontuacaoNoTorneio,
			   (SELECT COUNT(*) FROM GUILDA_MEMBROS gm WHERE gm.guilda_id = g.id) as numeroMembros
		FROM TORNEIO_RANKING_FINAL pr
		JOIN GUILDA g ON g.id = pr.guilda_id
		WHERE pr.torneio_id = (
			SELECT t.id FROM TORNEIO t WHERE t.status = 'FINALIZADO' ORDER BY t.data_fim DESC LIMIT 1
		)
		AND EXISTS (
			SELECT 1 FROM TORNEIO t WHERE t.status = 'FINALIZADO' ORDER BY t.data_fim DESC LIMIT 1
		)
		ORDER BY pr.posicao ASC
		LIMIT 3
		""", nativeQuery = true)
	List<br.com.forgefit.aplicacao.torneio.RankingGuildaNoTorneioResumo> buscarUltimoPodio();

	@org.springframework.data.jpa.repository.Query(value = """
		SELECT g.id as guildaId,
			   g.nome as guildaNome,
			   g.imagem_url as guildaImagemUrl,
			   COALESCE(SUM(c.pontuacao_total), 0) as pontuacaoNoTorneio,
			   (SELECT COUNT(*) FROM GUILDA_MEMBROS gm WHERE gm.guilda_id = g.id) as numeroMembros
		FROM GUILDA g
		LEFT JOIN CHECKIN c ON c.guilda_id = g.id
			AND c.data_checkin >= :dataInicio
			AND c.data_checkin <= :dataFim
		WHERE EXISTS (
			SELECT 1 FROM GUILDA_MEMBROS gm WHERE gm.guilda_id = g.id
		)
		GROUP BY g.id, g.nome, g.imagem_url
		HAVING COALESCE(SUM(c.pontuacao_total), 0) > 0
		ORDER BY pontuacaoNoTorneio DESC
		""", nativeQuery = true)
	List<br.com.forgefit.aplicacao.torneio.RankingGuildaNoTorneioResumo> buscarRankingPorTorneioAtivo(
		@org.springframework.data.repository.query.Param("dataInicio") java.sql.Timestamp dataInicio,
		@org.springframework.data.repository.query.Param("dataFim") java.sql.Timestamp dataFim
	);
}

@org.springframework.stereotype.Repository("torneioRepositorio")
class TorneioRepositorioImpl implements br.com.forgefit.dominio.torneio.TorneioRepositorio, TorneioRepositorioAplicacao {
	@org.springframework.beans.factory.annotation.Autowired
	TorneioJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	br.com.forgefit.persistencia.jpa.JpaMapeador mapeador;

	// Métodos do TorneioRepositorio (domínio)
	@Override
	public br.com.forgefit.dominio.torneio.Torneio salvar(br.com.forgefit.dominio.torneio.Torneio torneio) {
		Torneio torneioJpa = mapeador.map(torneio, Torneio.class);
		Torneio torneioSalvo = repositorio.save(torneioJpa);
		// Retorna o Torneio de domínio mapeado do JPA salvo (com ID gerado)
		return mapeador.map(torneioSalvo, br.com.forgefit.dominio.torneio.Torneio.class);
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

	@Override
	public java.util.Optional<br.com.forgefit.aplicacao.torneio.TorneioAtualResumo> buscarTorneioAtual(java.time.LocalDate hoje) {
		Date dataDate = br.com.forgefit.persistencia.jpa.DateTimeConverter.toDate(hoje);
		br.com.forgefit.aplicacao.torneio.TorneioAtualResumo resumo = repositorio.buscarTorneioAtual(dataDate);
		return java.util.Optional.ofNullable(resumo);
	}

	@Override
	public List<br.com.forgefit.aplicacao.torneio.RankingGuildaNoTorneioResumo> buscarRankingPorTorneio(Integer torneioId) {
		// Busca o torneio para verificar o status
		java.util.Optional<Torneio> torneioOpt = repositorio.findById(torneioId);
		if (torneioOpt.isEmpty()) {
			return java.util.Collections.emptyList();
		}
		
		Torneio torneio = torneioOpt.get();
		// Se o torneio está finalizado, busca o ranking final
		if (torneio.getStatus() == br.com.forgefit.persistencia.jpa.enums.StatusTorneio.FINALIZADO) {
			return repositorio.buscarRankingPorTorneioFinalizado(torneioId);
		}
		
		// Para torneios ativos, calcula o ranking baseado nos check-ins do período
		if (torneio.getStatus() == br.com.forgefit.persistencia.jpa.enums.StatusTorneio.ATIVO || 
			torneio.getStatus() == br.com.forgefit.persistencia.jpa.enums.StatusTorneio.PLANEJADO) {
			// Converte Date para LocalDate - trata tanto java.util.Date quanto java.sql.Date
			Date dataInicioDate = torneio.getDataInicio();
			Date dataFimDate = torneio.getDataFim();
			
			// Se for java.sql.Date, converte para java.util.Date primeiro
			if (dataInicioDate instanceof java.sql.Date) {
				dataInicioDate = new Date(dataInicioDate.getTime());
			}
			if (dataFimDate instanceof java.sql.Date) {
				dataFimDate = new Date(dataFimDate.getTime());
			}
			
			java.time.LocalDate dataInicioLocal = br.com.forgefit.persistencia.jpa.DateTimeConverter.toLocalDate(dataInicioDate);
			java.time.LocalDate dataFimLocal = br.com.forgefit.persistencia.jpa.DateTimeConverter.toLocalDate(dataFimDate);
			
			java.time.LocalDateTime inicioDateTime = java.time.LocalDateTime.of(dataInicioLocal, java.time.LocalTime.MIN);
			java.time.LocalDateTime fimDateTime = java.time.LocalDateTime.of(dataFimLocal, java.time.LocalTime.MAX);
			
			java.sql.Timestamp dataInicio = java.sql.Timestamp.valueOf(inicioDateTime);
			java.sql.Timestamp dataFim = java.sql.Timestamp.valueOf(fimDateTime);
			
			return repositorio.buscarRankingPorTorneioAtivo(dataInicio, dataFim);
		}
		
		return java.util.Collections.emptyList();
	}

	@Override
	public List<br.com.forgefit.aplicacao.torneio.RankingGuildaNoTorneioResumo> buscarUltimoPodio() {
		return repositorio.buscarUltimoPodio();
	}
}
