package br.com.forgefit.persistencia.jpa.guilda;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.forgefit.aplicacao.guilda.GuildaRepositorioAplicacao;
import br.com.forgefit.aplicacao.guilda.GuildaResumo;
import br.com.forgefit.persistencia.jpa.enums.StatusGuilda;

public interface GuildaRepositorioJpa extends JpaRepository<Guilda, Integer>, GuildaRepositorioAplicacao {
	
	Guilda findByCodigoConvite(String codigoConvite);
	
	Guilda findByNome(String nome);
	
	List<Guilda> findByStatus(StatusGuilda status);
	
	@Override
	@Query("""
		SELECT g.id as id,
		       g.nome as nome,
		       g.descricao as descricao,
		       g.imagemURL as imagemURL,
		       g.pontuacaoTotal as pontuacaoTotal,
		       SIZE(g.membrosMatriculas) as numeroMembros
		FROM Guilda g
		WHERE g.status = 'ATIVA'
		ORDER BY g.pontuacaoTotal DESC, g.nome ASC
		""")
	List<GuildaResumo> listarGuildasAtivasOrdenadas();
	
	@Override
	@Query("""
		SELECT g.id as id,
		       g.nome as nome,
		       g.descricao as descricao,
		       g.imagemURL as imagemURL,
		       g.pontuacaoTotal as pontuacaoTotal,
		       SIZE(g.membrosMatriculas) as numeroMembros
		FROM Guilda g
		WHERE g.nome = :nome
		""")
	GuildaResumo buscarPorNome(@Param("nome") String nome);
}
