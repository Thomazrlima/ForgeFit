import { useEffect, useState } from "react";
import { TrendingDown, TrendingUp, Activity, History, Scale, Droplets, Flame, Dumbbell } from "lucide-react";
import Avatar from "../../components/common/Avatar";
import { useUser } from "../../contexts/UserContext";
import { Container, Header, HeaderContent, Title, ContentWrapper, StatsGrid, StatCard, StatHeader, StatTitle, StatValue, StatChange, HistorySection, SectionTitle, HistoryList, HistoryCard, HistoryHeader, HistoryDate, HistoryProfessor, HistoryGrid, HistoryItem, HistoryItemLabel, HistoryItemValue, EmptyState, SkeletonCard, SkeletonText, SkeletonHistoryCard } from "./styles";
import { fetchBioimpedanceHistory, type BioimpedanceData } from "./mockData";

function Evolucao() {
    const { user, loading: userLoading } = useUser();
    const [history, setHistory] = useState<BioimpedanceData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const data = await fetchBioimpedanceHistory();
            setHistory(data);
            setLoading(false);
        };
        loadData();
    }, []);

    const latestData = history[0];
    const previousData = history[1];

    const calculateChange = (current: number, previous: number) => {
        const change = current - previous;
        return {
            value: Math.abs(change).toFixed(1),
            isPositive: change < 0,
        };
    };

    const calculateMuscleChange = (current: number, previous: number) => {
        const change = current - previous;
        return {
            value: Math.abs(change).toFixed(1),
            isPositive: change > 0, // For muscle mass, increase is positive
        };
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
    };

    if (loading || userLoading) {
        return (
            <Container>
                <Header>
                    <SkeletonText width="80px" height="80px" style={{ borderRadius: "50%", flexShrink: 0 }} />
                    <HeaderContent>
                        <SkeletonText width="250px" height="48px" $marginBottom="0.5rem" />
                        <SkeletonText width="350px" height="24px" />
                    </HeaderContent>
                </Header>
                <ContentWrapper>
                    <StatsGrid>
                        {[1, 2, 3, 4].map((i) => (
                            <SkeletonCard key={i}>
                                <SkeletonText width="60%" height="16px" $marginBottom="1rem" />
                                <SkeletonText width="80%" height="32px" $marginBottom="0.5rem" />
                                <SkeletonText width="40%" height="16px" />
                            </SkeletonCard>
                        ))}
                    </StatsGrid>
                    <HistorySection>
                        <SectionTitle>
                            <History size={24} />
                            Histórico de Avaliações
                        </SectionTitle>
                        <HistoryList>
                            {[1, 2, 3].map((i) => (
                                <SkeletonHistoryCard key={i}>
                                    <SkeletonText width="40%" height="20px" $marginBottom="1.5rem" />
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((j) => (
                                            <div key={j}>
                                                <SkeletonText width="70%" height="14px" $marginBottom="0.5rem" />
                                                <SkeletonText width="90%" height="18px" />
                                            </div>
                                        ))}
                                    </div>
                                </SkeletonHistoryCard>
                            ))}
                        </HistoryList>
                    </HistorySection>
                </ContentWrapper>
            </Container>
        );
    }

    if (history.length === 0) {
        return (
            <Container>
                <Header>
                    {user && <Avatar name={user.name} avatar={user.avatar} size={80} />}
                    <HeaderContent>
                        <Title>Minha Evolução</Title>
                        <p>Acompanhe seu progresso através das avaliações de bioimpedância</p>
                    </HeaderContent>
                </Header>
                <ContentWrapper>
                    <EmptyState>
                        <Activity size={48} />
                        <h3>Nenhuma avaliação encontrada</h3>
                        <p>Você ainda não possui avaliações de bioimpedância registradas.</p>
                    </EmptyState>
                </ContentWrapper>
            </Container>
        );
    }

    return (
        <Container>
            <Header>
                {user && <Avatar name={user.name} avatar={user.avatar} size={80} />}
                <HeaderContent>
                    <Title>Minha Evolução</Title>
                    <p>Acompanhe seu progresso através das avaliações de bioimpedância</p>
                </HeaderContent>
            </Header>
            <ContentWrapper>
                {/* Latest Stats */}
                <StatsGrid>
                    <StatCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0 }}>
                        <StatHeader>
                            <Scale size={20} />
                            <StatTitle>Gordura Corporal</StatTitle>
                        </StatHeader>
                        <StatValue>{latestData.massaGordaPercentual}%</StatValue>
                        {previousData && (
                            <StatChange $isPositive={calculateChange(latestData.massaGordaPercentual, previousData.massaGordaPercentual).isPositive}>
                                {calculateChange(latestData.massaGordaPercentual, previousData.massaGordaPercentual).isPositive ? <TrendingDown size={20} /> : <TrendingUp size={20} />}
                                {calculateChange(latestData.massaGordaPercentual, previousData.massaGordaPercentual).value}% desde última avaliação
                            </StatChange>
                        )}
                    </StatCard>

                    <StatCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
                        <StatHeader>
                            <Dumbbell size={20} />
                            <StatTitle>Massa Muscular</StatTitle>
                        </StatHeader>
                        <StatValue>{latestData.massaMuscularEsqueleticaKg}kg</StatValue>
                        {previousData && (
                            <StatChange $isPositive={calculateMuscleChange(latestData.massaMuscularEsqueleticaKg, previousData.massaMuscularEsqueleticaKg).isPositive}>
                                {calculateMuscleChange(latestData.massaMuscularEsqueleticaKg, previousData.massaMuscularEsqueleticaKg).isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                                {calculateMuscleChange(latestData.massaMuscularEsqueleticaKg, previousData.massaMuscularEsqueleticaKg).value}kg desde última avaliação
                            </StatChange>
                        )}
                    </StatCard>

                    <StatCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
                        <StatHeader>
                            <Droplets size={20} />
                            <StatTitle>Água Corporal</StatTitle>
                        </StatHeader>
                        <StatValue>{latestData.aguaCorporalTotalPercentual}%</StatValue>
                        {previousData && (
                            <StatChange $isPositive={calculateMuscleChange(latestData.aguaCorporalTotalPercentual, previousData.aguaCorporalTotalPercentual).isPositive}>
                                {calculateMuscleChange(latestData.aguaCorporalTotalPercentual, previousData.aguaCorporalTotalPercentual).isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                                {calculateMuscleChange(latestData.aguaCorporalTotalPercentual, previousData.aguaCorporalTotalPercentual).value}% desde última avaliação
                            </StatChange>
                        )}
                    </StatCard>

                    <StatCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
                        <StatHeader>
                            <Flame size={20} />
                            <StatTitle>Taxa Metabólica Basal</StatTitle>
                        </StatHeader>
                        <StatValue>{latestData.taxaMetabolicaBasalKcal} kcal</StatValue>
                        {previousData && (
                            <StatChange $isPositive={calculateMuscleChange(latestData.taxaMetabolicaBasalKcal, previousData.taxaMetabolicaBasalKcal).isPositive}>
                                {calculateMuscleChange(latestData.taxaMetabolicaBasalKcal, previousData.taxaMetabolicaBasalKcal).isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                                {calculateMuscleChange(latestData.taxaMetabolicaBasalKcal, previousData.taxaMetabolicaBasalKcal).value} kcal desde última avaliação
                            </StatChange>
                        )}
                    </StatCard>
                </StatsGrid>

                {/* History Section */}
                <HistorySection>
                    <SectionTitle>
                        <History size={24} />
                        Histórico de Avaliações
                    </SectionTitle>
                    <HistoryList>
                        {history.map((assessment, index) => (
                            <HistoryCard key={assessment.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                                <HistoryHeader>
                                    <HistoryDate>{formatDate(assessment.dataDaAvaliacao.toString())}</HistoryDate>
                                    <HistoryProfessor>Professor: {assessment.professorResponsavel}</HistoryProfessor>
                                </HistoryHeader>
                                <HistoryGrid>
                                    <HistoryItem>
                                        <HistoryItemLabel>Gordura Corporal</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.massaGordaPercentual}%</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Massa Magra</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.massaMagraKg}kg</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Massa Muscular</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.massaMuscularEsqueleticaKg}kg</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Água Corporal</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.aguaCorporalTotalPercentual}%</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Gordura Visceral</HistoryItemLabel>
                                        <HistoryItemValue>Nível {assessment.gorduraVisceralNivel}</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>TMB</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.taxaMetabolicaBasalKcal} kcal</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Massa Óssea</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.massaOsseaKg}kg</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>IMC</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.indiceDeMassaCorporal}</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Braço Relaxado</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.bracoRelaxadoCm}cm</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Braço Contraído</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.bracoContraidoCm}cm</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Antebraço</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.antebracoCm}cm</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Peito</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.toraxPeitoralCm}cm</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Cintura</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.cinturaCm}cm</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Abdômen</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.abdomenCm}cm</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Quadril</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.quadrilCm}cm</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Coxa</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.coxaCm}cm</HistoryItemValue>
                                    </HistoryItem>
                                    <HistoryItem>
                                        <HistoryItemLabel>Panturrilha</HistoryItemLabel>
                                        <HistoryItemValue>{assessment.panturrilhaCm}cm</HistoryItemValue>
                                    </HistoryItem>
                                </HistoryGrid>
                            </HistoryCard>
                        ))}
                    </HistoryList>
                </HistorySection>
            </ContentWrapper>
        </Container>
    );
}

export default Evolucao;
