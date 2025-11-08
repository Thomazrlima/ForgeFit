package br.com.forgefit.aplicacao.aula;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Repositório da camada de aplicação para consultas de aulas.
 * Retorna DTOs otimizados para apresentação.
 */
public interface AulaRepositorioAplicacao {
    
    /**
     * Pesquisa todas as aulas ativas (futuras).
     * @return Lista de resumos de aulas ativas ordenadas por data
     */
    List<AulaResumo> pesquisarResumosAtivas();
    
    /**
     * Pesquisa aulas por modalidade.
     * @param modalidade Nome da modalidade (YOGA, SPINNING, etc.)
     * @return Lista de resumos de aulas da modalidade especificada
     */
    List<AulaResumo> pesquisarPorModalidade(String modalidade);
    
    /**
     * Pesquisa aulas por espaço.
     * @param espaco Nome do espaço (SALA01_MULTIUSO, etc.)
     * @return Lista de resumos de aulas no espaço especificado
     */
    List<AulaResumo> pesquisarPorEspaco(String espaco);
    
    /**
     * Pesquisa aulas em um período específico.
     * @param inicio Data/hora de início do período
     * @param fim Data/hora de fim do período
     * @return Lista de resumos de aulas no período
     */
    List<AulaResumo> pesquisarPorPeriodo(LocalDateTime inicio, LocalDateTime fim);
    
    /**
     * Pesquisa apenas aulas com vagas disponíveis.
     * @return Lista de resumos de aulas com vagas
     */
    List<AulaResumo> pesquisarComVagasDisponiveis();
    
    /**
     * Busca detalhes expandidos de uma aula específica.
     * @param aulaId ID da aula
     * @return Resumo expandido com todas as informações
     */
    Optional<AulaResumoExpandido> buscarResumoExpandido(Integer aulaId);
    
    /**
     * Pesquisa aulas de um professor específico.
     * @param professorId ID do professor
     * @return Lista de resumos de aulas do professor
     */
    List<AulaResumo> pesquisarPorProfessor(Integer professorId);
    
    /**
     * Pesquisa aulas por múltiplos critérios.
     * @param modalidade Modalidade (opcional)
     * @param espaco Espaço (opcional)
     * @param inicio Data/hora início (opcional)
     * @param fim Data/hora fim (opcional)
     * @param apenasComVagas Se true, retorna apenas aulas com vagas
     * @return Lista de resumos filtrados
     */
    List<AulaResumo> pesquisarComFiltros(
        String modalidade, 
        String espaco, 
        LocalDateTime inicio, 
        LocalDateTime fim, 
        Boolean apenasComVagas
    );
}
