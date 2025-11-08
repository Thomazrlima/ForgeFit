import { Container, ImageSection, FormSection, Form, Logo, LogoLink, Span, AnimatedText } from "./styles.ts";
import InputField from "../../components/common/InputField/index.tsx";
import { Button } from "../../components/common/Button/index.tsx";
import { useState, useEffect } from "react";

const phrases = ["Forje seu destino", "Seja sua própria lenda", "Honre sua jornada", "Domine seus medos", "A glória te espera", "Músculos de aço", "Supere-se a cada dia", "Conquiste a si mesmo", "Força indomável", "Corpo de guerreiro", "Desafie seus limites"];

const Login = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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
                <Form>
                    <InputField label="Email:" type="email" placeholder="Digite seu email" id="email" />
                    <InputField label="Senha:" type="password" placeholder="Digite sua senha" id="password" />
                    <Button type="submit">ENTRAR</Button>
                    <Span>Você receberá seu acesso por email após efetuar a matrícula.</Span>
                </Form>
            </FormSection>
        </Container>
    );
};

export default Login;
