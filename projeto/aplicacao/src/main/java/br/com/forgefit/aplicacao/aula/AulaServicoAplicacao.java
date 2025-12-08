package br.com.forgefit.aplicacao.aula;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * Serviço da camada de aplicação para operações de consulta de aulas.
 * Coordena chamadas ao repositório e aplica regras de negócio da camada de aplicação.
 */
public class AulaServicoAplicacao {
    private final AulaRepositorioAplicacao repositorio;

    public AulaServicoAplicacao(AulaRepositorioAplicacao repositorio) {
        notNull(repositorio, "O repositório de aulas não pode ser nulo");
        this.repositorio = repositorio;
    }

    /**
     * Lista todas as aulas ativas (futuras).
     * @return Lista de resumos de aulas
     */
    public List<AulaResumo> listarAulasAtivas() {
        return repositorio.pesquisarResumosAtivas();
    }

    public List<AulaResumo> listarAulasAtivasParaAluno(String matricula) {
        notNull(matricula, "A matrícula do aluno não pode ser nula");
        return repositorio.pesquisarResumosAtivasExcluindoAluno(matricula);
    }

    /**
     * Lista aulas filtradas por modalidade.
     * @param modalidade Nome da modalidade
     * @return Lista de resumos de aulas
     */
    public List<AulaResumo> listarPorModalidade(String modalidade) {
        notNull(modalidade, "A modalidade não pode ser nula");
        return repositorio.pesquisarPorModalidade(modalidade);
    }

    /**
     * Lista aulas filtradas por espaço.
     * @param espaco Nome do espaço
     * @return Lista de resumos de aulas
     */
    public List<AulaResumo> listarPorEspaco(String espaco) {
        notNull(espaco, "O espaço não pode ser nulo");
        return repositorio.pesquisarPorEspaco(espaco);
    }

    /**
     * Lista aulas em um período específico.
     * @param inicio Data/hora de início
     * @param fim Data/hora de fim
     * @return Lista de resumos de aulas
     */
    public List<AulaResumo> listarPorPeriodo(LocalDateTime inicio, LocalDateTime fim) {
        notNull(inicio, "A data de início não pode ser nula");
        notNull(fim, "A data de fim não pode ser nula");
        
        if (inicio.isAfter(fim)) {
            throw new IllegalArgumentException("A data de início deve ser anterior à data de fim");
        }
        
        return repositorio.pesquisarPorPeriodo(inicio, fim);
    }

    /**
     * Lista apenas aulas com vagas disponíveis.
     * @return Lista de resumos de aulas
     */
    public List<AulaResumo> listarAulasComVagas() {
        return repositorio.pesquisarComVagasDisponiveis();
    }

    /**
     * Busca detalhes completos de uma aula.
     * @param aulaId ID da aula
     * @return Resumo expandido da aula
     */
    public Optional<AulaResumoExpandido> buscarDetalhesAula(Integer aulaId) {
        notNull(aulaId, "O ID da aula não pode ser nulo");
        return repositorio.buscarResumoExpandido(aulaId);
    }

    /**
     * Lista aulas de um professor específico.
     * @param professorId ID do professor
     * @return Lista de resumos de aulas
     */
    public List<AulaResumo> listarAulasDoProfessor(Integer professorId) {
        notNull(professorId, "O ID do professor não pode ser nulo");
        return repositorio.pesquisarPorProfessor(professorId);
    }

    /**
     * Lista aulas aplicando múltiplos filtros.
     * @param filtros Objeto contendo os critérios de filtro
     * @return Lista de resumos de aulas filtrados
     */
    public List<AulaResumo> listarComFiltros(FiltrosAula filtros) {
        notNull(filtros, "Os filtros não podem ser nulos");
        
        return repositorio.pesquisarComFiltros(
            filtros.getModalidade(),
            filtros.getEspaco(),
            filtros.getInicio(),
            filtros.getFim(),
            filtros.getApenasComVagas()
        );
    }

    public List<AulaResumo> listarAulasDoAluno(String matricula) {
        notNull(matricula, "A matrícula do aluno não pode ser nula");
        return repositorio.buscarAulasPorMatriculaAluno(matricula);
    }

    /**
     * Classe auxiliar para encapsular filtros de pesquisa.
     */
    public static class FiltrosAula {
        private String modalidade;
        private String espaco;
        private LocalDateTime inicio;
        private LocalDateTime fim;
        private Boolean apenasComVagas;

        public FiltrosAula() {
            this.apenasComVagas = false;
        }

        public String getModalidade() {
            return modalidade;
        }

        public void setModalidade(String modalidade) {
            this.modalidade = modalidade;
        }

        public String getEspaco() {
            return espaco;
        }

        public void setEspaco(String espaco) {
            this.espaco = espaco;
        }

        public LocalDateTime getInicio() {
            return inicio;
        }

        public void setInicio(LocalDateTime inicio) {
            this.inicio = inicio;
        }

        public LocalDateTime getFim() {
            return fim;
        }

        public void setFim(LocalDateTime fim) {
            this.fim = fim;
        }

        public Boolean getApenasComVagas() {
            return apenasComVagas;
        }

        public void setApenasComVagas(Boolean apenasComVagas) {
            this.apenasComVagas = apenasComVagas;
        }
    }
}
