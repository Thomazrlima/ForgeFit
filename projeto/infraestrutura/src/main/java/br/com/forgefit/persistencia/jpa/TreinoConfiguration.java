package br.com.forgefit.persistencia.jpa;

import br.com.forgefit.dominio.treino.TreinoRepositorio;
import br.com.forgefit.dominio.treino.TreinoService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuração Spring para beans relacionados a treinos
 */
@Configuration
public class TreinoConfiguration {
    
    @Bean
    public TreinoService treinoService(TreinoRepositorio treinoRepositorio) {
        return new TreinoService(treinoRepositorio);
    }
}
