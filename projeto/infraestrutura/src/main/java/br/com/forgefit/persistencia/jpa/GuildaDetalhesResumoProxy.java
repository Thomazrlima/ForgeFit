package br.com.forgefit.persistencia.jpa;

import br.com.forgefit.aplicacao.guilda.GuildaDetalhesResumo;
import br.com.forgefit.aplicacao.guilda.MembroResumo;

import java.util.List;

/**
 * Proxy que implementa o padrão Proxy (GoF) para GuildaDetalhesResumo.
 * 
 * Controla o acesso aos dados "pesados" (pontuação total e membros) através
 * de lazy-loading: esses dados só são carregados do banco quando realmente
 * acessados via getters, e são cacheados para evitar múltiplas consultas.
 * 
 * Padrão Proxy:
 * - Subject: GuildaDetalhesResumo (interface)
 * - Proxy: GuildaDetalhesResumoProxy (esta classe)
 * - RealSubject (conceitual): consultas pesadas ao banco (calcularPontuacaoTotalPorGuildaId, buscarMembrosPorGuildaId)
 */
class GuildaDetalhesResumoProxy implements GuildaDetalhesResumo {
	
	// Dados "baratos" armazenados diretamente (não precisam de lazy-load)
	private final Integer id;
	private final String nome;
	private final String descricao;
	private final String imagemUrl;
	private final String codigoConvite;
	private final String mestreMatricula;
	
	// Dados "pesados" - carregados sob demanda (lazy-load)
	private final Integer guildaId;
	private final GuildaJpaRepository repositorio;
	
	// Cache para evitar múltiplas consultas ao banco
	private Integer pontuacaoCache;
	private List<MembroResumo> membrosCache;
	
	// Flag para indicar se os dados já foram carregados
	private boolean pontuacaoCarregada = false;
	private boolean membrosCarregados = false;
	
	/**
	 * Construtor do Proxy.
	 * 
	 * @param guilda Entidade JPA com os dados básicos da guilda
	 * @param repositorio Repositório para realizar consultas pesadas quando necessário
	 * @param guildaId ID da guilda para consultas de pontuação e membros
	 */
	GuildaDetalhesResumoProxy(GuildaJpa guilda, GuildaJpaRepository repositorio, Integer guildaId) {
		this.id = guilda.id;
		this.nome = guilda.nome;
		this.descricao = guilda.descricao;
		this.imagemUrl = guilda.imagemURL;
		this.codigoConvite = guilda.codigoConvite;
		this.mestreMatricula = guilda.mestreMatricula;
		this.guildaId = guildaId;
		this.repositorio = repositorio;
	}
	
	@Override
	public Integer getId() {
		return id;
	}
	
	@Override
	public String getNome() {
		return nome;
	}
	
	@Override
	public String getDescricao() {
		return descricao;
	}
	
	@Override
	public String getImagemUrl() {
		return imagemUrl;
	}
	
	@Override
	public String getCodigoConvite() {
		return codigoConvite;
	}
	
	@Override
	public String getMestreMatricula() {
		return mestreMatricula;
	}
	
	/**
	 * Lazy-load da pontuação total.
	 * A primeira chamada executa a consulta ao banco; chamadas subsequentes
	 * retornam o valor em cache.
	 */
	@Override
	public Integer getPontuacaoTotal() {
		if (!pontuacaoCarregada) {
			// Primeira chamada: carrega do banco (lazy-load)
			Integer pontuacao = repositorio.calcularPontuacaoTotalPorGuildaId(guildaId);
			this.pontuacaoCache = pontuacao == null ? Integer.valueOf(0) : pontuacao;
			this.pontuacaoCarregada = true;
		}
		// Chamadas subsequentes: retorna do cache
		return pontuacaoCache;
	}
	
	/**
	 * Lazy-load da lista de membros.
	 * A primeira chamada executa a consulta ao banco; chamadas subsequentes
	 * retornam a lista em cache.
	 */
	@Override
	public List<MembroResumo> getMembros() {
		if (!membrosCarregados) {
			// Primeira chamada: carrega do banco (lazy-load)
			this.membrosCache = repositorio.buscarMembrosPorGuildaId(guildaId);
			this.membrosCarregados = true;
		}
		// Chamadas subsequentes: retorna do cache
		return membrosCache;
	}
}

