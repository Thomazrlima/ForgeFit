package br.com.forgefit.dominio.frequencia;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.evento.DominioEvento;

/**
 * Evento gerado quando um aluno é desbloqueado.
 */
public class AlunoDesbloqueadoEvento implements DominioEvento {
    private final Matricula matricula;
    private final String nomeAluno;
    
    public AlunoDesbloqueadoEvento(Matricula matricula, String nomeAluno) {
        this.matricula = matricula;
        this.nomeAluno = nomeAluno;
    }
    
    public Matricula getMatricula() {
        return matricula;
    }
    
    public String getNomeAluno() {
        return nomeAluno;
    }
}
