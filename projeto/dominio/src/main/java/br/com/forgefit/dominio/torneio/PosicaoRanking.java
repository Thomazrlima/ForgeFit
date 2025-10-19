package br.com.forgefit.dominio.torneio;

import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.guilda.GuildaId;

public class PosicaoRanking {
    private final int posicao;
    private final GuildaId guildaId;
    private final int pontuacaoNoTorneio;

    public PosicaoRanking(int posicao, GuildaId guildaId, int pontuacaoNoTorneio) {
        if (posicao < 1) {
            throw new IllegalArgumentException("A posição deve ser maior que zero");
        }
        this.posicao = posicao;

        notNull(guildaId, "O id da guilda não pode ser nulo");
        this.guildaId = guildaId;

        if (pontuacaoNoTorneio < 0) {
            throw new IllegalArgumentException("A pontuação não pode ser negativa");
        }
        this.pontuacaoNoTorneio = pontuacaoNoTorneio;
    }

    public int getPosicao() {
        return posicao;
    }

    public GuildaId getGuildaId() {
        return guildaId;
    }

    public int getPontuacaoNoTorneio() {
        return pontuacaoNoTorneio;
    }
}

