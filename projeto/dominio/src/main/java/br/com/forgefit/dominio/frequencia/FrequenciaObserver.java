package br.com.forgefit.dominio.frequencia;

import br.com.forgefit.dominio.aluno.Aluno;

/**
 * Interface Observer para o padrão Observer aplicado ao controle de frequência.
 * Define o contrato para objetos que desejam ser notificados sobre mudanças na frequência dos alunos.
 * 
 * Padrão de Projeto: Observer (GoF)
 * - Subject: FrequenciaService
 * - Observer: Esta interface
 * - ConcreteObservers: FrequenciaLogObserver, FrequenciaEmailObserver, FrequenciaNotificacaoObserver
 */
public interface FrequenciaObserver {
    
    /**
     * Notifica quando um aluno é bloqueado por excesso de faltas.
     * 
     * @param aluno O aluno que foi bloqueado
     * @param quantidadeFaltas Número de faltas que causaram o bloqueio
     * @param diasBloqueio Duração do bloqueio em dias
     */
    void notificarBloqueio(Aluno aluno, long quantidadeFaltas, int diasBloqueio);
    
    /**
     * Notifica quando um aluno atinge o limite de advertência de faltas.
     * 
     * @param aluno O aluno que recebeu advertência
     * @param quantidadeFaltas Número atual de faltas
     * @param faltasRestantes Quantas faltas faltam para o bloqueio
     */
    void notificarAdvertencia(Aluno aluno, long quantidadeFaltas, int faltasRestantes);
    
    /**
     * Notifica quando o bloqueio de um aluno expira e ele é desbloqueado.
     * 
     * @param aluno O aluno que foi desbloqueado
     */
    void notificarDesbloqueio(Aluno aluno);
}
