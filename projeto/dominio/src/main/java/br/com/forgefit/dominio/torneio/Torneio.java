package br.com.forgefit.dominio.torneio;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.torneio.enums.PosicaoDoPodio;
import br.com.forgefit.dominio.torneio.enums.StatusTorneio;

public class Torneio {
    private final TorneioId id;
    private String nome;
    private Premio premioPrimeiroLugar;
    private Premio premioSegundoLugar;
    private Premio premioTerceiroLugar;
    private StatusTorneio status;
    private LocalDate dataInicio;
    private LocalDate dataFim;
    private List<PosicaoRanking> rankingFinal;
    private Map<GuildaId, Integer> pontuacoesPorGuilda;

    public Torneio(TorneioId id, String nome, LocalDate dataInicio, LocalDate dataFim) {
        notNull(id, "O id não pode ser nulo");
        this.id = id;

        setNome(nome);
        setDatas(dataInicio, dataFim);
        
        this.status = StatusTorneio.PLANEJADO;
        this.rankingFinal = new ArrayList<>();
        this.pontuacoesPorGuilda = new HashMap<>();
    }

    public TorneioId getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        notNull(nome, "O nome não pode ser nulo");
        notBlank(nome, "O nome não pode estar em branco");
        this.nome = nome;
    }

    public Premio getPremioPrimeiroLugar() {
        return premioPrimeiroLugar;
    }

    public Premio getPremioSegundoLugar() {
        return premioSegundoLugar;
    }

    public Premio getPremioTerceiroLugar() {
        return premioTerceiroLugar;
    }

    public StatusTorneio getStatus() {
        return status;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public LocalDate getDataFim() {
        return dataFim;
    }

    public List<PosicaoRanking> getRankingFinal() {
        return new ArrayList<>(rankingFinal);
    }

    private void setDatas(LocalDate dataInicio, LocalDate dataFim) {
        notNull(dataInicio, "A data de início não pode ser nula");
        notNull(dataFim, "A data de fim não pode ser nula");
        
        if (dataInicio.isAfter(dataFim)) {
            throw new IllegalArgumentException("Datas do torneio são inválidas");
        }
        
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    public void definirPremioDoPodio(PosicaoDoPodio posicao, Premio premio) {
        notNull(posicao, "A posição do pódio não pode ser nula");
        notNull(premio, "O prêmio não pode ser nulo");

        if (status != StatusTorneio.PLANEJADO) {
            throw new IllegalStateException("Não é possível alterar os prêmios de um torneio ativo");
        }

        switch (posicao) {
            case PRIMEIRO_LUGAR:
                this.premioPrimeiroLugar = premio;
                break;
            case SEGUNDO_LUGAR:
                this.premioSegundoLugar = premio;
                break;
            case TERCEIRO_LUGAR:
                this.premioTerceiroLugar = premio;
                break;
        }
    }

    public void ativar() {
        if (status != StatusTorneio.PLANEJADO) {
            throw new IllegalStateException("Apenas torneios planejados podem ser ativados");
        }
        this.status = StatusTorneio.ATIVO;
    }

    public void cancelar() {
        if (status == StatusTorneio.FINALIZADO) {
            throw new IllegalStateException("Torneios finalizados não podem ser cancelados");
        }
        this.status = StatusTorneio.CANCELADO;
    }

    public void registrarCheckin(GuildaId guildaId, int pontos) {
        notNull(guildaId, "O id da guilda não pode ser nulo");
        
        if (status != StatusTorneio.ATIVO) {
            return; // Ignora check-ins se o torneio não estiver ativo
        }

        pontuacoesPorGuilda.merge(guildaId, pontos, Integer::sum);
    }

    public void finalizar() {
        if (status != StatusTorneio.ATIVO) {
            throw new IllegalStateException("Apenas torneios ativos podem ser finalizados");
        }

        // Calcula o ranking baseado nas pontuações
        rankingFinal = pontuacoesPorGuilda.entrySet().stream()
            .sorted((e1, e2) -> e2.getValue().compareTo(e1.getValue()))
            .map(entry -> {
                int posicao = rankingFinal.size() + 1;
                return new PosicaoRanking(posicao, entry.getKey(), entry.getValue());
            })
            .collect(Collectors.toList());

        this.status = StatusTorneio.FINALIZADO;
    }

    @Override
    public String toString() {
        return nome;
    }
}

