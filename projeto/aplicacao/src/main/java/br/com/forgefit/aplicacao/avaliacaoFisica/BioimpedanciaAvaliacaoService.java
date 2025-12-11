package br.com.forgefit.aplicacao.avaliacaoFisica;

import br.com.forgefit.dominio.aluno.AvaliacaoFisica;
import br.com.forgefit.dominio.aluno.AvaliacaoFisicaService;

/**
 * Implementação concreta do Template Method para avaliações de Bioimpedância.
 * Define as regras específicas para este tipo de avaliação física.
 */
public class BioimpedanciaAvaliacaoService extends AvaliacaoFisicaTemplateMethod {
    
    public BioimpedanciaAvaliacaoService(AvaliacaoFisicaService avaliacaoFisicaService) {
        super(avaliacaoFisicaService);
    }
    
    @Override
    protected void validarRegrasNegocio(AvaliacaoFisica avaliacaoFisica) {
        // Validações específicas de bioimpedância
        
        // Validar ranges de valores - valores são primitivos, sempre presentes
        if (avaliacaoFisica.getMassaGordaPercentual() < 0 || avaliacaoFisica.getMassaGordaPercentual() > 100) {
            throw new IllegalArgumentException("Percentual de gordura deve estar entre 0 e 100");
        }
        
        if (avaliacaoFisica.getMassaMagraKg() <= 0) {
            throw new IllegalArgumentException("Massa magra deve ser maior que zero");
        }
        
        if (avaliacaoFisica.getMassaGordaKg() < 0) {
            throw new IllegalArgumentException("Massa gorda não pode ser negativa");
        }
        
        if (avaliacaoFisica.getAguaCorporalTotalPercentual() < 0 || 
            avaliacaoFisica.getAguaCorporalTotalPercentual() > 100) {
            throw new IllegalArgumentException("Percentual de água corporal deve estar entre 0 e 100");
        }
    }
    
    @Override
    protected void prepararDadosEspecificos(AvaliacaoFisica avaliacaoFisica) {
        // Hook method - pode ser usado para cálculos adicionais específicos de bioimpedância
        // Por exemplo: calcular índices derivados, ajustar valores, etc.
        
        // Exemplo: garantir que gordura visceral está em um nível válido
        if (avaliacaoFisica.getGorduraVisceralNivel() < 1) {
            throw new IllegalArgumentException("Nível de gordura visceral deve ser no mínimo 1");
        }
    }
    
    @Override
    protected void executarAcoesPosRegistro(String matricula, AvaliacaoFisica avaliacaoFisica) {
        // Hook method - ações específicas após registro de bioimpedância
        // Exemplo: log de auditoria específico
        System.out.println(String.format(
            "[BIOIMPEDÂNCIA] Avaliação registrada - Aluno: %s, Gordura: %.1f%%, Massa Magra: %.1fkg",
            matricula,
            avaliacaoFisica.getMassaGordaPercentual(),
            avaliacaoFisica.getMassaMagraKg()
        ));
    }
    
    @Override
    protected String gerarMensagemSucesso(String matricula, AvaliacaoFisica avaliacaoFisica) {
        return String.format(
            "Avaliação de bioimpedância registrada com sucesso para %s. " +
            "Gordura corporal: %.1f%%, Massa magra: %.1fkg",
            matricula,
            avaliacaoFisica.getMassaGordaPercentual(),
            avaliacaoFisica.getMassaMagraKg()
        );
    }
}
