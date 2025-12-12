import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Trophy, Award, Gift, Pencil, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "react-router-dom";
import RankingPodium from "../../components/ranking/RankingPodium/index.tsx";
import RankingListComponent from "../../components/ranking/RankingList/index.tsx";
import RankingPodiumSkeleton from "../../components/ranking/RankingPodium/skeleton.tsx";
import RankingListSkeleton from "../../components/ranking/RankingList/skeleton.tsx";
import torneioService, { type TournamentData, type GuildRanking } from "../../services/torneioService";
import { 
    Container, 
    Header, 
    HeaderLeft, 
    TournamentInfo, 
    TournamentName, 
    TournamentTime, 
    TabsMenu, 
    TabButton, 
    ActiveIndicator, 
    ContentSection, 
    RankingContainer, 
    PrizesContainer, 
    PrizesList, 
    PrizeCardVertical, 
    PrizePosition, 
    PrizeImageVertical, 
    PrizeName, 
    PrizeCardVerticalSkeleton, 
    SkeletonText, 
    SkeletonPodiumImage, 
    CountdownContainer, 
    CountdownText, 
    CountdownLabel, 
    ScheduledTournamentName, 
    EmptyMessage, 
    EmptyMessageText, 
    LastWinnersTitle, 
    LastPodiumContainer, 
    LoadingContainer,
    HeaderActions,
    ActionButton,
    CreateTournamentContainer,
    CreateTournamentTitle,
    CreateTournamentDescription,
    CreateTournamentForm,
    FormGroup,
    FormLabel,
    FormInput,
    CreateButton,
} from "./styles.ts";
import Spinner from "../../components/common/Spinner";
import { useUser } from "../../contexts/UserContext";
import { useToast } from "../../contexts/ToastContext";
import EditTournamentModal from "../../components/common/EditTournamentModal";
import TournamentPrizesModal, { type PrizeData, type PrizesFormData } from "../../components/common/TournamentPrizesModal";

type SectionType = "ranking" | "prizes";

