package br.com.forgefit.aplicacao.aula;

import java.time.LocalDateTime;

/**
 * DTO simplificado para exibir aulas em calendário.
 * Contém apenas informações essenciais para visualização.
 */
public interface AulaCalendario {
    
    Integer getId();
    
    String getModalidade();
    
    LocalDateTime getInicio();
    
    LocalDateTime getFim();
    
    String getEspaco();
    
    String getProfessorNome();
    
    /**
     * Cor sugerida para o evento no calendário (baseada na modalidade).
     */
    String getCor();
    
    /**
     * Indica se a aula tem vagas disponíveis.
     */
    Boolean getTemVagas();
}
