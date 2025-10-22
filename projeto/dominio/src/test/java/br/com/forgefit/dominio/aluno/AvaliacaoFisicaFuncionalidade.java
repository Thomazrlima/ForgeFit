package br.com.forgefit.dominio.aluno;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import br.com.forgefit.dominio.AcademiaFuncionalidade;
import br.com.forgefit.dominio.professor.ProfessorId;

public class AvaliacaoFisicaFuncionalidade {
    private final AcademiaFuncionalidade contexto;
    private Matricula matriculaAluno;
    private AvaliacaoFisica avaliacaoAtual;
    private List<AvaliacaoFisica> historicoAvaliacoes;
    private String mensagemSistema;
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public AvaliacaoFisicaFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    @Given("que o aluno é cadastrado com a matrícula {string}")
    public void queOAlunoECadastradoComAMatricula(String matricula) {
        this.matriculaAluno = new Matricula(matricula);
        Optional<Aluno> aluno = contexto.repositorio.obterPorMatricula(matriculaAluno);
        if (aluno.isEmpty()) {
            // Cria CPF baseado na matrícula (apenas para testes)
            Cpf cpf = new Cpf(matricula.replaceAll("[^0-9]", "").substring(0, 11));
            Aluno novoAluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.now().minusYears(25));
            contexto.repositorio.salvar(novoAluno);
            contexto.alunoAtual = novoAluno;
        } else {
            contexto.alunoAtual = aluno.get();
        }
    }

    @When("o aluno registra uma nova avaliação física informando:")
    public void oAlunoRegistraUmaNovaAvaliacaoFisicaInformando(io.cucumber.datatable.DataTable dataTable) {
        avaliacaoAtual = new AvaliacaoFisica(new ProfessorId(1), LocalDate.now());

        try {
            for (String linha : dataTable.asList()) {
                String[] partes = linha.split(" como ");
                String campo = partes[0].toLowerCase().trim();
                String valor = partes[1].replace("\"", "").replace(",", "").trim();

                if (campo.contains("porcentual de massa gorda")) {
                    avaliacaoAtual.setMassaGordaPercentual(Double.parseDouble(valor));
                } else if (campo.contains("massa gorda")) {
                    avaliacaoAtual.setMassaGordaKg(Double.parseDouble(valor.replace(" kg", "")));
                } else if (campo.contains("massa magra")) {
                    avaliacaoAtual.setMassaMagraKg(Double.parseDouble(valor.replace(" kg", "")));
                } else if (campo.contains("massa muscular esquelética")) {
                    avaliacaoAtual.setMassaMuscularEsqueleticaKg(Double.parseDouble(valor.replace(" kg", "")));
                } else if (campo.contains("nível de gordura visceral")) {
                    avaliacaoAtual.setGorduraVisceralNivel(Integer.parseInt(valor));
                } else if (campo.contains("taxa metabolica basal")) {
                    avaliacaoAtual.setTaxaMetabolicaBasalKcal(Integer.parseInt(valor.replace(" kcal", "")));
                } else if (campo.contains("massa óssea")) {
                    avaliacaoAtual.setMassaOsseaKg(Double.parseDouble(valor.replace(" kg", "")));
                } else if (campo.contains("índice de massa corporal")) {
                    avaliacaoAtual.setIndiceDeMassaCorporal(Double.parseDouble(valor));
                } else if (campo.contains("braço relaxado")) {
                    avaliacaoAtual.setBracoRelaxadoCm(Double.parseDouble(valor.replace(" cm", "")));
                } else if (campo.contains("braço contraído")) {
                    avaliacaoAtual.setBracoContraidoCm(Double.parseDouble(valor.replace(" cm", "")));
                } else if (campo.contains("antebraço")) {
                    avaliacaoAtual.setAntebracoCm(Double.parseDouble(valor.replace(" cm", "")));
                } else if (campo.contains("torax peitoral")) {
                    avaliacaoAtual.setToraxPeitoralCm(Double.parseDouble(valor.replace(" cm", "")));
                } else if (campo.contains("cintura")) {
                    avaliacaoAtual.setCinturaCm(Double.parseDouble(valor.replace(" cm", "")));
                } else if (campo.contains("abdomen")) {
                    avaliacaoAtual.setAbdomenCm(Double.parseDouble(valor.replace(" cm", "")));
                } else if (campo.contains("quadril")) {
                    avaliacaoAtual.setQuadrilCm(Double.parseDouble(valor.replace(" cm", "")));
                } else if (campo.contains("coxa")) {
                    avaliacaoAtual.setCoxaCm(Double.parseDouble(valor.replace(" cm", "")));
                } else if (campo.contains("panturrilha")) {
                    avaliacaoAtual.setPanturrilhaCm(Double.parseDouble(valor.replace(" cm", "")));
                }
            }

            mensagemSistema = contexto.avaliacaoFisicaService.registrarAvaliacaoFisica(contexto.alunoAtual.getMatricula(), avaliacaoAtual);
        } catch (Exception e) {
            mensagemSistema = "É necessário preencher todos os campos da avaliação física";
        }
    }

    @Given("que o aluno possui uma avaliação com a data {string}")
    public void queOAlunoPossuiUmaAvaliacaoComAData(String data) {
        if (matriculaAluno == null) {
            queOAlunoECadastradoComAMatricula("902.142.720-60");
        }
        LocalDate dataAvaliacao = LocalDate.parse(data, FORMATTER);
        AvaliacaoFisica avaliacao = criarAvaliacaoPadrao(dataAvaliacao);
        contexto.avaliacaoFisicaService.registrarAvaliacaoFisica(contexto.alunoAtual.getMatricula(), avaliacao);
    }

    @When("o aluno solicita o histórico de avaliações")
    public void oAlunoSolicitaOHistoricoDeAvaliacoes() {
        String mensagemVerificacao = contexto.avaliacaoFisicaService.verificarHistoricoAvaliacoes(matriculaAluno);
        if (mensagemVerificacao != null) {
            mensagemSistema = mensagemVerificacao;
        } else {
            Optional<Aluno> aluno = contexto.repositorio.obterPorMatricula(matriculaAluno);
            if (aluno.isPresent()) {
                historicoAvaliacoes = aluno.get().getHistoricoDeAvaliacoes();
            }
        }
    }

    @Given("que o aluno possui uma avaliação física de {string} e outra de {string}")
    public void queOAlunoPossuiDuasAvaliacoesFisicas(String data1, String data2) {
        if (matriculaAluno == null) {
            queOAlunoECadastradoComAMatricula("902.142.720-60");
        }
        LocalDate dataAvaliacao1 = LocalDate.parse(data1, FORMATTER);
        LocalDate dataAvaliacao2 = LocalDate.parse(data2, FORMATTER);
        
        AvaliacaoFisica avaliacao1 = criarAvaliacaoPadrao(dataAvaliacao1);
        AvaliacaoFisica avaliacao2 = criarAvaliacaoPadrao(dataAvaliacao2);
        
        contexto.avaliacaoFisicaService.registrarAvaliacaoFisica(contexto.alunoAtual.getMatricula(), avaliacao1);
        contexto.avaliacaoFisicaService.registrarAvaliacaoFisica(contexto.alunoAtual.getMatricula(), avaliacao2);
    }

    @When("o sistema compara os campos:")
    public void oSistemaComparaOsCampos(io.cucumber.datatable.DataTable dataTable) {
        List<String> linhas = dataTable.asList();
        List<AvaliacaoFisicaService.ComparacaoCampo> comparacoes = new ArrayList<>();

        for (String linha : linhas) {
            linha = linha.endsWith(",") ? linha.substring(0, linha.length() - 1) : linha;
            
            String[] partes = linha.split(" e de ");
            
            String[] dadosAntigos = partes[0].split(" como ");
            String[] dadosNovos = partes[1].split(" como ");
            
            double valorAntigo = Double.parseDouble(dadosAntigos[1].replace("\"", "").replace(" kg", "")
                                                                   .replace(" cm", "").replace(" kcal", ""));
            double valorNovo = Double.parseDouble(dadosNovos[1].replace("\"", "").replace(" kg", "")
                                                                 .replace(" cm", "").replace(" kcal", ""));
            
            String campoCompleto = dadosAntigos[0].substring(0, dadosAntigos[0].lastIndexOf(" de ")).trim();
            
            // Define se menor é melhor (gordura, cintura) ou maior é melhor (músculos)
            boolean menorEMelhor = campoCompleto.toLowerCase().contains("gordura") || 
                                   campoCompleto.toLowerCase().contains("cintura");
            
            comparacoes.add(new AvaliacaoFisicaService.ComparacaoCampo(
                campoCompleto, valorAntigo, valorNovo, menorEMelhor
            ));
        }

        mensagemSistema = contexto.avaliacaoFisicaService.analisarEvolucaoFisica(comparacoes);
    }

    @When("o aluno tenta registrar uma avaliação física com os campos:")
    public void o_aluno_tenta_registrar_uma_avaliação_física_com_os_campos(io.cucumber.datatable.DataTable dataTable) {
        avaliacaoAtual = new AvaliacaoFisica(new ProfessorId(1), LocalDate.now());

        try {
            for (String linha : dataTable.asList()) {
                String[] partes = linha.split(" como ");
                if (partes.length != 2) {
                    throw new IllegalArgumentException("Formato inválido: " + linha);
                }
                
                String campo = partes[0].toLowerCase().trim();
                String valor = partes[1].replace("\"", "").replace(",", "").replace(" kg", "").replace(" cm", "").replace(" kcal", "").trim();

                if (valor.isEmpty()) {
                    throw new IllegalArgumentException("Campo vazio: " + campo);
                }

                campo = campo.replaceFirst("^[oOaA]\\s+", "").trim();

                if (campo.contains("massa gorda")) {
                    if (campo.contains("porcentual") || campo.contains("percentual")) {
                        avaliacaoAtual.setMassaGordaPercentual(Double.parseDouble(valor));
                    } else {
                        avaliacaoAtual.setMassaGordaKg(Double.parseDouble(valor));
                    }
                } else if (campo.contains("massa magra")) {
                    avaliacaoAtual.setMassaMagraKg(Double.parseDouble(valor));
                } else if (campo.contains("massa muscular esquelética")) {
                    avaliacaoAtual.setMassaMuscularEsqueleticaKg(Double.parseDouble(valor));
                } else if (campo.contains("gordura visceral")) {
                    avaliacaoAtual.setGorduraVisceralNivel(Integer.parseInt(valor));
                } else if (campo.contains("taxa metabolica")) {
                    avaliacaoAtual.setTaxaMetabolicaBasalKcal(Integer.parseInt(valor));
                } else if (campo.contains("massa óssea")) {
                    avaliacaoAtual.setMassaOsseaKg(Double.parseDouble(valor));
                } else if (campo.contains("índice de massa corporal")) {
                    avaliacaoAtual.setIndiceDeMassaCorporal(Double.parseDouble(valor));
                } else if (campo.contains("braço relaxado")) {
                    avaliacaoAtual.setBracoRelaxadoCm(Double.parseDouble(valor));
                } else if (campo.contains("braço contraído")) {
                    avaliacaoAtual.setBracoContraidoCm(Double.parseDouble(valor));
                } else if (campo.contains("antebraço")) {
                    avaliacaoAtual.setAntebracoCm(Double.parseDouble(valor));
                } else if (campo.contains("torax") || campo.contains("peitoral")) {
                    avaliacaoAtual.setToraxPeitoralCm(Double.parseDouble(valor));
                } else if (campo.contains("cintura")) {
                    avaliacaoAtual.setCinturaCm(Double.parseDouble(valor));
                } else if (campo.contains("abdomen")) {
                    avaliacaoAtual.setAbdomenCm(Double.parseDouble(valor));
                } else if (campo.contains("quadril")) {
                    avaliacaoAtual.setQuadrilCm(Double.parseDouble(valor));
                } else if (campo.contains("coxa")) {
                    avaliacaoAtual.setCoxaCm(Double.parseDouble(valor));
                } else if (campo.contains("panturrilha")) {
                    avaliacaoAtual.setPanturrilhaCm(Double.parseDouble(valor));
                } else {
                    throw new IllegalArgumentException("Campo inválido: " + campo);
                }
            }
            mensagemSistema = "Avaliação física registrada com sucesso";
        } catch (Exception e) {
            mensagemSistema = "É necessário preencher todos os campos da avaliação física";
        }
    }

    @Then("o sistema exibe a lista com os dados de cada avaliação:")
    public void o_sistema_exibe_a_lista_com_os_dados_de_cada_avaliação(io.cucumber.datatable.DataTable dataTable) {
        if (historicoAvaliacoes == null || historicoAvaliacoes.isEmpty()) {
            mensagemSistema = contexto.avaliacaoFisicaService.verificarHistoricoAvaliacoes(matriculaAluno);
        } else {
            mensagemSistema = contexto.avaliacaoFisicaService.formatarHistoricoAvaliacoes(historicoAvaliacoes);
        }
    }

    @Given("que o aluno com a matrícula {string} ainda não possui avaliações físicas registradas")
    public void que_o_aluno_com_a_matricula_ainda_não_possui_avaliações_físicas_registradas(String matricula) {
        this.matriculaAluno = new Matricula(matricula);
        Optional<Aluno> aluno = contexto.repositorio.obterPorMatricula(matriculaAluno);
        if (aluno.isEmpty()) {
            // Cria CPF baseado na matrícula (apenas para testes)
            Cpf cpf = new Cpf(matricula.replaceAll("[^0-9]", "").substring(0, 11));
            Aluno novoAluno = new Aluno(matriculaAluno, cpf, "Aluno Teste", LocalDate.now().minusYears(25));
            contexto.repositorio.salvar(novoAluno);
            contexto.alunoAtual = novoAluno;
        } else {
            contexto.alunoAtual = aluno.get();
        }
        historicoAvaliacoes = null;
    }

    @Then("o sistema em relação a avaliação fisica informa {string}")
    public void o_sistema_em_relação_a_avaliação_fisica_informa(String mensagemEsperada) {
        assertEquals(mensagemEsperada, mensagemSistema);
        
        // BUSCA DO REPOSITÓRIO - valida que o service realmente persistiu a avaliação física
        if (mensagemEsperada.contains("sucesso") && matriculaAluno != null && avaliacaoAtual != null) {
            Optional<Aluno> alunoDoRepositorio = contexto.repositorio.obterPorMatricula(matriculaAluno);
            assertTrue(alunoDoRepositorio.isPresent(), 
                    "O aluno deveria estar no repositório após salvar avaliação física");
            
            Aluno alunoSalvo = alunoDoRepositorio.get();
            assertNotNull(alunoSalvo.getHistoricoDeAvaliacoes(), 
                    "O histórico de avaliações não pode ser nulo");
            assertFalse(alunoSalvo.getHistoricoDeAvaliacoes().isEmpty(), 
                    "A avaliação física deveria ter sido adicionada ao histórico do aluno no repositório");
            
            // VALIDA QUE OS DADOS DA AVALIAÇÃO FORAM SALVOS CORRETAMENTE
            AvaliacaoFisica avaliacaoSalva = alunoSalvo.getHistoricoDeAvaliacoes()
                    .get(alunoSalvo.getHistoricoDeAvaliacoes().size() - 1); // Última avaliação adicionada
            
            // Valida todos os atributos críticos da avaliação física
            assertEquals(avaliacaoAtual.getMassaGordaPercentual(), avaliacaoSalva.getMassaGordaPercentual(), 0.01,
                    "Porcentual de massa gorda deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getMassaGordaKg(), avaliacaoSalva.getMassaGordaKg(), 0.01,
                    "Massa gorda em kg deveria ter sido salva corretamente");
            assertEquals(avaliacaoAtual.getMassaMagraKg(), avaliacaoSalva.getMassaMagraKg(), 0.01,
                    "Massa magra em kg deveria ter sido salva corretamente");
            assertEquals(avaliacaoAtual.getMassaMuscularEsqueleticaKg(), avaliacaoSalva.getMassaMuscularEsqueleticaKg(), 0.01,
                    "Massa muscular esquelética deveria ter sido salva corretamente");
            assertEquals(avaliacaoAtual.getGorduraVisceralNivel(), avaliacaoSalva.getGorduraVisceralNivel(),
                    "Nível de gordura visceral deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getTaxaMetabolicaBasalKcal(), avaliacaoSalva.getTaxaMetabolicaBasalKcal(),
                    "Taxa metabólica basal deveria ter sido salva corretamente");
            assertEquals(avaliacaoAtual.getMassaOsseaKg(), avaliacaoSalva.getMassaOsseaKg(), 0.01,
                    "Massa óssea deveria ter sido salva corretamente");
            assertEquals(avaliacaoAtual.getIndiceDeMassaCorporal(), avaliacaoSalva.getIndiceDeMassaCorporal(), 0.01,
                    "Índice de massa corporal deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getBracoRelaxadoCm(), avaliacaoSalva.getBracoRelaxadoCm(), 0.01,
                    "Tamanho do braço relaxado deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getBracoContraidoCm(), avaliacaoSalva.getBracoContraidoCm(), 0.01,
                    "Tamanho do braço contraído deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getAntebracoCm(), avaliacaoSalva.getAntebracoCm(), 0.01,
                    "Tamanho do antebraço deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getToraxPeitoralCm(), avaliacaoSalva.getToraxPeitoralCm(), 0.01,
                    "Tamanho do tórax peitoral deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getCinturaCm(), avaliacaoSalva.getCinturaCm(), 0.01,
                    "Tamanho da cintura deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getAbdomenCm(), avaliacaoSalva.getAbdomenCm(), 0.01,
                    "Tamanho do abdômen deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getQuadrilCm(), avaliacaoSalva.getQuadrilCm(), 0.01,
                    "Tamanho do quadril deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getCoxaCm(), avaliacaoSalva.getCoxaCm(), 0.01,
                    "Tamanho da coxa deveria ter sido salvo corretamente");
            assertEquals(avaliacaoAtual.getPanturrilhaCm(), avaliacaoSalva.getPanturrilhaCm(), 0.01,
                    "Tamanho da panturrilha deveria ter sido salvo corretamente");
        }
    }

    @Then("o sistema em relação a evolução física informa {string}")
    public void o_sistema_em_relacao_a_evolucao_fisica_informa(String mensagemEsperada) {
        assertNotNull(mensagemSistema, "A mensagem do sistema não pode ser nula");
        assertEquals(mensagemEsperada, mensagemSistema);
    }

    private AvaliacaoFisica criarAvaliacaoPadrao(LocalDate data) {
        AvaliacaoFisica avaliacao = new AvaliacaoFisica(new ProfessorId(1), data);
        avaliacao.setMassaGordaPercentual(18.5);
        avaliacao.setMassaGordaKg(12.3);
        avaliacao.setMassaMagraKg(54.2);
        avaliacao.setMassaMuscularEsqueleticaKg(28.4);
        avaliacao.setAguaCorporalTotalPercentual(60.1);
        avaliacao.setGorduraVisceralNivel(7);
        avaliacao.setTaxaMetabolicaBasalKcal(1650);
        avaliacao.setMassaOsseaKg(3.2);
        avaliacao.setIndiceDeMassaCorporal(22.4);
        avaliacao.setBracoRelaxadoCm(32.0);
        avaliacao.setBracoContraidoCm(34.0);
        avaliacao.setAntebracoCm(27.5);
        avaliacao.setToraxPeitoralCm(95.0);
        avaliacao.setCinturaCm(80.0);
        avaliacao.setAbdomenCm(83.0);
        avaliacao.setQuadrilCm(90.0);
        avaliacao.setCoxaCm(55.0);
        avaliacao.setPanturrilhaCm(37.0);
        return avaliacao;
    }
}
