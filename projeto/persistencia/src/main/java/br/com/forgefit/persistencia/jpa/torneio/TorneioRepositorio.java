package br.com.forgefit.persistencia.jpa.torneio;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.forgefit.persistencia.jpa.enums.StatusTorneio;

public interface TorneioRepositorio extends JpaRepository<Torneio, Integer> {
	
	List<Torneio> findByStatus(StatusTorneio status);
	
	@Query("""
			select t
			  from Torneio t
			  where t.status = 'ATIVO'
			    and :dataAtual between t.dataInicio and t.dataFim
			""")
	Torneio buscarTorneioAtivo(Date dataAtual);
}
