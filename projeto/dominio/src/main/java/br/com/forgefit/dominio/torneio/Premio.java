package br.com.forgefit.dominio.torneio;

import static org.apache.commons.lang3.Validate.notBlank;
import static org.apache.commons.lang3.Validate.notNull;

public class Premio {
    private final String nome;
    private final String urlImagem;

    public Premio(String nome, String urlImagem) {
        notNull(nome, "O nome do prêmio não pode ser nulo");
        notBlank(nome, "O nome do prêmio não pode estar em branco");
        
        this.nome = nome;
        this.urlImagem = urlImagem;
    }

    public String getNome() {
        return nome;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    @Override
    public String toString() {
        return nome;
    }
}

