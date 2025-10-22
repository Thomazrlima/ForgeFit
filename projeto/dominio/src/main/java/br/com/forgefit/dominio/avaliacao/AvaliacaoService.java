package br.com.forgefit.dominio.avaliacao;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDate;
import java.util.concurrent.atomic.AtomicInteger;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.aula.AulaId;
import br.com.forgefit.dominio.professor.ProfessorId;

public class AvaliacaoService {
    private final AvaliacaoRepositorio avaliacaoRepositorio;
    private final AtomicInteger contadorId = new AtomicInteger(1);

    public AvaliacaoService(AvaliacaoRepositorio avaliacaoRepositorio) {
        notNull(avaliacaoRepositorio, "O repositório de avaliações não pode ser nulo");
        this.avaliacaoRepositorio = avaliacaoRepositorio;
    }

    public Avaliacao criarAvaliacao(Matricula alunoMatricula, ProfessorId professorId, AulaId aulaId, LocalDate dataDaOcorrencia,
                                    Notas notas, String comentario) {
        
        AvaliacaoId id = new AvaliacaoId(contadorId.getAndIncrement());
        Avaliacao avaliacao = new Avaliacao(id, alunoMatricula, professorId, aulaId, dataDaOcorrencia, notas, comentario);
        
        avaliacaoRepositorio.salvar(avaliacao);
        return avaliacao;
    }
    
    public String criarAvaliacaoComMensagem(Matricula alunoMatricula, ProfessorId professorId, AulaId aulaId, 
                                            LocalDate dataDaOcorrencia, Notas notas, String comentario) {
        notNull(notas, "As notas não podem ser nulas");
        
        if (notas.getPontualidade() == 0 || notas.getDidatica() == 0 || notas.getAtencao() == 0) {
            return "É necessário preencher todas as métricas de avaliação";
        }
        
        criarAvaliacao(alunoMatricula, professorId, aulaId, dataDaOcorrencia, notas, comentario);
        return "A avaliação foi registrada com sucesso";
    }
}
