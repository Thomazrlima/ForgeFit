package br.com.forgefit.persistencia.jpa.adapters;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.forgefit.dominio.torneio.Torneio;
import br.com.forgefit.dominio.torneio.TorneioId;
import br.com.forgefit.dominio.torneio.TorneioRepositorio;
import br.com.forgefit.persistencia.jpa.torneio.TorneioRepositorioJpa;

@Component("torneioRepositorio")
public class TorneioRepositorioAdapter implements TorneioRepositorio {
	
	@Autowired
	private TorneioRepositorioJpa repositorioJpa;

	@Override
	public void salvar(Torneio torneio) {
		throw new UnsupportedOperationException("Método não implementado");
	}

	@Override
	public Optional<Torneio> obterPorId(TorneioId id) {
		return Optional.empty();
	}

	@Override
	public Optional<Torneio> buscarTorneioAtivo(LocalDate dataAtual) {
		return Optional.empty();
	}

	@Override
	public List<Torneio> listarTorneios() {
		return List.of();
	}
}
