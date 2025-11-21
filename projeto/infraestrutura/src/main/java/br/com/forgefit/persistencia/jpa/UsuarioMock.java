package br.com.forgefit.persistencia.jpa;

import jakarta.persistence.*;

@Entity
@Table(name = "USUARIOS_MOCK")
public class UsuarioMock {
    
    @Id
    @Column(name = "ID")
    private Integer id;
    
    @Column(name = "ROLE", nullable = false, length = 20)
    private String role;
    
    @Column(name = "EMAIL", nullable = false, unique = true, length = 255)
    private String email;
    
    @Column(name = "PASSWORD", nullable = false, length = 255)
    private String password;
    
    @Column(name = "AVATAR", length = 500)
    private String avatar;
    
    // Constructors
    public UsuarioMock() {
    }
    
    public UsuarioMock(Integer id, String role, String email, String password, String avatar) {
        this.id = id;
        this.role = role;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
    }
    
    // Getters and Setters
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
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getAvatar() {
        return avatar;
    }
    
    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
