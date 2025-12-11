package br.com.forgefit.aplicacao.guilda;

import java.time.LocalDateTime;

public interface MembroResumo {
    String getMatricula();
    
    String getNome();
    
    String getAvatarUrl();
    
    Integer getPontuacao();
    
    LocalDateTime getDataEntrada();
    
    // Validações auxiliares
    default Boolean isValid() {
        return getMatricula() != null && !getMatricula().isEmpty()
            && getNome() != null && !getNome().isEmpty();
    }
    
    default String getMatriculaTrimmed() {
        return getMatricula() != null ? getMatricula().trim() : null;
    }
    
    default Integer getPontuacaoOuZero() {
        return getPontuacao() != null ? getPontuacao() : 0;
    }
}
