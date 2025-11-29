package br.com.forgefit.aplicacao.avaliacao;

import java.time.LocalDate;

public interface AvaliacaoResumo {
    String getAlunoMatricula();
    
    Integer getProfessorId();
    
    Integer getAulaId();
    
    LocalDate getDataOcorrenciaAula();
    
    Integer getNotaPontualidade();
    
    Integer getNotaDidatica();
    
    Integer getNotaAtencao();
    
    String getComentario();
    
    default Boolean isValid() {
        return getAlunoMatricula() != null && !getAlunoMatricula().isEmpty()
            && getProfessorId() != null
            && getAulaId() != null
            && getDataOcorrenciaAula() != null
            && getNotaPontualidade() != null
            && getNotaDidatica() != null
            && getNotaAtencao() != null;
    }
    
    default Boolean hasValidRatings() {
        return getNotaPontualidade() >= 1 && getNotaPontualidade() <= 5
            && getNotaDidatica() >= 1 && getNotaDidatica() <= 5
            && getNotaAtencao() >= 1 && getNotaAtencao() <= 5;
    }
    
    default String getAlunoMatriculaTrimmed() {
        return getAlunoMatricula() != null ? getAlunoMatricula().trim() : null;
    }
    
    default String getComentarioTrimmed() {
        return getComentario() != null ? getComentario().trim() : null;
    }
}
