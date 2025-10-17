package br.com.forgefit.dominio.repositorio;

import java.util.Optional;

// Importe as classes de domínio necessárias que estão no main
import br.com.forgefit.dominio.aluno.Aluno; 
import br.com.forgefit.dominio.aluno.Cpf;

/**
 * Interface que define o contrato de persistência para os Services de Domínio.
 */
public interface RepositorioGeral {
    
    // Contrato mínimo exigido pelos seus Services
    Optional<Aluno> obterPorCpf(Cpf cpf);
    void salvar(Aluno aluno);
    
    // Adicione aqui outros métodos de busca (e.g., obterAulaPorId, buscarTorneioAtivo)
}