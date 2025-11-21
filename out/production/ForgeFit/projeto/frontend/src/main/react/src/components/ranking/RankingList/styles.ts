import styled from "styled-components";

export const RankingList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const RankingItem = styled.div<{ $position: number }>`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem;
    transition: all 0.3s ease;
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

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
        box-shadow: 0 4px 20px ${({ theme }) => theme.colors.primary}30;
        transform: translateX(5px);
    }

    @media (max-width: 48rem) {
        gap: 1rem;
        padding: 1rem;
    }
`;

export const Position = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    min-width: 50px;
    text-align: center;

    @media (max-width: 48rem) {
        font-size: 1.4rem;
        min-width: 40px;
    }
`;

export const PlayerInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
    overflow: hidden;
`;

export const PlayerName = styled.h4`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;

export const Score = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: right;
    min-width: 100px;

    @media (max-width: 48rem) {
        font-size: 1.2rem;
        min-width: 80px;
    }
`;

// Skeleton styles
export const SkeletonRankingItem = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 0.5rem;
    padding: 1.25rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 1rem;
    }
`;

export const SkeletonAvatar = styled.div<{ $position: number }>`
    width: ${({ $position }) => ($position === 1 ? "120px" : "100px")};
    height: ${({ $position }) => ($position === 1 ? "120px" : "100px")};
    border-radius: 50%;
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

    @media (max-width: 48rem) {
        width: ${({ $position }) => ($position === 1 ? "90px" : "75px")};
        height: ${({ $position }) => ($position === 1 ? "90px" : "75px")};
    }
`;

export const SkeletonText = styled.div<{ width?: string; height?: string }>`
    width: ${({ width }) => width || "100px"};
    height: ${({ height }) => height || "20px"};
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
