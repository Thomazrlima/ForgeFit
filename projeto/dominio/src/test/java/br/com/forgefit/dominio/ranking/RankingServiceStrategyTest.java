package br.com.forgefit.dominio.ranking;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import br.com.forgefit.dominio.aluno.Matricula;
import br.com.forgefit.dominio.ranking.enums.PeriodoRanking;
import br.com.forgefit.dominio.ranking.strategy.CalculoPontuacaoComBonusStrategy;
import br.com.forgefit.dominio.ranking.strategy.CalculoPontuacaoPadraoStrategy;
import br.com.forgefit.dominio.ranking.strategy.CalculoPontuacaoStrategy;
import br.com.forgefit.dominio.ranking.strategy.CalculoPontuacaoTorneioStrategy;

@ExtendWith(MockitoExtension.class)
@DisplayName("RankingService - Padrão Strategy")
class RankingServiceStrategyTest {

    @Mock
    private RankingRepositorio rankingRepositorio;

    private RankingService rankingService;
    private Matricula matricula;

    @BeforeEach
    void setUp() {
        rankingService = new RankingService(rankingRepositorio);
        matricula = new Matricula("ALU001");
    }

    @Nested
    @DisplayName("Estratégia Padrão")
    class EstrategiaPadrao {

        @Test
        @DisplayName("Deve usar estratégia padrão por default")
        void deveUsarEstrategiaPadraoPorDefault() {
            CalculoPontuacaoStrategy strategy = rankingService.getCalculoPontuacaoStrategy();
            
            assertNotNull(strategy);
            assertInstanceOf(CalculoPontuacaoPadraoStrategy.class, strategy);
            assertEquals("Padrão", strategy.getNome());
        }

        @Test
        @DisplayName("Deve calcular pontos sem modificadores na estratégia padrão")
        void deveCalcularPontosSemModificadores() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoPadraoStrategy();
            
