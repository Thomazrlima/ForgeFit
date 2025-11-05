package br.com.forgefit.persistencia.jpa.adapters;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.forgefit.dominio.guilda.CodigoConvite;
import br.com.forgefit.dominio.guilda.Guilda;
import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.guilda.GuildaRepositorio;
import br.com.forgefit.persistencia.jpa.guilda.GuildaRepositorioJpa;

@Component("guildaRepositorio")
public class GuildaRepositorioAdapter implements GuildaRepositorio {
	
	@Autowired
	private GuildaRepositorioJpa repositorioJpa;

	@Override
	public void salvar(Guilda guilda) {
		throw new UnsupportedOperationException("Método não implementado");
	}

	@Override
	public Optional<Guilda> obterPorId(GuildaId id) {
		return Optional.empty();
	}

	@Override
	public List<Guilda> listarGuildas() {
		return List.of();
	}

	@Override
	public Optional<Guilda> buscarPorCodigoConvite(CodigoConvite codigo) {
		return Optional.empty();
	}

	@Override
	public Optional<Guilda> buscarPorNome(String nome) {
		return Optional.empty();
	}
}
