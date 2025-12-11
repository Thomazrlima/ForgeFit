package br.com.forgefit.aplicacao.avaliacaoFisica;

import java.time.LocalDate;

public interface AvaliacaoFisicaResumo {
    Integer getId();
    String getAlunoMatricula();
    String getAlunoNome();
    String getAlunoAvatarUrl();
    LocalDate getDataAvaliacao();
    Integer getProfessorResponsavelId();
    String getProfessorResponsavelNome();
    Double getMassaGordaPercentual();
    Double getMassaGordaKg();
    Double getMassaMagraKg();
    Double getMassaMuscularEsqueleticaKg();
    Double getAguaCorporalTotalPercentual();
    Integer getGorduraVisceralNivel();
    Integer getTaxaMetabolicaBasalKcal();
    Double getMassaOsseaKg();
    Double getIndiceDeMassaCorporal();
    Double getBracoRelaxadoCm();
    Double getBracoContraidoCm();
    Double getAntebracoCm();
    Double getToraxPeitoralCm();
    Double getCinturaCm();
    Double getAbdomenCm();
    Double getQuadrilCm();
    Double getCoxaCm();
    Double getPanturrilhaCm();
    
    default boolean isValid() {
        return getAlunoMatricula() != null && !getAlunoMatricula().trim().isEmpty()
            && getDataAvaliacao() != null
            && getProfessorResponsavelId() != null
            && getMassaGordaPercentual() != null
            && getMassaGordaKg() != null
            && getMassaMagraKg() != null
            && getMassaMuscularEsqueleticaKg() != null
            && getAguaCorporalTotalPercentual() != null
            && getGorduraVisceralNivel() != null
            && getTaxaMetabolicaBasalKcal() != null
            && getMassaOsseaKg() != null
            && getIndiceDeMassaCorporal() != null;
    }
    
    default String getAlunoMatriculaTrimmed() {
        return getAlunoMatricula() != null ? getAlunoMatricula().trim() : null;
    }
}
