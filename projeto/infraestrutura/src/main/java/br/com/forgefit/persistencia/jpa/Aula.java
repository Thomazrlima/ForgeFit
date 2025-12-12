package br.com.forgefit.persistencia.jpa;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.forgefit.persistencia.jpa.enums.*;
import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import org.springframework.data.jpa.repository.JpaRepository;

@Entity
@Table(name = "AULA")
class Aula {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "PROFESSOR_ID", nullable = false)
	private ProfessorJpa professor;

	@Enumerated(EnumType.STRING)
	@Column(name = "MODALIDADE", nullable = false)
	private Modalidade modalidade;

	@Enumerated(EnumType.STRING)
	@Column(name = "ESPACO", nullable = false)
	private Espaco espaco;

	@Column(name = "CAPACIDADE", nullable = false)
	private Integer capacidade;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "INICIO", nullable = false)
	private Date inicio;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "FIM", nullable = false)
	private Date fim;

	@Enumerated(EnumType.STRING)
	@Column(name = "STATUS", nullable = false)
	private StatusAula status = StatusAula.ATIVA;

	@OneToOne(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	private Recorrencia recorrencia;

	@OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<OcorrenciaExcecao> excecoes = new ArrayList<>();

	@OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Reserva> reservas = new ArrayList<>();

	@OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<PosicaoListaDeEspera> listaDeEspera = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public ProfessorJpa getProfessor() {
		return professor;
	}

	public void setProfessor(ProfessorJpa professor) {
		this.professor = professor;
	}

	public Modalidade getModalidade() {
		return modalidade;
	}

	public void setModalidade(Modalidade modalidade) {
		this.modalidade = modalidade;
	}

	public Espaco getEspaco() {
		return espaco;
	}

	public void setEspaco(Espaco espaco) {
		this.espaco = espaco;
	}

	public Integer getCapacidade() {
		return capacidade;
	}

	public void setCapacidade(Integer capacidade) {
		this.capacidade = capacidade;
	}

	public Date getInicio() {
		return inicio;
	}

	public void setInicio(Date inicio) {
		this.inicio = inicio;
	}

	public Date getFim() {
		return fim;
	}

	public void setFim(Date fim) {
		this.fim = fim;
	}

	public StatusAula getStatus() {
		return status;
	}

	public void setStatus(StatusAula status) {
		this.status = status;
	}

	public Recorrencia getRecorrencia() {
		return recorrencia;
	}

	public void setRecorrencia(Recorrencia recorrencia) {
		this.recorrencia = recorrencia;
	}

	public List<OcorrenciaExcecao> getExcecoes() {
		return excecoes;
	}

	public void setExcecoes(List<OcorrenciaExcecao> excecoes) {
		this.excecoes = excecoes;
	}

	public List<Reserva> getReservas() {
		return reservas;
	}

	public void setReservas(List<Reserva> reservas) {
		this.reservas = reservas;
	}

	public List<PosicaoListaDeEspera> getListaDeEspera() {
		return listaDeEspera;
	}

	public void setListaDeEspera(List<PosicaoListaDeEspera> listaDeEspera) {
		this.listaDeEspera = listaDeEspera;
	}

	// Classes nested movidas de AlunoRepositorioJpa.java
	@Entity
	@Table(name = "RECORRENCIA")
	static class Recorrencia {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "ID")
		private Integer id;

		@OneToOne
		@JoinColumn(name = "AULA_ID", nullable = false, unique = true)
		private Aula aula;

		@Enumerated(EnumType.STRING)
		@Column(name = "TIPO")
		private TipoRecorrencia tipo;

		@ElementCollection
		@CollectionTable(name = "RECORRENCIA_DIAS", joinColumns = @JoinColumn(name = "RECORRENCIA_ID"))
		@Column(name = "DIA_DA_SEMANA")
		@Enumerated(EnumType.STRING)
		private List<DiaDaSemana> diasDaSemana;

		@Temporal(TemporalType.DATE)
		@Column(name = "DATA_FIM_RECORRENCIA")
		private Date dataFimRecorrencia;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public Aula getAula() {
			return aula;
		}

		public void setAula(Aula aula) {
			this.aula = aula;
		}

		public TipoRecorrencia getTipo() {
			return tipo;
		}

		public void setTipo(TipoRecorrencia tipo) {
			this.tipo = tipo;
		}

		public List<DiaDaSemana> getDiasDaSemana() {
			return diasDaSemana;
		}

		public void setDiasDaSemana(List<DiaDaSemana> diasDaSemana) {
			this.diasDaSemana = diasDaSemana;
		}

		public Date getDataFimRecorrencia() {
			return dataFimRecorrencia;
		}

		public void setDataFimRecorrencia(Date dataFimRecorrencia) {
			this.dataFimRecorrencia = dataFimRecorrencia;
		}
	}

	@Entity
	@Table(name = "OCORRENCIA_EXCECAO")
	static class OcorrenciaExcecao {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "ID")
		private Integer id;

		@ManyToOne
		@JoinColumn(name = "AULA_ID", nullable = false)
		private Aula aula;

		@Temporal(TemporalType.DATE)
		@Column(name = "DATA_ORIGINAL_OCORRENCIA", nullable = false)
		private Date dataOriginalOcorrencia;

		@Column(name = "CANCELADA", nullable = false)
		private Boolean cancelada = false;

		@Temporal(TemporalType.TIMESTAMP)
		@Column(name = "NOVO_INICIO")
		private Date novoInicio;

		@Temporal(TemporalType.TIMESTAMP)
		@Column(name = "NOVO_FIM")
		private Date novoFim;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public Aula getAula() {
			return aula;
		}

		public void setAula(Aula aula) {
			this.aula = aula;
		}

		public Date getDataOriginalOcorrencia() {
			return dataOriginalOcorrencia;
		}

		public void setDataOriginalOcorrencia(Date dataOriginalOcorrencia) {
			this.dataOriginalOcorrencia = dataOriginalOcorrencia;
		}

		public Boolean getCancelada() {
			return cancelada;
		}

		public void setCancelada(Boolean cancelada) {
			this.cancelada = cancelada;
		}

		public Date getNovoInicio() {
			return novoInicio;
		}

		public void setNovoInicio(Date novoInicio) {
			this.novoInicio = novoInicio;
		}

		public Date getNovoFim() {
			return novoFim;
		}

		public void setNovoFim(Date novoFim) {
			this.novoFim = novoFim;
		}
	}

	@Entity
	@Table(name = "LISTA_DE_ESPERA")
	static class PosicaoListaDeEspera {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "ID")
		private Integer id;

		@ManyToOne
		@JoinColumn(name = "AULA_ID", nullable = false)
		private Aula aula;

		@Column(name = "ALUNO_MATRICULA", nullable = false, length = 50)
		private String alunoMatricula;

		@Temporal(TemporalType.TIMESTAMP)
		@Column(name = "TIMESTAMP_ENTRADA", nullable = false)
		private Date timestampEntrada;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public Aula getAula() {
			return aula;
		}

		public void setAula(Aula aula) {
			this.aula = aula;
		}

		public String getAlunoMatricula() {
			return alunoMatricula;
		}

		public void setAlunoMatricula(String alunoMatricula) {
			this.alunoMatricula = alunoMatricula;
		}

		public Date getTimestampEntrada() {
			return timestampEntrada;
		}

		public void setTimestampEntrada(Date timestampEntrada) {
			this.timestampEntrada = timestampEntrada;
		}
	}

	@Entity
	@Table(name = "RESERVA")
	static class Reserva {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "ID")
		private Integer id;

		@ManyToOne
		@JoinColumn(name = "AULA_ID", nullable = false)
		private Aula aula;

		@Column(name = "ALUNO_MATRICULA", nullable = false, length = 50)
		private String alunoMatricula;

		@Temporal(TemporalType.TIMESTAMP)
		@Column(name = "DATA_RESERVA", nullable = false)
		private Date dataReserva;

		@Enumerated(EnumType.STRING)
		@Column(name = "STATUS", nullable = false)
		private StatusReserva status = StatusReserva.CONFIRMADA;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public Aula getAula() {
			return aula;
		}

		public void setAula(Aula aula) {
			this.aula = aula;
		}

		public String getAlunoMatricula() {
			return alunoMatricula;
		}

		public void setAlunoMatricula(String alunoMatricula) {
			this.alunoMatricula = alunoMatricula;
		}

		public Date getDataReserva() {
			return dataReserva;
		}

		public void setDataReserva(Date dataReserva) {
			this.dataReserva = dataReserva;
		}

		public StatusReserva getStatus() {
			return status;
		}

		public void setStatus(StatusReserva status) {
			this.status = status;
		}
	}
}

