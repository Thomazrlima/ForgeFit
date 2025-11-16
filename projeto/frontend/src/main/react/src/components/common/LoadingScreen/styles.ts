import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 50% 50%, ${({ theme }) => theme.colors.primary}15 0%, transparent 70%);
        animation: pulse 3s ease-in-out infinite;
    }

    @keyframes pulse {
        0%,
        100% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
    }
`;

export const Logo = styled.img`
    width: 150px;
    height: auto;
    margin-bottom: 2rem;
    filter: drop-shadow(0 0 20px ${({ theme }) => theme.colors.primary}80);
    animation: float 3s ease-in-out infinite;
    z-index: 1;

    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @media (max-width: 48rem) {
        width: 120px;
    }
`;

export const SpinnerWrapper = styled.div`
    position: relative;
    z-index: 1;

    .spinner {
        width: 60px;
        height: 60px;
        border: 4px solid ${({ theme }) => theme.colors.primary}30;
        border-top: 4px solid ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        animation: spin 1s linear infinite;
        box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}40;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 48rem) {
        .spinner {
            width: 50px;
            height: 50px;
        }
    }
`;

export const LoadingText = styled.p`
    margin-top: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInOut 2s ease-in-out infinite;
    z-index: 1;

    @keyframes fadeInOut {
        0%,
        100% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
    }

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;
