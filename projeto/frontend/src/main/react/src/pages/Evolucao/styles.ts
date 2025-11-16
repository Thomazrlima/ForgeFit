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
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 48rem) {
        margin-bottom: 2rem;
        flex-direction: column;
        text-align: center;
    }
`;

export const HeaderContent = styled.div`
    flex: 1;

    p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.text};
        margin-top: 0.5rem;
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

export const ContentWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;

    @media (min-width: 48rem) and (max-width: 97rem) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 48rem) {
        grid-template-columns: 1fr;
        gap: 1rem;
        margin-bottom: 2rem;
    }
`;

export const StatCard = styled(motion.div)`
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

    @media (max-width: 48rem) {
        padding: 1rem;
    }
`;

export const StatHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;

    svg {
        color: ${({ theme }) => theme.colors.primary};
        flex-shrink: 0;
    }
`;

export const StatTitle = styled.h3`
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    margin: 0;
    font-weight: 500;
`;

export const StatValue = styled.div`
    font-size: 2rem;
    font-weight: bold;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 1.5rem;
    }
`;

export const StatChange = styled.div<{ $isPositive: boolean }>`
    font-size: 0.9rem;
    color: ${({ $isPositive }) => ($isPositive ? "#4caf50" : "#f97316")};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        color: inherit;
    }
`;

export const HistorySection = styled.div`
    margin-top: 3rem;
`;

export const SectionTitle = styled.h2`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
        color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 48rem) {
        font-size: 1.4rem;
    }
`;

export const HistoryList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const HistoryCard = styled(motion.div)`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 4px 20px ${({ theme }) => theme.colors.primary}30;
        transform: translateX(5px);
    }

    @media (max-width: 48rem) {
        padding: 1.5rem;
    }
`;

export const HistoryHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    @media (max-width: 48rem) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`;

export const HistoryDate = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

export const HistoryProfessor = styled.div`
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
`;

export const HistoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;

    @media (max-width: 48rem) {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
    }
`;

export const HistoryItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

export const HistoryItemLabel = styled.span`
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
`;

export const HistoryItemValue = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: 4rem 2rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;

    svg {
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 1rem;
    }
`;

export const SkeletonCard = styled.div`
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

export const SkeletonText = styled.div<{ width?: string; height?: string; $marginBottom?: string }>`
    width: ${({ width }) => width || "100%"};
    height: ${({ height }) => height || "20px"};
    margin-bottom: ${({ $marginBottom }) => $marginBottom || "0"};
    border-radius: 4px;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;

export const SkeletonHistoryCard = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem;
    padding: 2rem;
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

    @media (max-width: 48rem) {
        padding: 1.5rem;
    }
`;
