package br.com.forgefit.persistencia.jpa.guilda;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.forgefit.persistencia.jpa.enums.StatusGuilda;

public interface GuildaRepositorio extends JpaRepository<Guilda, Integer> {
	
	Guilda findByCodigoConvite(String codigoConvite);
	
	Guilda findByNome(String nome);
	
	List<Guilda> findByStatus(StatusGuilda status);
}