interface ReservaJpaRepository extends JpaRepository<Aula.Reserva, Integer> {

	List<Aula.Reserva> findByAlunoMatricula(String matricula);

	List<Aula.Reserva> findByAlunoMatriculaAndStatus(String matricula, StatusReserva status);

	@org.springframework.data.jpa.repository.Query("""
			SELECT r.alunoMatricula as alunoMatricula,
				   r.aula.id as aulaId
			FROM br.com.forgefit.persistencia.jpa.Aula$Reserva r
			WHERE r.alunoMatricula = :#{#matricula.valor}
			  AND r.status = 'CONFIRMADA'
			  AND r.aula.inicio > CURRENT_TIMESTAMP
			ORDER BY r.aula.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.ReservaResumo> buscarReservasConfirmadas(
			@org.springframework.data.repository.query.Param("matricula") br.com.forgefit.dominio.aluno.Matricula matricula);
}

@org.springframework.stereotype.Repository
class ReservaRepositorioImpl implements br.com.forgefit.aplicacao.aula.ReservaRepositorioAplicacao {
	@org.springframework.beans.factory.annotation.Autowired
	ReservaJpaRepository repositorio;

	@Override
	public List<br.com.forgefit.aplicacao.aula.CancelamentoResumo> buscarReservasConfirmadas(
			br.com.forgefit.dominio.aluno.Matricula matricula) {
		return repositorio.buscarReservasConfirmadas(matricula).stream()
				.map(r -> {
					br.com.forgefit.aplicacao.aula.CancelamentoResumo dto = new br.com.forgefit.aplicacao.aula.CancelamentoResumo();
					dto.setAlunoMatricula(r.getAlunoMatricula());
					dto.setAulaId(r.getAulaId());
					return dto;
				})
				.collect(java.util.stream.Collectors.toList());
	}
}

@org.springframework.stereotype.Repository("aulaRepositorioAplicacao")
class AulaRepositorioAplicacaoImpl implements br.com.forgefit.aplicacao.aula.AulaRepositorioAplicacao {
	@org.springframework.beans.factory.annotation.Autowired
	AulaJpaRepository repositorio;

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarResumosAtivas() {
		return repositorio.pesquisarResumosAtivas();
	}

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarResumosAtivasExcluindoAluno(String matricula) {
		return repositorio.pesquisarResumosAtivasExcluindoAluno(matricula);
	}

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarPorModalidade(String modalidade) {
		return repositorio.pesquisarPorModalidade(modalidade);
	}

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarPorEspaco(String espaco) {
		return repositorio.pesquisarPorEspaco(espaco);
	}

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarPorPeriodo(java.time.LocalDateTime inicio,
			java.time.LocalDateTime fim) {
		java.util.Date inicioDate = DateTimeConverter.toDate(inicio);
		java.util.Date fimDate = DateTimeConverter.toDate(fim);
		return repositorio.pesquisarPorPeriodo(inicioDate, fimDate);
	}

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarComVagasDisponiveis() {
		return repositorio.pesquisarComVagasDisponiveis();
	}

	@Override
	public java.util.Optional<br.com.forgefit.aplicacao.aula.AulaResumoExpandido> buscarResumoExpandido(
			Integer aulaId) {
		return repositorio.buscarResumoExpandido(aulaId);
	}

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarPorProfessor(Integer professorId) {
		return repositorio.pesquisarPorProfessor(professorId);
	}

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarComFiltros(String modalidade, String espaco,
			java.time.LocalDateTime inicio, java.time.LocalDateTime fim, Boolean apenasComVagas) {
		java.util.Date inicioDate = inicio != null ? DateTimeConverter.toDate(inicio) : null;
		java.util.Date fimDate = fim != null ? DateTimeConverter.toDate(fim) : null;
		return repositorio.pesquisarComFiltros(modalidade, espaco, inicioDate, fimDate, apenasComVagas);
	}

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> buscarAulasPorMatriculaAluno(String matricula) {
		return repositorio.buscarAulasPorMatriculaAluno(matricula);
	}

	@Override
	public List<br.com.forgefit.aplicacao.aula.AulaResumo> buscarAulasListaEsperaPorMatriculaAluno(String matricula) {
		return repositorio.buscarAulasListaEsperaPorMatriculaAluno(matricula);
	}
}

// Interfaces e classes que estavam em AlunoRepositorioJpa.java - movidas para
// cá
interface AulaJpaRepository extends JpaRepository<Aula, Integer> {

	List<Aula> findByStatus(StatusAula status);

	@org.springframework.data.jpa.repository.Query("SELECT MAX(a.id) FROM Aula a")
	Integer findMaxId();

	@org.springframework.data.jpa.repository.Query("""
			SELECT DISTINCT a FROM Aula a
			LEFT JOIN FETCH a.reservas
			WHERE a.id = :id
			""")
	java.util.Optional<Aula> findByIdWithReservas(@org.springframework.data.repository.query.Param("id") Integer id);

	@org.springframework.data.jpa.repository.Query("""
			SELECT DISTINCT a FROM Aula a
			LEFT JOIN FETCH a.listaDeEspera
			WHERE a.id = :id
			""")
	java.util.Optional<Aula> findByIdWithListaEspera(@org.springframework.data.repository.query.Param("id") Integer id);

	@org.springframework.data.jpa.repository.Query("""
			select a
			  from Aula a
			  where a.professor.id = :professorId
			""")
	List<Aula> findByProfessorId(Integer professorId);

	@org.springframework.data.jpa.repository.Query("""
			select a
			  from Aula a
			  where a.espaco = :espaco
				and a.inicio >= :inicio
				and a.fim <= :fim
			""")
	List<Aula> buscarPorEspacoEPeriodo(Espaco espaco, java.util.Date inicio, java.util.Date fim);

	@org.springframework.data.jpa.repository.Query("""
			select a
			  from Aula a
			  where a.professor.id = :professorId
				and a.inicio >= :inicio
				and a.fim <= :fim
			""")
	List<Aula> buscarPorProfessorEPeriodo(Integer professorId, java.util.Date inicio, java.util.Date fim);

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       SIZE(a.reservas) as vagasOcupadas,
			       (a.capacidade - SIZE(a.reservas)) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			WHERE a.status = 'ATIVA'
			  AND a.inicio >= CURRENT_TIMESTAMP
			ORDER BY a.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarResumosAtivas();

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       SIZE(a.reservas) as vagasOcupadas,
			       (a.capacidade - SIZE(a.reservas)) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			WHERE a.status = 'ATIVA'
			  AND a.inicio >= CURRENT_TIMESTAMP
			  AND a.id NOT IN (
			      SELECT r.aula.id 
			      FROM br.com.forgefit.persistencia.jpa.Aula$Reserva r
			      WHERE r.alunoMatricula = :matricula
			        AND r.status = 'CONFIRMADA'
			  )
			ORDER BY a.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarResumosAtivasExcluindoAluno(
			@org.springframework.data.repository.query.Param("matricula") String matricula);

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       SIZE(a.reservas) as vagasOcupadas,
			       (a.capacidade - SIZE(a.reservas)) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			WHERE a.status = 'ATIVA'
			  AND UPPER(CAST(a.modalidade AS string)) = UPPER(:modalidade)
			ORDER BY a.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarPorModalidade(
			@org.springframework.data.repository.query.Param("modalidade") String modalidade);

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       SIZE(a.reservas) as vagasOcupadas,
			       (a.capacidade - SIZE(a.reservas)) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			WHERE a.status = 'ATIVA'
			  AND UPPER(CAST(a.espaco AS string)) = UPPER(:espaco)
			ORDER BY a.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarPorEspaco(
			@org.springframework.data.repository.query.Param("espaco") String espaco);

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       SIZE(a.reservas) as vagasOcupadas,
			       (a.capacidade - SIZE(a.reservas)) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			WHERE a.status = 'ATIVA'
			  AND a.inicio >= :inicio
			  AND a.fim <= :fim
			ORDER BY a.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarPorPeriodo(
			@org.springframework.data.repository.query.Param("inicio") java.util.Date inicio,
			@org.springframework.data.repository.query.Param("fim") java.util.Date fim);

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       SIZE(a.reservas) as vagasOcupadas,
			       (a.capacidade - SIZE(a.reservas)) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			WHERE a.status = 'ATIVA'
			  AND SIZE(a.reservas) < a.capacidade
			ORDER BY a.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarComVagasDisponiveis();

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       SIZE(a.reservas) as vagasOcupadas,
			       (a.capacidade - SIZE(a.reservas)) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			WHERE a.id = :id
			""")
	java.util.Optional<br.com.forgefit.aplicacao.aula.AulaResumoExpandido> buscarResumoExpandido(
			@org.springframework.data.repository.query.Param("id") Integer id);

