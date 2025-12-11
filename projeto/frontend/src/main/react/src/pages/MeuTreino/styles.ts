import styled from "styled-components";

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
        margin-top: 5rem;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        flex-direction: column;
        text-align: center;
        margin-bottom: 2rem;
    }
`;

export const HeaderContent = styled.div`
    flex: 1;

    p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.text};
        margin-top: 1rem;
        opacity: 0.8;
    }

    @media (max-width: 48rem) {
        p {
            font-size: 1rem;
        }
    }
`;

export const Title = styled.h1`
    font-size: 3rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 2rem;
    }
`;

export const ValidadeInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    margin-bottom: 2rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};

    svg {
        color: ${({ theme }) => theme.colors.primary};
        flex-shrink: 0;
    }

    @media (max-width: 48rem) {
        font-size: 0.875rem;
        padding: 0.875rem 1rem;
    }
`;

export const TreinoDiariosGrid = styled.div`
    display: grid;
    gap: 2rem;
    width: 100%;
`;

export const TreinoDiarioCard = styled.div`
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 2rem;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    transition: all 0.3s;

    &:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
    }

    @media (max-width: 48rem) {
        padding: 1.5rem;
    }
`;

export const TreinoDiarioHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: 48rem) {
        gap: 1rem;
    }
`;

export const LetraBadge = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    font-weight: 700;
    flex-shrink: 0;

    @media (max-width: 48rem) {
        width: 48px;
        height: 48px;
        font-size: 1.5rem;
    }
`;

export const TipoLabel = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`;

export const ExerciciosList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
`;

export const ExercicioItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    gap: 1rem;
    transition: background 0.2s;

    &:hover {
        background: rgba(0, 0, 0, 0.4);
    }

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0.875rem;
    }
`;

export const ExercicioNome = styled.div`
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    flex: 1;
    font-size: 1rem;

    @media (max-width: 48rem) {
        font-size: 0.9375rem;
    }
`;

export const RepeticaoInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.colors.text};
    white-space: nowrap;

    @media (max-width: 48rem) {
        font-size: 0.875rem;
    }
`;

export const SeriesBadge = styled.span`
    background: ${({ theme }) => theme.colors.primary}30;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.875rem;
`;

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text}99;

    @media (max-width: 48rem) {
        padding: 4rem 1.5rem;
    }
`;

export const EmptyIcon = styled.div`
    font-size: 5rem;
    margin-bottom: 1.5rem;
    opacity: 0.3;

    @media (max-width: 48rem) {
        font-size: 4rem;
    }
`;

export const EmptyText = styled.p`
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 48rem) {
        font-size: 1.125rem;
    }
`;

export const EmptySubtext = styled.p`
    font-size: 1rem;
    max-width: 500px;
    line-height: 1.6;
    opacity: 0.7;

    @media (max-width: 48rem) {
        font-size: 0.9375rem;
    }
`;
