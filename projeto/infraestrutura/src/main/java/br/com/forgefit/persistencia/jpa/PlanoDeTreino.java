package br.com.forgefit.persistencia.jpa;

import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "PLANO_TREINO")
class PlanoDeTreino {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "PLT_PROFESSOR_ID", nullable = false)
	private ProfessorJpa professorResponsavel;

	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_CRIACAO", nullable = false)
	private Date dataCriacao;

	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_VALIDADE_SUGERIDA")
	private Date dataValidadeSugerida;

	@OneToMany(mappedBy = "planoDeTreino", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderBy("letra ASC")
	private List<TreinoDiario> treinosDaSemana = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public ProfessorJpa getProfessorResponsavel() {
		return professorResponsavel;
	}

	public void setProfessorResponsavel(ProfessorJpa professorResponsavel) {
		this.professorResponsavel = professorResponsavel;
	}

	public Integer getProfessorResponsavelId() {
		return professorResponsavel != null ? professorResponsavel.id : null;
	}

	public void setProfessorResponsavelId(Integer professorResponsavelId) {
		if (this.professorResponsavel == null) {
			this.professorResponsavel = new ProfessorJpa();
		}
		this.professorResponsavel.id = professorResponsavelId;
	}

	public Date getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(Date dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public Date getDataValidadeSugerida() {
		return dataValidadeSugerida;
	}

	public void setDataValidadeSugerida(Date dataValidadeSugerida) {
		this.dataValidadeSugerida = dataValidadeSugerida;
	}

	public List<TreinoDiario> getTreinosDaSemana() {
		return treinosDaSemana;
	}

	public void setTreinosDaSemana(List<TreinoDiario> treinosDaSemana) {
		this.treinosDaSemana = treinosDaSemana;
	}
}

@Entity
@Table(name = "TREINO_DIARIO")
class TreinoDiario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "PLT_ID", nullable = false)
	private PlanoDeTreino planoDeTreino;

	@Column(name = "LETRA", nullable = false, length = 20)
	private String letra;

	@Column(name = "TIPO", nullable = false, length = 50)
	private String tipo;

	@OneToMany(mappedBy = "treinoDiario", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderBy("posicao ASC")
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

@Entity
@Table(name = "ITEM_EXERCICIO")
class ItemDeExercicio {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "TRD_ID", nullable = false)
	private TreinoDiario treinoDiario;

	@Column(name = "POSICAO")
	private Integer posicao;

	@Column(name = "EXERCICIO", nullable = false, length = 255)
	private String exercicio;

	@Column(name = "SERIES")
	private Integer series;

	@Column(name = "REPETICOES", length = 50)
	private String repeticoes;

	// Campos não mapeados no banco (futuras expansões)
	@Transient
	private String carga;

	@Transient
	private String observacoes;

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

	public Integer getPosicao() {
		return posicao;
	}

	public void setPosicao(Integer posicao) {
		this.posicao = posicao;
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

	public String getRepeticoes() {
		return repeticoes;
	}

	public void setRepeticoes(String repeticoes) {
		this.repeticoes = repeticoes;
	}

	public String getCarga() {
		return carga;
	}

	public void setCarga(String carga) {
		this.carga = carga;
	}

	public String getObservacoes() {
		return observacoes;
	}

	public void setObservacoes(String observacoes) {
		this.observacoes = observacoes;
	}
}

interface PlanoDeTreinoJpaRepository extends JpaRepository<PlanoDeTreino, Integer> {
	@org.springframework.data.jpa.repository.Query("SELECT p FROM PlanoDeTreino p WHERE p.professorResponsavel.id = :professorId")
	List<PlanoDeTreino> findByProfessorId(@org.springframework.data.repository.query.Param("professorId") Integer professorId);
	
	@org.springframework.data.jpa.repository.Query("SELECT p FROM PlanoDeTreino p JOIN Aluno a ON a.planoAtivoId = p.id WHERE a.matricula = :matricula")
	java.util.Optional<PlanoDeTreino> findPlanoAtivoByAlunoMatricula(@org.springframework.data.repository.query.Param("matricula") String matricula);
}

@org.springframework.stereotype.Repository("treinoRepositorio")
class PlanoDeTreinoRepositorioImpl implements br.com.forgefit.dominio.treino.TreinoRepositorio {
	@org.springframework.beans.factory.annotation.Autowired
	PlanoDeTreinoJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@Override
	public void salvar(br.com.forgefit.dominio.treino.PlanoDeTreino plano) {
		PlanoDeTreino planoJpa = mapeador.map(plano, PlanoDeTreino.class);
		repositorio.save(planoJpa);
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.treino.PlanoDeTreino> obterPorId(br.com.forgefit.dominio.treino.PlanoDeTreinoId id) {
		return repositorio.findById(id.getId())
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.treino.PlanoDeTreino.class));
	}
}

