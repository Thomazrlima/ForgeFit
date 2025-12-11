package br.com.forgefit.aplicacao.guilda;

import java.util.Date;

public interface CheckinResumo {
    Integer getId();
    
    String getAlunoMatricula();
    
    String getAlunoNome();
    
    String getAlunoAvatarUrl();
    
    String getNomeContexto();
    
    String getMensagem();
    
    String getUrlImagem();
    
    Date getDataCheckin();
    
    Integer getPontuacao();
    
    // Validações auxiliares
    default Boolean isValid() {
        return getAlunoMatricula() != null && !getAlunoMatricula().isEmpty()
            && getDataCheckin() != null;
    }
    
    default String getAlunoMatriculaTrimmed() {
        return getAlunoMatricula() != null ? getAlunoMatricula().trim() : null;
    }
}
