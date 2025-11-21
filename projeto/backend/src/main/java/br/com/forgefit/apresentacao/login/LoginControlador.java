package br.com.forgefit.apresentacao.login;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

import br.com.forgefit.aplicacao.login.LoginService;
import br.com.forgefit.aplicacao.login.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/login")
class LoginControlador {
    
    @Autowired
    private LoginService loginService;

    @RequestMapping(method = POST)
    ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        try {
            // Validações
            System.out.println("=== LOGIN REQUEST ===");
            System.out.println("Email: " + request.email());
            System.out.println("Senha: " + request.senha());
            
            if (request.email() == null || request.email().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new LoginResponse(false, "Email é obrigatório", null));
            }
            
            if (request.senha() == null || request.senha().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new LoginResponse(false, "Senha é obrigatória", null));
            }

            // Autenticar usando o serviço
            System.out.println("Chamando loginService.autenticar...");
            var userDataOpt = loginService.autenticar(request.email(), request.senha());
            
            System.out.println("Resultado: " + (userDataOpt.isPresent() ? "Usuario encontrado" : "Usuario NAO encontrado"));
            
            if (userDataOpt.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse(false, "Credenciais inválidas", null));
            }
            
            return ResponseEntity.ok(
                new LoginResponse(true, "Login realizado com sucesso", userDataOpt.get())
            );
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new LoginResponse(false, "Erro ao processar login: " + e.getMessage(), null));
        }
    }
}

record LoginRequest(String email, String senha) {}

record LoginResponse(boolean sucesso, String mensagem, UserData user) {}