@org.springframework.stereotype.Repository("treinoRepositorioAplicacao")
class TreinoRepositorioAplicacaoImpl implements br.com.forgefit.aplicacao.treino.TreinoRepositorioAplicacao {
	@org.springframework.beans.factory.annotation.Autowired
	PlanoDeTreinoJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@Override
	public List<br.com.forgefit.aplicacao.treino.PlanoTreinoResumo> pesquisarPorProfessor(Integer professorId) {
		List<PlanoDeTreino> planosJpa = repositorio.findByProfessorId(professorId);
		return planosJpa.stream()
				.map(this::converterParaResumo)
				.collect(java.util.stream.Collectors.toList());
	}

	@Override
	public br.com.forgefit.aplicacao.treino.PlanoTreinoResumo buscarPlanoAtivoPorAluno(String matricula) {
		return repositorio.findPlanoAtivoByAlunoMatricula(matricula)
				.map(this::converterParaResumo)
				.orElse(null);
	}

	private br.com.forgefit.aplicacao.treino.PlanoTreinoResumo converterParaResumo(PlanoDeTreino planoJpa) {
		br.com.forgefit.aplicacao.treino.PlanoTreinoResumo resumo = new br.com.forgefit.aplicacao.treino.PlanoTreinoResumo();
		resumo.setId(planoJpa.getId());
		resumo.setProfessorId(planoJpa.getProfessorResponsavel().id);
		
		// Converte Date para LocalDate
		if (planoJpa.getDataCriacao() != null) {
			resumo.setDataCriacao(new java.sql.Date(planoJpa.getDataCriacao().getTime()).toLocalDate());
		}
		if (planoJpa.getDataValidadeSugerida() != null) {
			resumo.setDataValidadeSugerida(new java.sql.Date(planoJpa.getDataValidadeSugerida().getTime()).toLocalDate());
			resumo.setAtivo(!java.time.LocalDate.now().isAfter(resumo.getDataValidadeSugerida()));
		} else {
			resumo.setAtivo(true);
		}
		
		resumo.setQuantidadeTreinos(planoJpa.getTreinosDaSemana().size());

		List<br.com.forgefit.aplicacao.treino.TreinoDiarioResumo> treinosResumo = planoJpa.getTreinosDaSemana().stream()
				.map(this::converterTreinoParaResumo)
				.collect(java.util.stream.Collectors.toList());
		resumo.setTreinos(treinosResumo);

		return resumo;
	}

	private br.com.forgefit.aplicacao.treino.TreinoDiarioResumo converterTreinoParaResumo(TreinoDiario treinoJpa) {
		br.com.forgefit.aplicacao.treino.TreinoDiarioResumo resumo = new br.com.forgefit.aplicacao.treino.TreinoDiarioResumo();
		resumo.setLetra(treinoJpa.getLetra());
		resumo.setTipo(treinoJpa.getTipo());
		resumo.setQuantidadeExercicios(treinoJpa.getExercicios().size());

		List<br.com.forgefit.aplicacao.treino.ExercicioResumo> exerciciosResumo = treinoJpa.getExercicios().stream()
				.map(this::converterExercicioParaResumo)
				.collect(java.util.stream.Collectors.toList());
		resumo.setExercicios(exerciciosResumo);

		return resumo;
	}

	private br.com.forgefit.aplicacao.treino.ExercicioResumo converterExercicioParaResumo(ItemDeExercicio itemJpa) {
		br.com.forgefit.aplicacao.treino.ExercicioResumo resumo = new br.com.forgefit.aplicacao.treino.ExercicioResumo();
		resumo.setExercicio(itemJpa.getExercicio());
		resumo.setSeries(itemJpa.getSeries());
		resumo.setContagem(itemJpa.getRepeticoes());
		return resumo;
	}
}
