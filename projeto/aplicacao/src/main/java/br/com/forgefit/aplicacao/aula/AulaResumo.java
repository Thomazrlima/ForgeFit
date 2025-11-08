package br.com.forgefit.aplicacao.aula;

import java.time.LocalDateTime;

/**
 * DTO de leitura para listagem de aulas.
 * Implementado como interface para usar Spring Data Projections.
 */
public interface AulaResumo {
    Integer getId();
    
    String getModalidade();
    
    String getEspaco();
    
    LocalDateTime getInicio();
    
    LocalDateTime getFim();
    
    Integer getCapacidade();
    
    String getStatus();
    
    ProfessorResumo getProfessor();
    
    Integer getVagasOcupadas();
    
    Integer getVagasDisponiveis();
    
    /**
     * DTO aninhado para dados do professor
     */
    interface ProfessorResumo {
        Integer getId();
        String getNome();
    }
}
