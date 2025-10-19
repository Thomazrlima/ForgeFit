package br.com.forgefit.dominio.checkin;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;

import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.guilda.GuildaRepositorio;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;

public class CheckinService {
    private final CheckinRepositorio checkinRepositorio;
    private final GuildaRepositorio guildaRepositorio;
    private final AlunoRepositorio alunoRepositorio;
    private int proximoId = 1;

    public CheckinService(CheckinRepositorio checkinRepositorio, 
                          GuildaRepositorio guildaRepositorio,
                          AlunoRepositorio alunoRepositorio) {
        notNull(checkinRepositorio, "O repositório de check-ins não pode ser nulo");
        notNull(guildaRepositorio, "O repositório de guildas não pode ser nulo");
        notNull(alunoRepositorio, "O repositório de alunos não pode ser nulo");
        
        this.checkinRepositorio = checkinRepositorio;
        this.guildaRepositorio = guildaRepositorio;
        this.alunoRepositorio = alunoRepositorio;
    }

    public Checkin realizarCheckinDeTreino(Cpf alunoId, GuildaId guildaId, 
                                           PlanoDeTreinoId planoDeTreinoId, 
                                           LetraDoTreino letraDoTreino, 
                                           String mensagem, String urlImagem) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        notNull(guildaId, "O id da guilda não pode ser nulo");
        notNull(planoDeTreinoId, "O id do plano de treino não pode ser nulo");
        notNull(letraDoTreino, "A letra do treino não pode ser nula");

        var dataAtual = LocalDate.now();

        // Verifica se já existe check-in para este treino hoje
        if (checkinRepositorio.existeCheckinDeTreino(alunoId, planoDeTreinoId, letraDoTreino, dataAtual)) {
            throw new IllegalStateException("O check-in para este treino já foi realizado hoje");
        }

        // Busca a guilda e o aluno
        var guilda = guildaRepositorio.obterPorId(guildaId)
            .orElseThrow(() -> new IllegalArgumentException("Guilda não encontrada"));

        var aluno = alunoRepositorio.obterPorCpf(alunoId)
            .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        // Verifica se o aluno é membro da guilda
        if (!guilda.isMembro(alunoId)) {
            throw new IllegalStateException("O aluno não é membro da guilda");
        }

        // Pontuação fixa de 10 pontos por check-in
        int pontuacao = 10;

        // Cria o contexto do check-in
        var contexto = ContextoDoCheckin.deTreino(planoDeTreinoId, letraDoTreino);

        // Cria o check-in
        var checkinId = new CheckinId(proximoId++);
        var checkin = new Checkin(checkinId, alunoId, guildaId, dataAtual, 
                                   pontuacao, mensagem, urlImagem, contexto);

        // Adiciona pontuação ao aluno e à guilda
        aluno.adicionarPontos(pontuacao);
        guilda.adicionarPontos(pontuacao);

        // Salva as alterações
        checkinRepositorio.salvar(checkin);
        alunoRepositorio.salvar(aluno);
        guildaRepositorio.salvar(guilda);

        return checkin;
    }
}

