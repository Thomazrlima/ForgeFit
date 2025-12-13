package br.com.forgefit.persistencia.jpa;

import br.com.forgefit.persistencia.jpa.enums.TipoDeCheckin;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "CHECKIN")
class Checkin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;

	@Column(name = "ALUNO_MATRICULA", nullable = false, length = 50)
	private String alunoMatricula;

	@Column(name = "GUILDA_ID")
	private Integer guildaId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "DATA_CHECKIN", nullable = false)
	private Date dataCheckin;

	@Column(name = "PONTUACAO_TOTAL")
	private Integer pontuacaoTotal = 0;

	@Column(name = "MENSAGEM", length = 1000)
	private String mensagem;

	@Column(name = "URL_IMAGEM", length = 500)
	private String urlImagem;

	@Enumerated(EnumType.STRING)
	@Column(name = "CONTEXTO_TIPO", nullable = false)
	private TipoDeCheckin tipo;

	@Column(name = "CONTEXTO_AULA_ID")
	private Integer aulaId;

	@Column(name = "CONTEXTO_PLANO_TREINO_ID")
	private Integer planoDeTreinoId;

	@Column(name = "CONTEXTO_LETRA_TREINO", length = 20)
	private String letraTreino;

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

	public Integer getGuildaId() {
		return guildaId;
	}

	public void setGuildaId(Integer guildaId) {
		this.guildaId = guildaId;
	}

	public Date getDataCheckin() {
		return dataCheckin;
	}

	public void setDataCheckin(Date dataCheckin) {
		this.dataCheckin = dataCheckin;
	}

	public Integer getPontuacaoTotal() {
		return pontuacaoTotal;
	}

	public void setPontuacaoTotal(Integer pontuacaoTotal) {
		this.pontuacaoTotal = pontuacaoTotal;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}

	public String getUrlImagem() {
		return urlImagem;
	}

	public void setUrlImagem(String urlImagem) {
		this.urlImagem = urlImagem;
	}

	public TipoDeCheckin getTipo() {
		return tipo;
	}

	public void setTipo(TipoDeCheckin tipo) {
		this.tipo = tipo;
	}

	public Integer getAulaId() {
		return aulaId;
	}

	public void setAulaId(Integer aulaId) {
		this.aulaId = aulaId;
	}

	public Integer getPlanoDeTreinoId() {
		return planoDeTreinoId;
	}

	public void setPlanoDeTreinoId(Integer planoDeTreinoId) {
		this.planoDeTreinoId = planoDeTreinoId;
	}

	public String getLetraTreino() {
		return letraTreino;
	}

	public void setLetraTreino(String letraTreino) {
		this.letraTreino = letraTreino;
	}
}

interface CheckinJpaRepository extends JpaRepository<Checkin, Integer> {

	List<Checkin> findByAlunoMatricula(String alunoMatricula);

	@org.springframework.data.jpa.repository.Query("""
		SELECT c FROM Checkin c
		WHERE c.guildaId = :guildaId
		  AND c.dataCheckin >= :inicio
		  AND c.dataCheckin <= :fim
		ORDER BY c.dataCheckin DESC
		""")
	List<Checkin> buscarPorGuildaEPeriodo(
		@org.springframework.data.repository.query.Param("guildaId") Integer guildaId,
		@org.springframework.data.repository.query.Param("inicio") java.util.Date inicio,
		@org.springframework.data.repository.query.Param("fim") java.util.Date fim);
	
	@org.springframework.data.jpa.repository.Query(value = """
		SELECT CASE WHEN COUNT(c.id) > 0 THEN true ELSE false END
		FROM checkin c
		WHERE c.aluno_matricula = :matricula
		  AND c.contexto_plano_treino_id = :planoId
		  AND c.contexto_letra_treino = :letra
		  AND CAST(c.data_checkin AS date) = :data
		""", nativeQuery = true)
	boolean existeCheckinDeTreino(
		@org.springframework.data.repository.query.Param("matricula") String matricula,
		@org.springframework.data.repository.query.Param("planoId") Integer planoId,
		@org.springframework.data.repository.query.Param("letra") String letra,
		@org.springframework.data.repository.query.Param("data") java.util.Date data);
	
