package br.com.forgefit.dominio.aluno;

import java.time.LocalDate;
import static org.apache.commons.lang3.Validate.notNull;

import br.com.forgefit.dominio.professor.ProfessorId;

public class AvaliacaoFisica {
    private final ProfessorId professorResponsavel;
    private final LocalDate dataDaAvaliacao;
    private double massaGordaPercentual;
    private double massaGordaKg;
    private double massaMagraKg;
    private double massaMuscularEsqueleticaKg;
    private double aguaCorporalTotalPercentual;
    private int gorduraVisceralNivel;
    private int taxaMetabolicaBasalKcal;
    private double massaOsseaKg;
    private double indiceDeMassaCorporal;
    private double bracoRelaxadoCm;
    private double bracoContraidoCm;
    private double antebracoCm;
    private double toraxPeitoralCm;
    private double cinturaCm;
    private double abdomenCm;
    private double quadrilCm;
    private double coxaCm;
    private double panturrilhaCm;

    public AvaliacaoFisica(ProfessorId professorResponsavel, LocalDate dataDaAvaliacao) {
        notNull(professorResponsavel, "O ID do professor responsável não pode ser nulo");
        notNull(dataDaAvaliacao, "A data da avaliação não pode ser nula");
        this.professorResponsavel = professorResponsavel;
        this.dataDaAvaliacao = dataDaAvaliacao;
    }

    public ProfessorId getProfessorResponsavel() {
        return professorResponsavel;
    }

    public LocalDate getDataDaAvaliacao() {
        return dataDaAvaliacao;
    }

    public double getMassaGordaPercentual() {
        return massaGordaPercentual;
    }

    public void setMassaGordaPercentual(double massaGordaPercentual) {
        this.massaGordaPercentual = massaGordaPercentual;
    }

    public double getMassaGordaKg() {
        return massaGordaKg;
    }

    public void setMassaGordaKg(double massaGordaKg) {
        this.massaGordaKg = massaGordaKg;
    }

    public double getMassaMagraKg() {
        return massaMagraKg;
    }

    public void setMassaMagraKg(double massaMagraKg) {
        this.massaMagraKg = massaMagraKg;
    }

    public double getMassaMuscularEsqueleticaKg() {
        return massaMuscularEsqueleticaKg;
    }

    public void setMassaMuscularEsqueleticaKg(double massaMuscularEsqueleticaKg) {
        this.massaMuscularEsqueleticaKg = massaMuscularEsqueleticaKg;
    }

    public double getAguaCorporalTotalPercentual() {
        return aguaCorporalTotalPercentual;
    }

    public void setAguaCorporalTotalPercentual(double aguaCorporalTotalPercentual) {
        this.aguaCorporalTotalPercentual = aguaCorporalTotalPercentual;
    }

    public int getGorduraVisceralNivel() {
        return gorduraVisceralNivel;
    }

    public void setGorduraVisceralNivel(int gorduraVisceralNivel) {
        this.gorduraVisceralNivel = gorduraVisceralNivel;
    }

    public int getTaxaMetabolicaBasalKcal() {
        return taxaMetabolicaBasalKcal;
    }

    public void setTaxaMetabolicaBasalKcal(int taxaMetabolicaBasalKcal) {
        this.taxaMetabolicaBasalKcal = taxaMetabolicaBasalKcal;
    }

    public double getMassaOsseaKg() {
        return massaOsseaKg;
    }

    public void setMassaOsseaKg(double massaOsseaKg) {
        this.massaOsseaKg = massaOsseaKg;
    }

    public double getIndiceDeMassaCorporal() {
        return indiceDeMassaCorporal;
    }

    public void setIndiceDeMassaCorporal(double indiceDeMassaCorporal) {
        this.indiceDeMassaCorporal = indiceDeMassaCorporal;
    }

    public double getBracoRelaxadoCm() {
        return bracoRelaxadoCm;
    }

    public void setBracoRelaxadoCm(double bracoRelaxadoCm) {
        this.bracoRelaxadoCm = bracoRelaxadoCm;
    }

    public double getBracoContraidoCm() {
        return bracoContraidoCm;
    }

    public void setBracoContraidoCm(double bracoContraidoCm) {
        this.bracoContraidoCm = bracoContraidoCm;
    }

    public double getAntebracoCm() {
        return antebracoCm;
    }

    public void setAntebracoCm(double antebracoCm) {
        this.antebracoCm = antebracoCm;
    }

    public double getToraxPeitoralCm() {
        return toraxPeitoralCm;
    }

    public void setToraxPeitoralCm(double toraxPeitoralCm) {
        this.toraxPeitoralCm = toraxPeitoralCm;
    }

    public double getCinturaCm() {
        return cinturaCm;
    }

    public void setCinturaCm(double cinturaCm) {
        this.cinturaCm = cinturaCm;
    }

    public double getAbdomenCm() {
        return abdomenCm;
    }

    public void setAbdomenCm(double abdomenCm) {
        this.abdomenCm = abdomenCm;
    }

    public double getQuadrilCm() {
        return quadrilCm;
    }

    public void setQuadrilCm(double quadrilCm) {
        this.quadrilCm = quadrilCm;
    }

    public double getCoxaCm() {
        return coxaCm;
    }

    public void setCoxaCm(double coxaCm) {
        this.coxaCm = coxaCm;
    }

    public double getPanturrilhaCm() {
        return panturrilhaCm;
    }

    public void setPanturrilhaCm(double panturrilhaCm) {
        this.panturrilhaCm = panturrilhaCm;
    }
}