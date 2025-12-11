package br.com.forgefit.aplicacao.login;

public class UserData {
    private Integer id;
    private String name;
    private String avatar;
    private String role;
    private String matricula;
    private Integer pontuacaoTotal;
    private Double creditos;
    private Integer guildaId;

    public UserData() {
    }

    public UserData(Integer id, String name, String avatar, String role, 
                   String matricula, Integer pontuacaoTotal, Double creditos, Integer guildaId) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.role = role;
        this.matricula = matricula;
        this.pontuacaoTotal = pontuacaoTotal;
        this.creditos = creditos;
        this.guildaId = guildaId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public Integer getPontuacaoTotal() {
        return pontuacaoTotal;
    }

    public void setPontuacaoTotal(Integer pontuacaoTotal) {
        this.pontuacaoTotal = pontuacaoTotal;
    }

    public Double getCreditos() {
        return creditos;
    }

    public void setCreditos(Double creditos) {
        this.creditos = creditos;
    }

    public Integer getGuildaId() {
        return guildaId;
    }

    public void setGuildaId(Integer guildaId) {
        this.guildaId = guildaId;
    }
}
