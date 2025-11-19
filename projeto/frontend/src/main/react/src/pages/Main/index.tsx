import logo from "../../assets/logo.png";
import video from "../../assets/background.mp4";
import gym from "../../assets/gym.jpg";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import { Header, Logo, Nav, NavLink, Section, RightSection, VideoBackground, VideoContainer, VideoOverlay, AnimatedPhrase, ServicesGrid, ServiceCard, ServiceImage, ServiceContent, ContactGrid, ContactCard, Footer, AboutImage } from "./styles.ts";
import { LinkButton } from "../../components/common/Button/index.tsx";
import { useState, useEffect } from "react";
import { Scroll, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimations, animationVariants } from "../../hooks/useScrollAnimation";

const phrases = ["Na ForgeFit, nós não apenas levantamos ferro", "Nós forjamos força!"];

const Main = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    const [aboutSection, aboutImage, servicesTitle, serviceCard1, serviceCard2, serviceCard3, serviceCard4, contactSection, contactCards] = useScrollAnimations(9);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <VideoContainer id="inicio">
                <Header>
                    <Logo src={logo} alt="ForgeFit" />
                    <RightSection>
                        <Nav>
                            <NavLink href="#inicio">Início</NavLink>
                            <NavLink href="#sobre">Sobre</NavLink>
                            <NavLink href="#servicos">Serviços</NavLink>
                            <NavLink href="#contato">Contato</NavLink>
                        </Nav>
                        <LinkButton to="/login">Entrar</LinkButton>
                    </RightSection>
                </Header>
                <VideoBackground autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Seu navegador não suporta vídeo.
                </VideoBackground>
                <VideoOverlay>
                    <p>
                        <AnimatedPhrase key={currentPhraseIndex}>{phrases[currentPhraseIndex]}</AnimatedPhrase>
                    </p>
                </VideoOverlay>
            </VideoContainer>
            <Section id="sobre">
                <motion.div ref={aboutSection.ref} initial="hidden" animate={aboutSection.isInView ? "visible" : "hidden"} variants={animationVariants.fadeInUp}>
                    <h2>Bem-vindo à ForgeFit</h2>
                    <p>Bem-vindo à ForgeFit, a plataforma desenhada para forjar resultados. Unificamos a gestão completa das suas aulas, planos de treino inteligentes, acompanhamento de progresso em tempo real e um sistema de gamificação envolvente. Dê aos seus alunos as ferramentas para conquistar sua melhor versão e leve sua academia a um patamar lendário.</p>
                </motion.div>
                <motion.div ref={aboutImage.ref} initial="hidden" animate={aboutImage.isInView ? "visible" : "hidden"} variants={animationVariants.fadeInUp}>
                    <AboutImage src={gym} alt="Academia ForgeFit" />
                </motion.div>
            </Section>
            <Section id="servicos">
                <motion.div ref={servicesTitle.ref} initial="hidden" animate={servicesTitle.isInView ? "visible" : "hidden"} variants={animationVariants.fadeInUp}>
                    <h2>As Ferramentas da Sua Forja</h2>
                    <p>Explore o arsenal completo da ForgeFit. Cada ferramenta foi desenhada para otimizar sua gestão, engajar seus alunos e transformar seu espaço em uma verdadeira arena de resultados.</p>
                </motion.div>
                <ServicesGrid>
                    <motion.div ref={serviceCard1.ref} initial="hidden" animate={serviceCard1.isInView ? "visible" : "hidden"} variants={animationVariants.fadeInLeft}>
                        <ServiceCard>
                            <ServiceImage>
                                <img src={image1} alt="Planos de Treino" />
                            </ServiceImage>
                            <ServiceContent>
                                <h3>Planos de Treino: A Jornada do Herói</h3>
                                <p>Dê aos seus instrutores o poder de mestres-ferreiros. Nossa plataforma permite criar e atribuir planos de treino 100% personalizados, adaptados aos objetivos de cada aluno. De iniciantes a guerreiros veteranos, cada um terá sua jornada perfeitamente traçada para a vitória.</p>
                            </ServiceContent>
                        </ServiceCard>
                    </motion.div>
                    <motion.div ref={serviceCard2.ref} initial="hidden" animate={serviceCard2.isInView ? "visible" : "hidden"} variants={animationVariants.fadeInRight}>
                        <ServiceCard reverse>
                            <ServiceImage>
                                <img src={image2} alt="Gestão de Aulas" />
                            </ServiceImage>
                            <ServiceContent>
                                <h3>Gestão de Aulas: Organize Suas Legiões</h3>
                                <p>Comande suas modalidades com precisão. Crie, agende e gerencie todas as suas aulas—seja Yoga, Spinning ou Treinamento Funcional—em um calendário centralizado. Facilite a inscrição dos alunos e otimize a ocupação da sua academia sem esforço.</p>
                            </ServiceContent>
                        </ServiceCard>
                    </motion.div>
                    <motion.div ref={serviceCard3.ref} initial="hidden" animate={serviceCard3.isInView ? "visible" : "hidden"} variants={animationVariants.fadeInLeft}>
                        <ServiceCard>
                            <ServiceImage>
                                <img src={image3} alt="Progresso Real" />
                            </ServiceImage>
                            <ServiceContent>
                                <h3>Progresso Real: O Espelho da Evolução</h3>
                                <p>O que não é medido, não pode ser conquistado. Permita que seus alunos registrem dados corporais, integrem resultados de bioimpedância e visualizem seu progresso em gráficos claros. Transforme dados brutos em motivação pura e resultados visíveis.</p>
                            </ServiceContent>
                        </ServiceCard>
                    </motion.div>
                    <motion.div ref={serviceCard4.ref} initial="hidden" animate={serviceCard4.isInView ? "visible" : "hidden"} variants={animationVariants.fadeInRight}>
                        <ServiceCard reverse>
                            <ServiceImage>
                                <img src={image4} alt="Gamificação" />
                            </ServiceImage>
                            <ServiceContent>
                                <h3>Gamificação: A Arena dos Campeões</h3>
                                <p>Transforme o treino em uma competição épica. Crie torneios sazonais, desafios de check-in e rankings para ver quem treina mais. Premie seus alunos mais dedicados e veja o engajamento, a retenção e o espírito de comunidade da sua academia dispararem.</p>
                            </ServiceContent>
                        </ServiceCard>
                    </motion.div>
                </ServicesGrid>
            </Section>
            <Section id="contato">
                <motion.div ref={contactSection.ref} initial="hidden" animate={contactSection.isInView ? "visible" : "hidden"} variants={animationVariants.fadeInUp}>
                    <h2>Entre em Contato</h2>
                    <p>Pronto para forjar sua academia? Entre em contato conosco e descubra como a ForgeFit pode transformar sua gestão e engajar seus alunos como nunca.</p>
                </motion.div>
                <motion.div ref={contactCards.ref} initial="hidden" animate={contactCards.isInView ? "visible" : "hidden"} variants={animationVariants.staggerContainer}>
                    <ContactGrid>
                        <motion.div variants={animationVariants.fadeInUp}>
                            <ContactCard>
                                <div className="icon">
                                    <Scroll size={48} strokeWidth={1.5} />
                                </div>
                                <h3>Email</h3>
                                <p>
                                    <a href="mailto:contato@forgefit.com">contato@forgefit.com</a>
                                </p>
                            </ContactCard>
                        </motion.div>
                        <motion.div variants={animationVariants.fadeInUp}>
                            <ContactCard>
                                <div className="icon">
                                    <Phone size={48} strokeWidth={1.5} />
                                </div>
                                <h3>Telefone</h3>
                                <p>
                                    <a href="tel:+5511999999999">(81) 94002-8922</a>
                                </p>
                            </ContactCard>
                        </motion.div>
                        <motion.div variants={animationVariants.fadeInUp}>
                            <ContactCard>
                                <div className="icon">
                                    <MapPin size={48} strokeWidth={1.5} />
                                </div>
                                <h3>Localização</h3>
                                <p>Av. Cais do Apolo, 77, Recife</p>
                            </ContactCard>
                        </motion.div>
                    </ContactGrid>
                </motion.div>
            </Section>
            <Footer>
                <p>
                    Projeto desenvolvido para a disciplina de <strong>Requisitos, Projeto de Software e Validação</strong> na <strong>CESAR School</strong>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/gustavo-mourato-1802b328a/" target="_blank" rel="noopener noreferrer">
                        Gustavo Mourato
                    </a>
                    {" • "}
                    <a href="https://www.linkedin.com/in/leogutzeit/" target="_blank" rel="noopener noreferrer">
                        Leonardo Gutzeit
                    </a>
                    {" • "}
                    <a href="https://www.linkedin.com/in/paulorosadodev/" target="_blank" rel="noopener noreferrer">
                        Paulo Rosado
                    </a>
                    {" • "}
                    <a href="https://www.linkedin.com/in/thomazrlima//" target="_blank" rel="noopener noreferrer">
                        Thomaz Lima
                    </a>
                    {" • "}
                    <a href="https://www.linkedin.com/in/viniciusdeandradejordao/" target="_blank" rel="noopener noreferrer">
                        Vinicius de Andrade
                    </a>
                </p>
            </Footer>
        </>
    );
};

export default Main;
