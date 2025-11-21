import { Users, Shield, Plus, LogIn } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Container, WelcomeSection, WelcomeImage, WelcomeContent, Title, Description, ActionsContainer, ActionCard, ActionIcon, ActionTitle, ActionDescription, InputWrapper, GuildInput } from "./styles";
import { Button } from "../../components/common/Button";
import CreateGuildModal from "../../components/common/CreateGuildModal";
import { animationVariants } from "../../hooks/useScrollAnimation";

const Guilda = () => {
    const [guildCode, setGuildCode] = useState("");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isCreatingGuild, setIsCreatingGuild] = useState(false);

    const handleJoinGuild = () => {
        if (!guildCode.trim()) {
            console.log("Digite um código válido");
            return;
        }
        console.log("Entrar em uma guilda com código:", guildCode);
        // TODO: Implementar lógica de entrada na guilda
    };

    const handleCreateGuild = () => {
        setIsCreateModalOpen(true);
    };

    const handleConfirmCreateGuild = async (guildData: { name: string; description: string; imageUrl: string }) => {
        try {
            setIsCreatingGuild(true);
            // Simula delay de criação
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log("Criar guilda:", guildData);
            // TODO: Implementar lógica de criação da guilda

            setIsCreateModalOpen(false);
        } catch (error) {
            console.error("Erro ao criar guilda:", error);
        } finally {
            setIsCreatingGuild(false);
        }
    };

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
