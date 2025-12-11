package br.com.forgefit.aplicacao.guilda;

import java.util.List;

public interface GuildaDetalhesResumo {
    Integer getId();
    
    String getNome();
    
    String getDescricao();
    
    String getImagemUrl();
    
    String getCodigoConvite();
    
    String getMestreMatricula();
    
    Integer getPontuacaoTotal();
    
    List<MembroResumo> getMembros();
    
    // Validações auxiliares
    default Boolean isValid() {
        return getId() != null 
            && getNome() != null && !getNome().isEmpty()
            && getMestreMatricula() != null && !getMestreMatricula().isEmpty();
    }
    
    default String getNomeTrimmed() {
        return getNome() != null ? getNome().trim() : null;
    }
    
    default Integer getNumeroMembros() {
        return getMembros() != null ? getMembros().size() : 0;
    }
    
    default Integer getPontuacaoTotalOuZero() {
        return getPontuacaoTotal() != null ? getPontuacaoTotal() : 0;
    }
}
