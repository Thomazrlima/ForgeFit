package br.com.forgefit.dominio.ranking;

import java.time.LocalDate;
import java.time.temporal.WeekFields;
import java.util.Locale;

import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;

/**
 * Utilitário para determinar o período do ranking baseado em uma data.
 */
public class PeriodoRankingUtil {
    
    /**
     * Determina o período do ranking baseado na data fornecida.
     * 
     * @param data Data do check-in ou evento
     * @return Período do ranking (SEMANAL, MENSAL ou GERAL)
     */
    public static PeriodoRanking determinarPeriodoRanking(LocalDate data) {
        if (data == null) {
            return PeriodoRanking.GERAL;
        }
        
        LocalDate hoje = LocalDate.now();
        
        // Se a data é futura, retorna GERAL
        if (data.isAfter(hoje)) {
            return PeriodoRanking.GERAL;
        }
        
        // SEMANAL: Check-ins da semana atual (segunda a domingo)
        LocalDate inicioSemana = hoje.with(WeekFields.of(Locale.getDefault()).dayOfWeek(), 1);
        if (!data.isBefore(inicioSemana)) {
            return PeriodoRanking.SEMANAL;
        }
        
        // MENSAL: Check-ins do mês atual
        LocalDate inicioMes = hoje.withDayOfMonth(1);
        if (!data.isBefore(inicioMes)) {
            return PeriodoRanking.MENSAL;
        }
        
        // GERAL: Check-ins de meses anteriores
        return PeriodoRanking.GERAL;
    }
    
    /**
     * Determina todos os períodos relevantes para uma data.
     * Um check-in pode contribuir para múltiplos períodos.
     * 
     * @param data Data do check-in
     * @return Array com os períodos relevantes
     */
    public static PeriodoRanking[] determinarPeriodosRelevantes(LocalDate data) {
        if (data == null) {
            return new PeriodoRanking[] { PeriodoRanking.GERAL };
        }
        
        LocalDate hoje = LocalDate.now();
        
        // Se a data é futura, retorna apenas GERAL
        if (data.isAfter(hoje)) {
            return new PeriodoRanking[] { PeriodoRanking.GERAL };
        }
        
        LocalDate inicioSemana = hoje.with(WeekFields.of(Locale.getDefault()).dayOfWeek(), 1);
        LocalDate inicioMes = hoje.withDayOfMonth(1);
        
        // Se está na semana atual, contribui para SEMANAL, MENSAL e GERAL
        if (!data.isBefore(inicioSemana)) {
            return new PeriodoRanking[] { 
                PeriodoRanking.SEMANAL, 
                PeriodoRanking.MENSAL, 
                PeriodoRanking.GERAL 
            };
        }
        
        // Se está no mês atual mas não na semana, contribui para MENSAL e GERAL
        if (!data.isBefore(inicioMes)) {
            return new PeriodoRanking[] { 
                PeriodoRanking.MENSAL, 
                PeriodoRanking.GERAL 
            };
        }
        
        // Caso contrário, apenas GERAL
        return new PeriodoRanking[] { PeriodoRanking.GERAL };
    }
}

