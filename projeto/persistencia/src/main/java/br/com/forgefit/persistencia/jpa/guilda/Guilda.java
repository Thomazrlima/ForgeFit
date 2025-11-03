package br.com.forgefit.persistencia.jpa.guilda;

import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.persistencia.jpa.enums.StatusGuilda;
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
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "GUI_GUILDA")
public class Guilda {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "GUI_ID")
	private Integer id;
	
	@Column(name = "GUI_NOME", nullable = false, unique = true, length = 255)
	private String nome;
	
	@Column(name = "GUI_DESCRICAO", length = 1000)
	private String descricao;
	
	@Column(name = "GUI_IMAGEM_URL", length = 500)
	private String imagemURL;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "GUI_STATUS", nullable = false)
	private StatusGuilda status = StatusGuilda.ATIVA;
	
	@Column(name = "GUI_CODIGO_CONVITE", nullable = false, unique = true, length = 50)
	private String codigoConvite;
	
	@Column(name = "GUI_MESTRE_MATRICULA", nullable = false, length = 50)
	private String mestreMatricula;
	
	@ElementCollection
	@CollectionTable(name = "GME_GUILDA_MEMBROS", joinColumns = @JoinColumn(name = "GUI_ID"))
	@Column(name = "GME_ALUNO_MATRICULA", length = 50)
	@OrderColumn(name = "GME_POSICAO")
	private List<String> membrosMatriculas = new ArrayList<>();
	
	@Column(name = "GUI_PONTUACAO_TOTAL")
	private Integer pontuacaoTotal = 0;

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

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getImagemURL() {
		return imagemURL;
	}

	public void setImagemURL(String imagemURL) {
		this.imagemURL = imagemURL;
	}

	public StatusGuilda getStatus() {
		return status;
	}

	public void setStatus(StatusGuilda status) {
		this.status = status;
	}

	public String getCodigoConvite() {
		return codigoConvite;
	}

	public void setCodigoConvite(String codigoConvite) {
		this.codigoConvite = codigoConvite;
	}

	public String getMestreMatricula() {
		return mestreMatricula;
	}

	public void setMestreMatricula(String mestreMatricula) {
		this.mestreMatricula = mestreMatricula;
	}

	public List<String> getMembrosMatriculas() {
		return membrosMatriculas;
	}

	public void setMembrosMatriculas(List<String> membrosMatriculas) {
		this.membrosMatriculas = membrosMatriculas;
	}

	public Integer getPontuacaoTotal() {
		return pontuacaoTotal;
	}

	public void setPontuacaoTotal(Integer pontuacaoTotal) {
		this.pontuacaoTotal = pontuacaoTotal;
	}
}
