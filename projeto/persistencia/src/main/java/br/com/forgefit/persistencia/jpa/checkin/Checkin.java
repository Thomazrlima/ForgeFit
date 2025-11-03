package br.com.forgefit.persistencia.jpa.checkin;

import java.util.Date;

import br.com.forgefit.persistencia.jpa.enums.TipoDeCheckin;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "CHK_CHECKIN")
public class Checkin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CHK_ID")
	private Integer id;
	
	@Column(name = "CHK_ALUNO_MATRICULA", nullable = false, length = 50)
	private String alunoMatricula;
	
	@Column(name = "CHK_GUILDA_ID")
	private Integer guildaId;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CHK_DATA_CHECKIN", nullable = false)
	private Date dataCheckin;
	
	@Column(name = "CHK_PONTUACAO_TOTAL")
	private Integer pontuacaoTotal = 0;
	
	@Column(name = "CHK_MENSAGEM", length = 1000)
	private String mensagem;
	
	@Column(name = "CHK_URL_IMAGEM", length = 500)
	private String urlImagem;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "CHK_TIPO", nullable = false)
	private TipoDeCheckin tipo;
	
	@Column(name = "CHK_AULA_ID")
	private Integer aulaId;
	
	@Column(name = "CHK_PLANO_TREINO_ID")
	private Integer planoDeTreinoId;
	
	@Column(name = "CHK_LETRA_TREINO", length = 20)
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
