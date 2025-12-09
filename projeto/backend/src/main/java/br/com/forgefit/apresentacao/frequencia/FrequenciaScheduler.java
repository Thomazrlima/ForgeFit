package br.com.forgefit.apresentacao.frequencia;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import br.com.forgefit.aplicacao.frequencia.FrequenciaVerificacaoService;
import br.com.forgefit.aplicacao.frequencia.FrequenciaVerificacaoService.RelatorioVerificacao;

/**
 * Agendador para verificação diária de frequência de alunos.
 * Executa todos os dias às 02:00 AM.
 */
@Component
public class FrequenciaScheduler {
    private static final Logger logger = LoggerFactory.getLogger(FrequenciaScheduler.class);
    
    @Autowired
    private FrequenciaVerificacaoService verificacaoService;
    
    /**
     * Executa verificação diária às 02:00 AM.
     * Cron: "0 0 2 * * *" = segundo minuto hora dia mês dia-da-semana
     */
    @Scheduled(cron = "0 0 2 * * *")
    public void verificarFrequenciaDiaria() {
        logger.info("=== Iniciando verificação diária de frequência ===");
        LocalDate hoje = LocalDate.now();
        
        try {
            RelatorioVerificacao relatorio = verificacaoService.verificarTodosAlunos(hoje);
            
            logger.info("=== Verificação diária concluída ===");
            logger.info(relatorio.toString());
            
            if (relatorio.getAlunosBloqueados() > 0) {
                logger.warn("⚠️ {} alunos bloqueados", relatorio.getAlunosBloqueados());
            }
            
            if (relatorio.getAlunosDesbloqueados() > 0) {
                logger.info("✅ {} alunos desbloqueados", relatorio.getAlunosDesbloqueados());
            }
            
        } catch (Exception e) {
            logger.error("❌ Erro na verificação diária", e);
        }
    }
    
    /**
     * Execução manual (para testes).
     */
    public RelatorioVerificacao executarManual() {
        logger.info("=== Executando verificação manual ===");
        LocalDate hoje = LocalDate.now();
        RelatorioVerificacao relatorio = verificacaoService.verificarTodosAlunos(hoje);
        logger.info(relatorio.toString());
        return relatorio;
    }
}
