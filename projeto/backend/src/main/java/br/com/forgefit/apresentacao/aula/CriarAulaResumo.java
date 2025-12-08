package br.com.forgefit.apresentacao.aula;

/**
 * DTO para resumo de criação de aula
 */
public class CriarAulaResumo {
    private String modalidade;
    private String espaco;
    private String tipoAula; // UNICA, SEMANAL, MENSAL, etc.
    private Integer capacidade;
    private String horarioInicio; // ISO 8601: 2024-01-15T19:00:00
    private String horarioFim; // ISO 8601: 2024-01-15T20:00:00
    private int[] diasDaSemana; // Para recorrentes: 0=Dom, 1=Seg, ..., 6=Sab
    private String dataFim; // Para recorrentes: ISO 8601

    // Construtores
    public CriarAulaResumo() {
    }

    public CriarAulaResumo(String modalidade, String espaco, String tipoAula, Integer capacidade,
                            String horarioInicio, String horarioFim) {
        this.modalidade = modalidade;
        this.espaco = espaco;
        this.tipoAula = tipoAula;
        this.capacidade = capacidade;
        this.horarioInicio = horarioInicio;
        this.horarioFim = horarioFim;
    }

    // Getters e Setters
    public String getModalidade() {
        return modalidade;
    }

    public void setModalidade(String modalidade) {
        this.modalidade = modalidade;
    }

    public String getEspaco() {
        return espaco;
    }

    public void setEspaco(String espaco) {
        this.espaco = espaco;
    }

    public String getTipoAula() {
        return tipoAula;
    }

    public void setTipoAula(String tipoAula) {
        this.tipoAula = tipoAula;
    }

    public Integer getCapacidade() {
        return capacidade;
    }

    public void setCapacidade(Integer capacidade) {
        this.capacidade = capacidade;
    }

    public String getHorarioInicio() {
        return horarioInicio;
    }

    public void setHorarioInicio(String horarioInicio) {
        this.horarioInicio = horarioInicio;
    }

    public String getHorarioFim() {
        return horarioFim;
    }

    public void setHorarioFim(String horarioFim) {
        this.horarioFim = horarioFim;
    }

    public int[] getDiasDaSemana() {
        return diasDaSemana;
    }

    public void setDiasDaSemana(int[] diasDaSemana) {
        this.diasDaSemana = diasDaSemana;
    }

    public String getDataFim() {
        return dataFim;
    }

    public void setDataFim(String dataFim) {
        this.dataFim = dataFim;
    }
}
