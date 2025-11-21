import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;

    @media (min-width: 48rem) {
        flex-direction: row;
    }
`;

export const ImageSection = styled.div`
    flex: 2;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/src/assets/gym.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    min-height: 40vh;

    @media (min-width: 48rem) {
        min-height: 100vh;
    }

    @media (max-width: 47.9375rem) {
        display: none;
    }
`;

export const AnimatedText = styled.p`
    font-size: 4rem;
    font-weight: 600;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeIn 1s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const FormSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.5rem;
    background-color: ${({ theme }) => theme.colors.background};
    min-height: 100vh;
    overflow-y: auto;
`;

export const Logo = styled.img`
    width: 20rem;
    height: auto;
    margin-bottom: 1.25rem;
`;

export const LogoLink = styled(Link)`
    align-self: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const InputLabel = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.3125rem;
    font-size: 0.875rem;
    font-weight: 600;
`;

export const Input = styled.input`
    padding: 0.75rem;
    border: 0.0625rem solid #ddd;
    border-radius: 0.25rem;
    font-size: 1rem;
`;

export const Span = styled.span`
    margin-top: 0rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
`;

export const LinkText = styled.p`
    text-align: center;
    margin-top: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;
