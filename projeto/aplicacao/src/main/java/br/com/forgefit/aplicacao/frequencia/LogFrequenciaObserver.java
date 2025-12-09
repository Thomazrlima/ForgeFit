package br.com.forgefit.aplicacao.frequencia;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import br.com.forgefit.dominio.aluno.Aluno;

/**
 * Observer que registra eventos de frequência em log.
 */
public class LogFrequenciaObserver implements FrequenciaObserver {
    private static final Logger logger = LoggerFactory.getLogger(LogFrequenciaObserver.class);

    @Override
    public void notificarBloqueio(Aluno aluno, long quantidadeFaltas, int diasBloqueio) {
        logger.warn("[BLOQUEIO] Aluno {} (matrícula: {}) foi bloqueado por {} dias. " +
                    "Faltas registradas: {} nos últimos 30 dias. Bloqueio até: {}",
                aluno.getNome(),
                aluno.getMatricula().getValor(),
                diasBloqueio,
                quantidadeFaltas,
                aluno.getBloqueioAte());
    }

    @Override
    public void notificarAdvertencia(Aluno aluno, long quantidadeFaltas, int faltasRestantes) {
        logger.info("[ADVERTÊNCIA] Aluno {} (matrícula: {}) tem {} faltas nos últimos 30 dias. " +
                    "Faltam {} faltas para bloqueio.",
                aluno.getNome(),
                aluno.getMatricula().getValor(),
                quantidadeFaltas,
                faltasRestantes);
    }

    @Override
    public void notificarDesbloqueio(Aluno aluno) {
        logger.info("[DESBLOQUEIO] Aluno {} (matrícula: {}) foi desbloqueado automaticamente.",
                aluno.getNome(),
                aluno.getMatricula().getValor());
    }
}
