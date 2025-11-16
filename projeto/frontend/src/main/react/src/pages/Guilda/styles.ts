import styled from "styled-components";
import { Button } from "../../components/common/Button";

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;
    padding: 2rem 3rem;

    @media (max-width: 64rem) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 1rem;
    }
`;

export const WelcomeSection = styled.section`
    position: relative;
    min-height: 350px;
    display: flex;
    align-items: center;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-bottom: 2rem;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }

    @media (max-width: 48rem) {
        min-height: 300px;
    }
`;

export const WelcomeImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 64%;
    z-index: 0;
`;

export const WelcomeContent = styled.div`
    position: relative;
    z-index: 2;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
    max-width: 60rem;

    @media (max-width: 48rem) {
        padding: 2rem 1.5rem;
        max-width: 100%;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`;

export const Description = styled.p`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;

export const ActionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
    gap: 2rem;
    width: 100%;

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`;

export const ActionCard = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    padding: 2rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    @media (max-width: 48rem) {
        padding: 1.5rem;
    }
`;

export const ActionIcon = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 50%;
    color: white;

    svg {
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
`;

export const ActionTitle = styled.h2`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 1.5rem;
    }
`;

export const ActionDescription = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin: 0;
    opacity: 0.9;

    @media (max-width: 48rem) {
        font-size: 0.95rem;
    }
`;

export const InputWrapper = styled.div`
    width: 100%;
    max-width: 450px;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
        max-width: 100%;

        button {
            width: 100%;
        }
    }
`;

export const GuildInput = styled.input`
    flex: 1;
    padding: 0.75rem 1rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    transition: all 0.3s ease;
    width: 100%;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}80;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    @media (max-width: 48rem) {
        padding: 0.625rem 0.875rem;
        font-size: 0.9rem;
    }
`;

export const ActionButton = styled(Button)<{ variant?: "primary" | "secondary" }>`
    width: 100%;
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    padding: 0.875rem 1.5rem;

    ${({ variant, theme }) =>
        variant === "secondary" &&
        `
        background: linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.primary}) !important;
        
        &:hover:not(:disabled) {
            box-shadow: 0 0 20px ${theme.colors.secondary}80 !important;
        }
    `}

    @media (max-width: 48rem) {
        max-width: 100%;
        font-size: 0.95rem;
    }
`;
