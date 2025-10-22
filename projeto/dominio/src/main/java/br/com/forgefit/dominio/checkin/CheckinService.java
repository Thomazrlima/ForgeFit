package br.com.forgefit.dominio.checkin;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicInteger;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.guilda.Guilda;
import br.com.forgefit.dominio.guilda.GuildaRepositorio;
import br.com.forgefit.dominio.treino.PlanoDeTreino;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;

public class CheckinService {
    private final CheckinRepositorio checkinRepositorio;
    private final AlunoRepositorio alunoRepositorio;
    private final GuildaRepositorio guildaRepositorio;
    private final AtomicInteger contadorId = new AtomicInteger(1);

    public CheckinService(CheckinRepositorio checkinRepositorio, AlunoRepositorio alunoRepositorio,
            GuildaRepositorio guildaRepositorio) {
        this.checkinRepositorio = checkinRepositorio;
        this.alunoRepositorio = alunoRepositorio;
        this.guildaRepositorio = guildaRepositorio;
    }

    public Checkin realizarCheckinDeTreino(Matricula alunoMatricula, PlanoDeTreino plano, LetraDoTreino letra,
                                           String mensagem, String urlImagem) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(plano, "O plano de treino não pode ser nulo");
        notNull(letra, "A letra do treino não pode ser nula");

        Aluno aluno = obterAluno(alunoMatricula);
        LocalDate hoje = LocalDate.now();

        boolean jaFezCheckin = checkinRepositorio.existeCheckinDeTreino(
            alunoMatricula, plano.getId(), letra, hoje);
        if (jaFezCheckin) {
            throw new IllegalStateException("O check-in para este treino já foi realizado hoje");
        }

        ContextoDoCheckin contexto = ContextoDoCheckin.deTreino(plano.getId(), letra);
        int pontuacao = 10; // Pontuação padrão para treino

        return criarEGravarCheckin(aluno, contexto, pontuacao, mensagem, urlImagem);
    }

    private Checkin criarEGravarCheckin(Aluno aluno, ContextoDoCheckin contexto, int pontuacao,
                                        String mensagem, String urlImagem) {
        Guilda guilda = guildaRepositorio.obterPorId(aluno.getGuildaId())
            .orElseThrow(() -> new IllegalStateException("Aluno não está em uma guilda."));

        if (!guilda.isMembro(aluno.getMatricula())) {
            throw new IllegalStateException("Aluno não é membro da guilda para fazer check-in.");
        }

        CheckinId id = new CheckinId(contadorId.getAndIncrement());
        LocalDate hoje = LocalDate.now();

        Checkin checkin = new Checkin(id, aluno.getMatricula(), guilda.getId(), hoje,
                                      pontuacao, mensagem, urlImagem, contexto);
        
        checkinRepositorio.salvar(checkin);
        
        // Atualiza pontuações
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

