import { Container, ImageSection, FormSection, Form, Logo, LogoLink, Span, AnimatedText } from "./styles.ts";
import InputField from "../../components/common/InputField/index.tsx";
import { Button } from "../../components/common/Button/index.tsx";
import { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const phrases = ["Forje seu destino", "Seja sua própria lenda", "Honre sua jornada", "Domine seus medos", "A glória te espera", "Músculos de aço", "Supere-se a cada dia", "Conquiste a si mesmo", "Força indomável", "Corpo de guerreiro", "Desafie seus limites"];

const Login = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            await login(email, password);
            navigate("/aulas");
        } catch (err) {
            setError("Email ou senha inválidos. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <ImageSection>
                <div>
                    <AnimatedText key={currentPhraseIndex}>{phrases[currentPhraseIndex]}</AnimatedText>
                </div>
            </ImageSection>
            <FormSection>
                <LogoLink to="/">
                    <Logo src="/src/assets/logo.png" alt="ForgeFit Logo" />
                </LogoLink>
                <Form onSubmit={handleSubmit}>
                    <InputField label="Email:" type="email" placeholder="Digite seu email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} variant="classic" required />
                    <InputField label="Senha:" type="password" placeholder="Digite sua senha" id="password" value={password} onChange={(e) => setPassword(e.target.value)} variant="classic" required />
                    {error && <Span style={{ color: "#EF752B", marginTop: "-0.5rem" }}>{error}</Span>}
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "ENTRANDO..." : "ENTRAR"}
                    </Button>
                    <Span>Você receberá seu acesso por email após efetuar a matrícula.</Span>
                </Form>
            </FormSection>
        </Container>
    );
};

export default Login;
