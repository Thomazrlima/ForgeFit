package br.com.forgefit.persistencia.jpa.adapters;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.checkin.Checkin;
import br.com.forgefit.dominio.checkin.CheckinRepositorio;
import br.com.forgefit.dominio.guilda.GuildaId;
import br.com.forgefit.dominio.treino.PlanoDeTreinoId;
import br.com.forgefit.dominio.treino.enums.LetraDoTreino;
import br.com.forgefit.persistencia.jpa.checkin.CheckinRepositorioJpa;

@Component("checkinRepositorio")
public class CheckinRepositorioAdapter implements CheckinRepositorio {
	
	@Autowired
	private CheckinRepositorioJpa repositorioJpa;

	@Override
	public void salvar(Checkin checkin) {
		throw new UnsupportedOperationException("Método não implementado");
	}

	@Override
	public List<Checkin> buscarPorAluno(Matricula alunoMatricula) {
		return List.of();
	}

	@Override
	public boolean existeCheckinDeTreino(Matricula alunoMatricula, PlanoDeTreinoId planoDeTreinoId,
			LetraDoTreino letra, LocalDate data) {
		return false;
	}

	@Override
	public List<Checkin> buscarPorGuildaEPeriodo(GuildaId guildaId, LocalDate inicio, LocalDate fim) {
		return List.of();
	}
}