	@org.springframework.data.jpa.repository.Query(value = """
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor_id as professorId,
			       p.nome as professorNome,
			       COALESCE(COUNT(DISTINCT r.id), 0) as vagasOcupadas,
			       a.capacidade - COALESCE(COUNT(DISTINCT r.id), 0) as vagasDisponiveis,
			       (SELECT COUNT(*) FROM lista_de_espera WHERE aula_id = a.id) as tamanhoListaEspera
			FROM aula a
			JOIN professor p ON p.id = a.professor_id
			LEFT JOIN reserva r ON r.aula_id = a.id AND r.status = 'CONFIRMADA'
			WHERE a.professor_id = :professorId
			GROUP BY a.id, a.modalidade, a.espaco, a.inicio, a.fim, a.capacidade, a.status, a.professor_id, p.nome
			ORDER BY a.inicio DESC
			""", nativeQuery = true)
	List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarPorProfessor(
			@org.springframework.data.repository.query.Param("professorId") Integer professorId);

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       SIZE(a.reservas) as vagasOcupadas,
			       (a.capacidade - SIZE(a.reservas)) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			WHERE a.status = 'ATIVA'
			  AND (:modalidade IS NULL OR UPPER(CAST(a.modalidade AS string)) = UPPER(:modalidade))
			  AND (:espaco IS NULL OR UPPER(CAST(a.espaco AS string)) = UPPER(:espaco))
			  AND (:inicio IS NULL OR a.inicio >= :inicio)
			  AND (:fim IS NULL OR a.fim <= :fim)
			  AND (:apenasComVagas = false OR SIZE(a.reservas) < a.capacidade)
			ORDER BY a.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.AulaResumo> pesquisarComFiltros(
			@org.springframework.data.repository.query.Param("modalidade") String modalidade,
			@org.springframework.data.repository.query.Param("espaco") String espaco,
			@org.springframework.data.repository.query.Param("inicio") java.util.Date inicio,
			@org.springframework.data.repository.query.Param("fim") java.util.Date fim,
			@org.springframework.data.repository.query.Param("apenasComVagas") Boolean apenasComVagas);

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       (SELECT COUNT(r) FROM br.com.forgefit.persistencia.jpa.Aula$Reserva r WHERE r.aula = a AND r.status = 'CONFIRMADA') as vagasOcupadas,
			       (a.capacidade - (SELECT COUNT(r) FROM br.com.forgefit.persistencia.jpa.Aula$Reserva r WHERE r.aula = a AND r.status = 'CONFIRMADA')) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			JOIN a.reservas r
			WHERE r.alunoMatricula = :matricula
			  AND r.status = 'CONFIRMADA'
			  AND a.inicio >= CURRENT_TIMESTAMP
			  AND a.inicio <= FUNCTION('TIMESTAMPADD', DAY, 7, CURRENT_TIMESTAMP)
			  AND NOT EXISTS (
			      SELECT 1 FROM br.com.forgefit.persistencia.jpa.Avaliacao av
			      WHERE av.alunoMatricula = :matricula
			        AND av.aulaId = a.id
			        AND av.dataOcorrenciaAula = CAST(a.inicio AS date)
			  )
			ORDER BY a.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.AulaResumo> buscarAulasPorMatriculaAluno(
			@org.springframework.data.repository.query.Param("matricula") String matricula);

