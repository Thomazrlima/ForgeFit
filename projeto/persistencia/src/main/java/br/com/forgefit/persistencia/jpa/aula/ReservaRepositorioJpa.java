package br.com.forgefit.persistencia.jpa.aula;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.forgefit.aplicacao.aula.CancelamentoResumo;
import br.com.forgefit.aplicacao.aula.ReservaRepositorioAplicacao;
import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.persistencia.jpa.enums.StatusReserva;

public interface ReservaRepositorioJpa extends JpaRepository<Reserva, Integer>, ReservaRepositorioAplicacao {
	
	List<Reserva> findByAlunoMatricula(String matricula);
	
	List<Reserva> findByAlunoMatriculaAndStatus(String matricula, StatusReserva status);
	
	@Override
	@Query("""
		SELECT r.id as reservaId,
		       r.aula.id as aulaId,
		       r.aula.inicio as inicioAula,
		       r.aula.fim as fimAula,
		       r.aula.modalidade as modalidade,
		       r.aula.espaco as espaco,
		       p.nome as nomeProfessor,
		       r.alunoMatricula as alunoMatricula,
		       r.dataReserva as dataReserva,
		       r.status as statusReserva
		FROM Reserva r
		JOIN Professor p ON r.aula.professorId = p.id
		WHERE r.alunoMatricula = :#{#matricula.valor}
		  AND r.status = 'CONFIRMADA'
		  AND r.aula.inicio > CURRENT_TIMESTAMP
		ORDER BY r.aula.inicio ASC
		""")
	List<CancelamentoResumo> buscarReservasConfirmadas(@Param("matricula") Matricula matricula);
}