const TorneiosDetalhes = () => {
    const { id } = useParams<{ id: string }>();
    const tournamentId = id ? parseInt(id, 10) : 1;
    const { user } = useUser();
    const { showToast } = useToast();

    // Verificar se o usuário é gerente (admin)
    const isManager = user?.role === "admin";

    const [activeSection, setActiveSection] = useState<SectionType>("ranking");

    const rankingButtonRef = useRef<HTMLButtonElement>(null);
    const prizesButtonRef = useRef<HTMLButtonElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ x: 0, width: 0 });

    const [tournamentData, setTournamentData] = useState<TournamentData | null>(null);
    const [guildRanking, setGuildRanking] = useState<GuildRanking[]>([]);
    const [prizes, setPrizes] = useState<Array<{ id: number; position: number; name: string; imageUrl: string }>>([]);
    const [lastPodium, setLastPodium] = useState<GuildRanking[] | null>(null);

    const [isLoadingTournament, setIsLoadingTournament] = useState(true);
    const [isLoadingRanking, setIsLoadingRanking] = useState(true);
    const [isLoadingPrizes, setIsLoadingPrizes] = useState(true);
    const [isLoadingLastPodium, setIsLoadingLastPodium] = useState(false);
    const [countdown, setCountdown] = useState<string>("");

    // Estados para modais de gerente
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isPrizesModalOpen, setIsPrizesModalOpen] = useState(false);

    // Estados para criação de torneio
    const [createFormData, setCreateFormData] = useState({
        name: "",
        startDate: "",
        endDate: "",
    });
    const [isCreating, setIsCreating] = useState(false);

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
                const response = await torneioService.getCurrentTournament();
                if (response.sucesso && response.data) {
                    setTournamentData(response.data);
                } else {
                    setTournamentData(null);
                }
            } catch (error) {
                console.error("Erro ao carregar dados do torneio:", error);
                setTournamentData(null);
            } finally {
                setIsLoadingTournament(false);
            }
        };

        loadTournamentData();
    }, [tournamentId]);

    useEffect(() => {
        const loadRanking = async () => {
            if (!tournamentData?.id) return;
            
            setIsLoadingRanking(true);
            try {
                const data = await torneioService.getGuildRanking(tournamentData.id);
                setGuildRanking(data);
            } catch (error) {
                console.error("Erro ao carregar ranking:", error);
                setGuildRanking([]);
            } finally {
                setIsLoadingRanking(false);
            }
        };

        // Só carrega ranking se houver torneio ativo
        if (activeSection === "ranking" && tournamentData?.status === "active" && tournamentData?.id) {
            loadRanking();
        }
    }, [activeSection, tournamentData?.status, tournamentData?.id]);

    useEffect(() => {
        const loadPrizes = async () => {
            if (!tournamentData?.id) return;
            
            setIsLoadingPrizes(true);
            try {
                const response = await torneioService.getPrizes(tournamentData.id);
                if (response.sucesso && response.data) {
                    setPrizes(response.data);
                } else {
                    setPrizes([]);
                }
            } catch (error) {
                console.error("Erro ao carregar premiações:", error);
                setPrizes([]);
            } finally {
                setIsLoadingPrizes(false);
            }
        };

        // Só carrega prêmios se houver torneio ativo
        if (activeSection === "prizes" && tournamentData?.status === "active" && tournamentData?.id) {
            loadPrizes();
        }
    }, [activeSection, tournamentId, tournamentData?.status, tournamentData?.id]);

    useEffect(() => {
        const loadLastPodium = async () => {
            // Só carrega último pódio se não houver torneio ativo ou agendado
            if (tournamentData?.status === "active" || tournamentData?.status === "scheduled") {
                setLastPodium(null);
                return;
            }

            setIsLoadingLastPodium(true);
            try {
                const data = await torneioService.getLastPodium();
                console.log("Último pódio recebido:", data);
                setLastPodium(data.length > 0 ? data : null);
            } catch (error) {
                console.error("Erro ao carregar último pódio:", error);
                setLastPodium(null);
            } finally {
                setIsLoadingLastPodium(false);
            }
        };

        // Sempre tenta carregar quando não há torneio ativo/agendado
        if (!tournamentData || (tournamentData.status !== "active" && tournamentData.status !== "scheduled")) {
            loadLastPodium();
        }
    }, [tournamentData?.status, tournamentData]);

    const formatTimeRemaining = (endDate: string | Date) => {
        const now = new Date();
        const end = typeof endDate === "string" ? new Date(endDate) : endDate;
        const diffInMs = end.getTime() - now.getTime();

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

    const formatCountdown = useCallback((startDate: string | Date) => {
        const now = new Date();
        const start = typeof startDate === "string" ? new Date(startDate) : startDate;
        const diffInMs = start.getTime() - now.getTime();

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
            const now = new Date();
            const start = typeof tournamentData.startDate === "string" 
                ? new Date(tournamentData.startDate) 
                : tournamentData.startDate;
            
            // Se a data de início já chegou, recarrega os dados para atualizar o status
            if (start.getTime() <= now.getTime()) {
                const loadTournamentData = async () => {
                    try {
                        const response = await torneioService.getCurrentTournament();
                        if (response.sucesso && response.data) {
                            setTournamentData(response.data);
                        }
                    } catch (error) {
                        console.error("Erro ao recarregar dados do torneio:", error);
                    }
                };
                loadTournamentData();
                return;
            }
            
            setCountdown(formatCountdown(tournamentData.startDate));
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [tournamentData?.status, tournamentData?.startDate, formatCountdown]);

    const formatScore = (score: number) => {
        return score.toLocaleString("pt-BR");
    };

    // Handler para criar torneio
    const handleCreateTournament = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!createFormData.name.trim()) {
            showToast("Por favor, insira o nome do torneio", "error");
            return;
        }

        if (!createFormData.startDate) {
            showToast("Por favor, selecione a data de início", "error");
            return;
        }

        if (!createFormData.endDate) {
            showToast("Por favor, selecione a data de término", "error");
            return;
        }

        const startDate = new Date(createFormData.startDate);
        const endDate = new Date(createFormData.endDate);

        if (endDate <= startDate) {
            showToast("A data de término deve ser posterior à data de início", "error");
            return;
        }

        setIsCreating(true);
        try {
            const response = await torneioService.createTournament({
                name: createFormData.name.trim(),
                startDate: createFormData.startDate,
                endDate: createFormData.endDate,
            });

            if (response.sucesso && response.data) {
                setTournamentData({
                    id: response.data.id,
                    name: response.data.name,
                    startDate: response.data.startDate,
                    endDate: response.data.endDate,
                    status: response.data.status,
                });
                showToast(response.mensagem || "Torneio criado com sucesso!", "success");
                setCreateFormData({ name: "", startDate: "", endDate: "" });
            } else {
                showToast(response.mensagem || "Erro ao criar torneio", "error");
            }
        } catch (error) {
            console.error("Erro ao criar torneio:", error);
            showToast("Erro ao criar torneio", "error");
        } finally {
            setIsCreating(false);
        }
    };

    // Handler para editar torneio
    const handleEditTournament = async (data: { name: string; startDate: string; endDate: string }) => {
        if (!tournamentData?.id) {
            showToast("Erro: ID do torneio não encontrado", "error");
            return;
        }

        try {
            const response = await torneioService.updateTournament(tournamentData.id, {
                name: data.name,
                startDate: data.startDate,
                endDate: data.endDate,
            });

            if (response.sucesso) {
                // Recarrega os dados do torneio atualizado
                const updatedResponse = await torneioService.getCurrentTournament();
                if (updatedResponse.sucesso && updatedResponse.data) {
                    setTournamentData(updatedResponse.data);
                }
                showToast(response.mensagem || "Torneio atualizado com sucesso!", "success");
            } else {
                showToast(response.mensagem || "Erro ao atualizar torneio", "error");
            }
        } catch (error) {
            console.error("Erro ao editar torneio:", error);
            showToast("Erro ao atualizar torneio", "error");
        }
    };

    // Handler para cancelar torneio
    const handleCancelTournament = async () => {
        if (!tournamentData?.id) return;
        
        try {
            const response = await torneioService.cancelTournament(tournamentData.id);

            if (response.sucesso) {
                setTournamentData(null);
                showToast(response.mensagem || "Torneio cancelado com sucesso!", "success");
            } else {
                showToast(response.mensagem || "Erro ao cancelar torneio", "error");
            }
        } catch (error) {
            console.error("Erro ao cancelar torneio:", error);
            showToast("Erro ao cancelar torneio", "error");
        }
    };

    // Handler para salvar premiações
    const handleSavePrizes = async (data: PrizesFormData) => {
        if (!tournamentData?.id) return;
        
        try {
            const response = await torneioService.savePrizes(
                tournamentData.id,
                data.prizes.map((p) => ({
                    position: p.position,
                    name: p.name,
                    imageUrl: p.imageUrl,
                }))
            );

            if (response.sucesso && response.data) {
                setPrizes(response.data);
                showToast(response.mensagem || "Premiações salvas com sucesso!", "success");
            } else {
                showToast(response.mensagem || "Erro ao salvar premiações", "error");
            }
        } catch (error) {
            console.error("Erro ao salvar premiações:", error);
            showToast("Erro ao salvar premiações", "error");
        }
    };

    // Converter prêmios para formato do modal
    const currentPrizesForModal: PrizeData[] | undefined = prizes.length > 0
        ? prizes.map((p) => ({
              position: p.position,
              name: p.name,
              imageUrl: p.imageUrl,
          }))
        : undefined;

    // Função para obter data mínima (hoje)
    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
    };

    // Adaptar GuildRanking para o formato esperado pelo RankingPodium
    const topThree = useMemo(() => {
        return guildRanking.slice(0, 3).map((guild) => ({
            id: guild.id,
            name: guild.name,
            avatar: guild.imageUrl,
            score: guild.score,
        }));
    }, [guildRanking]);

    const restOfRanking = useMemo(() => {
        return guildRanking.slice(3).map((guild) => ({
            id: guild.id,
            name: guild.name,
            avatar: guild.imageUrl,
            score: guild.score,
        }));
    }, [guildRanking]);

    // Adaptar último pódio para o formato esperado pelo RankingPodium
    const lastPodiumTopThree = useMemo(() => {
        if (!lastPodium || lastPodium.length === 0) {
            return [];
        }
        return lastPodium.slice(0, 3).map((guild) => ({
            id: guild.id,
            name: guild.name,
            avatar: guild.imageUrl,
            score: guild.score,
        }));
    }, [lastPodium]);
    
    console.log("lastPodiumTopThree preparado para RankingPodium:", lastPodiumTopThree);

    const isActiveTournament = tournamentData?.status === "active";
    const isScheduledTournament = tournamentData?.status === "scheduled";
    const hasTournament = isActiveTournament || isScheduledTournament;

    if (isLoadingTournament) {
        return (
            <Container>
                <LoadingContainer>
                    <Spinner size={60} />
                </LoadingContainer>
            </Container>
        );
    }

    // Se for gerente e não tem torneio, mostra formulário de criação
    if (isManager && !hasTournament) {
        return (
            <Container>
                <CreateTournamentContainer
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Trophy size={64} style={{ color: "#ab2522" }} />
                    <CreateTournamentTitle>Criar Novo Torneio</CreateTournamentTitle>
                    <CreateTournamentDescription>
                        Não há nenhum torneio ativo no momento. Crie um novo torneio para engajar as guildas!
                    </CreateTournamentDescription>

                    <CreateTournamentForm onSubmit={handleCreateTournament}>
                        <FormGroup>
                            <FormLabel htmlFor="create-name">
                                <Trophy size={18} />
                                Nome do Torneio
                            </FormLabel>
                            <FormInput
                                id="create-name"
                                type="text"
                                placeholder="Ex: Torneio de Verão 2024"
                                value={createFormData.name}
                                onChange={(e) => setCreateFormData((prev) => ({ ...prev, name: e.target.value }))}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="create-startDate">
                                <Calendar size={18} />
                                Data de Início
                            </FormLabel>
                            <FormInput
                                id="create-startDate"
                                type="date"
                                value={createFormData.startDate}
                                onChange={(e) => setCreateFormData((prev) => ({ ...prev, startDate: e.target.value }))}
                                min={getTodayDate()}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormLabel htmlFor="create-endDate">
                                <Calendar size={18} />
                                Data de Término
                            </FormLabel>
                            <FormInput
                                id="create-endDate"
                                type="date"
                                value={createFormData.endDate}
                                onChange={(e) => setCreateFormData((prev) => ({ ...prev, endDate: e.target.value }))}
                                min={createFormData.startDate || getTodayDate()}
                            />
                        </FormGroup>

                        <CreateButton type="submit" disabled={isCreating}>
                            {isCreating ? (
                                <>
                                    <Spinner size={20} />
                                    Criando...
                                </>
                            ) : (
                                <>
                                    <Trophy size={20} />
                                    Criar Torneio
                                </>
                            )}
                        </CreateButton>
                    </CreateTournamentForm>
                </CreateTournamentContainer>
            </Container>
        );
    }

    return (
        <Container>
            {(isActiveTournament || isScheduledTournament) && (
                <>
                    <Header>
                        {tournamentData && (
                            <HeaderLeft>
                                <TournamentInfo>
                                    <TournamentName>{tournamentData.name}</TournamentName>
                                    <TournamentTime>
                                        {isActiveTournament 
                                            ? formatTimeRemaining(tournamentData.endDate)
                                            : `Inicia em ${formatCountdown(tournamentData.startDate)}`
                                        }
                                    </TournamentTime>
                                </TournamentInfo>
                            </HeaderLeft>
                        )}
                        {isManager && (
                            <HeaderActions>
                                <ActionButton
                                    onClick={() => setIsPrizesModalOpen(true)}
                                    title="Definir Premiações"
                                >
                                    <Gift />
                                </ActionButton>
                                <ActionButton
                                    onClick={() => setIsEditModalOpen(true)}
                                    title="Editar Torneio"
                                >
                                    <Pencil />
                                </ActionButton>
                            </HeaderActions>
                        )}
                    </Header>

                    {isActiveTournament && (
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
                    )}
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
                                    prizes.length > 0 && prizes.some(p => p.name && p.name.trim() !== "" && p.imageUrl && p.imageUrl.trim() !== "") ? (
                                        <PrizesList>
                                            {prizes
                                                .filter(p => p.name && p.name.trim() !== "" && p.imageUrl && p.imageUrl.trim() !== "")
                                                .map((prize, index) => (
                                                    <PrizeCardVertical key={prize.id} as={motion.div} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15, duration: 0.5 }}>
                                                        <PrizePosition>#{prize.position}</PrizePosition>
                                                        <PrizeImageVertical src={prize.imageUrl} alt={prize.name} />
                                                        <PrizeName>{prize.name}</PrizeName>
                                                    </PrizeCardVertical>
                                                ))}
                                        </PrizesList>
                                    ) : (
                                        <EmptyMessage>
                                            <EmptyMessageText>
                                                Nenhum prêmio definido ainda. {isManager && "Clique no botão de presente acima para definir as premiações."}
                                            </EmptyMessageText>
                                        </EmptyMessage>
                                    )
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
                                {lastPodiumTopThree.length > 0 ? (
                                    <RankingPodium topThree={lastPodiumTopThree} formatScore={formatScore} animated={true} />
                                ) : (
                                    <EmptyMessage>
                                        <EmptyMessageText>Erro ao preparar dados do pódio</EmptyMessageText>
                                    </EmptyMessage>
                                )}
                            </LastPodiumContainer>
                        ) : (
                            <EmptyMessage>
                                <EmptyMessageText>Nenhum torneio anterior encontrado</EmptyMessageText>
                            </EmptyMessage>
                        )}
                    </RankingContainer>
                )}
            </ContentSection>

            {/* Modais de Gerente */}
            {isManager && tournamentData && (
                <>
                    <EditTournamentModal
                        isOpen={isEditModalOpen}
                        onClose={() => setIsEditModalOpen(false)}
                        onSubmit={handleEditTournament}
                        onCancel={handleCancelTournament}
                        tournamentData={{
                            name: tournamentData.name,
                            startDate: typeof tournamentData.startDate === "string" 
                                ? new Date(tournamentData.startDate) 
                                : tournamentData.startDate,
                            endDate: typeof tournamentData.endDate === "string" 
                                ? new Date(tournamentData.endDate) 
                                : tournamentData.endDate,
                        }}
                    />

                    <TournamentPrizesModal
                        isOpen={isPrizesModalOpen}
                        onClose={() => setIsPrizesModalOpen(false)}
                        onSubmit={handleSavePrizes}
                        currentPrizes={currentPrizesForModal}
                    />
                </>
            )}
        </Container>
    );
};

export default TorneiosDetalhes;
