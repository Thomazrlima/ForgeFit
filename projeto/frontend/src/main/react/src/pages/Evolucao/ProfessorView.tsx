import { useState, useEffect } from "react";
import { Users, Plus, Activity, Scale, Dumbbell, Droplets, Flame, TrendingUp, TrendingDown, History, Search } from "lucide-react";
import { Button } from "../../components/common/Button";
import Spinner from "../../components/common/Spinner";

import { useToast } from "../../contexts/ToastContext";
import { useUser } from "../../contexts/UserContext";
import { fetchAlunos, fetchBioimpedanciasPorAluno, adicionarBioimpedancia } from "./professorMockData";
import type { Aluno, BioimpedanceData, BioimpedanciaFormData } from "./types";
import {
    Container,
    Header,
    Title,
    Subtitle,
    ContentGrid,
    AlunosSection,
    SectionTitle,
    SearchWrapper,
    AlunosList,
    AlunoCard,
    AlunoAvatar,
    AlunoInfo,
    AlunoNome,
    AlunoMatricula,
    HistoricoSection,
    HistoricoHeader,
    HistoricoHeaderInfo,
    HistoricoActions,
    EmptyState,
    EmptyIcon,
    EmptyText,
    HistoricoList,
    HistoricoCard,
    HistoricoCardHeader,
    HistoricoDate,
    HistoricoProfessor,
    HistoricoGrid,
    HistoricoItem,
    HistoricoItemLabel,
    HistoricoItemValue,
    LoadingContainer,
    StatsGrid,
    StatCard,
    StatHeader,
    StatTitle,
    StatValue,
    StatChange,
    SearchInput,
} from "./ProfessorView.styles";
import CreateBioimpedanciaModal from "../../components/common/CreateBioimpedanciaModal";

