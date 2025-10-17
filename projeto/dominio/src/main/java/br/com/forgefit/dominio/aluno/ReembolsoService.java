package br.com.forgefit.dominio.aluno;

import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.repositorio.RepositorioGeral;

public class ReembolsoService {
    private final RepositorioGeral repositorio;

    public ReembolsoService(RepositorioGeral repositorio) {
        this.repositorio = repositorio;
    }
    
    public double calcularCreditoDeReembolso(AulaId aulaId) {
        return 0.0;
    }
}