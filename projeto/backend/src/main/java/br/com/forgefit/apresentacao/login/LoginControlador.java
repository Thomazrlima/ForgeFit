package br.com.forgefit.apresentacao.login;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Matricula;

@RestController
@RequestMapping("api/login")
class LoginControlador {
    
    @Autowired
    private AlunoRepositorio alunoRepositorio;

    @RequestMapping(method = POST)
    ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        try {
            if (request.email() == null || request.email().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new LoginResponse(false, "Email é obrigatório", null, null));
            }
            
            if (request.senha() == null || request.senha().isEmpty()) {
                return ResponseEntity.badRequest()
                    .body(new LoginResponse(false, "Senha é obrigatória", null, null));
            }

            String matricula = request.email().split("@")[0];
            
            var alunoOpt = alunoRepositorio.obterPorMatricula(new Matricula(matricula));
            
            if (alunoOpt.isPresent()) {
                var aluno = alunoOpt.get();
                return ResponseEntity.ok(
                    new LoginResponse(
                        true, 
                        "Login realizado com sucesso", 
                        aluno.getMatricula().getValor(),
                        aluno.getNome()
                    )
                );
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse(false, "Credenciais inválidas", null, null));
            }
            
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new LoginResponse(false, "Erro ao processar login: " + e.getMessage(), null, null));
        }
    }
}

record LoginRequest(String email, String senha) {}

record LoginResponse(boolean sucesso, String mensagem, String matricula, String nome) {}
