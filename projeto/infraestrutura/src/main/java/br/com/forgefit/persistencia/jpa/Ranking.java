package br.com.forgefit.persistencia.jpa;

import br.com.forgefit.aplicacao.ranking.RankingItemResumo;
import br.com.forgefit.persistencia.jpa.enums.PeriodoRanking;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "RANKING")
class Ranking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(name = "PERIODO", nullable = false, unique = true)
	private PeriodoRanking periodo;

	@OneToMany(mappedBy = "ranking", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "POSICAO")
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

@Entity
@Table(name = "ITEM_RANKING")
class ItemRanking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "RANKING_ID", nullable = false)
	private Ranking ranking;

	@Column(name = "ALUNO_MATRICULA", nullable = false, length = 50)
	private String alunoMatricula;

	@Column(name = "PONTOS_FREQUENCIA")
	private Integer pontosFrequencia = 0;

	@Column(name = "PONTOS_GUILDA")
	private Integer pontosGuilda = 0;

	@Column(name = "PONTOS_PERFORMANCE")
	private Integer pontosPerformance = 0;

	@Column(name = "PONTUACAO_TOTAL")
	private Integer pontuacaoTotal = 0;

	@Column(name = "POSICAO")
	private Integer posicao;

	@Column(name = "NUMERO_AULAS_PARTICIPADAS")
	private Integer numeroAulasParticipadas = 0;

	@Column(name = "MEDIA_PERFORMANCE")
	private Double mediaPerformance = 0.0;

	@Column(name = "NUMERO_AVALIACOES")
	private Integer numeroAvaliacoes = 0;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Ranking getRanking() {
		return ranking;
	}

	public void setRanking(Ranking ranking) {
		this.ranking = ranking;
	}

	public String getAlunoMatricula() {
		return alunoMatricula;
	}

	public void setAlunoMatricula(String alunoMatricula) {
		this.alunoMatricula = alunoMatricula;
	}

	public Integer getPontosFrequencia() {
		return pontosFrequencia;
	}

	public void setPontosFrequencia(Integer pontosFrequencia) {
		this.pontosFrequencia = pontosFrequencia;
	}

	public Integer getPontosGuilda() {
		return pontosGuilda;
	}

	public void setPontosGuilda(Integer pontosGuilda) {
		this.pontosGuilda = pontosGuilda;
	}

	public Integer getPontosPerformance() {
		return pontosPerformance;
	}

	public void setPontosPerformance(Integer pontosPerformance) {
		this.pontosPerformance = pontosPerformance;
	}

	public Integer getPontuacaoTotal() {
		return pontuacaoTotal;
	}

	public void setPontuacaoTotal(Integer pontuacaoTotal) {
		this.pontuacaoTotal = pontuacaoTotal;
	}

	public Integer getPosicao() {
		return posicao;
	}

	public void setPosicao(Integer posicao) {
		this.posicao = posicao;
	}

	public Integer getNumeroAulasParticipadas() {
		return numeroAulasParticipadas;
	}

	public void setNumeroAulasParticipadas(Integer numeroAulasParticipadas) {
		this.numeroAulasParticipadas = numeroAulasParticipadas;
	}

	public Double getMediaPerformance() {
		return mediaPerformance;
	}

	public void setMediaPerformance(Double mediaPerformance) {
		this.mediaPerformance = mediaPerformance;
	}

	public Integer getNumeroAvaliacoes() {
		return numeroAvaliacoes;
	}

	public void setNumeroAvaliacoes(Integer numeroAvaliacoes) {
		this.numeroAvaliacoes = numeroAvaliacoes;
	}
}

interface RankingJpaRepository extends JpaRepository<Ranking, Integer> {

	Ranking findByPeriodo(PeriodoRanking periodo);
}

interface ItemRankingJpaRepository extends JpaRepository<ItemRanking, Integer> {

