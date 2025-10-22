package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;

import br.com.forgefit.dominio.aluno.Matricula;

public class PosicaoListaDeEspera {
    private final Matricula alunoMatricula;
    private final LocalDateTime timestampDeEntrada;

    public PosicaoListaDeEspera(Matricula alunoMatricula, LocalDateTime timestampDeEntrada) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        this.alunoMatricula = alunoMatricula;

        notNull(timestampDeEntrada, "O timestamp de entrada não pode ser nulo");
        this.timestampDeEntrada = timestampDeEntrada;
    }

    public Matricula getAlunoMatricula() {
        return alunoMatricula;
    }

    public LocalDateTime getTimestampDeEntrada() {
        return timestampDeEntrada;
    }
}
