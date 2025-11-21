package br.com.forgefit.persistencia.jpa;

import br.com.forgefit.dominio.usuario.UsuarioMockData;
import br.com.forgefit.dominio.usuario.UsuarioMockRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UsuarioMockRepositorioJpa implements UsuarioMockRepositorio {

    @Autowired
    private UsuarioMockRepository usuarioMockRepository;

    @Override
    public Optional<UsuarioMockData> findByEmailAndPassword(String email, String password) {
        System.out.println("=== REPOSITORIO JPA ===");
        System.out.println("Buscando: email=" + email + ", senha=" + password);
        
        // Primeiro tenta buscar só por email para verificar se o usuário existe
        var porEmail = usuarioMockRepository.findByEmail(email);
        System.out.println("Usuario existe (busca por email): " + porEmail.isPresent());
        if (porEmail.isPresent()) {
            System.out.println("Senha no banco: [" + porEmail.get().getPassword() + "]");
            System.out.println("Senha recebida: [" + password + "]");
            System.out.println("Senhas iguais: " + porEmail.get().getPassword().equals(password));
        }
        
        var resultado = usuarioMockRepository.findByEmailAndPassword(email, password);
        System.out.println("Resultado findByEmailAndPassword: " + resultado.isPresent());
        
        return resultado.map(entity -> new UsuarioMockData(
                        entity.getId(),
                        entity.getRole(),
                        entity.getEmail(),
                        entity.getAvatar()
                ));
    }
}