	@org.springframework.data.jpa.repository.Query("""
			SELECT a.id as id,
			       a.modalidade as modalidade,
			       a.espaco as espaco,
			       a.inicio as inicio,
			       a.fim as fim,
			       a.capacidade as capacidade,
			       a.status as status,
			       a.professor.id as professorId,
			       a.professor.nome as professorNome,
			       (SELECT COUNT(r) FROM br.com.forgefit.persistencia.jpa.Aula$Reserva r WHERE r.aula = a AND r.status = 'CONFIRMADA') as vagasOcupadas,
			       (a.capacidade - (SELECT COUNT(r) FROM br.com.forgefit.persistencia.jpa.Aula$Reserva r WHERE r.aula = a AND r.status = 'CONFIRMADA')) as vagasDisponiveis,
			       SIZE(a.listaDeEspera) as tamanhoListaEspera
			FROM Aula a
			JOIN a.listaDeEspera le
			WHERE le.alunoMatricula = :matricula
			  AND a.status = 'ATIVA'
			  AND a.inicio >= CURRENT_TIMESTAMP
			  AND a.inicio <= FUNCTION('TIMESTAMPADD', DAY, 7, CURRENT_TIMESTAMP)
			ORDER BY a.inicio ASC
			""")
	List<br.com.forgefit.aplicacao.aula.AulaResumo> buscarAulasListaEsperaPorMatriculaAluno(
			@org.springframework.data.repository.query.Param("matricula") String matricula);
}

