package br.com.forgefit.dominio.checkin;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.guilda.GuildaId;

public class Checkin {
    private final CheckinId id;
    private final Cpf alunoId;
    private final GuildaId guildaId;
    private final LocalDate dataDoCheckin;
    private final int pontuacaoGerada;
    private final String mensagem;
    private final String urlImagem;
    private final ContextoDoCheckin contexto;

    public Checkin(CheckinId id, Cpf alunoId, GuildaId guildaId, LocalDate dataDoCheckin,
                   int pontuacaoGerada, String mensagem, String urlImagem, ContextoDoCheckin contexto) {
        notNull(id, "O id não pode ser nulo");
        this.id = id;

        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        this.alunoId = alunoId;

        notNull(guildaId, "O id da guilda não pode ser nulo");
        this.guildaId = guildaId;

        notNull(dataDoCheckin, "A data do check-in não pode ser nula");
        this.dataDoCheckin = dataDoCheckin;

        this.pontuacaoGerada = pontuacaoGerada;
        this.mensagem = mensagem;
        this.urlImagem = urlImagem;

        notNull(contexto, "O contexto do check-in não pode ser nulo");
        this.contexto = contexto;
    }

    public CheckinId getId() {
        return id;
    }

    public Cpf getAlunoId() {
        return alunoId;
    }

    public GuildaId getGuildaId() {
        return guildaId;
    }

    public LocalDate getDataDoCheckin() {
        return dataDoCheckin;
    }

    public int getPontuacaoGerada() {
        return pontuacaoGerada;
    }

    public String getMensagem() {
        return mensagem;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public ContextoDoCheckin getContexto() {
        return contexto;
    }
}

