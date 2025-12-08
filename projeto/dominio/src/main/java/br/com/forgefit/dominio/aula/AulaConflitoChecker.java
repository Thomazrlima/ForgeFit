package br.com.forgefit.dominio.aula;

import java.time.LocalDateTime;

/**
 * Utilitário para verificar conflitos de datas/horários usando Iterator.
 */
public class AulaConflitoChecker {
    /**
     * Verifica se existe conflito de horário entre uma nova aula e as aulas existentes.
     * @param aulasCollection Coleção de aulas existentes
     * @param novoInicio Início da nova aula
     * @param novoFim Fim da nova aula
     * @param espaco Espaço da nova aula
     * @return true se houver conflito, false caso contrário
     */
    public static boolean existeConflito(AulaCollection aulasCollection, LocalDateTime novoInicio, LocalDateTime novoFim, String espaco) {
        AulaIterator iterator = aulasCollection.iterator();
        while (iterator.hasNext()) {
            Aula aula = iterator.next();
            if (aula.getEspaco().name().equals(espaco)) {
                // Verifica sobreposição de horários
                if (aula.getInicio().isBefore(novoFim) && novoInicio.isBefore(aula.getFim())) {
                    return true;
                }
            }
        }
        return false;
    }
}
