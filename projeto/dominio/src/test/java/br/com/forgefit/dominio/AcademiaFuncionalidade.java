package br.com.forgefit.dominio;

import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoService;
import br.com.forgefit.dominio.aula.Aula;
import br.com.forgefit.dominio.aula.AulaService;
import br.com.forgefit.dominio.aula.ReembolsoService;
import br.com.forgefit.dominio.aula.ReservaService;
import br.com.forgefit.dominio.avaliacao.AvaliacaoService;
import br.com.forgefit.dominio.checkin.CheckinService;
import br.com.forgefit.dominio.evento.EventoBarramento;
import br.com.forgefit.dominio.guilda.GuildaService;
import br.com.forgefit.dominio.ranking.RankingService;
import br.com.forgefit.dominio.torneio.TorneioService;
import br.com.forgefit.dominio.treino.TreinoService;
import br.com.forgefit.dominio.frequencia.FrequenciaService;
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
    public final AulaService aulaService;
    public final AlunoService alunoService;
    public final ReservaService reservaService;
    public final RankingService rankingService;
    public final AvaliacaoService avaliacaoService;
    public final ReembolsoService reembolsoService;
    public final TreinoService treinoService;
    public final FrequenciaService frequenciaService;
    public final br.com.forgefit.dominio.aluno.AvaliacaoFisicaService avaliacaoFisicaService;
    
    // Contexto atual do teste
    public Aluno alunoAtual;
    public Aula aulaAtual;

    public List<Object> eventos;
    public Exception excecao;

    public AcademiaFuncionalidade() {
        this.repositorio = new Repositorio();
        this.eventos = new ArrayList<>();

        // Inicializa serviços implementados
        this.guildaService = new GuildaService(this.repositorio);
        this.checkinService = new CheckinService(this.repositorio, this.repositorio, this.repositorio);
        this.torneioService = new TorneioService(this.repositorio);
        this.aulaService = new AulaService(this.repositorio);
        this.reembolsoService = new ReembolsoService();
        this.alunoService = new AlunoService(this.repositorio);
        this.reservaService = new ReservaService(this.repositorio, this.alunoService, this.reembolsoService);
        this.rankingService = new RankingService(this.repositorio);
        this.avaliacaoService = new AvaliacaoService(this.repositorio);
        this.treinoService = new TreinoService(this.repositorio);
        // FrequenciaService agora requer EventoBarramento
        this.frequenciaService = new FrequenciaService(this.repositorio, this.repositorio, this.repositorio, this);
        this.avaliacaoFisicaService = new br.com.forgefit.dominio.aluno.AvaliacaoFisicaService(this.repositorio);
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