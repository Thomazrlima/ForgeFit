import { useState, useEffect } from "react";
import { Trophy } from "lucide-react";
import { fetchAllTimeRanking, fetchMonthlyRanking, type Student } from "./mockData";
import RankingPodium from "../../components/ranking/RankingPodium";
import RankingListComponent from "../../components/ranking/RankingList";
import RankingPodiumSkeleton from "../../components/ranking/RankingPodium/skeleton";
import RankingListSkeleton from "../../components/ranking/RankingList/skeleton";
import { Container, Header, HeaderContent, Title, FilterSection, FilterButton, ContentWrapper, EmptyState } from "./styles";

type RankingPeriod = "all-time" | "monthly";

const Ranking = () => {
    const [period, setPeriod] = useState<RankingPeriod>("monthly");
    const [currentData, setCurrentData] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = period === "all-time" ? await fetchAllTimeRanking() : await fetchMonthlyRanking();
                setCurrentData(data);
            } catch (error) {
                console.error("Erro ao carregar ranking:", error);
                setCurrentData([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [period]);
    const topThree = currentData.slice(0, 3);
    const restOfRanking = currentData.slice(3);

    const formatScore = (score: number) => {
        return score.toLocaleString("pt-BR");
    };

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Title>Ranking de Alunos</Title>
                    <p>Conquiste pontos e suba no ranking!</p>
                </HeaderContent>

                <FilterSection>
                    <FilterButton $active={period === "monthly"} onClick={() => setPeriod("monthly")} disabled={isLoading}>
                        <Trophy size={18} style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
                        Este Mês
                    </FilterButton>
                    <FilterButton $active={period === "all-time"} onClick={() => setPeriod("all-time")} disabled={isLoading}>
                        <Trophy size={18} style={{ marginRight: "0.5rem", verticalAlign: "middle" }} />
                        Sempre
                    </FilterButton>
                </FilterSection>
            </Header>

            <ContentWrapper>
                {isLoading ? (
                    <>
                        <RankingPodiumSkeleton />
                        <RankingListSkeleton count={7} />
                    </>
                ) : (
                    <>
                        <RankingPodium topThree={topThree} formatScore={formatScore} animated={true} />

                        {restOfRanking.length > 0 ? (
                            <RankingListComponent members={restOfRanking} formatScore={formatScore} startPosition={4} animated={true} />
                        ) : (
                            topThree.length === 0 && (
                                <EmptyState>
                                    <h3>Nenhum resultado encontrado</h3>
                                    <p>O ranking está vazio no momento.</p>
                                </EmptyState>
                            )
                        )}
                    </>
                )}
            </ContentWrapper>
        </Container>
    );
};

export default Ranking;