function ProfessorEvolucaoView() {
    const { user } = useUser();
    const { success, error: showError } = useToast();

    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [alunoSelecionado, setAlunoSelecionado] = useState<Aluno | null>(null);
    const [historico, setHistorico] = useState<BioimpedanceData[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loadingAlunos, setLoadingAlunos] = useState(true);
    const [loadingHistorico, setLoadingHistorico] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Carrega lista de alunos
    useEffect(() => {
        const loadAlunos = async () => {
            setLoadingAlunos(true);
            try {
                const data = await fetchAlunos();
                setAlunos(data);
            } catch {
                showError("Erro ao carregar lista de alunos");
            } finally {
                setLoadingAlunos(false);
            }
        };
        loadAlunos();
    }, [showError]);

    // Carrega histórico quando seleciona um aluno
    useEffect(() => {
        if (!alunoSelecionado) {
            setHistorico([]);
            return;
        }

        const loadHistorico = async () => {
            setLoadingHistorico(true);
            try {
                const data = await fetchBioimpedanciasPorAluno(alunoSelecionado.id);
                setHistorico(data);
            } catch {
                showError("Erro ao carregar histórico do aluno");
            } finally {
                setLoadingHistorico(false);
            }
        };
        loadHistorico();
    }, [alunoSelecionado, showError]);

    // Filtra alunos pela busca
    const alunosFiltrados = alunos.filter(
        (aluno) =>
            aluno.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            aluno.matricula.includes(searchTerm)
    );

    // Formata data para exibição
    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    // Cálculo de evolução entre avaliações
    const calculateChange = (current: number, previous: number, inversePositive = false) => {
        const change = current - previous;
        return {
            value: Math.abs(change).toFixed(1),
            isPositive: inversePositive ? change < 0 : change > 0,
        };
    };

    // Handler para salvar nova bioimpedância
    const handleSaveBioimpedancia = async (dados: BioimpedanciaFormData) => {
        if (!alunoSelecionado || !user) return;

        try {
            // Monta o objeto completo usando todos os dados do formulário
            const novaBioimpedancia: Omit<BioimpedanceData, "id"> = {
                dataDaAvaliacao: new Date(dados.dataDaAvaliacao),
                professorResponsavel: user.name,
                pesoKg: dados.pesoKg,
                massaGordaPercentual: dados.massaGordaPercentual,
                massaGordaKg: dados.massaGordaKg || (dados.pesoKg * dados.massaGordaPercentual) / 100,
                massaMagraKg: dados.massaMagraKg || dados.pesoKg - (dados.pesoKg * dados.massaGordaPercentual) / 100,
                massaMuscularEsqueleticaKg: dados.massaMuscularEsqueleticaKg,
                aguaCorporalTotalPercentual: dados.aguaCorporalTotalPercentual,
                gorduraVisceralNivel: dados.gorduraVisceralNivel,
                taxaMetabolicaBasalKcal: dados.taxaMetabolicaBasalKcal,
                massaOsseaKg: dados.massaOsseaKg,
                indiceDeMassaCorporal: dados.indiceDeMassaCorporal,
                // Medidas corporais
                bracoRelaxadoCm: dados.bracoRelaxadoCm,
                bracoContraidoCm: dados.bracoContraidoCm,
                antebracoCm: dados.antebracoCm,
                toraxPeitoralCm: dados.toraxPeitoralCm,
                cinturaCm: dados.cinturaCm,
                abdomenCm: dados.abdomenCm,
                quadrilCm: dados.quadrilCm,
                coxaCm: dados.coxaCm,
                panturrilhaCm: dados.panturrilhaCm,
            };

            const resultado = await adicionarBioimpedancia(alunoSelecionado.id, novaBioimpedancia);
            setHistorico((prev) => [resultado, ...prev]);
            success(`Avaliação cadastrada para ${alunoSelecionado.nome}`);
            setIsModalOpen(false);
        } catch {
            showError("Erro ao salvar avaliação");
        }
    };

    const latestData = historico[0];
    const previousData = historico[1];

    return (
        <Container>
            <Header>
                <Title>Gestão de Bioimpedância</Title>
                <Subtitle>Cadastre e acompanhe as avaliações de bioimpedância dos seus alunos</Subtitle>
            </Header>

            <ContentGrid>
                {/* Painel de alunos */}
                <AlunosSection>
                    <SectionTitle>
                        <Users size={20} />
                        Alunos
                    </SectionTitle>

                    <SearchWrapper>
                        <SearchInput
                            type="text"
                            placeholder="Buscar por nome ou matrícula..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search size={18} />
                    </SearchWrapper>

                    {loadingAlunos ? (
                        <LoadingContainer>
                            <Spinner />
                        </LoadingContainer>
                    ) : (
                        <AlunosList>
                            {alunosFiltrados.map((aluno) => (
                                <AlunoCard
                                    key={aluno.id}
                                    $isSelected={alunoSelecionado?.id === aluno.id}
                                    onClick={() => setAlunoSelecionado(aluno)}
                                >
                                    <AlunoAvatar
                                        src={aluno.avatar || `https://i.pravatar.cc/150?img=${aluno.id}`}
                                        alt={aluno.nome}
                                    />
                                    <AlunoInfo>
                                        <AlunoNome>{aluno.nome}</AlunoNome>
                                        <AlunoMatricula>Matrícula: {aluno.matricula}</AlunoMatricula>
                                    </AlunoInfo>
                                </AlunoCard>
                            ))}
                        </AlunosList>
                    )}
                </AlunosSection>

                {/* Painel de histórico */}
                <HistoricoSection>
                    {!alunoSelecionado ? (
                        <EmptyState>
                            <EmptyIcon>
                                <Users size={64} />
                            </EmptyIcon>
                            <EmptyText>Selecione um aluno para visualizar o histórico de bioimpedância</EmptyText>
                        </EmptyState>
                    ) : loadingHistorico ? (
                        <LoadingContainer>
                            <Spinner />
                        </LoadingContainer>
                    ) : (
                        <>
                            <HistoricoHeader>
                                <HistoricoHeaderInfo>
                                    <SectionTitle>
                                        <Activity size={20} />
                                        Histórico de {alunoSelecionado.nome}
                                    </SectionTitle>
                                </HistoricoHeaderInfo>
                                <HistoricoActions>
                                    <Button variant="primary" size="md" onClick={() => setIsModalOpen(true)}>
                                        <Plus size={18} />
                                        Nova Avaliação
                                    </Button>
                                </HistoricoActions>
                            </HistoricoHeader>

                            {historico.length === 0 ? (
                                <EmptyState>
                                    <EmptyIcon>
                                        <Activity size={48} />
                                    </EmptyIcon>
                                    <EmptyText>Este aluno ainda não possui avaliações de bioimpedância.</EmptyText>
                                    <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
                                        <Plus size={18} />
                                        Cadastrar Primeira Avaliação
                                    </Button>
                                </EmptyState>
                            ) : (
                                <>
                                    {/* Cards de estatísticas atuais */}
                                    <StatsGrid>
                                        <StatCard
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <StatHeader>
                                                <Scale size={18} />
                                                <StatTitle>Gordura Corporal</StatTitle>
                                            </StatHeader>
                                            <StatValue>{latestData.massaGordaPercentual}%</StatValue>
                                            {previousData && (
                                                <StatChange
                                                    $isPositive={
                                                        calculateChange(
                                                            latestData.massaGordaPercentual,
                                                            previousData.massaGordaPercentual,
                                                            true
                                                        ).isPositive
                                                    }
                                                >
                                                    {calculateChange(
                                                        latestData.massaGordaPercentual,
                                                        previousData.massaGordaPercentual,
                                                        true
                                                    ).isPositive ? (
                                                        <TrendingDown size={14} />
                                                    ) : (
                                                        <TrendingUp size={14} />
                                                    )}
                                                    {
                                                        calculateChange(
                                                            latestData.massaGordaPercentual,
                                                            previousData.massaGordaPercentual,
                                                            true
                                                        ).value
                                                    }
                                                    %
                                                </StatChange>
                                            )}
                                        </StatCard>

                                        <StatCard
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            <StatHeader>
                                                <Dumbbell size={18} />
                                                <StatTitle>Massa Muscular</StatTitle>
                                            </StatHeader>
                                            <StatValue>{latestData.massaMuscularEsqueleticaKg}kg</StatValue>
                                            {previousData && (
                                                <StatChange
                                                    $isPositive={
                                                        calculateChange(
                                                            latestData.massaMuscularEsqueleticaKg,
                                                            previousData.massaMuscularEsqueleticaKg
                                                        ).isPositive
                                                    }
                                                >
                                                    {calculateChange(
                                                        latestData.massaMuscularEsqueleticaKg,
                                                        previousData.massaMuscularEsqueleticaKg
                                                    ).isPositive ? (
                                                        <TrendingUp size={14} />
                                                    ) : (
                                                        <TrendingDown size={14} />
                                                    )}
                                                    {
                                                        calculateChange(
                                                            latestData.massaMuscularEsqueleticaKg,
                                                            previousData.massaMuscularEsqueleticaKg
                                                        ).value
                                                    }
                                                    kg
                                                </StatChange>
                                            )}
                                        </StatCard>

                                        <StatCard
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                        >
                                            <StatHeader>
                                                <Droplets size={18} />
                                                <StatTitle>Água Corporal</StatTitle>
                                            </StatHeader>
                                            <StatValue>{latestData.aguaCorporalTotalPercentual}%</StatValue>
                                            {previousData && (
                                                <StatChange
                                                    $isPositive={
                                                        calculateChange(
                                                            latestData.aguaCorporalTotalPercentual,
                                                            previousData.aguaCorporalTotalPercentual
                                                        ).isPositive
                                                    }
                                                >
                                                    {calculateChange(
                                                        latestData.aguaCorporalTotalPercentual,
                                                        previousData.aguaCorporalTotalPercentual
                                                    ).isPositive ? (
                                                        <TrendingUp size={14} />
                                                    ) : (
                                                        <TrendingDown size={14} />
                                                    )}
                                                    {
                                                        calculateChange(
                                                            latestData.aguaCorporalTotalPercentual,
                                                            previousData.aguaCorporalTotalPercentual
                                                        ).value
                                                    }
                                                    %
                                                </StatChange>
                                            )}
                                        </StatCard>

                                        <StatCard
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                        >
                                            <StatHeader>
                                                <Flame size={18} />
                                                <StatTitle>TMB</StatTitle>
                                            </StatHeader>
                                            <StatValue>{latestData.taxaMetabolicaBasalKcal} kcal</StatValue>
                                            {previousData && (
                                                <StatChange
                                                    $isPositive={
                                                        calculateChange(
                                                            latestData.taxaMetabolicaBasalKcal,
                                                            previousData.taxaMetabolicaBasalKcal
                                                        ).isPositive
                                                    }
                                                >
                                                    {calculateChange(
                                                        latestData.taxaMetabolicaBasalKcal,
                                                        previousData.taxaMetabolicaBasalKcal
                                                    ).isPositive ? (
                                                        <TrendingUp size={14} />
                                                    ) : (
                                                        <TrendingDown size={14} />
                                                    )}
                                                    {
                                                        calculateChange(
                                                            latestData.taxaMetabolicaBasalKcal,
                                                            previousData.taxaMetabolicaBasalKcal
                                                        ).value
                                                    }{" "}
                                                    kcal
                                                </StatChange>
                                            )}
                                        </StatCard>
                                    </StatsGrid>

                                    {/* Lista de histórico */}
                                    <SectionTitle>
                                        <History size={20} />
                                        Todas as Avaliações
                                    </SectionTitle>
                                    <HistoricoList>
                                        {historico.map((avaliacao, index) => (
                                            <HistoricoCard
                                                key={avaliacao.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                            >
                                                <HistoricoCardHeader>
                                                    <HistoricoDate>
                                                        {formatDate(avaliacao.dataDaAvaliacao)}
                                                    </HistoricoDate>
                                                    <HistoricoProfessor>
                                                        {avaliacao.professorResponsavel}
                                                    </HistoricoProfessor>
                                                </HistoricoCardHeader>
                                                <HistoricoGrid>
                                                    <HistoricoItem>
                                                        <HistoricoItemLabel>Peso</HistoricoItemLabel>
                                                        <HistoricoItemValue>{avaliacao.pesoKg} kg</HistoricoItemValue>
                                                    </HistoricoItem>
                                                    <HistoricoItem>
                                                        <HistoricoItemLabel>Gordura Corporal</HistoricoItemLabel>
                                                        <HistoricoItemValue>
                                                            {avaliacao.massaGordaPercentual}%
                                                        </HistoricoItemValue>
                                                    </HistoricoItem>
                                                    <HistoricoItem>
                                                        <HistoricoItemLabel>Massa Muscular</HistoricoItemLabel>
                                                        <HistoricoItemValue>
                                                            {avaliacao.massaMuscularEsqueleticaKg} kg
                                                        </HistoricoItemValue>
                                                    </HistoricoItem>
                                                    <HistoricoItem>
                                                        <HistoricoItemLabel>Água Corporal</HistoricoItemLabel>
                                                        <HistoricoItemValue>
                                                            {avaliacao.aguaCorporalTotalPercentual}%
                                                        </HistoricoItemValue>
                                                    </HistoricoItem>
                                                    <HistoricoItem>
                                                        <HistoricoItemLabel>Gordura Visceral</HistoricoItemLabel>
                                                        <HistoricoItemValue>
                                                            Nível {avaliacao.gorduraVisceralNivel}
                                                        </HistoricoItemValue>
                                                    </HistoricoItem>
                                                    <HistoricoItem>
                                                        <HistoricoItemLabel>TMB</HistoricoItemLabel>
                                                        <HistoricoItemValue>
                                                            {avaliacao.taxaMetabolicaBasalKcal} kcal
                                                        </HistoricoItemValue>
                                                    </HistoricoItem>
                                                    <HistoricoItem>
                                                        <HistoricoItemLabel>IMC</HistoricoItemLabel>
                                                        <HistoricoItemValue>
                                                            {avaliacao.indiceDeMassaCorporal}
                                                        </HistoricoItemValue>
                                                    </HistoricoItem>
                                                </HistoricoGrid>
                                            </HistoricoCard>
                                        ))}
                                    </HistoricoList>
                                </>
                            )}
                        </>
                    )}
                </HistoricoSection>
            </ContentGrid>

            {/* Modal de criação */}
            <CreateBioimpedanciaModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveBioimpedancia}
                alunoNome={alunoSelecionado?.nome || ""}
            />
        </Container>
    );
}

export default ProfessorEvolucaoView;
