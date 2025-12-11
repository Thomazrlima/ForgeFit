package br.com.forgefit.aplicacao.avaliacaoFisica;

import br.com.forgefit.dominio.aluno.AvaliacaoFisica;
import br.com.forgefit.dominio.aluno.AvaliacaoFisicaService;
import br.com.forgefit.dominio.aluno.Matricula;

/**
 * Template Method Pattern para registro de avaliações físicas.
 * Define o esqueleto do algoritmo de registro, permitindo que subclasses
 * implementem etapas específicas sem alterar a estrutura geral.
 */
public abstract class AvaliacaoFisicaTemplateMethod {
    
    private final AvaliacaoFisicaService avaliacaoFisicaService;
    
    protected AvaliacaoFisicaTemplateMethod(AvaliacaoFisicaService avaliacaoFisicaService) {
        this.avaliacaoFisicaService = avaliacaoFisicaService;
    }
    
    /**
     * Template Method - Define o fluxo completo de registro de avaliação física.
     * Este método não deve ser sobrescrito pelas subclasses.
     */
    public final String registrarAvaliacao(String matriculaStr, AvaliacaoFisica avaliacaoFisica) {
        // Passo 1: Validar dados de entrada
        validarDadosEntrada(matriculaStr, avaliacaoFisica);
        
        // Passo 2: Criar matrícula
        Matricula matricula = new Matricula(matriculaStr);
        
        // Passo 3: Validar regras de negócio específicas do tipo de avaliação
        validarRegrasNegocio(avaliacaoFisica);
        
        // Passo 4: Preparar dados específicos (hook method - opcional)
        prepararDadosEspecificos(avaliacaoFisica);
        
        // Passo 5: Registrar avaliação usando o serviço de domínio
        String mensagem = avaliacaoFisicaService.registrarAvaliacaoFisica(matricula, avaliacaoFisica);
        
        // Passo 6: Executar ações pós-registro (hook method - opcional)
        executarAcoesPosRegistro(matriculaStr, avaliacaoFisica);
        
        // Passo 7: Gerar mensagem de sucesso personalizada
        return gerarMensagemSucesso(matriculaStr, avaliacaoFisica);
    }
    
    /**
     * Valida os dados básicos de entrada.
     * Pode ser sobrescrito para validações específicas.
     */
    protected void validarDadosEntrada(String matricula, AvaliacaoFisica avaliacaoFisica) {
        if (matricula == null || matricula.trim().isEmpty()) {
            throw new IllegalArgumentException("Matrícula não pode ser vazia");
        }
        if (avaliacaoFisica == null) {
            throw new IllegalArgumentException("Avaliação física não pode ser nula");
        }
    }
    
    /**
     * Valida regras de negócio específicas do tipo de avaliação.
     * Método abstrato - deve ser implementado pelas subclasses.
     */
    protected abstract void validarRegrasNegocio(AvaliacaoFisica avaliacaoFisica);
    
    /**
     * Hook method - Permite preparação adicional dos dados antes do registro.
     * Implementação padrão vazia - subclasses podem sobrescrever se necessário.
     */
    protected void prepararDadosEspecificos(AvaliacaoFisica avaliacaoFisica) {
        // Implementação padrão vazia - subclasses podem sobrescrever
    }
    
    /**
     * Hook method - Executa ações após o registro (notificações, logs, etc).
     * Implementação padrão vazia - subclasses podem sobrescrever se necessário.
     */
    protected void executarAcoesPosRegistro(String matricula, AvaliacaoFisica avaliacaoFisica) {
        // Implementação padrão vazia - subclasses podem sobrescrever
        // Exemplo futuro: enviar notificação, gerar relatório, etc.
    }
    
    /**
     * Gera mensagem de sucesso.
     * Pode ser sobrescrito para mensagens específicas.
     */
    protected String gerarMensagemSucesso(String matricula, AvaliacaoFisica avaliacaoFisica) {
        return String.format("Avaliação física registrada com sucesso para o aluno %s", matricula);
    }
}
