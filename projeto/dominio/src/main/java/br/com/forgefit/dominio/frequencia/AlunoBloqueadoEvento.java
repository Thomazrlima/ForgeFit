package br.com.forgefit.dominio.frequencia;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.evento.DominioEvento;

import java.time.LocalDate;

/**
 * Evento gerado quando um aluno é bloqueado por excesso de faltas.
 * Imutável, representa um fato que aconteceu no domínio.
 */
public class AlunoBloqueadoEvento implements DominioEvento {
    private final Matricula matricula;
    private final String nomeAluno;
    private final long quantidadeFaltas;
    private final int diasBloqueio;
    private final LocalDate bloqueioAte;
    
    public AlunoBloqueadoEvento(Matricula matricula, String nomeAluno, long quantidadeFaltas, 
                                int diasBloqueio, LocalDate bloqueioAte) {
        this.matricula = matricula;
        this.nomeAluno = nomeAluno;
        this.quantidadeFaltas = quantidadeFaltas;
        this.diasBloqueio = diasBloqueio;
        this.bloqueioAte = bloqueioAte;
    }
    
    public Matricula getMatricula() {
        return matricula;
    }
    
    public String getNomeAluno() {
        return nomeAluno;
    }
    
    public long getQuantidadeFaltas() {
        return quantidadeFaltas;
    }
    
    public int getDiasBloqueio() {
        return diasBloqueio;
    }
    
    public LocalDate getBloqueioAte() {
        return bloqueioAte;
    }
}
