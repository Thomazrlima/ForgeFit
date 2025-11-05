package br.com.forgefit.persistencia.jpa.torneio;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.forgefit.aplicacao.torneio.TorneioRepositorioAplicacao;
import br.com.forgefit.aplicacao.torneio.TorneioResumo;
import br.com.forgefit.persistencia.jpa.enums.StatusTorneio;

public interface TorneioRepositorioJpa extends JpaRepository<Torneio, Integer>, TorneioRepositorioAplicacao {
	
	List<Torneio> findByStatus(StatusTorneio status);
	
	@Query("""
			select t
			  from Torneio t
			  where t.status = 'ATIVO'
			    and :dataAtual between t.dataInicio and t.dataFim
			""")
	Torneio buscarTorneioAtivo(Date dataAtual);
	
	@Override
	@Query("""
		SELECT t.id as id,
		       t.nome as nome,
		       t.dataInicio as dataInicio,
		       t.dataFim as dataFim,
		       t.premioPrimeiroLugar.nome as nomePremio1,
		       t.premioSegundoLugar.nome as nomePremio2,
		       t.premioTerceiroLugar.nome as nomePremio3
		FROM Torneio t
		WHERE t.status = 'ATIVO'
		ORDER BY t.dataInicio DESC
		""")
	List<TorneioResumo> listarTorneiosAtivos();
	
	@Override
	@Query("""
		SELECT t.id as id,
		       t.nome as nome,
		       t.dataInicio as dataInicio,
		       t.dataFim as dataFim,
		       t.premioPrimeiroLugar.nome as nomePremio1,
		       t.premioSegundoLugar.nome as nomePremio2,
		       t.premioTerceiroLugar.nome as nomePremio3
		FROM Torneio t
		WHERE t.status = 'FINALIZADO'
		ORDER BY t.dataFim DESC
		""")
	List<TorneioResumo> listarTorneiosFinalizados();
}