            // Sem bônus de sequência
            assertEquals(10, strategy.calcularPontosFrequencia(10, 5));
            // Sem multiplicador de guilda
            assertEquals(20, strategy.calcularPontosGuilda(20, 3));
            // Sem bônus de nota
            assertEquals(15, strategy.calcularPontosPerformance(15, 5.0));
        }
    }

    @Nested
    @DisplayName("Estratégia com Bônus")
    class EstrategiaComBonus {

        @Test
        @DisplayName("Deve aplicar bônus de 10% para 3+ aulas consecutivas")
        void deveAplicarBonus10PorCento() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoComBonusStrategy();
            
            int pontosBase = 100;
            int resultado = strategy.calcularPontosFrequencia(pontosBase, 3);
            
            assertEquals(110, resultado); // 100 * 1.1 = 110
        }

        @Test
        @DisplayName("Deve aplicar bônus de 25% para 5+ aulas consecutivas")
        void deveAplicarBonus25PorCento() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoComBonusStrategy();
            
            int pontosBase = 100;
            int resultado = strategy.calcularPontosFrequencia(pontosBase, 5);
            
            assertEquals(125, resultado); // 100 * 1.25 = 125
        }

        @Test
        @DisplayName("Deve aplicar bônus de 50% para 10+ aulas consecutivas")
        void deveAplicarBonus50PorCento() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoComBonusStrategy();
            
            int pontosBase = 100;
            int resultado = strategy.calcularPontosFrequencia(pontosBase, 10);
            
            assertEquals(150, resultado); // 100 * 1.5 = 150
        }

        @Test
        @DisplayName("Deve aplicar multiplicador por nível de guilda")
        void deveAplicarMultiplicadorGuilda() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoComBonusStrategy();
            
            int pontosBase = 100;
            // Nível 5: multiplicador = 1.0 + (5 * 0.05) = 1.25
            int resultado = strategy.calcularPontosGuilda(pontosBase, 5);
            
            assertEquals(125, resultado);
        }

        @Test
        @DisplayName("Deve aplicar bônus de 20% para nota >= 4")
        void deveAplicarBonusNotaAlta() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoComBonusStrategy();
            
            int pontosBase = 100;
            int resultado = strategy.calcularPontosPerformance(pontosBase, 4.5);
            
            assertEquals(120, resultado); // 100 * 1.2 = 120
        }
    }

    @Nested
    @DisplayName("Estratégia de Torneio")
    class EstrategiaTorneio {

        @Test
        @DisplayName("Deve dobrar pontos de frequência em torneio")
        void deveDobrarPontosFrequencia() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoTorneioStrategy();
            
            int pontosBase = 100;
            int resultado = strategy.calcularPontosFrequencia(pontosBase, 0);
            
            assertEquals(200, resultado); // 100 * 2.0 = 200
        }

        @Test
        @DisplayName("Deve aplicar bônus dobrado + sequência em torneio")
        void deveAplicarBonusDobradoMaisSequencia() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoTorneioStrategy();
            
            int pontosBase = 100;
            // 2 aulas consecutivas: multiplicador sequência = 1 + (2 * 0.25) = 1.5
            // Total: 100 * 2.0 * 1.5 = 300
            int resultado = strategy.calcularPontosFrequencia(pontosBase, 2);
            
            assertEquals(300, resultado);
        }

        @Test
        @DisplayName("Deve dobrar pontos de guilda em torneio")
        void deveDobrarPontosGuilda() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoTorneioStrategy();
            
            int pontosBase = 50;
            int resultado = strategy.calcularPontosGuilda(pontosBase, 5);
            
            assertEquals(100, resultado); // 50 * 2.0 = 100
        }

        @Test
        @DisplayName("Deve aplicar bônus triplo para nota máxima em torneio")
        void deveAplicarBonusTriploNotaMaxima() {
            CalculoPontuacaoStrategy strategy = new CalculoPontuacaoTorneioStrategy();
            
            int pontosBase = 100;
            // Nota 5: multiplicador = 2.0 * 1.5 = 3.0
            int resultado = strategy.calcularPontosPerformance(pontosBase, 5.0);
            
            assertEquals(300, resultado);
        }
    }

    @Nested
    @DisplayName("Troca de Estratégia em Runtime")
    class TrocaDeEstrategia {

        @Test
        @DisplayName("Deve permitir trocar estratégia em tempo de execução")
        void devePermitirTrocarEstrategia() {
            // Estratégia padrão
            assertInstanceOf(CalculoPontuacaoPadraoStrategy.class, 
                rankingService.getCalculoPontuacaoStrategy());

            // Troca para estratégia com bônus
            rankingService.setCalculoPontuacaoStrategy(new CalculoPontuacaoComBonusStrategy());
            assertInstanceOf(CalculoPontuacaoComBonusStrategy.class, 
                rankingService.getCalculoPontuacaoStrategy());

            // Troca para estratégia de torneio
            rankingService.setCalculoPontuacaoStrategy(new CalculoPontuacaoTorneioStrategy());
            assertInstanceOf(CalculoPontuacaoTorneioStrategy.class, 
                rankingService.getCalculoPontuacaoStrategy());
        }

        @Test
        @DisplayName("Deve lançar exceção ao definir estratégia nula")
        void deveLancarExcecaoParaEstrategiaNula() {
            assertThrows(NullPointerException.class, () -> {
                rankingService.setCalculoPontuacaoStrategy(null);
            });
        }

        @Test
        @DisplayName("Deve registrar pontos usando a estratégia configurada")
        void deveRegistrarPontosComEstrategiaConfigurada() {
            // Configura ranking mock
            Ranking ranking = new Ranking(PeriodoRanking.MENSAL);
            when(rankingRepositorio.obterPorPeriodo(PeriodoRanking.MENSAL))
                .thenReturn(Optional.of(ranking));

            // Define estratégia de torneio (pontos dobrados)
            rankingService.setCalculoPontuacaoStrategy(new CalculoPontuacaoTorneioStrategy());

            // Registra pontos
            rankingService.registrarPontosFrequencia(matricula, 100, 0, PeriodoRanking.MENSAL);

            // Verifica que o item foi criado e os pontos foram dobrados
            ItemRanking item = ranking.getItemPorMatricula(matricula);
            assertNotNull(item);
            assertEquals(200, item.getPontosFrequencia()); // 100 * 2 = 200
        }
    }
}
