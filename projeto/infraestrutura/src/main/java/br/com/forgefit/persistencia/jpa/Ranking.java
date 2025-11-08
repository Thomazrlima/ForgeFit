package br.com.forgefit.persistencia.jpa;

import br.com.forgefit.persistencia.jpa.enums.PeriodoRanking;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "RNK_RANKING")
class Ranking {

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

@Entity
@Table(name = "IRK_ITEM_RANKING")
class ItemRanking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "IRK_ID")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "RNK_ID", nullable = false)
	private Ranking ranking;

	@Column(name = "IRK_ALUNO_MATRICULA", nullable = false, length = 50)
	private String alunoMatricula;

	@Column(name = "IRK_PONTOS_FREQUENCIA")
	private Integer pontosFrequencia = 0;

	@Column(name = "IRK_PONTOS_GUILDA")
	private Integer pontosGuilda = 0;

	@Column(name = "IRK_PONTOS_PERFORMANCE")
	private Integer pontosPerformance = 0;

	@Column(name = "IRK_PONTUACAO_TOTAL")
	private Integer pontuacaoTotal = 0;

	@Column(name = "IRK_POSICAO_RANK")
	private Integer posicao;

	@Column(name = "IRK_NUM_AULAS_PARTICIPADAS")
	private Integer numeroAulasParticipadas = 0;

	@Column(name = "IRK_MEDIA_PERFORMANCE")
	private Double mediaPerformance = 0.0;

	@Column(name = "IRK_NUM_AVALIACOES")
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

@org.springframework.stereotype.Repository("rankingRepositorio")
class RankingRepositorioImpl implements br.com.forgefit.dominio.ranking.RankingRepositorio {
	@org.springframework.beans.factory.annotation.Autowired
	RankingJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@Override
	public void salvar(br.com.forgefit.dominio.ranking.Ranking ranking) {
		Ranking rankingJpa = mapeador.map(ranking, Ranking.class);
		repositorio.save(rankingJpa);
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.ranking.Ranking> obterPorPeriodo(br.com.forgefit.dominio.ranking.enums.PeriodoRanking periodo) {
		PeriodoRanking periodoJpa = PeriodoRanking.valueOf(periodo.name());
		Ranking rankingJpa = repositorio.findByPeriodo(periodoJpa);
		return java.util.Optional.ofNullable(rankingJpa)
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.ranking.Ranking.class));
	}
}
