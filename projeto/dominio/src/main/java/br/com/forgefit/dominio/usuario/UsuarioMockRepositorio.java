package br.com.forgefit.dominio.usuario;

import java.util.Optional;

public interface UsuarioMockRepositorio {
    Optional<UsuarioMockData> findByEmailAndPassword(String email, String password);
}
