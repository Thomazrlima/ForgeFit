package br.com.forgefit.apresentacao.evento;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import br.com.forgefit.dominio.evento.EventoBarramento;
import br.com.forgefit.dominio.evento.EventoBarramentoImpl;
import br.com.forgefit.dominio.frequencia.AlunoBloqueadoEvento;
import br.com.forgefit.dominio.frequencia.AlunoAdvertidoEvento;
import br.com.forgefit.dominio.frequencia.AlunoDesbloqueadoEvento;

/**
 * Handler que loga eventos de frequência para auditoria.
 */
@Component
public class FrequenciaEventoLogHandler implements EventoBarramentoImpl.EventoHandler {
    private static final Logger logger = LoggerFactory.getLogger(FrequenciaEventoLogHandler.class);
    
    @Override
    public void manipular(Object evento) {
        if (evento instanceof AlunoBloqueadoEvento) {
            AlunoBloqueadoEvento e = (AlunoBloqueadoEvento) evento;
            logger.warn("[BLOQUEIO] Aluno {} ({}) bloqueado até {} por {} faltas",
                e.getNomeAluno(), e.getMatricula().getValor(), 
                e.getBloqueioAte(), e.getQuantidadeFaltas());
                
        } else if (evento instanceof AlunoAdvertidoEvento) {
            AlunoAdvertidoEvento e = (AlunoAdvertidoEvento) evento;
            logger.info("[ADVERTÊNCIA] Aluno {} ({}) advertido - {} faltas, faltam {} para bloqueio",
                e.getNomeAluno(), e.getMatricula().getValor(), 
                e.getQuantidadeFaltas(), e.getFaltasRestantes());
                
        } else if (evento instanceof AlunoDesbloqueadoEvento) {
            AlunoDesbloqueadoEvento e = (AlunoDesbloqueadoEvento) evento;
            logger.info("[DESBLOQUEIO] Aluno {} ({}) desbloqueado",
                e.getNomeAluno(), e.getMatricula().getValor());
        }
    }
}
