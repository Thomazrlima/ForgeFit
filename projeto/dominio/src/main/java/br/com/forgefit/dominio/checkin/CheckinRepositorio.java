package br.com.forgefit.dominio.checkin;

import java.time.LocalDate;
import java.util.List;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;

public interface CheckinRepositorio {
    void salvar(Checkin checkin);
    List<Checkin> buscarPorAluno(Matricula alunoMatricula);
    boolean existeCheckinDeTreino(Matricula alunoMatricula, PlanoDeTreinoId planoDeTreinoId, 
                                   LetraDoTreino letra, LocalDate data);
    List<Checkin> buscarPorGuildaEPeriodo(GuildaId guildaId, LocalDate inicio, LocalDate fim);
}

