import { useState, useEffect, useRef } from "react";
import { Edit, MessageSquare, Trophy, Copy, Check, Plus } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useUser } from "../../contexts/UserContext.tsx";
import Avatar from "../../components/common/Avatar";
import { Button } from "../../components/common/Button";
import RankingPodium from "../../components/ranking/RankingPodium";
import RankingListComponent from "../../components/ranking/RankingList";
import RankingPodiumSkeleton from "../../components/ranking/RankingPodium/skeleton";
import RankingListSkeleton from "../../components/ranking/RankingList/skeleton";
import CheckinModal, { type CheckinData } from "../../components/common/CheckinModal";
import EditGuildModal, { type GuildEditData } from "../../components/common/EditGuildModal";
import { fetchGuildData, fetchGuildMembers, fetchGuildCheckins, type GuildData, type GuildMember, type CheckinMessage } from "./mockData.ts";
import { Container, Header, HeaderLeft, GuildAvatar, GuildInfo, GuildName, GuildCode, CodeWrapper, CopyButton, Tooltip, HeaderActions, TabsMenu, TabButton, ActiveIndicator, ContentSection, MessagesContainer, MessageWrapper, CheckinCard, CheckinHeader, CheckinUserInfo, CheckinUserName, CheckinTime, CheckinContent, CheckinWorkout, CheckinDescription, CheckinImage, RankingContainer, SkeletonAvatar, SkeletonText } from "./styles.ts";
import Spinner from "../../components/common/Spinner";

type SectionType = "messages" | "ranking" | "checkin";

