package br.com.forgefit.apresentacao.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.forgefit.aplicacao.frequencia.EmailSender;
import br.com.forgefit.aplicacao.frequencia.FrequenciaEmailObserver;
import br.com.forgefit.aplicacao.frequencia.FrequenciaLogObserver;
import br.com.forgefit.aplicacao.frequencia.FrequenciaNotificacaoObserver;
import br.com.forgefit.aplicacao.frequencia.FrequenciaVerificacaoService;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.frequencia.FrequenciaRepositorio;
import br.com.forgefit.dominio.frequencia.FrequenciaService;
import br.com.forgefit.dominio.usuario.UsuarioMockRepositorio;

/**
 * Configuração do módulo de controle de frequência.
 * Implementa o padrão Observer com FrequenciaService como Subject.
 */
@Configuration
public class FrequenciaConfig {
    
    @Bean
    public FrequenciaLogObserver frequenciaLogObserver() {
        return new FrequenciaLogObserver();
    }
    
    @Bean
    public FrequenciaEmailObserver frequenciaEmailObserver(
            EmailSender emailSender, 
            UsuarioMockRepositorio usuarioRepositorio) {
        return new FrequenciaEmailObserver(emailSender, usuarioRepositorio);
    }
    
    @Bean
    public FrequenciaNotificacaoObserver frequenciaNotificacaoObserver() {
        return new FrequenciaNotificacaoObserver();
    }
    
    @Bean
    public FrequenciaService frequenciaService(
            FrequenciaRepositorio frequenciaRepositorio,
            AlunoRepositorio alunoRepositorio,
            br.com.forgefit.dominio.aula.AulaRepositorio aulaRepositorio,
            FrequenciaLogObserver logObserver,
            FrequenciaEmailObserver emailObserver,
            FrequenciaNotificacaoObserver notificacaoObserver) {
        
        FrequenciaService service = new FrequenciaService(
            frequenciaRepositorio,
            alunoRepositorio,
            aulaRepositorio
        );
        
        service.adicionarObservador(logObserver);
        service.adicionarObservador(emailObserver);
        service.adicionarObservador(notificacaoObserver);
        
        return service;
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
