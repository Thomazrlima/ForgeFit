package br.com.forgefit.dominio;

import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.checkin.CheckinService;
import br.com.forgefit.dominio.evento.EventoBarramento;
import br.com.forgefit.dominio.guilda.GuildaService;
import br.com.forgefit.dominio.torneio.TorneioService;
import br.com.forgefit.infraestrutura.persistencia.memoria.Repositorio;

/**
 * Contexto compartilhado para os testes BDD da Academia ForgeFit.
 * Injetado pelo Cucumber PicoContainer em todas as classes de step definitions.
 * NÃO CONTÉM STEP DEFINITIONS - apenas estado compartilhado.
 */
public class AcademiaFuncionalidade implements EventoBarramento {

    public final Repositorio repositorio;
    public final GuildaService guildaService;
    public final CheckinService checkinService;
    public final TorneioService torneioService;

    public List<Object> eventos;
    public Exception excecao;

    public AcademiaFuncionalidade() {
        this.repositorio = new Repositorio();
        this.eventos = new ArrayList<>();

        // Inicializa serviços implementados
        this.guildaService = new GuildaService(this.repositorio);
        this.checkinService = new CheckinService(this.repositorio, this.repositorio, this.repositorio);
        this.torneioService = new TorneioService(this.repositorio);
    }

    @Override
    public void postar(Object evento) {
        if (evento == null) {
            throw new IllegalArgumentException("Evento não pode ser nulo");
        }
        eventos.add(evento);
    }

    public void resetarContexto() {
        this.excecao = null;
        this.eventos.clear();
    }
}