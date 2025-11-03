package br.com.forgefit.persistencia.jpa.avaliacao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AvaliacaoRepositorio extends JpaRepository<Avaliacao, Integer> {
	
	List<Avaliacao> findByProfessorId(Integer professorId);
	
	List<Avaliacao> findByAlunoMatricula(String alunoMatricula);
	
	boolean existsByAlunoMatriculaAndAulaIdAndDataOcorrenciaAula(
			String alunoMatricula, Integer aulaId, Date dataOcorrencia);
}