	@Query("""
				SELECT i.posicao AS posicao,
				       i.alunoMatricula AS alunoMatricula,
				       a.nome AS alunoNome,
				       u.avatar AS alunoAvatar,
				       i.pontuacaoTotal AS pontuacaoTotal,
				       i.pontosFrequencia AS pontosFrequencia,
				       i.pontosGuilda AS pontosGuilda,
				       i.pontosPerformance AS pontosPerformance,
				       i.numeroAulasParticipadas AS numeroDeAulasParticipadas,
				       i.mediaPerformance AS mediaPerformance
				FROM ItemRanking i
				LEFT JOIN Aluno a ON i.alunoMatricula = a.matricula
				LEFT JOIN UsuarioMock u ON CAST(a.userId AS integer) = u.id
				WHERE i.ranking.periodo = :periodo
				ORDER BY i.posicao ASC
			""")
	List<RankingItemResumo> findByRankingPeriodoOrderByPosicaoAsc(@Param("periodo") PeriodoRanking periodo);

	@Query("""
				SELECT i.posicao AS posicao,
				       i.alunoMatricula AS alunoMatricula,
				       a.nome AS alunoNome,
				       u.avatar AS alunoAvatar,
				       i.pontuacaoTotal AS pontuacaoTotal,
				       i.pontosFrequencia AS pontosFrequencia,
				       i.pontosGuilda AS pontosGuilda,
				       i.pontosPerformance AS pontosPerformance,
				       i.numeroAulasParticipadas AS numeroDeAulasParticipadas,
				       i.mediaPerformance AS mediaPerformance
				FROM ItemRanking i
				LEFT JOIN Aluno a ON i.alunoMatricula = a.matricula
				LEFT JOIN UsuarioMock u ON CAST(a.userId AS integer) = u.id
				WHERE i.ranking.periodo = :periodo
				ORDER BY i.posicao ASC
				LIMIT :limite
			""")
	List<RankingItemResumo> findTopNByPeriodo(@Param("periodo") PeriodoRanking periodo, @Param("limite") int limite);

	@Query("""
				SELECT i.posicao AS posicao,
				       i.alunoMatricula AS alunoMatricula,
				       a.nome AS alunoNome,
				       u.avatar AS alunoAvatar,
				       i.pontuacaoTotal AS pontuacaoTotal,
				       i.pontosFrequencia AS pontosFrequencia,
				       i.pontosGuilda AS pontosGuilda,
				       i.pontosPerformance AS pontosPerformance,
				       i.numeroAulasParticipadas AS numeroDeAulasParticipadas,
				       i.mediaPerformance AS mediaPerformance
				FROM ItemRanking i
				LEFT JOIN Aluno a ON i.alunoMatricula = a.matricula
				LEFT JOIN UsuarioMock u ON CAST(a.userId AS integer) = u.id
				WHERE i.ranking.periodo = :periodo AND i.alunoMatricula = :matricula
			""")
	RankingItemResumo findByPeriodoAndMatricula(@Param("periodo") PeriodoRanking periodo,
			@Param("matricula") String matricula);
}

