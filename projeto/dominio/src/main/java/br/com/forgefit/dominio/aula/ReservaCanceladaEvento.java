package br.com.forgefit.dominio.aula;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.evento.DominioEvento;

import java.time.LocalDateTime;

/**
 * Evento gerado quando uma reserva é cancelada pelo aluno.
 * Imutável, contém informações sobre o reembolso aplicado.
 */
public class ReservaCanceladaEvento implements DominioEvento {
    private final Matricula alunoMatricula;
    private final LocalDateTime dataAula;
    private final LocalDateTime dataCancelamento;
    private final TipoReembolso tipoReembolso;
    private final long diasAntecedencia;
    
    public ReservaCanceladaEvento(Matricula alunoMatricula, LocalDateTime dataAula, 
                                  LocalDateTime dataCancelamento, TipoReembolso tipoReembolso,
                                  long diasAntecedencia) {
        this.alunoMatricula = alunoMatricula;
        this.dataAula = dataAula;
        this.dataCancelamento = dataCancelamento;
        this.tipoReembolso = tipoReembolso;
        this.diasAntecedencia = diasAntecedencia;
    }
    
    public Matricula getAlunoMatricula() {
        return alunoMatricula;
    }
    
    public LocalDateTime getDataAula() {
        return dataAula;
    }
    
    public LocalDateTime getDataCancelamento() {
        return dataCancelamento;
    }
    
    public TipoReembolso getTipoReembolso() {
        return tipoReembolso;
    }
    
    public long getDiasAntecedencia() {
        return diasAntecedencia;
    }
}
