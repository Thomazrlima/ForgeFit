package br.com.forgefit.persistencia.jpa;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.forgefit.persistencia.jpa.enums.*;
import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import org.springframework.data.jpa.repository.JpaRepository;


@Entity
@Table(name = "AUL_AULA")
class Aula {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "AUL_ID")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "AUL_PROFESSOR_ID", nullable = false)
	private ProfessorJpa professor;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "AUL_MODALIDADE", nullable = false)
	private Modalidade modalidade;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "AUL_ESPACO", nullable = false)
	private Espaco espaco;
	
	@Column(name = "AUL_CAPACIDADE", nullable = false)
	private Integer capacidade;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "AUL_INICIO", nullable = false)
	private Date inicio;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "AUL_FIM", nullable = false)
	private Date fim;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "AUL_STATUS", nullable = false)
	private StatusAula status = StatusAula.ATIVA;
	
	@Embedded
	private Recorrencia recorrencia;
	
	@OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "OEX_POSICAO")
	private List<OcorrenciaExcecao> excecoes = new ArrayList<>();
	
	@OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "RES_POSICAO")
	private List<Reserva> reservas = new ArrayList<>();
	
	@OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
	@OrderColumn(name = "LES_POSICAO")
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
	
	public Integer getProfessorId() {
		return professor != null ? professor.id : null;
	}

	public void setProfessorId(Integer professorId) {
		if (this.professor == null) {
			this.professor = new ProfessorJpa();
		}
		this.professor.id = professorId;
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
	@Embeddable
	static class Recorrencia {

		@Enumerated(EnumType.STRING)
		@Column(name = "AUL_RECOR_TIPO")
		private TipoRecorrencia tipo;

		@ElementCollection
		@CollectionTable(name = "RCD_RECORRENCIA_DIAS", joinColumns = @JoinColumn(name = "AUL_ID"))
		@Column(name = "RCD_DIA_SEMANA")
		@Enumerated(EnumType.STRING)
		private List<DiaDaSemana> diasDaSemana;

		@Temporal(TemporalType.DATE)
		@Column(name = "AUL_RECOR_DATA_FIM")
		private Date dataFimRecorrencia;

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
	@Table(name = "OEX_OCORRENCIA_EXCECAO")
	static class OcorrenciaExcecao {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "OEX_ID")
		private Integer id;

		@ManyToOne
		@JoinColumn(name = "AUL_ID", nullable = false)
		private Aula aula;

		@Temporal(TemporalType.DATE)
		@Column(name = "OEX_DATA_ORIGINAL", nullable = false)
		private Date dataOriginalOcorrencia;

		@Column(name = "OEX_CANCELADA", nullable = false)
		private Boolean cancelada = false;

		@Temporal(TemporalType.TIMESTAMP)
		@Column(name = "OEX_NOVO_INICIO")
		private Date novoInicio;

		@Temporal(TemporalType.TIMESTAMP)
		@Column(name = "OEX_NOVO_FIM")
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
	@Table(name = "LES_LISTA_ESPERA")
	static class PosicaoListaDeEspera {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "LES_ID")
		private Integer id;

		@ManyToOne
		@JoinColumn(name = "AUL_ID", nullable = false)
		private Aula aula;

		@Column(name = "LES_ALUNO_MATRICULA", nullable = false, length = 50)
		private String alunoMatricula;

		@Temporal(TemporalType.TIMESTAMP)
		@Column(name = "LES_TIMESTAMP_ENTRADA", nullable = false)
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
	@Table(name = "RES_RESERVA")
	static class Reserva {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "RES_ID")
		private Integer id;

		@ManyToOne
		@JoinColumn(name = "AUL_ID", nullable = false)
		private Aula aula;

		@Column(name = "RES_ALUNO_MATRICULA", nullable = false, length = 50)
		private String alunoMatricula;

		@Temporal(TemporalType.TIMESTAMP)
		@Column(name = "RES_DATA_RESERVA", nullable = false)
		private Date dataReserva;

		@Enumerated(EnumType.STRING)
		@Column(name = "RES_STATUS", nullable = false)
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
		SELECT r.id as reservaId,
			   r.aula.id as aulaId,
			   r.aula.inicio as inicioAula,
			   r.aula.fim as fimAula,
			   r.aula.modalidade as modalidade,
			   r.aula.espaco as espaco,
			   r.aula.professor.nome as nomeProfessor,
			   r.alunoMatricula as alunoMatricula,
			   r.dataReserva as dataReserva,
			   r.status as statusReserva
		FROM br.com.forgefit.persistencia.jpa.Aula$Reserva r
		WHERE r.alunoMatricula = :#{#matricula.valor}
		  AND r.status = 'CONFIRMADA'
		  AND r.aula.inicio > CURRENT_TIMESTAMP
		ORDER BY r.aula.inicio ASC
		""")
	List<br.com.forgefit.aplicacao.aula.CancelamentoResumo> buscarReservasConfirmadas(@org.springframework.data.repository.query.Param("matricula") br.com.forgefit.dominio.aluno.Matricula matricula);
}

@org.springframework.stereotype.Repository
class ReservaRepositorioImpl implements br.com.forgefit.aplicacao.aula.ReservaRepositorioAplicacao {
	@org.springframework.beans.factory.annotation.Autowired
	ReservaJpaRepository repositorio;

	@Override
	public List<br.com.forgefit.aplicacao.aula.CancelamentoResumo> buscarReservasConfirmadas(br.com.forgefit.dominio.aluno.Matricula matricula) {
		return repositorio.buscarReservasConfirmadas(matricula);
	}
}

// Interfaces e classes que estavam em AlunoRepositorioJpa.java - movidas para cá
interface AulaJpaRepository extends JpaRepository<Aula, Integer> {

	List<Aula> findByStatus(StatusAula status);

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
}

@org.springframework.stereotype.Repository("aulaRepositorio")
class AulaRepositorioImpl implements br.com.forgefit.dominio.aula.AulaRepositorio {
	@org.springframework.beans.factory.annotation.Autowired
	AulaJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@Override
	public void salvar(br.com.forgefit.dominio.aula.Aula aula) {
		Aula aulaJpa = mapeador.map(aula, Aula.class);
		repositorio.save(aulaJpa);
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.aula.Aula> obterPorId(br.com.forgefit.dominio.aula.AulaId aulaId) {
		return repositorio.findById(aulaId.getId())
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aula.Aula.class));
	}

	@Override
	public List<br.com.forgefit.dominio.aula.Aula> listarTodas() {
		return repositorio.findAll().stream()
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aula.Aula.class))
			.toList();
	}

	@Override
	public List<br.com.forgefit.dominio.aula.Aula> buscarPorEspacoEPeriodo(br.com.forgefit.dominio.aula.enums.Espaco espaco, java.time.LocalDateTime inicio, java.time.LocalDateTime fim) {
		java.util.Date inicioDate = DateTimeConverter.toDate(inicio);
		java.util.Date fimDate = DateTimeConverter.toDate(fim);
		Espaco espacoJpa = Espaco.valueOf(espaco.name());
		return repositorio.buscarPorEspacoEPeriodo(espacoJpa, inicioDate, fimDate).stream()
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aula.Aula.class))
			.toList();
	}

	@Override
	public List<br.com.forgefit.dominio.aula.Aula> buscarPorProfessorEPeriodo(br.com.forgefit.dominio.professor.ProfessorId professorId, java.time.LocalDateTime inicio, java.time.LocalDateTime fim) {
		java.util.Date inicioDate = DateTimeConverter.toDate(inicio);
		java.util.Date fimDate = DateTimeConverter.toDate(fim);
		return repositorio.buscarPorProfessorEPeriodo(professorId.getId(), inicioDate, fimDate).stream()
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.aula.Aula.class))
			.toList();
	}
}
