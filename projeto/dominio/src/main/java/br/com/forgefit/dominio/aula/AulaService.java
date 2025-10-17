package br.com.forgefit.dominio.aula;

import br.com.forgefit.dominio.repositorio.RepositorioGeral; // Importa a interface

public class AulaService {
    private final AulaRepositorio repositorio;

    public AulaService(AulaRepositorio repositorio) {
        this.repositorio = repositorio;
    }
    // Adicione a classe de Entidade Aula (mínima) para compilar no repositório se necessário
    public static class Aula {
        public Aula(AulaId id, java.time.LocalDate data) {}
        public boolean possuiReservaAtiva(br.com.forgefit.dominio.aluno.Cpf cpf) { return false; }
        public void simularReservaParaTeste(br.com.forgefit.dominio.aluno.Cpf cpf, boolean confirmada) {}
    }
}