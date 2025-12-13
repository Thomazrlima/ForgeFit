package br.com.forgefit.persistencia.jpa;

import java.util.Date;

import br.com.forgefit.persistencia.jpa.enums.*;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;

@Entity
@Table(name = "AVALIACAO")
class Avaliacao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@Column(name = "ALUNO_MATRICULA", nullable = false, length = 50)
	private String alunoMatricula;

	@ManyToOne
	@JoinColumn(name = "PROFESSOR_ID", nullable = false)
	private ProfessorJpa professor;

	@Column(name = "AULA_ID", nullable = false)
	private Integer aulaId;

	@Temporal(TemporalType.DATE)
	@Column(name = "DATA_OCORRENCIA_AULA", nullable = false)
	private Date dataOcorrenciaAula;

	@Embedded
	private Notas notas;

	@Column(name = "COMENTARIO", length = 1000)
	private String comentario;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "DATA_AVALIACAO", nullable = false)
	private Date dataAvaliacao;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAlunoMatricula() {
		return alunoMatricula;
	}

	public void setAlunoMatricula(String alunoMatricula) {
		this.alunoMatricula = alunoMatricula;
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

	public Integer getAulaId() {
		return aulaId;
	}

	public void setAulaId(Integer aulaId) {
		this.aulaId = aulaId;
	}

	public Date getDataOcorrenciaAula() {
		return dataOcorrenciaAula;
	}

	public void setDataOcorrenciaAula(Date dataOcorrenciaAula) {
		this.dataOcorrenciaAula = dataOcorrenciaAula;
	}

	public Notas getNotas() {
		return notas;
	}

	public void setNotas(Notas notas) {
		this.notas = notas;
	}

	public String getComentario() {
		return comentario;
	}

	public void setComentario(String comentario) {
		this.comentario = comentario;
	}

	public Date getDataAvaliacao() {
		return dataAvaliacao;
	}

	public void setDataAvaliacao(Date dataAvaliacao) {
		this.dataAvaliacao = dataAvaliacao;
	}

	@Embeddable
	static class Notas {

		@Column(name = "NOTA_PONTUALIDADE")
		private Integer pontualidade;

		@Column(name = "NOTA_DIDATICA")
		private Integer didatica;

		@Column(name = "NOTA_ATENCAO")
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
}

interface AvaliacaoJpaRepository extends JpaRepository<Avaliacao, Integer> {

	@org.springframework.data.jpa.repository.Query("""
			select a
			  from Avaliacao a
			  where a.professor.id = :professorId
			""")
	java.util.List<Avaliacao> findByProfessorId(Integer professorId);

	java.util.List<Avaliacao> findByAlunoMatricula(String alunoMatricula);

	boolean existsByAlunoMatriculaAndAulaIdAndDataOcorrenciaAula(
			String alunoMatricula, Integer aulaId, Date dataOcorrencia);

	@org.springframework.data.jpa.repository.Query("SELECT COALESCE(MAX(a.id), 0) FROM Avaliacao a")
	Integer findMaxId();
}

@org.springframework.stereotype.Repository("avaliacaoRepositorio")
class AvaliacaoRepositorioImpl implements br.com.forgefit.dominio.avaliacao.AvaliacaoRepositorio {
	@org.springframework.beans.factory.annotation.Autowired
	AvaliacaoJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@Override
	public void salvar(br.com.forgefit.dominio.avaliacao.Avaliacao avaliacao) {
		Avaliacao avaliacaoJpa = mapeador.map(avaliacao, Avaliacao.class);
		// Define o ID como null para que o banco de dados gere automaticamente
		// o próximo ID, evitando conflitos com dados mockados existentes
		avaliacaoJpa.setId(null);
		repositorio.save(avaliacaoJpa);
	}

	@Override
	public java.util.Optional<br.com.forgefit.dominio.avaliacao.Avaliacao> obterPorId(br.com.forgefit.dominio.avaliacao.AvaliacaoId id) {
		return repositorio.findById(id.getId())
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.avaliacao.Avaliacao.class));
	}

	@Override
	public java.util.List<br.com.forgefit.dominio.avaliacao.Avaliacao> buscarPorProfessor(br.com.forgefit.dominio.professor.ProfessorId professorId) {
		return repositorio.findByProfessorId(professorId.getId()).stream()
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.avaliacao.Avaliacao.class))
			.toList();
	}

	@Override
	public boolean existeAvaliacao(
			br.com.forgefit.dominio.aluno.Matricula alunoMatricula, 
			br.com.forgefit.dominio.aula.AulaId aulaId, 
			java.time.LocalDate dataDaOcorrencia) {
		Date dataDate = DateTimeConverter.toDate(dataDaOcorrencia);
		return repositorio.existsByAlunoMatriculaAndAulaIdAndDataOcorrenciaAula(
			alunoMatricula.getValor(),
			aulaId.getId(),
			dataDate);
	}
}