const GuildaDetalhes = () => {
    const { user } = useUser();
    const [activeSection, setActiveSection] = useState<SectionType>("messages");

    const messagesButtonRef = useRef<HTMLButtonElement>(null);
    const rankingButtonRef = useRef<HTMLButtonElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ x: 0, width: 0 });

    const [guildData, setGuildData] = useState<GuildData | null>(null);
    const [members, setMembers] = useState<GuildMember[]>([]);
    const [checkins, setCheckins] = useState<CheckinMessage[]>([]);

    const [isLoadingGuild, setIsLoadingGuild] = useState(true);
    const [isLoadingMembers, setIsLoadingMembers] = useState(true);
    const [isLoadingCheckins, setIsLoadingCheckins] = useState(true);

    const [copied, setCopied] = useState(false);
    const [isCheckinModalOpen, setIsCheckinModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        const updateIndicator = () => {
            const activeButton = activeSection === "messages" ? messagesButtonRef.current : rankingButtonRef.current;
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
        const loadGuildData = async () => {
            setIsLoadingGuild(true);
            try {
                const data = await fetchGuildData();
                setGuildData(data);
            } catch (error) {
                console.error("Erro ao carregar dados da guilda:", error);
            } finally {
                setIsLoadingGuild(false);
            }
        };

        loadGuildData();
    }, []);

    useEffect(() => {
        const loadMembers = async () => {
            setIsLoadingMembers(true);
            try {
                const data = await fetchGuildMembers();
                setMembers(data);
            } catch (error) {
                console.error("Erro ao carregar membros:", error);
            } finally {
                setIsLoadingMembers(false);
            }
        };

        if (activeSection === "ranking") {
            loadMembers();
        }
    }, [activeSection]);

    useEffect(() => {
        const loadCheckins = async () => {
            setIsLoadingCheckins(true);
            try {
                const data = await fetchGuildCheckins();
                setCheckins(data);
            } catch (error) {
                console.error("Erro ao carregar check-ins:", error);
            } finally {
                setIsLoadingCheckins(false);
            }
        };

        if (activeSection === "messages") {
            loadCheckins();
        }
    }, [activeSection]);

    const handleCopyCode = async () => {
        if (!guildData) return;
        try {
            await navigator.clipboard.writeText(guildData.code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Erro ao copiar código:", error);
        }
    };

    const handleEdit = () => {
        setIsEditModalOpen(true);
    };

    const handleEditSubmit = async (data: GuildEditData) => {
        console.log("Guilda editada:", data);
        // TODO: Enviar para API
        // Após sucesso, recarregar dados da guilda
        const updatedGuildData = await fetchGuildData();
        setGuildData(updatedGuildData);
    };

    const handleDeleteGuild = async () => {
        console.log("Guilda excluída");
        // TODO: Enviar para API e redirecionar para página de guildas
        // Exemplo: navigate('/guilda');
    };

    const handleCheckin = () => {
        setIsCheckinModalOpen(true);
    };

    const handleCheckinSubmit = async (data: CheckinData) => {
        console.log("Check-in realizado:", data);
        // TODO: Enviar para API
        // Após sucesso, recarregar lista de check-ins
        const updatedCheckins = await fetchGuildCheckins();
        setCheckins(updatedCheckins);
    };

    // Mock de lista de treinos disponíveis
    const availableWorkouts = [
        { id: "1", name: "Peito e Tríceps" },
        { id: "2", name: "Costas e Bíceps" },
        { id: "3", name: "Pernas" },
        { id: "4", name: "Ombros e Abdômen" },
        { id: "5", name: "Cardio Matinal" },
        { id: "6", name: "Treino Funcional" },
    ];

    const formatTimestamp = (date: Date) => {
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInHours < 1) {
            const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
            return `há ${diffInMinutes} min`;
        } else if (diffInHours < 24) {
            return `há ${diffInHours}h`;
        } else if (diffInDays === 1) {
            return "ontem";
        } else if (diffInDays < 7) {
            return `há ${diffInDays} dias`;
        } else {
            return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
        }
    };

    const formatScore = (score: number) => {
        return score.toLocaleString("pt-BR");
    };

    const topThree = members.slice(0, 3);
    const restOfRanking = members.slice(3);

    return (
        <Container>
            <Header>
                {isLoadingGuild ? (
                    <>
                        <HeaderLeft>
                            <SkeletonAvatar $position={1} style={{ width: "80px", height: "80px" }} />
                            <GuildInfo>
                                <SkeletonText width="200px" height="28px" />
                                <SkeletonText width="150px" height="16px" />
                            </GuildInfo>
                        </HeaderLeft>
                        <HeaderActions>
                            <SkeletonText width="160px" height="48px" />
                            <SkeletonText width="160px" height="48px" />
                        </HeaderActions>
                    </>
                ) : guildData ? (
                    <>
                        <HeaderLeft>
                            <GuildAvatar src={guildData.imageUrl} alt={guildData.name} />
                            <GuildInfo>
                                <GuildName>{guildData.name}</GuildName>
                                <CodeWrapper>
                                    <GuildCode>Código: {guildData.code}</GuildCode>
                                    <CopyButton onClick={handleCopyCode} title="Copiar código" $copied={copied}>
                                        {copied ? <Check size={16} /> : <Copy size={16} />}
                                        {copied && <Tooltip>Copiado!</Tooltip>}
                                    </CopyButton>
                                </CodeWrapper>
                            </GuildInfo>
                        </HeaderLeft>
                        <HeaderActions>
                            <Button variant="secondary" size="md" onClick={handleEdit}>
                                <Edit size={20} />
                                Editar Guilda
                            </Button>
                            <Button variant="primary" size="md" onClick={handleCheckin}>
                                <Plus size={20} />
                                Fazer Check-in
                            </Button>
                        </HeaderActions>
                    </>
                ) : null}
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
                <TabButton ref={messagesButtonRef} $active={activeSection === "messages"} onClick={() => setActiveSection("messages")}>
                    <MessageSquare size={20} />
                    Check-ins
                </TabButton>
                <TabButton ref={rankingButtonRef} $active={activeSection === "ranking"} onClick={() => setActiveSection("ranking")}>
                    <Trophy size={20} />
                    Ranking de Membros
                </TabButton>
            </TabsMenu>

            <ContentSection>
                <AnimatePresence mode="wait">
                    {activeSection === "messages" && (
                        <MessagesContainer key="messages" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                            {isLoadingCheckins ? (
                                <Spinner />
                            ) : (
                                [...checkins].reverse().map((checkin) => {
                                    const isCurrentUser = checkin.userId === user?.id;
                                    return (
                                        <MessageWrapper key={checkin.id} $isCurrentUser={isCurrentUser}>
                                            <Avatar name={checkin.userName} avatar={checkin.userAvatar} size={36} />
                                            <CheckinCard $isCurrentUser={isCurrentUser}>
                                                <CheckinHeader>
                                                    <CheckinUserInfo>
                                                        <CheckinUserName $isCurrentUser={isCurrentUser}>{checkin.userName}</CheckinUserName>
                                                        <CheckinTime $isCurrentUser={isCurrentUser}>{formatTimestamp(checkin.timestamp)}</CheckinTime>
                                                    </CheckinUserInfo>
                                                </CheckinHeader>

                                                <CheckinContent>
                                                    <CheckinWorkout $isCurrentUser={isCurrentUser}>Concluiu: {checkin.workoutName}</CheckinWorkout>
                                                    {checkin.description && <CheckinDescription $isCurrentUser={isCurrentUser}>{checkin.description}</CheckinDescription>}
                                                    {checkin.imageUrl && <CheckinImage src={checkin.imageUrl} alt="Check-in" />}
                                                </CheckinContent>
                                            </CheckinCard>
                                        </MessageWrapper>
                                    );
                                })
                            )}
                        </MessagesContainer>
                    )}

                    {activeSection === "ranking" && (
                        <RankingContainer key="ranking" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                            {isLoadingMembers ? (
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
                </AnimatePresence>
            </ContentSection>

            <CheckinModal isOpen={isCheckinModalOpen} onClose={() => setIsCheckinModalOpen(false)} onSubmit={handleCheckinSubmit} workouts={availableWorkouts} />

            {guildData && (
                <EditGuildModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onSubmit={handleEditSubmit}
                    onDelete={handleDeleteGuild}
                    guildData={{
                        name: guildData.name,
                        description: undefined,
                        imageUrl: guildData.imageUrl,
                    }}
                />
            )}
        </Container>
    );
};

export default GuildaDetalhes;
