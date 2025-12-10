package br.com.forgefit.aplicacao.frequencia;

import br.com.forgefit.dominio.aluno.Aluno;

/**
 * @deprecated Este padrão Observer foi substituído por eventos de domínio.
 * Use EventoBarramento com FrequenciaEventoEmailHandler e FrequenciaEventoLogHandler.
 * Os eventos de domínio (AlunoBloqueadoEvento, AlunoAdvertidoEvento, AlunoDesbloqueadoEvento)
 * são gerados no domínio e consumidos na infraestrutura, seguindo DDD puro.
 * Este código será removido em versão futura.
 */
@Deprecated
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
