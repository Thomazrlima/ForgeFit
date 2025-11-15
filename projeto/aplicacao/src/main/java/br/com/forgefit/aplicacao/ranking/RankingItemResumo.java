package br.com.forgefit.aplicacao.ranking;

/**
 * DTO de leitura para itens do ranking.
 * Implementado como interface para usar Spring Data Projections.
 * Contém todos os campos necessários para o frontend.
 */
public interface RankingItemResumo {
    Integer getPosicao();
    
    String getAlunoMatricula();
    
    String getAlunoNome();
    
    String getAlunoAvatar();
    
    Integer getPontuacaoTotal();
    
    Integer getPontosFrequencia();
    
    Integer getPontosGuilda();
    
    Integer getPontosPerformance();
    
    Integer getNumeroDeAulasParticipadas();
    
    Double getMediaPerformance();
    
    // Campos adicionais calculados
    default String getFormattedScore() {
        return String.format("%,d", getPontuacaoTotal());
    }
    
    default Boolean isTopThree() {
        return getPosicao() != null && getPosicao() <= 3;
    }
}
