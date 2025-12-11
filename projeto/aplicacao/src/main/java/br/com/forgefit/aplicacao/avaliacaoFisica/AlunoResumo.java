package br.com.forgefit.aplicacao.avaliacaoFisica;

public interface AlunoResumo {
    String getMatricula();
    String getNome();
    String getAvatarUrl();
    
    default boolean isValid() {
        return getMatricula() != null && !getMatricula().trim().isEmpty()
            && getNome() != null && !getNome().trim().isEmpty();
    }
    
    default String getMatriculaTrimmed() {
        return getMatricula() != null ? getMatricula().trim() : null;
    }
    
    default String getNomeTrimmed() {
        return getNome() != null ? getNome().trim() : null;
    }
}
