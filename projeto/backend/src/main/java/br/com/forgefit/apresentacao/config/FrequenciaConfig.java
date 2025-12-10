package br.com.forgefit.apresentacao.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.forgefit.aplicacao.frequencia.FrequenciaVerificacaoService;
import br.com.forgefit.apresentacao.evento.FrequenciaEventoEmailHandler;
import br.com.forgefit.apresentacao.evento.FrequenciaEventoLogHandler;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.evento.EventoBarramento;
import br.com.forgefit.dominio.evento.EventoBarramentoImpl;
import br.com.forgefit.dominio.frequencia.FrequenciaRepositorio;
import br.com.forgefit.dominio.frequencia.FrequenciaService;

/**
 * Configuração dos serviços de frequência usando eventos de domínio.
 * Padrão DDD: Barramento registra handlers da infraestrutura.
 */
@Configuration
public class FrequenciaConfig {
    
    @Bean
    public EventoBarramento eventoBarramento(
            FrequenciaEventoEmailHandler emailHandler,
            FrequenciaEventoLogHandler logHandler) {
        
        EventoBarramentoImpl barramento = new EventoBarramentoImpl();
        
        // Registra handlers da infraestrutura
        barramento.registrar(logHandler);
        barramento.registrar(emailHandler);
        
        return barramento;
    }
    
    @Bean
    public FrequenciaService frequenciaService(
            FrequenciaRepositorio frequenciaRepositorio,
            AlunoRepositorio alunoRepositorio,
            br.com.forgefit.dominio.aula.AulaRepositorio aulaRepositorio,
            EventoBarramento eventoBarramento) {
        
        return new FrequenciaService(
            frequenciaRepositorio,
            alunoRepositorio,
            aulaRepositorio,
            eventoBarramento
        );
    }
    
    @Bean
    public FrequenciaVerificacaoService frequenciaVerificacaoService(
            FrequenciaService frequenciaService,
            FrequenciaRepositorio frequenciaRepositorio,
            AlunoRepositorio alunoRepositorio) {
        
        return new FrequenciaVerificacaoService(
            frequenciaService, 
            frequenciaRepositorio, 
            alunoRepositorio
        );
    }
}
