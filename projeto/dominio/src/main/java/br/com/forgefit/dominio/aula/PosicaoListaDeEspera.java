package br.com.forgefit.dominio.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;

import br.com.forgefit.dominio.aluno.Cpf;

public class PosicaoListaDeEspera {
    private final Cpf alunoId;
    private final LocalDateTime timestampDeEntrada;

    public PosicaoListaDeEspera(Cpf alunoId, LocalDateTime timestampDeEntrada) {
        notNull(alunoId, "O CPF do aluno não pode ser nulo");
        this.alunoId = alunoId;

        notNull(timestampDeEntrada, "O timestamp de entrada não pode ser nulo");
        this.timestampDeEntrada = timestampDeEntrada;
    }

    public Cpf getAlunoId() {
        return alunoId;
    }

    public LocalDateTime getTimestampDeEntrada() {
        return timestampDeEntrada;
    }
}
