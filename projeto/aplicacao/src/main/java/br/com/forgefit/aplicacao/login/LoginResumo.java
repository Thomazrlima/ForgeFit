package br.com.forgefit.aplicacao.login;


public interface LoginResumo {
    String getEmail();
    
    String getSenha();
    
    // Validações auxiliares
    default Boolean isValid() {
        return getEmail() != null && !getEmail().isEmpty() 
            && getSenha() != null && !getSenha().isEmpty();
    }
    
    default String getEmailTrimmed() {
        return getEmail() != null ? getEmail().trim() : null;
    }
}
