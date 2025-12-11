import styled from "styled-components";
import { motion } from "framer-motion";

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

    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary}50;
        border-radius: 4px;
    }
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
    position: relative;
    display: flex;
    align-items: center;

    svg {
        position: absolute;
        right: 12px;
        color: ${({ theme }) => theme.colors.text}60;
        pointer-events: none;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
    border: 2px solid ${({ theme }) => theme.colors.primary}30;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.9rem;
    transition: all 0.2s;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}50;
    }
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

export const HistoricoSection = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-height: 400px;
    max-height: calc(100vh - 200px);
    overflow-y: auto;

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

export const HistoricoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const HistoricoHeaderInfo = styled.div`
    flex: 1;
`;

export const HistoricoActions = styled.div`
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

export const HistoricoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const HistoricoCard = styled(motion.div)`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    }
`;

export const HistoricoCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const HistoricoDate = styled.div`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

export const HistoricoProfessor = styled.div`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text}99;
`;

export const HistoricoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
`;

export const HistoricoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const HistoricoItemLabel = styled.div`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text}80;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const HistoricoItemValue = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;

    @media (max-width: 48rem) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const StatCard = styled(motion.div)`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 0.75rem;
    padding: 1rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    }
`;

export const StatHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    svg {
        color: ${({ theme }) => theme.colors.primary};
        flex-shrink: 0;
        width: 18px;
        height: 18px;
    }
`;

export const StatTitle = styled.h3`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    margin: 0;
    font-weight: 500;
`;

export const StatValue = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const StatChange = styled.div<{ $isPositive: boolean }>`
    font-size: 0.75rem;
    color: ${({ $isPositive }) => ($isPositive ? "#4caf50" : "#f97316")};
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-top: 0.25rem;

    svg {
        color: inherit;
        width: 14px;
        height: 14px;
    }
`;
