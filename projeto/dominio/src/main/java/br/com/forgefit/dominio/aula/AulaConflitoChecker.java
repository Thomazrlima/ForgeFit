package br.com.forgefit.dominio.aula;

import java.time.LocalDateTime;
import br.com.forgefit.dominio.aula.enums.Espaco;
import br.com.forgefit.dominio.aula.enums.StatusAula;
import br.com.forgefit.dominio.professor.ProfessorId;

/**
 * Utilitário para verificar conflitos de datas/horários usando Iterator Pattern.
 * 
 * Este padrão permite percorrer a coleção de aulas sem expor sua estrutura interna,
 * facilitando verificações de conflito de forma encapsulada.
 */
public class AulaConflitoChecker {
    
    /**
     * Verifica se existe conflito de espaço entre uma nova aula e as aulas existentes.
     * Usa o Iterator Pattern para percorrer as aulas.
     * 
     * @param aulasCollection Coleção de aulas existentes
     * @param novoInicio Início da nova aula
     * @param novoFim Fim da nova aula
     * @param espaco Espaço da nova aula
     * @param aulaIdExcluir ID da aula a excluir da verificação (para edição)
     * @return true se houver conflito, false caso contrário
     */
    public static boolean existeConflitoEspaco(AulaCollection aulasCollection, LocalDateTime novoInicio, 
            LocalDateTime novoFim, Espaco espaco, AulaId aulaIdExcluir) {
        AulaIterator iterator = aulasCollection.iterator();
        
        while (iterator.hasNext()) {
            Aula aula = iterator.next();
            
            // Ignora aulas que não estão ativas
            if (aula.getStatus() != StatusAula.ATIVA) {
                continue;
            }
            
            // Ignora a própria aula (caso de edição)
            if (aulaIdExcluir != null && aula.getId().equals(aulaIdExcluir)) {
                continue;
            }
            
            // Verifica se é o mesmo espaço
            if (aula.getEspaco() == espaco) {
                // Verifica sobreposição de horários
                if (novoInicio.isBefore(aula.getFim()) && novoFim.isAfter(aula.getInicio())) {
                    return true;
                }
            }
        }
        return false;
    }
    
    /**
     * Verifica se existe conflito de professor entre uma nova aula e as aulas existentes.
     * Usa o Iterator Pattern para percorrer as aulas.
     * 
     * @param aulasCollection Coleção de aulas existentes
     * @param novoInicio Início da nova aula
     * @param novoFim Fim da nova aula
     * @param professorId ID do professor
     * @param aulaIdExcluir ID da aula a excluir da verificação (para edição)
     * @return true se houver conflito, false caso contrário
     */
    public static boolean existeConflitoProfessor(AulaCollection aulasCollection, LocalDateTime novoInicio, 
            LocalDateTime novoFim, ProfessorId professorId, AulaId aulaIdExcluir) {
        AulaIterator iterator = aulasCollection.iterator();
        
        while (iterator.hasNext()) {
            Aula aula = iterator.next();
            
            // Ignora aulas que não estão ativas
            if (aula.getStatus() != StatusAula.ATIVA) {
                continue;
            }
            
            // Ignora a própria aula (caso de edição)
            if (aulaIdExcluir != null && aula.getId().equals(aulaIdExcluir)) {
                continue;
            }
            
            // Verifica se é o mesmo professor
            if (aula.getProfessorId().equals(professorId)) {
                // Verifica sobreposição de horários
                if (novoInicio.isBefore(aula.getFim()) && novoFim.isAfter(aula.getInicio())) {
                    return true;
                }
            }
        }
        return false;
    }
    
    /**
     * Método legado mantido para compatibilidade.
     * @deprecated Use {@link #existeConflitoEspaco} ou {@link #existeConflitoProfessor}
     */
    @Deprecated
    public static boolean existeConflito(AulaCollection aulasCollection, LocalDateTime novoInicio, 
            LocalDateTime novoFim, String espaco) {
        AulaIterator iterator = aulasCollection.iterator();
        while (iterator.hasNext()) {
            Aula aula = iterator.next();
            if (aula.getEspaco().name().equals(espaco)) {
                if (aula.getInicio().isBefore(novoFim) && novoInicio.isBefore(aula.getFim())) {
                    return true;
                }
            }
        }
        return false;
    }
}
