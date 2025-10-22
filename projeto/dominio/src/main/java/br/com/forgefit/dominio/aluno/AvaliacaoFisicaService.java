package br.com.forgefit.dominio.aluno;

import static org.apache.commons.lang3.Validate.notNull;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class AvaliacaoFisicaService {
    private final AlunoRepositorio repositorio;
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public AvaliacaoFisicaService(AlunoRepositorio repositorio) {
        notNull(repositorio, "O repositório não pode ser nulo");
        this.repositorio = repositorio;
    }

    public String registrarAvaliacaoFisica(Matricula alunoMatricula, AvaliacaoFisica avaliacao) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        notNull(avaliacao, "A avaliação física não pode ser nula");

        Aluno aluno = repositorio.obterPorMatricula(alunoMatricula)
            .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));

        aluno.adicionarAvaliacaoFisica(avaliacao);
        
        repositorio.salvar(aluno);
        
        return "Avaliação física salva com sucesso";
    }
    
    public String verificarHistoricoAvaliacoes(Matricula alunoMatricula) {
        notNull(alunoMatricula, "A matrícula do aluno não pode ser nula");
        
        Aluno aluno = repositorio.obterPorMatricula(alunoMatricula)
            .orElseThrow(() -> new IllegalArgumentException("Aluno não encontrado"));
        
        if (aluno.getHistoricoDeAvaliacoes() == null || aluno.getHistoricoDeAvaliacoes().isEmpty()) {
            return "Esse aluno não tem avaliações registradas";
        }
        
        return null; // Tem avaliações
    }
    
    public String formatarHistoricoAvaliacoes(List<AvaliacaoFisica> historicoAvaliacoes) {
        notNull(historicoAvaliacoes, "O histórico de avaliações não pode ser nulo");
        
        if (historicoAvaliacoes.isEmpty()) {
            return "Esse aluno não tem avaliações registradas";
        }
        
        StringBuilder resultado = new StringBuilder();
        for (AvaliacaoFisica avaliacao : historicoAvaliacoes) {
            String dataFormatada = FORMATTER.format(avaliacao.getDataDaAvaliacao());

            resultado.append("Avaliação de \"").append(dataFormatada).append("\":\n")
                .append("O porcentual de massa gorda como \"").append(avaliacao.getMassaGordaPercentual()).append("\",\n")
                .append("A massa gorda como \"").append(avaliacao.getMassaGordaKg()).append("\" kg,\n")
                .append("A massa magra como \"").append(avaliacao.getMassaMagraKg()).append("\" kg,\n")
                .append("A massa muscular esquelética como \"").append(avaliacao.getMassaMuscularEsqueleticaKg()).append("\" kg,\n")
                .append("O percentual de água corporal como \"").append(avaliacao.getAguaCorporalTotalPercentual()).append("\",\n")
                .append("O nível de gordura visceral como \"").append(avaliacao.getGorduraVisceralNivel()).append("\",\n")
                .append("A taxa metabolica basal como \"").append(avaliacao.getTaxaMetabolicaBasalKcal()).append("\" kcal,\n")
                .append("A massa óssea como \"").append(avaliacao.getMassaOsseaKg()).append("\" kg,\n")
                .append("O índice de massa corporal como \"").append(avaliacao.getIndiceDeMassaCorporal()).append("\",\n")
                .append("O tamanho do braço relaxado como \"").append(avaliacao.getBracoRelaxadoCm()).append("\" cm,\n")
                .append("O tamanho do braço contraído como \"").append(avaliacao.getBracoContraidoCm()).append("\" cm,\n")
                .append("O tamanho do antebraço como \"").append(avaliacao.getAntebracoCm()).append("\" cm,\n")
                .append("O tamanho do torax peitoral como \"").append(avaliacao.getToraxPeitoralCm()).append("\" cm,\n")
                .append("O tamanho da cintura como \"").append(avaliacao.getCinturaCm()).append("\" cm,\n")
                .append("O tamanho do abdomen como \"").append(avaliacao.getAbdomenCm()).append("\" cm,\n")
                .append("O tamanho do quadril como \"").append(avaliacao.getQuadrilCm()).append("\" cm,\n")
                .append("O tamanho da coxa como \"").append(avaliacao.getCoxaCm()).append("\" cm,\n")
                .append("O tamanho da panturrilha como \"").append(avaliacao.getPanturrilhaCm()).append("\" cm\n");
        }
        return resultado.toString();
    }
    
    public String analisarEvolucaoFisica(List<ComparacaoCampo> comparacoes) {
        notNull(comparacoes, "A lista de comparações não pode ser nula");
        
        List<String> camposEvoluidos = new ArrayList<>();
        
        for (ComparacaoCampo comparacao : comparacoes) {
            boolean evoluiu = comparacao.verificarEvolucao();
            if (evoluiu) {
                camposEvoluidos.add(comparacao.getNomeCampo());
            }
        }
        
        if (!camposEvoluidos.isEmpty()) {
            StringBuilder mensagem = new StringBuilder("Você demonstrou evolução em: ");
            for (int i = 0; i < camposEvoluidos.size(); i++) {
                mensagem.append(camposEvoluidos.get(i));
                if (i < camposEvoluidos.size() - 2) {
                    mensagem.append(", ");
                } else if (i == camposEvoluidos.size() - 2) {
                    mensagem.append(" e ");
                }
            }
            mensagem.append(". Parabéns!");
            return mensagem.toString();
        } else {
            return "Você não mostrou evolução nos seus treinos... É melhor revisar o seu treino com um professor";
        }
    }
    
    public static class ComparacaoCampo {
        private final String nomeCampo;
        private final double valorAntigo;
        private final double valorNovo;
        private final boolean menorEMelhor; // true para campos como gordura, cintura
        
        public ComparacaoCampo(String nomeCampo, double valorAntigo, double valorNovo, boolean menorEMelhor) {
            this.nomeCampo = nomeCampo;
            this.valorAntigo = valorAntigo;
            this.valorNovo = valorNovo;
            this.menorEMelhor = menorEMelhor;
        }
        
        public boolean verificarEvolucao() {
            if (menorEMelhor) {
                return valorNovo < valorAntigo;
            } else {
                return valorNovo > valorAntigo;
            }
        }
        
        public String getNomeCampo() {
            return nomeCampo;
        }
    }
}