package br.com.forgefit.aplicacao.frequencia;

import br.com.forgefit.dominio.aluno.Aluno;

/**
 * Interface Observer para notificações de eventos de frequência.
 * Implementa o padrão Observer na camada de aplicação.
 */
public interface FrequenciaObserver {
    
    /**
     * Notifica quando um aluno é bloqueado por excesso de faltas.
     */
    void notificarBloqueio(Aluno aluno, long quantidadeFaltas, int diasBloqueio);
    
    /**
     * Notifica quando um aluno atinge o limite de advertência de faltas.
     */
    void notificarAdvertencia(Aluno aluno, long quantidadeFaltas, int faltasRestantes);
    
    /**
     * Notifica quando o bloqueio de um aluno expira.
     */
    void notificarDesbloqueio(Aluno aluno);
}
