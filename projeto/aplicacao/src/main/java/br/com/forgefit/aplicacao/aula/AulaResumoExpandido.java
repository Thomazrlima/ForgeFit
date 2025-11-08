package br.com.forgefit.aplicacao.aula;

import java.time.LocalDate;
import java.util.List;

/**
 * DTO expandido para detalhes completos de uma aula.
 * Inclui informações sobre recorrência e lista de espera.
 */
public interface AulaResumoExpandido extends AulaResumo {
    
    RecorrenciaResumo getRecorrencia();
    
    Integer getTamanhoListaEspera();
    
    List<ReservaResumoSimples> getReservasConfirmadas();
    
    /**
     * DTO para informações de recorrência
     */
    interface RecorrenciaResumo {
        String getTipo();
        LocalDate getDataFimRecorrencia();
        List<String> getDiasDaSemana();
    }
    
    /**
     * DTO simplificado para reservas na listagem expandida
     */
    interface ReservaResumoSimples {
        Integer getId();
        String getAlunoMatricula();
        String getAlunoNome();
    }
}
