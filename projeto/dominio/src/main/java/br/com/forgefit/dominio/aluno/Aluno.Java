package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class Aluno {

    private final Cpf cpf;
    private StatusAluno status;
    private LocalDate dataFimBloqueio;

    private List<RegistroFrequencia> historicoFrequencia = new ArrayList<>();

    public Aluno(Cpf cpf) {
        notNull(cpf, "O CPF do aluno não pode ser nulo");
        this.cpf = cpf;
        this.status = StatusAluno.ATIVO;
    }

    public boolean podeReservarAula(LocalDate dataAtual) {
        if (this.status == StatusAluno.BLOQUEADO && dataAtual.isAfter(this.dataFimBloqueio)) {
            desbloquear();
            return true;
        }

        if (this.status == StatusAluno.BLOQUEADO) {
            return false;
        }

        long numFaltasRecentes = contarFaltasNosUltimosDias(30, dataAtual);
        if (numFaltasRecentes >= 3) {
            bloquearPorFaltas();
            return false;
        }

        return true;
    }

    private long contarFaltasNosUltimosDias(int dias, LocalDate dataBase) {
        LocalDate dataLimite = dataBase.minusDays(dias);

        return historicoFrequencia.stream()
                .filter(reg -> reg.getStatus() == StatusFrequencia.FALTA)
                .filter(reg -> reg.getDataAula().isAfter(dataLimite) || reg.getDataAula().isEqual(dataLimite))
                .count();
    }

    public void bloquearPorFaltas() {
        this.status = StatusAluno.BLOQUEADO;
        this.dataFimBloqueio = LocalDate.now().plusDays(7);
    }

    public void desbloquear() {
        this.status = StatusAluno.ATIVO;
        this.dataFimBloqueio = null;
    }


    public void adicionarRegistroFrequencia(RegistroFrequencia registro) {
        notNull(registro, "O registro de frequência não pode ser nulo");
        this.historicoFrequencia.add(registro);
    }

    public Cpf getCpf() {
        return cpf;
    }

    public StatusAluno getStatus() {
        return status;
    }

    public LocalDate getDataFimBloqueio() {
        return dataFimBloqueio;
    }

    public boolean estaBloqueado() {
        return this.status == StatusAluno.BLOQUEADO;
    }

    public boolean estaAtivo() {
        return this.status == StatusAluno.ATIVO;
    }

    // Métodos para simulação de testes (BDD)
    public void simularFaltasParaTeste(int numFaltas, int numDias) {
        // Limpar e adicionar faltas fictícias dentro do período
        this.historicoFrequencia.clear();
        LocalDate hoje = LocalDate.now();
        for (int i = 1; i <= numFaltas; i++) {
            // Adiciona faltas retroativas
            LocalDate dataFalta = hoje.minusDays(i);
            RegistroFrequencia falta = new RegistroFrequencia(new AulaId(i), dataFalta, StatusFrequencia.FALTA);
            this.historicoFrequencia.add(falta);
        }
    }
}