@org.springframework.stereotype.Repository("aulaRepositorio")
class AulaRepositorioImpl implements br.com.forgefit.dominio.aula.AulaRepositorio {
	@org.springframework.beans.factory.annotation.Autowired
	AulaJpaRepository repositorio;

	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@org.springframework.beans.factory.annotation.Autowired
	ProfessorJpaRepository professorRepository;

	@Override
	public void salvar(br.com.forgefit.dominio.aula.Aula aula) {
		Integer idOriginal = aula.getId().getId();
		
		// Se o ID não existe no banco, criar nova aula MANUALMENTE
		if (!repositorio.existsById(idOriginal)) {
			// Criar manualmente a entidade JPA para garantir conversão correta
			Aula aulaJpa = new Aula();
			aulaJpa.setId(null); // Deixar o banco gerar o ID
			
			// Buscar o professor pelo ID
			ProfessorJpa professor = professorRepository.findById(aula.getProfessorId().getId())
				.orElseThrow(() -> new IllegalArgumentException("Professor não encontrado: " + aula.getProfessorId().getId()));
			aulaJpa.setProfessor(professor);
			
			// Converter enums manualmente
			aulaJpa.setModalidade(Modalidade.valueOf(aula.getModalidade().name()));
			aulaJpa.setEspaco(Espaco.valueOf(aula.getEspaco().name()));
			aulaJpa.setStatus(StatusAula.valueOf(aula.getStatus().name()));
			
			// Converter campos simples
			aulaJpa.setCapacidade(aula.getCapacidade());
			aulaJpa.setInicio(java.util.Date.from(aula.getInicio().atZone(java.time.ZoneId.systemDefault()).toInstant()));
			aulaJpa.setFim(java.util.Date.from(aula.getFim().atZone(java.time.ZoneId.systemDefault()).toInstant()));
			
			// Salvar a aula PRIMEIRO (sem recorrência) para obter o ID
			Aula aulaSalva = repositorio.save(aulaJpa);
			
			// Agora converter recorrência se existir (com a aula já salva e com ID)
			if (aula.getRecorrencia().isPresent()) {
				br.com.forgefit.dominio.aula.Recorrencia recDominio = aula.getRecorrencia().get();
				Aula.Recorrencia recJpa = new Aula.Recorrencia();
				recJpa.setAula(aulaSalva); // Usar a aula JÁ SALVA com ID
				recJpa.setTipo(TipoRecorrencia.valueOf(recDominio.getTipo().name()));
				recJpa.setDataFimRecorrencia(java.util.Date.from(recDominio.getDataFimRecorrencia().atStartOfDay(java.time.ZoneId.systemDefault()).toInstant()));
				
				// Converter dias da semana
				java.util.List<DiaDaSemana> diasJpa = new java.util.ArrayList<>();
				for (br.com.forgefit.dominio.aula.enums.DiaDaSemana diaDominio : recDominio.getDiasDaSemana()) {
					diasJpa.add(DiaDaSemana.valueOf(diaDominio.name()));
				}
				recJpa.setDiasDaSemana(diasJpa);
				
				aulaSalva.setRecorrencia(recJpa);
				repositorio.save(aulaSalva); // Salvar novamente com a recorrência
			}
			return;
		}
		
		// Se já existe, buscar a entidade existente e sincronizar (duas queries para evitar MultipleBagFetchException)
		java.util.Optional<Aula> aulaComReservasOpt = repositorio.findByIdWithReservas(idOriginal);
		repositorio.findByIdWithListaEspera(idOriginal); // Carrega lista de espera na sessão
		
		if (aulaComReservasOpt.isPresent()) {
			Aula aulaExistente = aulaComReservasOpt.get();
			
			// Atualizar campos básicos da aula
			aulaExistente.setStatus(StatusAula.valueOf(aula.getStatus().name()));
			aulaExistente.setInicio(java.util.Date.from(aula.getInicio().atZone(java.time.ZoneId.systemDefault()).toInstant()));
			aulaExistente.setFim(java.util.Date.from(aula.getFim().atZone(java.time.ZoneId.systemDefault()).toInstant()));
			aulaExistente.setCapacidade(aula.getCapacidade());
			aulaExistente.setModalidade(Modalidade.valueOf(aula.getModalidade().name()));
			aulaExistente.setEspaco(Espaco.valueOf(aula.getEspaco().name()));
			
			// Criar map das reservas existentes no banco por matrícula
			java.util.Map<String, Aula.Reserva> reservasExistentes = new java.util.HashMap<>();
			for (Aula.Reserva reservaJpa : aulaExistente.getReservas()) {
				reservasExistentes.put(reservaJpa.getAlunoMatricula(), reservaJpa);
			}
			
			// Coletar reservas a remover e atualizar
			java.util.List<Aula.Reserva> reservasParaRemover = new java.util.ArrayList<>();
			java.util.List<Aula.Reserva> reservasParaAdicionar = new java.util.ArrayList<>();
			
			// Processar todas as reservas do domínio
			for (br.com.forgefit.dominio.aula.Reserva reservaDominio : aula.getReservas()) {
				String matricula = reservaDominio.getAlunoMatricula().getValor();
				Aula.Reserva reservaExistente = reservasExistentes.get(matricula);
				
				if (reservaDominio.getStatus() == br.com.forgefit.dominio.aula.enums.StatusReserva.CANCELADA_PELO_ALUNO ||
					reservaDominio.getStatus() == br.com.forgefit.dominio.aula.enums.StatusReserva.CANCELADA_PELA_ACADEMIA) {
					// Reserva cancelada - remover se existir
					if (reservaExistente != null) {
						reservasParaRemover.add(reservaExistente);
					}
				} else {
					// Reserva confirmada
					if (reservaExistente == null) {
						// Nova reserva - criar
						Aula.Reserva novaReserva = new Aula.Reserva();
						novaReserva.setAula(aulaExistente);
						novaReserva.setAlunoMatricula(matricula);
						novaReserva.setDataReserva(java.util.Date.from(
							reservaDominio.getDataDaReserva().atZone(java.time.ZoneId.systemDefault()).toInstant()));
						novaReserva.setStatus(br.com.forgefit.persistencia.jpa.enums.StatusReserva.CONFIRMADA);
						reservasParaAdicionar.add(novaReserva);
					}
					// Se já existe e está confirmada, não precisa fazer nada
				}
			}
			
			// Aplicar mudanças de reservas
			aulaExistente.getReservas().removeAll(reservasParaRemover);
			aulaExistente.getReservas().addAll(reservasParaAdicionar);
			
			// === SINCRONIZAR LISTA DE ESPERA ===
			// Criar map das posições existentes na lista de espera por matrícula
			java.util.Map<String, Aula.PosicaoListaDeEspera> listaEsperaExistente = new java.util.HashMap<>();
			for (Aula.PosicaoListaDeEspera posicaoJpa : aulaExistente.getListaDeEspera()) {
				listaEsperaExistente.put(posicaoJpa.getAlunoMatricula(), posicaoJpa);
			}
			
			// Coletar posições a adicionar e matrículas presentes no domínio
			java.util.Set<String> matriculasNoDoinio = new java.util.HashSet<>();
			java.util.List<Aula.PosicaoListaDeEspera> posicoesParaAdicionar = new java.util.ArrayList<>();
			
			for (br.com.forgefit.dominio.aula.PosicaoListaDeEspera posicaoDominio : aula.getListaDeEspera()) {
				String matricula = posicaoDominio.getAlunoMatricula().getValor();
				matriculasNoDoinio.add(matricula);
				
				if (!listaEsperaExistente.containsKey(matricula)) {
					// Nova posição - criar
					Aula.PosicaoListaDeEspera novaPosicao = new Aula.PosicaoListaDeEspera();
					novaPosicao.setAula(aulaExistente);
					novaPosicao.setAlunoMatricula(matricula);
					novaPosicao.setTimestampEntrada(java.util.Date.from(
						posicaoDominio.getTimestampDeEntrada().atZone(java.time.ZoneId.systemDefault()).toInstant()));
					posicoesParaAdicionar.add(novaPosicao);
				}
			}
			
			// Posições a remover (estão no banco mas não estão mais no domínio)
			java.util.List<Aula.PosicaoListaDeEspera> posicoesParaRemover = new java.util.ArrayList<>();
			for (Aula.PosicaoListaDeEspera posicaoJpa : aulaExistente.getListaDeEspera()) {
				if (!matriculasNoDoinio.contains(posicaoJpa.getAlunoMatricula())) {
					posicoesParaRemover.add(posicaoJpa);
				}
			}
			
			// Aplicar mudanças da lista de espera
			aulaExistente.getListaDeEspera().removeAll(posicoesParaRemover);
			aulaExistente.getListaDeEspera().addAll(posicoesParaAdicionar);
			
			// Salvar
			repositorio.save(aulaExistente);
		}
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.aula.Aula> obterPorId(
			br.com.forgefit.dominio.aula.AulaId aulaId) {
		// Duas queries separadas para evitar MultipleBagFetchException
		java.util.Optional<Aula> aulaOpt = repositorio.findByIdWithReservas(aulaId.getId());
		if (aulaOpt.isPresent()) {
			repositorio.findByIdWithListaEspera(aulaId.getId()); // Carrega lista de espera na sessão
		}
		return aulaOpt.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aula.Aula.class));
	}

	@Override
	public List<br.com.forgefit.dominio.aula.Aula> listarTodas() {
		return repositorio.findAll().stream()
				.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aula.Aula.class))
				.toList();
	}

	@Override
	public List<br.com.forgefit.dominio.aula.Aula> buscarPorEspacoEPeriodo(
			br.com.forgefit.dominio.aula.enums.Espaco espaco, java.time.LocalDateTime inicio,
			java.time.LocalDateTime fim) {
		java.util.Date inicioDate = DateTimeConverter.toDate(inicio);
		java.util.Date fimDate = DateTimeConverter.toDate(fim);
		Espaco espacoJpa = Espaco.valueOf(espaco.name());
		return repositorio.buscarPorEspacoEPeriodo(espacoJpa, inicioDate, fimDate).stream()
				.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aula.Aula.class))
				.toList();
	}

	@Override
	public List<br.com.forgefit.dominio.aula.Aula> buscarPorProfessorEPeriodo(
			br.com.forgefit.dominio.professor.ProfessorId professorId, java.time.LocalDateTime inicio,
			java.time.LocalDateTime fim) {
		java.util.Date inicioDate = DateTimeConverter.toDate(inicio);
		java.util.Date fimDate = DateTimeConverter.toDate(fim);
		return repositorio.buscarPorProfessorEPeriodo(professorId.getId(), inicioDate, fimDate).stream()
				.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aula.Aula.class))
				.toList();
	}

	@Override
	public Integer obterProximoIdDisponivel() {
		Integer maxId = repositorio.findMaxId();
		return (maxId == null) ? 1 : maxId + 1;
	}
}
