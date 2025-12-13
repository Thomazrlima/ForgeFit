package br.com.forgefit.dominio.checkin;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicInteger;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.guilda.Guilda;
import br.com.forgefit.dominio.guilda.GuildaRepositorio;
import br.com.forgefit.dominio.ranking.PeriodoRankingUtil;
import br.com.forgefit.dominio.ranking.RankingService;
import br.com.forgefit.dominio.treino.PlanoDeTreino;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;

public class CheckinService {
    private final CheckinRepositorio checkinRepositorio;
    private final AlunoRepositorio alunoRepositorio;
    private final GuildaRepositorio guildaRepositorio;
    private final RankingService rankingService;
    private final AtomicInteger contadorId = new AtomicInteger(1);

    public CheckinService(CheckinRepositorio checkinRepositorio, AlunoRepositorio alunoRepositorio,
            GuildaRepositorio guildaRepositorio, RankingService rankingService) {
        notNull(checkinRepositorio, "O repositório de check-ins não pode ser nulo");
        notNull(alunoRepositorio, "O repositório de alunos não pode ser nulo");
        notNull(guildaRepositorio, "O repositório de guildas não pode ser nulo");
        notNull(rankingService, "O serviço de ranking não pode ser nulo");
        
        this.checkinRepositorio = checkinRepositorio;
        this.alunoRepositorio = alunoRepositorio;
        this.guildaRepositorio = guildaRepositorio;
        this.rankingService = rankingService;
    }

    public Checkin realizarCheckinDeTreino(Matricula alunoMatricula, PlanoDeTreino plano, LetraDoTreino letra,
                                           String mensagem, String urlImagem, LocalDate dataCheckin) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(plano, "O plano de treino não pode ser nulo");
        notNull(letra, "A letra do treino não pode ser nula");
        notNull(dataCheckin, "A data do check-in não pode ser nula");

        Aluno aluno = obterAluno(alunoMatricula);

        boolean jaFezCheckin = checkinRepositorio.existeCheckinDeTreino(
            alunoMatricula, plano.getId(), letra, dataCheckin);
        if (jaFezCheckin) {
            throw new IllegalStateException("O check-in para este treino já foi realizado nesta data");
        }

        ContextoDoCheckin contexto = ContextoDoCheckin.deTreino(plano.getId(), letra);
        int pontuacao = 10; // Pontuação padrão para treino

        return criarEGravarCheckin(aluno, contexto, pontuacao, mensagem, urlImagem, dataCheckin);
    }

    private Checkin criarEGravarCheckin(Aluno aluno, ContextoDoCheckin contexto, int pontuacao,
                                        String mensagem, String urlImagem, LocalDate dataCheckin) {
        Guilda guilda = guildaRepositorio.obterPorId(aluno.getGuildaId())
            .orElseThrow(() -> new IllegalStateException("Aluno não está em uma guilda."));

        if (!guilda.isMembro(aluno.getMatricula())) {
            throw new IllegalStateException("Aluno não é membro da guilda para fazer check-in.");
        }

        CheckinId id = new CheckinId(contadorId.getAndIncrement());

        Checkin checkin = new Checkin(id, aluno.getMatricula(), guilda.getId(), dataCheckin,
                                      pontuacao, mensagem, urlImagem, contexto);
        
        checkinRepositorio.salvar(checkin);
        
        // Registra pontos no ranking (fonte única de verdade)
        // Um check-in pode contribuir para múltiplos períodos (SEMANAL, MENSAL, GERAL)
        var periodosRelevantes = PeriodoRankingUtil.determinarPeriodosRelevantes(dataCheckin);
        for (var periodo : periodosRelevantes) {
            // Registra como pontos de guilda no ranking
            // Isso atualiza o ItemRanking.pontuacaoTotal que é a fonte única de verdade
            rankingService.registrarPontosGuilda(aluno.getMatricula(), pontuacao, periodo);
        }
        
        // Mantém Aluno.pontuacaoTotal e Guilda.pontuacaoTotal para compatibilidade
        // mas eles serão calculados a partir do ItemRanking quando necessário
        aluno.adicionarPontos(pontuacao);
        alunoRepositorio.salvar(aluno);
        guilda.adicionarPontos(pontuacao);
        guildaRepositorio.salvar(guilda);

        return checkin;
    }

    private Aluno obterAluno(Matricula matricula) {
        return alunoRepositorio.obterPorMatricula(matricula)
            .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado."));
    }
}

