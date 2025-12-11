import { useState, useEffect, useRef, useLayoutEffect, useMemo } from "react";
import { Edit, MessageSquare, Trophy, Copy, Check, Plus } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext.tsx";
import Avatar from "../../components/common/Avatar";
import { Button } from "../../components/common/Button";
import RankingPodium from "../../components/ranking/RankingPodium";
import RankingListComponent from "../../components/ranking/RankingList";
import RankingPodiumSkeleton from "../../components/ranking/RankingPodium/skeleton";
import RankingListSkeleton from "../../components/ranking/RankingList/skeleton";
import CheckinModal, { type CheckinData } from "../../components/common/CheckinModal";
import EditGuildModal, { type GuildEditData } from "../../components/common/EditGuildModal";
import { useGuildaDetalhes } from "../../hooks/useGuildaDetalhes";
import { Container, Header, HeaderLeft, GuildAvatar, GuildInfo, GuildName, GuildCode, CodeWrapper, CopyButton, Tooltip, HeaderActions, TabsMenu, TabButton, ActiveIndicator, ContentSection, MessagesContainer, MessageWrapper, CheckinCard, CheckinHeader, CheckinUserInfo, CheckinUserName, CheckinTime, CheckinContent, CheckinWorkout, CheckinDescription, CheckinImage, RankingContainer, SkeletonAvatar, SkeletonText } from "./styles.ts";
import Spinner from "../../components/common/Spinner";
import { useToast } from "../../contexts/ToastContext";

type SectionType = "messages" | "ranking" | "checkin";

interface GuildMember {
    id: number;
    name: string;
    avatar?: string;
    score: number;
}

interface CheckinMessage {
    id: number;
    userId: number;
    userName: string;
    userAvatar?: string;
    workoutName: string;
    description?: string;
    imageUrl?: string;
    timestamp: Date;
}

const GuildaDetalhes = () => {
    const { user } = useUser();
    const { error: showError } = useToast();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [activeSection, setActiveSection] = useState<SectionType>("messages");

    const messagesContainerRef = useRef<HTMLDivElement>(null);
    const messagesButtonRef = useRef<HTMLButtonElement>(null);
    const rankingButtonRef = useRef<HTMLButtonElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({ x: 0, width: 0 });

    // Usa o ID da URL ou do usuário logado
    const guildaId = id ? parseInt(id, 10) : user?.guildaId;

    // React Query para buscar detalhes da guilda
    const { data: guildaDetalhes, isLoading: isLoadingGuild, error: guildaError } = useGuildaDetalhes(guildaId);
    
    const [availableWorkouts, setAvailableWorkouts] = useState<{ id: string; name: string }[]>([]);

    const [copied, setCopied] = useState(false);
    const [isCheckinModalOpen, setIsCheckinModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Se o usuário não tem guilda e não há ID na URL, redireciona para /guilda
    useEffect(() => {
        if (!guildaId && !isLoadingGuild) {
            showError("Você não está em uma guilda");
            navigate("/guilda", { replace: true });
        }
    }, [guildaId, isLoadingGuild, navigate, showError]);

    // Converte membros para o formato esperado pelo componente
    const members = useMemo<GuildMember[]>(() => {
        if (!guildaDetalhes) return [];
        return guildaDetalhes.membros.map((membro, index) => ({
            id: index + 1,
            name: membro.nome,
            avatar: membro.avatarUrl,
            score: membro.pontuacao,
        }));
    }, [guildaDetalhes]);

    // Converte checkins para o formato esperado pelo componente
    const checkins = useMemo<CheckinMessage[]>(() => {
        if (!guildaDetalhes) return [];
        return guildaDetalhes.checkins.map(checkin => ({
            id: checkin.id,
            userId: 0,
            userName: checkin.alunoNome,
            userAvatar: checkin.alunoAvatarUrl,
            workoutName: checkin.nomeContexto,
            description: checkin.mensagem,
            imageUrl: checkin.urlImagem,
            timestamp: new Date(checkin.dataCheckin),
        }));
    }, [guildaDetalhes]);

    useEffect(() => {
        const updateIndicator = () => {
            const activeButton = activeSection === "messages" ? messagesButtonRef.current : rankingButtonRef.current;
            if (activeButton) {
                const paddingOffset = 4;
                const borderOffset = 8.5;
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
        // TODO: Implementar endpoint para buscar treinos disponíveis
        setAvailableWorkouts([
            { id: "1", name: "Peito e Tríceps" },
            { id: "2", name: "Costas e Bíceps" },
            { id: "3", name: "Pernas" },
            { id: "4", name: "Ombros e Abdômen" },
            { id: "5", name: "Cardio Matinal" },
            { id: "6", name: "Treino Funcional" },
        ]);
    }, []);

    useEffect(() => {
        if (guildaError) {
            showError("Erro ao carregar dados da guilda");
        }
    }, [guildaError, showError]);

    useLayoutEffect(() => {
        if (messagesContainerRef.current && !isLoadingGuild) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [checkins, activeSection, isLoadingGuild]);

    const handleCopyCode = async () => {
        if (!guildaDetalhes) return;
        try {
            await navigator.clipboard.writeText(guildaDetalhes.codigoConvite);
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
        // Após sucesso, invalidar cache do React Query para recarregar dados
        queryClient.invalidateQueries({ queryKey: ["guilda", "detalhes", guildaId] });
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
        // Após sucesso, invalidar cache do React Query para recarregar dados
        queryClient.invalidateQueries({ queryKey: ["guilda", "detalhes", guildaId] });
    };

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
                ) : guildaDetalhes ? (
                    <>
                        <HeaderLeft>
                            <GuildAvatar src={guildaDetalhes.imagemUrl || "https://api.dicebear.com/7.x/identicon/svg?seed=guild"} alt={guildaDetalhes.nome} />
                            <GuildInfo>
                                <GuildName>{guildaDetalhes.nome}</GuildName>
                                <CodeWrapper>
                                    <GuildCode>Código: {guildaDetalhes.codigoConvite}</GuildCode>
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
                                Editar
                            </Button>
                            <Button variant="primary" size="md" onClick={handleCheckin}>
                                <Plus size={20} />
                                Check-in
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
                        <MessagesContainer key="messages" initial={{ opacity: 0, x: -20 }} ref={messagesContainerRef} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                            {isLoadingGuild ? (
                                <Spinner />
                            ) : (
                                [...checkins].reverse().map((checkin) => {
                                    const isCurrentUser = checkin.userName === user?.name;
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
                            {isLoadingGuild ? (
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

            {guildaDetalhes && (
                <EditGuildModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onSubmit={handleEditSubmit}
                    onDelete={handleDeleteGuild}
                    guildData={{
                        name: guildaDetalhes.nome,
                        description: guildaDetalhes.descricao,
                        imageUrl: guildaDetalhes.imagemUrl,
                    }}
                />
            )}
        </Container>
    );
};

export default GuildaDetalhes;
