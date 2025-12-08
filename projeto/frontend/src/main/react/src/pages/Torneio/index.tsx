import { useState, useEffect, useRef, useCallback } from "react";
import { Trophy, Award } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";
import RankingPodium from "../../components/ranking/RankingPodium/index.tsx";
import RankingListComponent from "../../components/ranking/RankingList/index.tsx";
import RankingPodiumSkeleton from "../../components/ranking/RankingPodium/skeleton.tsx";
import RankingListSkeleton from "../../components/ranking/RankingList/skeleton.tsx";
import { fetchTournamentData, fetchGuildRanking, fetchTournamentPrizes, fetchLastPodium, type TournamentData, type GuildRanking, type Prize } from "./mockData.ts";
import { Container, Header, HeaderLeft, TournamentInfo, TournamentName, TournamentTime, TabsMenu, TabButton, ActiveIndicator, ContentSection, RankingContainer, PrizesContainer, PrizesList, PrizeCardVertical, PrizePosition, PrizeImageVertical, PrizeName, PrizeCardVerticalSkeleton, SkeletonText, SkeletonPodiumImage, CountdownContainer, CountdownText, CountdownLabel, ScheduledTournamentName, EmptyMessage, EmptyMessageText, LastWinnersTitle, LastPodiumContainer, LoadingContainer } from "./styles.ts";
import Spinner from "../../components/common/Spinner";

type SectionType = "ranking" | "prizes";