	@org.springframework.data.jpa.repository.Query(value = """
		SELECT 
			c.id as id,
			c.aluno_matricula as alunoMatricula,
			a.nome as alunoNome,
			u.avatar as alunoAvatarUrl,
			CASE 
				WHEN c.contexto_tipo = 'TREINO' THEN 
					CONCAT('Treino ', COALESCE(c.contexto_letra_treino, ''))
				WHEN c.contexto_tipo = 'AULA' THEN 
					'Aula'
				ELSE 'Check-in'
			END as nomeContexto,
			c.mensagem as mensagem,
			c.url_imagem as urlImagem,
			c.data_checkin as dataCheckin,
			c.pontuacao_total as pontuacao
		FROM checkin c
		JOIN aluno a ON a.matricula = c.aluno_matricula
		LEFT JOIN usuarios_mock u ON CAST(u.id AS VARCHAR) = a.user_id AND u.role = 'student'
		WHERE c.guilda_id = :guildaId
		ORDER BY c.data_checkin DESC
		""", nativeQuery = true)
	java.util.List<br.com.forgefit.aplicacao.guilda.CheckinResumo> buscarCheckinsPorGuildaId(@org.springframework.data.repository.query.Param("guildaId") Integer guildaId);
}

@org.springframework.stereotype.Repository("checkinRepositorio")
class CheckinRepositorioImpl implements br.com.forgefit.dominio.checkin.CheckinRepositorio {
	@org.springframework.beans.factory.annotation.Autowired
	CheckinJpaRepository repositorio;
	
	@org.springframework.beans.factory.annotation.Autowired
	JpaMapeador mapeador;

	@Override
	public void salvar(br.com.forgefit.dominio.checkin.Checkin checkin) {
		Checkin checkinJpa = mapeador.map(checkin, Checkin.class);
		
		// SEMPRE deixar o banco gerar o ID para novos check-ins
		// O contador do domínio (AtomicInteger) reinicia a cada inicialização da aplicação
		// e pode gerar IDs que já existem no banco, causando sobrescrita
		// Por isso, sempre setamos como null para garantir que o banco gere um ID único via SERIAL
		checkinJpa.setId(null);
		
		// O JPA vai fazer INSERT (não UPDATE) porque o ID é null
		// e o @GeneratedValue(strategy = GenerationType.IDENTITY) vai gerar um novo ID
		repositorio.save(checkinJpa);
	}

	@Override
	public List<br.com.forgefit.dominio.checkin.Checkin> buscarPorAluno(br.com.forgefit.dominio.aluno.Matricula alunoMatricula) {
		return repositorio.findByAlunoMatricula(alunoMatricula.getValor()).stream()
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.checkin.Checkin.class))
			.toList();
	}

	@Override
	public boolean existeCheckinDeTreino(
			br.com.forgefit.dominio.aluno.Matricula alunoMatricula,
			br.com.forgefit.dominio.treino.PlanoDeTreinoId planoDeTreinoId,
			br.com.forgefit.dominio.treino.enums.LetraDoTreino letra,
			java.time.LocalDate data) {
		java.util.Date dataDate = DateTimeConverter.toDate(data);
		return repositorio.existeCheckinDeTreino(
			alunoMatricula.getValor(),
			planoDeTreinoId.getId(),
			letra.name(),
			dataDate);
	}

	@Override
	public List<br.com.forgefit.dominio.checkin.Checkin> buscarPorGuildaEPeriodo(
			br.com.forgefit.dominio.guilda.GuildaId guildaId,
			java.time.LocalDate inicio,
			java.time.LocalDate fim) {
		java.util.Date inicioDate = DateTimeConverter.toDate(inicio);
		java.util.Date fimDate = DateTimeConverter.toDate(fim);
		return repositorio.buscarPorGuildaEPeriodo(guildaId.getId(), inicioDate, fimDate).stream()
			.map(jpa -> mapeador.map(jpa, br.com.forgefit.dominio.checkin.Checkin.class))
			.toList();
	}
}