@org.springframework.stereotype.Repository("rankingRepositorio")
class RankingRepositorioImpl implements br.com.forgefit.dominio.ranking.RankingRepositorio {
	@org.springframework.beans.factory.annotation.Autowired
	RankingJpaRepository repositorio;

	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@Override
	public void salvar(br.com.forgefit.dominio.ranking.Ranking ranking) {
		// Verificar se o ranking já existe no banco
		PeriodoRanking periodoJpa = PeriodoRanking.valueOf(ranking.getPeriodo().name());
		Ranking rankingJpaExistente = repositorio.findByPeriodo(periodoJpa);
		
		if (rankingJpaExistente != null) {
			// Atualizar ranking existente - atualizar ou criar itens conforme necessário
			// Criar um mapa dos itens existentes por matrícula para busca rápida
			java.util.Map<String, ItemRanking> itensExistentesPorMatricula = new java.util.HashMap<>();
			if (rankingJpaExistente.getItens() != null) {
				for (ItemRanking itemExistente : rankingJpaExistente.getItens()) {
					if (itemExistente != null && itemExistente.getAlunoMatricula() != null) {
						itensExistentesPorMatricula.put(itemExistente.getAlunoMatricula(), itemExistente);
					}
				}
			}
			
			// Processar itens do domínio
			if (ranking.getItens() != null) {
				java.util.Set<String> matriculaProcessadas = new java.util.HashSet<>();
				
				for (br.com.forgefit.dominio.ranking.ItemRanking item : ranking.getItens()) {
					String matricula = item.getAlunoMatricula().getValor();
					matriculaProcessadas.add(matricula);
					
					ItemRanking itemJpa = itensExistentesPorMatricula.get(matricula);
					
					if (itemJpa != null) {
						// Atualizar item existente
						itemJpa.setPontosFrequencia(item.getPontosFrequencia());
						itemJpa.setPontosGuilda(item.getPontosGuilda());
						itemJpa.setPontosPerformance(item.getPontosPerformance());
						itemJpa.setPontuacaoTotal(item.getPontuacaoTotal());
						itemJpa.setPosicao(item.getPosicao());
						itemJpa.setNumeroAulasParticipadas(item.getNumeroDeAulasParticipadas());
						itemJpa.setMediaPerformance(item.getMediaPerformance());
						// Manter numeroAvaliacoes existente ou usar 0 se não houver
					} else {
						// Criar novo item
						itemJpa = new ItemRanking();
						itemJpa.setRanking(rankingJpaExistente);
						itemJpa.setAlunoMatricula(matricula);
						itemJpa.setPontosFrequencia(item.getPontosFrequencia());
						itemJpa.setPontosGuilda(item.getPontosGuilda());
						itemJpa.setPontosPerformance(item.getPontosPerformance());
						itemJpa.setPontuacaoTotal(item.getPontuacaoTotal());
						itemJpa.setPosicao(item.getPosicao());
						itemJpa.setNumeroAulasParticipadas(item.getNumeroDeAulasParticipadas());
						itemJpa.setMediaPerformance(item.getMediaPerformance());
						itemJpa.setNumeroAvaliacoes(0);
						rankingJpaExistente.getItens().add(itemJpa);
					}
				}
				
				// Remover itens que não estão mais no domínio
				rankingJpaExistente.getItens().removeIf(item -> !matriculaProcessadas.contains(item.getAlunoMatricula()));
			}
			
			repositorio.save(rankingJpaExistente);
		} else {
			// Criar novo ranking
			Ranking rankingJpa = mapeador.map(ranking, Ranking.class);
			repositorio.save(rankingJpa);
		}
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.ranking.Ranking> obterPorPeriodo(
			br.com.forgefit.dominio.ranking.enums.PeriodoRanking periodo) {
		PeriodoRanking periodoJpa = PeriodoRanking.valueOf(periodo.name());
		Ranking rankingJpa = repositorio.findByPeriodo(periodoJpa);
		if (rankingJpa == null) {
			return java.util.Optional.empty();
		}
		try {
			br.com.forgefit.dominio.ranking.Ranking ranking = mapeador.map(rankingJpa, br.com.forgefit.dominio.ranking.Ranking.class);
			return java.util.Optional.ofNullable(ranking);
		} catch (Exception e) {
			// Se o mapeamento falhar, retornar empty ao invés de criar um novo ranking
			System.err.println("Erro ao mapear ranking do período " + periodo + ": " + e.getMessage());
			return java.util.Optional.empty();
		}
	}
}

@org.springframework.stereotype.Repository("rankingRepositorioAplicacao")
class RankingRepositorioAplicacaoImpl implements br.com.forgefit.aplicacao.ranking.RankingRepositorioAplicacao {
	@org.springframework.beans.factory.annotation.Autowired
	ItemRankingJpaRepository repositorio;

	@Override
	public List<RankingItemResumo> pesquisarPorPeriodo(br.com.forgefit.dominio.ranking.enums.PeriodoRanking periodo) {
		PeriodoRanking periodoJpa = PeriodoRanking.valueOf(periodo.name());
		return repositorio.findByRankingPeriodoOrderByPosicaoAsc(periodoJpa);
	}

	@Override
	public List<RankingItemResumo> pesquisarTopN(br.com.forgefit.dominio.ranking.enums.PeriodoRanking periodo,
			int limite) {
		PeriodoRanking periodoJpa = PeriodoRanking.valueOf(periodo.name());
		return repositorio.findTopNByPeriodo(periodoJpa, limite);
	}

	@Override
	public RankingItemResumo buscarPosicaoAluno(br.com.forgefit.dominio.ranking.enums.PeriodoRanking periodo,
			String matricula) {
		PeriodoRanking periodoJpa = PeriodoRanking.valueOf(periodo.name());
		return repositorio.findByPeriodoAndMatricula(periodoJpa, matricula);
	}
}