const TorneiosDetalhes = () => {
    const { id } = useParams<{ id: string }>();
    const tournamentId = id ? parseInt(id, 10) : 1;

    const [activeSection, setActiveSection] = useState<SectionType>("ranking");

    const rankingButtonRef = useRef<HTMLButtonElement>(null);
    const prizesButtonRef = useRef<HTMLButtonElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ x: 0, width: 0 });

    const [tournamentData, setTournamentData] = useState<TournamentData | null>(null);
    const [guildRanking, setGuildRanking] = useState<GuildRanking[]>([]);
    const [prizes, setPrizes] = useState<Prize[]>([]);
    const [lastPodium, setLastPodium] = useState<GuildRanking[] | null>(null);

    const [isLoadingTournament, setIsLoadingTournament] = useState(true);
    const [isLoadingRanking, setIsLoadingRanking] = useState(true);
    const [isLoadingPrizes, setIsLoadingPrizes] = useState(true);
    const [isLoadingLastPodium, setIsLoadingLastPodium] = useState(false);
    const [countdown, setCountdown] = useState<string>("");

    useEffect(() => {
        const updateIndicator = () => {
            const activeButton = activeSection === "ranking" ? rankingButtonRef.current : prizesButtonRef.current;
            if (activeButton) {
                const paddingOffset = 4; // 0.25rem = 4px padding do TabsMenu
                const borderOffset = 8.5; // 2px border on each side
                setIndicatorStyle({
                    x: activeButton.offsetLeft - paddingOffset,
                    width: activeButton.offsetWidth + borderOffset,
                });
            }
        };

        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeSection]);

    useEffect(() => {
        if (!isLoadingTournament && tournamentData?.status === "active") {
            const updateIndicator = () => {
                const activeButton = activeSection === "ranking" ? rankingButtonRef.current : prizesButtonRef.current;
                if (activeButton) {
                    const paddingOffset = 4;
                    const borderOffset = 8.5;
                    setIndicatorStyle({
                        x: activeButton.offsetLeft - paddingOffset,
                        width: activeButton.offsetWidth + borderOffset,
                    });
                }
            };

            setTimeout(updateIndicator, 0);
        }
    }, [isLoadingTournament, tournamentData?.status, activeSection]);

    useEffect(() => {
        const loadTournamentData = async () => {
            setIsLoadingTournament(true);
            try {
                const data = await fetchTournamentData(tournamentId);
                setTournamentData(data);
            } catch (error) {
                console.error("Erro ao carregar dados do torneio:", error);
            } finally {
                setIsLoadingTournament(false);
            }
        };

        loadTournamentData();
    }, [tournamentId]);

    useEffect(() => {
        const loadRanking = async () => {
            setIsLoadingRanking(true);
            try {
                const data = await fetchGuildRanking(tournamentId);
                setGuildRanking(data);
            } catch (error) {
                console.error("Erro ao carregar ranking:", error);
            } finally {
                setIsLoadingRanking(false);
            }
        };

        // Só carrega ranking se houver torneio ativo
        if (activeSection === "ranking" && tournamentData?.status === "active") {
            loadRanking();
        }
    }, [activeSection, tournamentId, tournamentData?.status]);

    useEffect(() => {
        const loadPrizes = async () => {
            setIsLoadingPrizes(true);
            try {
                const data = await fetchTournamentPrizes(tournamentId);
                setPrizes(data);
            } catch (error) {
                console.error("Erro ao carregar premiações:", error);
            } finally {
                setIsLoadingPrizes(false);
            }
        };

        // Só carrega prêmios se houver torneio ativo
        if (activeSection === "prizes" && tournamentData?.status === "active") {
            loadPrizes();
        }
    }, [activeSection, tournamentId, tournamentData?.status]);

    useEffect(() => {
        const loadLastPodium = async () => {
            // Só carrega último pódio se não houver torneio ativo
            if (tournamentData?.status === "active") {
                return;
            }

            setIsLoadingLastPodium(true);
            try {
                const data = await fetchLastPodium();
                setLastPodium(data);
            } catch (error) {
                console.error("Erro ao carregar último pódio:", error);
            } finally {
                setIsLoadingLastPodium(false);
            }
        };

        loadLastPodium();
    }, [tournamentData?.status]);

    const formatTimeRemaining = (endDate: Date) => {
        const now = new Date();
        const diffInMs = endDate.getTime() - now.getTime();

        if (diffInMs <= 0) {
            return "Torneio encerrado";
        }

        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const diffInHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

        if (diffInDays > 0) {
            return `Termina em ${diffInDays} dia${diffInDays > 1 ? "s" : ""} e ${diffInHours}h`;
        } else if (diffInHours > 0) {
            return `Termina em ${diffInHours}h e ${diffInMinutes}min`;
        } else {
            return `Termina em ${diffInMinutes}min`;
        }
    };

    const formatCountdown = useCallback((startDate: Date) => {
        const now = new Date();
        const diffInMs = startDate.getTime() - now.getTime();

        if (diffInMs <= 0) {
            return "Torneio iniciado";
        }

        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
        const diffInHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const diffInSeconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

        if (diffInDays > 0) {
            return `${diffInDays} dia${diffInDays > 1 ? "s" : ""}, ${diffInHours}h e ${diffInMinutes}min`;
        } else if (diffInHours > 0) {
            return `${diffInHours}h, ${diffInMinutes}min e ${diffInSeconds}s`;
        } else if (diffInMinutes > 0) {
            return `${diffInMinutes}min e ${diffInSeconds}s`;
        } else {
            return `${diffInSeconds}s`;
        }
    }, []);

    // Atualiza countdown em tempo real quando torneio está agendado
    useEffect(() => {
        if (tournamentData?.status !== "scheduled" || !tournamentData.startDate) {
            setCountdown("");
            return;
        }

        const updateCountdown = () => {
            setCountdown(formatCountdown(tournamentData.startDate));
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [tournamentData?.status, tournamentData?.startDate, formatCountdown]);

    const formatScore = (score: number) => {
        return score.toLocaleString("pt-BR");
    };

    // Adaptar GuildRanking para o formato esperado pelo RankingPodium
    const topThree = guildRanking.slice(0, 3).map((guild) => ({
        id: guild.id,
        name: guild.name,
        avatar: guild.imageUrl,
        score: guild.score,
    }));

    const restOfRanking = guildRanking.slice(3).map((guild) => ({
        id: guild.id,
        name: guild.name,
        avatar: guild.imageUrl,
        score: guild.score,
    }));

    // Adaptar último pódio para o formato esperado pelo RankingPodium
    const lastPodiumTopThree =
        lastPodium?.slice(0, 3).map((guild) => ({
            id: guild.id,
            name: guild.name,
            avatar: guild.imageUrl,
            score: guild.score,
        })) || [];

    const isActiveTournament = tournamentData?.status === "active";
    const isScheduledTournament = tournamentData?.status === "scheduled";

    if (isLoadingTournament) {
        return (
            <Container>
                <LoadingContainer>
                    <Spinner size={60} />
                </LoadingContainer>
            </Container>
        );
    }

    return (
        <Container>
            {isActiveTournament && (
                <>
                    <Header>
                        {tournamentData && (
                            <HeaderLeft>
                                <TournamentInfo>
                                    <TournamentName>{tournamentData.name}</TournamentName>
                                    <TournamentTime>{formatTimeRemaining(tournamentData.endDate)}</TournamentTime>
                                </TournamentInfo>
                            </HeaderLeft>
                        )}
                    </Header>

                    <TabsMenu>
                        <ActiveIndicator
                            layout
                            initial={false}
                            animate={{
                                x: indicatorStyle.x,
                                width: indicatorStyle.width,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                        />
                        <TabButton ref={rankingButtonRef} $active={activeSection === "ranking"} onClick={() => setActiveSection("ranking")}>
                            <Trophy size={20} />
                            Ranking de Guildas
                        </TabButton>
                        <TabButton ref={prizesButtonRef} $active={activeSection === "prizes"} onClick={() => setActiveSection("prizes")}>
                            <Award size={20} />
                            Premiações
                        </TabButton>
                    </TabsMenu>
                </>
            )}

            <ContentSection>
                {isActiveTournament ? (
                    <AnimatePresence mode="wait">
                        {activeSection === "ranking" && (
                            <RankingContainer key="ranking" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                                {isLoadingRanking ? (
                                    <>
                                        <RankingPodiumSkeleton />
                                        <RankingListSkeleton count={4} />
                                    </>
                                ) : (
                                    <>
                                        <RankingPodium topThree={topThree} formatScore={formatScore} animated={true} />
                                        <RankingListComponent members={restOfRanking} formatScore={formatScore} startPosition={4} animated={true} />
                                    </>
                                )}
                            </RankingContainer>
                        )}

                        {activeSection === "prizes" && (
                            <PrizesContainer key="prizes" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                                {isLoadingPrizes ? (
                                    <PrizesList>
                                        <PrizeCardVerticalSkeleton>
                                            <SkeletonText width="50px" height="24px" />
                                            <SkeletonPodiumImage $position={1} style={{ width: "80px", height: "80px" }} />
                                            <SkeletonText width="200px" height="20px" style={{ flex: 1 }} />
                                        </PrizeCardVerticalSkeleton>
                                        <PrizeCardVerticalSkeleton>
                                            <SkeletonText width="50px" height="24px" />
                                            <SkeletonPodiumImage $position={2} style={{ width: "80px", height: "80px" }} />
                                            <SkeletonText width="200px" height="20px" style={{ flex: 1 }} />
                                        </PrizeCardVerticalSkeleton>
                                        <PrizeCardVerticalSkeleton>
                                            <SkeletonText width="50px" height="24px" />
                                            <SkeletonPodiumImage $position={3} style={{ width: "80px", height: "80px" }} />
                                            <SkeletonText width="200px" height="20px" style={{ flex: 1 }} />
                                        </PrizeCardVerticalSkeleton>
                                    </PrizesList>
                                ) : (
                                    <PrizesList>
                                        {prizes.map((prize, index) => (
                                            <PrizeCardVertical key={prize.id} as={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.5 }}>
                                                <PrizePosition>#{prize.position}</PrizePosition>
                                                <PrizeImageVertical src={prize.imageUrl} alt={prize.name} />
                                                <PrizeName>{prize.name}</PrizeName>
                                            </PrizeCardVertical>
                                        ))}
                                    </PrizesList>
                                )}
                            </PrizesContainer>
                        )}
                    </AnimatePresence>
                ) : isScheduledTournament ? (
                    <CountdownContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        {tournamentData && (
                            <>
                                <ScheduledTournamentName>{tournamentData.name}</ScheduledTournamentName>
                                <CountdownLabel>Começa em:</CountdownLabel>
                                <CountdownText>{countdown || formatCountdown(tournamentData.startDate)}</CountdownText>
                            </>
                        )}
                    </CountdownContainer>
                ) : (
                    <RankingContainer as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                        {isLoadingLastPodium ? (
                            <>
                                <RankingPodiumSkeleton />
                            </>
                        ) : lastPodium && lastPodium.length > 0 ? (
                            <LastPodiumContainer>
                                <LastWinnersTitle>Últimos vencedores:</LastWinnersTitle>
                                <RankingPodium topThree={lastPodiumTopThree} formatScore={formatScore} animated={true} />
                            </LastPodiumContainer>
                        ) : (
                            <EmptyMessage>
                                <EmptyMessageText>Nenhum torneio anterior encontrado</EmptyMessageText>
                            </EmptyMessage>
                        )}
                    </RankingContainer>
                )}
            </ContentSection>
        </Container>
    );
};

export default TorneiosDetalhes;
