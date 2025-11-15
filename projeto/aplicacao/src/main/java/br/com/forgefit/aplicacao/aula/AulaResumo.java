package br.com.forgefit.aplicacao.aula;

import java.time.LocalDateTime;

/**
 * DTO de leitura para listagem de aulas.
 * Implementado como interface para usar Spring Data Projections.
 * Contém todos os campos necessários para o frontend.
 */
public interface AulaResumo {
    Integer getId();
    
    String getModalidade();
    
    String getEspaco();
    
    LocalDateTime getInicio();
    
    LocalDateTime getFim();
    
    Integer getCapacidade();
    
    String getStatus();
    
    Integer getProfessorId();
    
    String getProfessorNome();
    
    Integer getVagasOcupadas();
    
    Integer getVagasDisponiveis();
    
    Integer getTamanhoListaEspera();
    
    // Campos adicionais que podem ser calculados ou preenchidos pela implementação
    default String getEnrollmentStatus() {
        return "not_enrolled"; // Será calculado baseado no aluno logado
    }
    
    default Boolean getIsClassFinished() {
        return getFim() != null && getFim().isBefore(LocalDateTime.now());
    }
}
