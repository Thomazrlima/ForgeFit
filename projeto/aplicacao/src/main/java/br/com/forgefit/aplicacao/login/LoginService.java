package br.com.forgefit.aplicacao.login;

import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.usuario.UsuarioMockRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {
    
    @Autowired
    private UsuarioMockRepositorio usuarioMockRepositorio;
    
    @Autowired
    private AlunoRepositorio alunoRepositorio;
    
    public Optional<UserData> autenticar(String email, String senha) {
        System.out.println("=== LOGIN SERVICE ===");
        System.out.println("Buscando usuario: " + email);
        
        // Buscar usuário na tabela USUARIOS_MOCK
        var usuarioOpt = usuarioMockRepositorio.findByEmailAndPassword(email, senha);
        
        System.out.println("Usuario encontrado no USUARIOS_MOCK: " + usuarioOpt.isPresent());
        
        if (usuarioOpt.isEmpty()) {
            return Optional.empty();
        }
        
        var usuario = usuarioOpt.get();
        String role = usuario.getRole();
        Integer userId = usuario.getId();
        
        System.out.println("UserId: " + userId + ", Role: " + role);
        
        // Buscar dados específicos baseado na role
        switch (role) {
            case "student":
                System.out.println("Buscando aluno por userId: " + userId);
                var alunoOpt = alunoRepositorio.obterAlunoPorUserId(String.valueOf(userId));
                System.out.println("Aluno encontrado: " + alunoOpt.isPresent());
                
                if (alunoOpt.isPresent()) {
                    var aluno = alunoOpt.get();
                    return Optional.of(new UserData(
                        userId,
                        aluno.getNome(),
                        usuario.getAvatar(),
                        "student",
                        aluno.getMatricula().getValor(),
                        aluno.getPontuacaoTotal(),
                        aluno.getCreditos()
                    ));
                }
                break;
                
            case "professor":
                // Buscar professor por userId
                // Temporariamente retornando dados básicos
                return Optional.of(new UserData(
                    userId,
                    "Professor",
                    usuario.getAvatar(),
                    "professor",
                    null,
                    null,
                    null
                ));
                
            case "manager":
                return Optional.of(new UserData(
                    userId,
                    "Manager",
                    usuario.getAvatar(),
                    "admin",
                    null,
                    null,
                    null
                ));
        }
        
        return Optional.empty();
    }
}
