package br.com.forgefit.dominio.frequencia;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.evento.DominioEvento;

/**
 * Evento gerado quando um aluno recebe advertência por faltas.
 */
public class AlunoAdvertidoEvento implements DominioEvento {
    private final Matricula matricula;
    private final String nomeAluno;
    private final long quantidadeFaltas;
    private final int faltasRestantes;
    
    public AlunoAdvertidoEvento(Matricula matricula, String nomeAluno, long quantidadeFaltas, int faltasRestantes) {
        this.matricula = matricula;
        this.nomeAluno = nomeAluno;
        this.quantidadeFaltas = quantidadeFaltas;
        this.faltasRestantes = faltasRestantes;
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
    
    public int getFaltasRestantes() {
        return faltasRestantes;
    }
}
