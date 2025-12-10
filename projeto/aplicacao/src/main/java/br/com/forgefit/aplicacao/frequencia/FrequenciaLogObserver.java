package br.com.forgefit.aplicacao.frequencia;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.frequencia.FrequenciaObserver;

/**
 * Observador concreto que registra logs quando há mudanças na frequência dos alunos.
 * Implementa o padrão Observer para receber notificações do FrequenciaService.
 */
public class FrequenciaLogObserver implements FrequenciaObserver {
    private static final Logger logger = LoggerFactory.getLogger(FrequenciaLogObserver.class);
    
    @Override
    public void notificarBloqueio(Aluno aluno, long quantidadeFaltas, int diasBloqueio) {
        logger.warn("[OBSERVER LOG] Aluno {} ({}) foi BLOQUEADO por {} faltas. Bloqueio por {} dias.",
            aluno.getNome(),
            aluno.getMatricula().getValor(),
            quantidadeFaltas,
            diasBloqueio);
    }
    
    @Override
    public void notificarAdvertencia(Aluno aluno, long quantidadeFaltas, int faltasRestantes) {
        logger.warn("[OBSERVER LOG] Aluno {} ({}) recebeu ADVERTÊNCIA. {} faltas acumuladas. Faltam {} falta(s) para bloqueio.",
            aluno.getNome(),
            aluno.getMatricula().getValor(),
            quantidadeFaltas,
            faltasRestantes);
    }
    
    @Override
    public void notificarDesbloqueio(Aluno aluno) {
        logger.info("[OBSERVER LOG] Aluno {} ({}) foi DESBLOQUEADO. Pode realizar novas reservas.",
            aluno.getNome(),
            aluno.getMatricula().getValor());
    }
}
