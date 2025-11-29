package br.com.forgefit.aplicacao.frequencia;

import java.time.LocalDate;

/**
 * DTO para receber dados de registro de frequência.
 */
public class RegistroFrequenciaResumo {

    private String alunoMatricula;
    private Integer aulaId;
    private LocalDate data;
    private String tipoRegistro; // "PRESENCA" ou "FALTA"

    // Construtor vazio
    public RegistroFrequenciaResumo() {
    }

    // Getters e Setters
    public String getAlunoMatricula() {
        return alunoMatricula;
    }

    public void setAlunoMatricula(String alunoMatricula) {
        this.alunoMatricula = alunoMatricula;
    }

    public Integer getAulaId() {
        return aulaId;
    }

    public void setAulaId(Integer aulaId) {
        this.aulaId = aulaId;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getTipoRegistro() {
        return tipoRegistro;
    }

    public void setTipoRegistro(String tipoRegistro) {
        this.tipoRegistro = tipoRegistro;
    }

    /**
     * Valida se o registro possui os campos obrigatórios
     */
    public boolean isValid() {
        return alunoMatricula != null && !alunoMatricula.isEmpty()
            && aulaId != null
            && data != null
            && tipoRegistro != null && !tipoRegistro.isEmpty();
    }

    /**
     * Valida se o tipo de registro é válido
     */
    public boolean hasValidTipo() {
        return "PRESENCA".equalsIgnoreCase(tipoRegistro) || "FALTA".equalsIgnoreCase(tipoRegistro);
    }

    /**
     * Retorna a matrícula do aluno sem espaços extras
     */
    public String getAlunoMatriculaTrimmed() {
        return alunoMatricula != null ? alunoMatricula.trim() : null;
    }
}
