package br.com.forgefit.persistencia.jpa.checkin;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckinRepositorio extends JpaRepository<Checkin, Integer> {
	
	List<Checkin> findByAlunoMatricula(String alunoMatricula);
	
	List<Checkin> findByGuildaId(Integer guildaId);
}
