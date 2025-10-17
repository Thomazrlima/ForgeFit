package br.com.forgefit.infraestrutura.persistencia.memoria;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import br.com.forgefit.dominio.aluno.Aluno;
import br.com.forgefit.dominio.aluno.AlunoRepositorio;
import br.com.forgefit.dominio.aluno.Cpf;
import br.com.forgefit.dominio.aluno.RegistroFrequencia;
import br.com.forgefit.dominio.aluno.enums.StatusAluno;
import br.com.forgefit.dominio.aluno.enums.StatusFrequencia;
import br.com.forgefit.dominio.aula.Aula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.aula.AulaRepositorio;
import br.com.forgefit.dominio.repositorio.RepositorioGeral;

public class Repositorio implements AlunoRepositorio, AulaRepositorio, RepositorioGeral { 

    private final Map<Cpf, Aluno> alunos = new HashMap<>();
    private final Map<AulaId, Aula> aulas = new HashMap<>(); 

    // ------------------- Implementação de AlunoRepositorio -------------------

    @Override
    public void salvar(Aluno aluno) {
        notNull(aluno);
        alunos.put(aluno.getCpf(), aluno);
    }

    @Override
    public Optional<Aluno> obterPorCpf(Cpf cpf) {
        notNull(cpf);
        return Optional.ofNullable(alunos.get(cpf));
    }

    // ------------------- Implementação de AulaRepositorio -------------------

    @Override
    public void salvar(Aula aula) {
        notNull(aula);
        aulas.put(aula.getId(), aula);
    }

    @Override
    public Aula obter(AulaId id) {
        return obterPorId(id)
                .orElseThrow(() -> new RuntimeException("Aula não encontrada com ID: " + id)); 
    }

    @Override
    public Optional<Aula> obterPorId(AulaId id) {
        notNull(id);
        return Optional.ofNullable(aulas.get(id));
    }


    @Override
    public Optional<Aula> obterAulaComReservaAtiva(Cpf alunoCpf, LocalDate dataAula) {
        
        Optional<Aluno> alunoOpt = obterPorCpf(alunoCpf);
        
        if (alunoOpt.isPresent()) {
            Aluno aluno = alunoOpt.get();
            
            // ATENÇÃO: É VITAL que o método 'obterRegistroFrequencia(LocalDate)'
            // exista na sua classe Aluno para que a simulação funcione.
            RegistroFrequencia registro = aluno.obterRegistroFrequencia(dataAula); 
            
            if (registro != null && registro.getStatus() == StatusFrequencia.PRESENTE) {
                // Retorna a Aula correspondente se a reserva estiver ativa
                return obterPorId(registro.getAulaId());
            }
        }
        return Optional.empty();
    }
    
    // ------------------- Implementação de RepositorioGeral -------------------
    // Adicione a implementação de quaisquer métodos definidos em RepositorioGeral aqui.
    // Se a interface for um marcador, não é preciso adicionar nada.

    // ----------------------- Métodos de simulação para testes -----------------------
    
    public void simularAluno(Cpf cpf, StatusAluno status) {
        alunos.put(cpf, new Aluno(cpf, status));
    }

    /**
     * NOVO MÉTODO: Simulação da criação da Aula (para evitar NullPointerException).
     */
    public void simularAula(Aula aula) {
         salvar(aula);
    }
    
    public void simularReserva(Cpf cpf, AulaId aulaId, LocalDate data, boolean cancelada) {
        Aluno aluno = alunos.get(cpf);
        if (aluno != null) {
            StatusFrequencia status = cancelada ? StatusFrequencia.FALTA : StatusFrequencia.PRESENTE;
            aluno.adicionarRegistroFrequencia(new RegistroFrequencia(aulaId, data, status));
        }
    }

    public void simularFaltasAluno(Cpf cpf, int numFaltas, int numDias) {
        Aluno aluno = alunos.get(cpf);
        if (aluno != null) {
            for (int i = 0; i < numFaltas; i++) {
                aluno.adicionarRegistroFrequencia(
                    new RegistroFrequencia(new AulaId(i + 1), LocalDate.now().minusDays(i), StatusFrequencia.FALTA)
                );
            }
        }
    }

    public void simularAlunoBloqueado(Cpf cpf, LocalDate dataFimBloqueio) {
        Aluno aluno = alunos.get(cpf);
        if (aluno != null) {
            // Lógica de simulação de bloqueio
        }
    }
}