package br.com.forgefit.persistencia.jpa;

import jakarta.persistence.Embeddable;

@Embeddable
public class PremioJpa {
    private String nome;
    private String urlImagem;

    public PremioJpa() {
    }

    public PremioJpa(String nome, String urlImagem) {
        this.nome = nome;
        this.urlImagem = urlImagem;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }
}

