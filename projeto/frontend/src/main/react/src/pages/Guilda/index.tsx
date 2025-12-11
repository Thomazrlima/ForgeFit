import { Users, Shield, Plus, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, WelcomeSection, WelcomeImage, WelcomeContent, Title, Description, ActionsContainer, ActionCard, ActionIcon, ActionTitle, ActionDescription, InputWrapper, GuildInput } from "./styles";
import { Button } from "../../components/common/Button";
import CreateGuildModal from "../../components/common/CreateGuildModal";
import { animationVariants } from "../../hooks/useScrollAnimation";
import { useCriarGuilda } from "../../hooks/useGuildaDetalhes";
import { useUser } from "../../contexts/UserContext";
import { useToast } from "../../contexts/ToastContext";
import { verificarMembroGuilda } from "../../services/guildaService";

const Guilda = () => {
    const { user } = useUser();
    const { success, error } = useToast();
    const navigate = useNavigate();
    const [guildCode, setGuildCode] = useState("");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isCheckingMembership, setIsCheckingMembership] = useState(true);
    
    const { mutate: criarGuilda, isPending: isCreatingGuild } = useCriarGuilda();

    // Verifica se o usuário já está em uma guilda consultando a tabela GUILDA_MEMBROS
    useEffect(() => {
        const verificarGuilda = async () => {
            if (user?.matricula) {
                try {
                    setIsCheckingMembership(true);
                    const resultado = await verificarMembroGuilda(user.matricula);
                    
                    if (resultado.temGuilda && resultado.guildaId) {
                        navigate(`/guilda/${resultado.guildaId}`, { replace: true });
                    }
                } catch (err) {
                    console.error("Erro ao verificar guilda do aluno:", err);
                } finally {
                    setIsCheckingMembership(false);
                }
            } else {
                setIsCheckingMembership(false);
            }
        };

        verificarGuilda();
    }, [user?.matricula, navigate]);

    const handleJoinGuild = () => {
        if (!guildCode.trim()) {
            error("Digite um código válido");
            return;
        }
        console.log("Entrar em uma guilda com código:", guildCode);
        // TODO: Implementar lógica de entrada na guilda
    };

    const handleCreateGuild = () => {
        setIsCreateModalOpen(true);
    };

    const handleConfirmCreateGuild = async (guildData: { name: string; description: string; imageUrl: string }) => {
        if (!user?.matricula) {
            error("Você precisa estar logado para criar uma guilda");
            return;
        }

        criarGuilda(
            {
                nome: guildData.name,
                descricao: guildData.description,
                imagemURL: guildData.imageUrl,
                mestreMatricula: user.matricula,
            },
            {
                onSuccess: (response) => {
                    console.log("Resposta da criação da guilda:", response);
                    
                    if (response.sucesso) {
                        success(`Guilda criada com sucesso! Código: ${response.codigoConvite}`);
                        setIsCreateModalOpen(false);
                        
                        // Redirecionar para página de detalhes da guilda criada
                        if (response.guildaId) {
                            console.log("Redirecionando para guilda:", response.guildaId);
                            navigate(`/guilda/${response.guildaId}`);
                        } else {
                            console.warn("guildaId não retornado na resposta");
                        }
                    } else {
                        error(response.mensagem);
                    }
                },
                onError: (err) => {
                    console.error("Erro ao criar guilda:", err);
                    error("Erro ao criar guilda. Tente novamente.");
                },
            }
        );
    };

    // Mostra loading enquanto verifica a guilda
    if (isCheckingMembership) {
        return (
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
                <p>Verificando sua guilda...</p>
            </Container>
        );
    }

    return (
        <Container>
            <motion.div initial="hidden" animate="visible" variants={animationVariants.fadeInUp}>
                <WelcomeSection>
                    <WelcomeImage src="/src/assets/image5.png" alt="Guilda" />
                    <WelcomeContent>
                        <Title>Bem-vindo às Guildas</Title>
                        <Description>
                            Junte-se a uma guilda e treine ao lado de guerreiros que compartilham os mesmos objetivos.
                            <br />
                            Ou crie sua própria guilda e lidere seu clã rumo à glória e força suprema!
                        </Description>
                    </WelcomeContent>
                </WelcomeSection>
            </motion.div>

            <ActionsContainer as={motion.div} initial="hidden" animate="visible" variants={animationVariants.staggerContainer}>
                <motion.div variants={animationVariants.fadeInUp}>
                    <ActionCard>
                        <ActionIcon>
                            <Users size={48} />
                        </ActionIcon>
                        <ActionTitle>Entrar em uma Guilda</ActionTitle>
                        <ActionDescription>Digite o código da guilda fornecido pelo líder para se juntar. Participe de desafios coletivos e conquiste recompensas ao lado do seu clã.</ActionDescription>
                        <InputWrapper>
                            <GuildInput type="text" placeholder="Digite o código da guilda" value={guildCode} onChange={(e) => setGuildCode(e.target.value)} />
                            <Button onClick={handleJoinGuild} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", whiteSpace: "nowrap" }}>
                                <LogIn size={20} />
                                Entrar
                            </Button>
                        </InputWrapper>
                    </ActionCard>
                </motion.div>

                <motion.div variants={animationVariants.fadeInUp}>
                    <ActionCard>
                        <ActionIcon>
                            <Shield size={48} />
                        </ActionIcon>
                        <ActionTitle>Criar uma Guilda</ActionTitle>
                        <ActionDescription>Seja o líder da sua própria guilda. Defina o nome, escolha o emblema e convide outros membros para se juntarem à sua jornada.</ActionDescription>
                        <Button onClick={handleCreateGuild} style={{ width: "100%", maxWidth: "250px", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                            <Plus size={20} />
                            Criar Guilda
                        </Button>
                    </ActionCard>
                </motion.div>
            </ActionsContainer>

            <CreateGuildModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onConfirm={handleConfirmCreateGuild} isLoading={isCreatingGuild} />
        </Container>
    );
};

export default Guilda;
