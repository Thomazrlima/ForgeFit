package br.com.forgefit.dominio.aluno;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aluno.enums.StatusFrequencia;

public class Aluno {
    private final Cpf cpf;
    private StatusAluno status;
    private final List<RegistroFrequencia> historicoFrequencia = new ArrayList<>();
    public LocalDate bloqueioAte;

    public Aluno(Cpf cpf) {
        this.cpf = cpf;
        this.status = StatusAluno.ATIVO; // default
    }
    
    public Aluno(Cpf cpf, StatusAluno status) {
        this.cpf = cpf;
        this.status = status;
    }

    public Cpf getCpf() {
        return cpf;
    }

    public void adicionarRegistroFrequencia(RegistroFrequencia registro) {
        historicoFrequencia.add(registro);

        if (registro.getStatus() == StatusFrequencia.FALTA) {
            if (contarFaltasRecentes(7) >= 3) {
                bloquearPorFaltas();
            }
        }
    }

    private int contarFaltasRecentes(int dias) {
        LocalDate limite = LocalDate.now().minusDays(dias);
        return (int) historicoFrequencia.stream()
                .filter(f -> f.getStatus() == StatusFrequencia.FALTA && f.getDataAula().isAfter(limite))
                .count();
    }

    private void bloquearPorFaltas() {
        bloqueioAte = LocalDate.now().plusDays(7);
    }

    public boolean estaBloqueado() {
        return bloqueioAte != null && bloqueioAte.isAfter(LocalDate.now());
    }

    public boolean podeReservarAula(LocalDate data) {
        return !estaBloqueado();
    }

    public List<RegistroFrequencia> getHistoricoFrequencia() {
        return historicoFrequencia;
    }
}
