package br.com.forgefit.dominio.usuario;

public class UsuarioMockData {
    private Integer id;
    private String role;
    private String email;
    private String avatar;

    public UsuarioMockData() {
    }

    public UsuarioMockData(Integer id, String role, String email, String avatar) {
        this.id = id;
        this.role = role;
        this.email = email;
        this.avatar = avatar;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
