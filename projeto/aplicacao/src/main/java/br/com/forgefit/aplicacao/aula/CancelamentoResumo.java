package br.com.forgefit.aplicacao.aula;

/**
 * DTO para receber dados de cancelamento de reserva.
 */
public class CancelamentoResumo {

    private String alunoMatricula;
    private Integer aulaId;

    // Construtor vazio
    public CancelamentoResumo() {
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

    /**
     * Valida se o cancelamento possui os campos obrigatórios
     */
    public boolean isValid() {
        return alunoMatricula != null && !alunoMatricula.isEmpty()
            && aulaId != null;
    }

    /**
     * Retorna a matrícula do aluno sem espaços extras
     */
    public String getAlunoMatriculaTrimmed() {
        return alunoMatricula != null ? alunoMatricula.trim() : null;
    }
}
