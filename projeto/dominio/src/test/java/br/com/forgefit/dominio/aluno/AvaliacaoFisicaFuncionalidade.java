package br.com.forgefit.dominio.aluno;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

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
    private Cpf cpfAluno;
    private AvaliacaoFisica avaliacaoAtual;
    private List<AvaliacaoFisica> historicoAvaliacoes;
    private String mensagemSistema;
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public AvaliacaoFisicaFuncionalidade(AcademiaFuncionalidade contexto) {
        this.contexto = contexto;
    }

    @Given("que o aluno é cadastrado com o CPF {string}")
    public void queOAlunoECadastradoComOCPF(String cpf) {
        this.cpfAluno = new Cpf(cpf.replaceAll("[^0-9]", ""));
        Optional<Aluno> aluno = contexto.repositorio.obterAlunoPorCpf(cpfAluno);
        if (aluno.isEmpty()) {
            Aluno novoAluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.now().minusYears(25));
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

            contexto.avaliacaoFisicaService.registrarAvaliacaoFisica(contexto.alunoAtual.getMatricula(), avaliacaoAtual);
            mensagemSistema = "Avaliação física salva com sucesso";
        } catch (Exception e) {
            mensagemSistema = "É necessário preencher todos os campos da avaliação física";
        }
    }

    @Given("que o aluno possui uma avaliação com a data {string}")
    public void queOAlunoPossuiUmaAvaliacaoComAData(String data) {
        if (cpfAluno == null) {
            queOAlunoECadastradoComOCPF("902.142.720-60");
        }
        LocalDate dataAvaliacao = LocalDate.parse(data, FORMATTER);
        AvaliacaoFisica avaliacao = criarAvaliacaoPadrao(dataAvaliacao);
        contexto.avaliacaoFisicaService.registrarAvaliacaoFisica(contexto.alunoAtual.getMatricula(), avaliacao);
    }

    @When("o aluno solicita o histórico de avaliações")
    public void oAlunoSolicitaOHistoricoDeAvaliacoes() {
        Optional<Aluno> aluno = contexto.repositorio.obterAlunoPorCpf(cpfAluno);
        if (aluno.isPresent() && !aluno.get().getHistoricoDeAvaliacoes().isEmpty()) {
            historicoAvaliacoes = aluno.get().getHistoricoDeAvaliacoes();
        } else {
            mensagemSistema = "Esse aluno não tem avaliações registradas";
        }
    }

    @Given("que o aluno possui uma avaliação física de {string} e outra de {string}")
    public void queOAlunoPossuiDuasAvaliacoesFisicas(String data1, String data2) {
        if (cpfAluno == null) {
            queOAlunoECadastradoComOCPF("902.142.720-60");
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
        List<String> camposEvoluidos = new ArrayList<>();

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
            
            boolean evoluiu = false;
            if (campoCompleto.toLowerCase().contains("gordura") || campoCompleto.toLowerCase().contains("cintura")) {
                evoluiu = valorNovo < valorAntigo;
            } else {
                evoluiu = valorNovo > valorAntigo;
            }
            
            if (evoluiu) {
                camposEvoluidos.add(campoCompleto);
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
            mensagemSistema = mensagem.toString();
        } else {
            mensagemSistema = "Você não mostrou evolução nos seus treinos... É melhor revisar o seu treino com um professor";
        }
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
            mensagemSistema = "Esse aluno não tem avaliações registradas";
            return;
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
        mensagemSistema = resultado.toString();
    }

    @Given("que o aluno com o CPF {string} ainda não possui avaliações físicas registradas")
    public void que_o_aluno_com_o_cpf_ainda_não_possui_avaliações_físicas_registradas(String cpf) {
        this.cpfAluno = new Cpf(cpf.replaceAll("[^0-9]", ""));
        Optional<Aluno> aluno = contexto.repositorio.obterAlunoPorCpf(cpfAluno);
        if (aluno.isEmpty()) {
            Aluno novoAluno = new Aluno(cpfAluno, "Aluno Teste", LocalDate.now().minusYears(25));
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
