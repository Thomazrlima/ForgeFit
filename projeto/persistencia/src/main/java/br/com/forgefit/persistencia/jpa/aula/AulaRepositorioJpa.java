package br.com.forgefit.persistencia.jpa.aula;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.forgefit.persistencia.jpa.enums.Espaco;
import br.com.forgefit.persistencia.jpa.enums.StatusAula;

public interface AulaRepositorioJpa extends JpaRepository<Aula, Integer> {
	
	List<Aula> findByStatus(StatusAula status);
	
	List<Aula> findByProfessorId(Integer professorId);
	
	@Query("""
			select a
			  from Aula a
			  where a.espaco = :espaco
			    and a.inicio >= :inicio
			    and a.fim <= :fim
			""")
	List<Aula> buscarPorEspacoEPeriodo(Espaco espaco, Date inicio, Date fim);
	
	@Query("""
			select a
			  from Aula a
			  where a.professorId = :professorId
			    and a.inicio >= :inicio
			    and a.fim <= :fim
			""")
	List<Aula> buscarPorProfessorEPeriodo(Integer professorId, Date inicio, Date fim);
}
