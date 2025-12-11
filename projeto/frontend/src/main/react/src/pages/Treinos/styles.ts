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
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        margin-bottom: 2rem;
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

export const Subtitle = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 1rem;
    opacity: 0.8;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;

export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 2rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const AlunosSection = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 200px);
    overflow-y: auto;
`;

export const SectionTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const SearchWrapper = styled.div`
    margin-bottom: 1rem;
`;

export const AlunosList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const AlunoCard = styled.div<{ $isSelected?: boolean }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary + "15" : theme.colors.background)};
    border: 2px solid ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary : "transparent")};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.primary + "20" : theme.colors.primary + "08")};
        transform: translateX(4px);
    }
`;

export const AlunoAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
`;

export const AlunoInfo = styled.div`
    flex: 1;
`;

export const AlunoNome = styled.div`
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.25rem;
`;

export const AlunoMatricula = styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text}99;
`;

export const AlunoPontuacao = styled.div`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
`;

export const TreinoSection = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-height: 400px;
    max-height: calc(100vh - 200px);
    overflow-y: auto;

    /* Estilização da scrollbar */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary}50;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.primary};
    }
`;

export const TreinoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const TreinoHeaderInfo = styled.div`
    flex: 1;
`;

export const TreinoActions = styled.div`
    display: flex;
    gap: 0.75rem;
`;

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text}99;
`;

export const EmptyIcon = styled.div`
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.3;
`;

export const EmptyText = styled.p`
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
`;

export const TreinoDiariosGrid = styled.div`
    display: grid;
    gap: 1.5rem;
`;

export const TreinoDiarioCard = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border-radius: 8px;
    padding: 1.5rem;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const TreinoDiarioHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const LetraBadge = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
`;

export const TipoLabel = styled.div`
    font-size: 1.125rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

export const ExerciciosList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const ExercicioItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    background: #1a1a1a;
    border-radius: 6px;
    gap: 1rem;
`;

export const ExercicioNome = styled.div`
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    flex: 1;
`;

export const RepeticaoInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text}99;
    white-space: nowrap;
`;

export const SeriesBadge = styled.span`
    background: ${({ theme }) => theme.colors.primary}20;
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-weight: 600;
`;

export const ValidadeInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 6px;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text}99;
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
`;
