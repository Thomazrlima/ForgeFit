package br.com.forgefit.dominio.torneio;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import br.com.forgefit.dominio.torneio.enums.PosicaoDoPodio;

public class TorneioService {
    private final TorneioRepositorio torneioRepositorio;

    public TorneioService(TorneioRepositorio torneioRepositorio) {
        notNull(torneioRepositorio, "O repositório de torneios não pode ser nulo");
        this.torneioRepositorio = torneioRepositorio;
    }

    public Torneio criarTorneio(String nome, LocalDate dataInicio, LocalDate dataFim, 
                                Premio p1, Premio p2, Premio p3) {
        notNull(nome, "O nome do torneio não pode ser nulo");
        notNull(dataInicio, "A data de início não pode ser nula");
        notNull(dataFim, "A data de fim não pode ser nula");

        // Usa id=0 para novos torneios, o JPA gerará o ID real
        var torneioId = new TorneioId(0);
        var torneio = new Torneio(torneioId, nome, dataInicio, dataFim);

        if (p1 != null) {
            torneio.definirPremioDoPodio(PosicaoDoPodio.PRIMEIRO_LUGAR, p1);
        }
        if (p2 != null) {
            torneio.definirPremioDoPodio(PosicaoDoPodio.SEGUNDO_LUGAR, p2);
        }
        if (p3 != null) {
            torneio.definirPremioDoPodio(PosicaoDoPodio.TERCEIRO_LUGAR, p3);
        }

        // O repositório retornará o torneio com o ID gerado pelo banco
        return torneioRepositorio.salvar(torneio);
    }

    public Torneio editarTorneio(TorneioId torneioId, String novoNome, LocalDate novaDataInicio, 
                             LocalDate novaDataFim, Premio novoP1, Premio novoP2, Premio novoP3) {
        notNull(torneioId, "O id do torneio não pode ser nulo");

        var torneio = torneioRepositorio.obterPorId(torneioId)
            .orElseThrow(() -> new IllegalArgumentException("Torneio não encontrado"));

        if (novoNome != null) {
            torneio.setNome(novoNome);
        }
        if (novaDataInicio != null && novaDataFim != null) {
            torneio.atualizarDatas(novaDataInicio, novaDataFim);
        }
        if (novoP1 != null) {
            torneio.definirPremioDoPodio(PosicaoDoPodio.PRIMEIRO_LUGAR, novoP1);
        }
        if (novoP2 != null) {
            torneio.definirPremioDoPodio(PosicaoDoPodio.SEGUNDO_LUGAR, novoP2);
        }
        if (novoP3 != null) {
            torneio.definirPremioDoPodio(PosicaoDoPodio.TERCEIRO_LUGAR, novoP3);
        }

        return torneioRepositorio.salvar(torneio);
    }

    public void cancelarTorneio(TorneioId torneioId) {
        notNull(torneioId, "O id do torneio não pode ser nulo");

        var torneio = torneioRepositorio.obterPorId(torneioId)
            .orElseThrow(() -> new IllegalArgumentException("Torneio não encontrado"));

        torneio.cancelar();
        torneioRepositorio.salvar(torneio);
    }

    public void definirPremioDoPodio(TorneioId torneioId, PosicaoDoPodio posicao, Premio premio) {
        notNull(torneioId, "O id do torneio não pode ser nulo");
        notNull(posicao, "A posição do pódio não pode ser nula");
        notNull(premio, "O prêmio não pode ser nulo");

        var torneio = torneioRepositorio.obterPorId(torneioId)
            .orElseThrow(() -> new IllegalArgumentException("Torneio não encontrado"));

        torneio.definirPremioDoPodio(posicao, premio);
        torneioRepositorio.salvar(torneio);
    }

    public void finalizarTorneio(TorneioId torneioId) {
        notNull(torneioId, "O id do torneio não pode ser nulo");

        var torneio = torneioRepositorio.obterPorId(torneioId)
            .orElseThrow(() -> new IllegalArgumentException("Torneio não encontrado"));

        torneio.finalizar();
        torneioRepositorio.salvar(torneio);
    }

    public Torneio obter(TorneioId id) {
        notNull(id, "O id do torneio não pode ser nulo");
        return torneioRepositorio.obterPorId(id)
            .orElseThrow(() -> new IllegalArgumentException("Torneio não encontrado"));
    }

    public void salvar(Torneio torneio) {
        notNull(torneio, "O torneio não pode ser nulo");
        torneioRepositorio.salvar(torneio);
    }
}

