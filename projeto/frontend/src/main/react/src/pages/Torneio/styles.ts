import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    box-sizing: border-box;
    position: relative;
    padding: 2rem 3rem;

    * {
        box-sizing: border-box;
    }

    @media (max-width: 64rem) {
        padding: 2rem 1.5rem;
    }

    @media (max-width: 48rem) {
        padding: 1.5rem 1rem;
        padding-top: 6rem;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    gap: 2rem;
    padding: 2rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    min-height: 120px;

    @media (max-width: 48rem) {
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        padding: 1rem 0.75rem;
        min-height: 90px;
    }
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;

    @media (max-width: 48rem) {
        flex-direction: row;
        text-align: left;
        width: auto;
        gap: 0.75rem;
        flex: 1;
    }
`;

export const TournamentInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    min-height: 80px;
    justify-content: center;

    @media (max-width: 48rem) {
        gap: 0.25rem;
        min-height: 60px;
    }
`;

export const TournamentName = styled.h1`
    font-size: 1.8rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`;

export const TournamentTime = styled.span`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    font-weight: 500;

    @media (max-width: 48rem) {
        font-size: 0.875rem;
    }
`;

export const CountdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 1rem;
    padding: 3rem 2rem;
    text-align: center;
`;

export const ScheduledTournamentName = styled.h1`
    font-size: 2rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
    font-weight: 700;

    @media (max-width: 48rem) {
        font-size: 1.5rem;
    }
`;

export const CountdownLabel = styled.div`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
        font-size: 0.875rem;
    }
`;

export const CountdownText = styled.div`
    font-size: 1.5rem;
    color: white;
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
    }
`;

export const EmptyMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 1rem;
    padding: 3rem 2rem;
    text-align: center;
`;

export const EmptyMessageText = styled.p`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
    margin: 0;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;

export const LastWinnersTitle = styled.h2`
    font-size: 2rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0 0 2rem 0;
    font-weight: 700;
    text-align: center;

    @media (max-width: 48rem) {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
`;

export const LastPodiumContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    padding: 2rem 0;
    width: 100%;
`;

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    min-height: 400px;
    width: 100%;
`;

export const TabsMenu = styled.div`
    display: flex;
    gap: 0;
    margin-bottom: 2rem;
    align-items: center;
    position: relative;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}20;
    border-radius: 0.5rem;
    padding: 0.25rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        margin-bottom: 0.5rem;
        overflow-x: auto;
        gap: 0;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        margin-top: -1.5rem;

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const TabButton = styled.button<{ $active?: boolean }>`
    background: transparent;
    border: none;
    border-radius: 0.5rem;
    color: ${({ $active, theme }) => ($active ? "white" : theme.colors.text)};
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: ${({ $active }) => ($active ? "600" : "500")};
    transition:
        color 0.3s ease,
        font-weight 0.3s ease;
    flex: 1;
    min-width: fit-content;
    white-space: nowrap;
    position: relative;
    z-index: 1;

    svg {
        color: ${({ $active }) => ($active ? "white" : "currentColor")};
        transition: color 0.3s ease;
        width: 18px;
        height: 18px;
    }

    &:hover {
        color: ${({ $active, theme }) => ($active ? "white" : theme.colors.primary)};
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;

        svg {
            width: 14px;
            height: 14px;
        }
    }
`;

export const ActiveIndicator = styled(motion.div)`
    position: absolute;
    top: -2px;
    bottom: -2px;
    right: -2px;
    left: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 0.5rem;
    z-index: 0;
`;

export const ContentSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    min-height: 0;
`;

export const RankingContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    flex: 1;
    min-height: 0;
    padding: 0.5rem 0;

    /* Customizar scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 3px;
    }
`;

export const PrizesContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: stretch;
    justify-content: flex-start;
    box-sizing: border-box;
    min-height: 0;
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;

    /* Customizar scrollbar */
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-radius: 3px;
    }
`;

export const PrizesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    padding: 1.5rem 2rem;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 1rem;
    }
`;

export const PrizeCardVertical = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary}80;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem;
        gap: 1rem;
    }
`;

export const PrizeImageVertical = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 0.5rem;
    flex-shrink: 0;

    @media (max-width: 48rem) {
        width: 60px;
        height: 60px;
    }
`;

export const PrizeCardVerticalSkeleton = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 48rem) {
        padding: 1rem 1.5rem;
        gap: 1rem;
    }
`;

export const PrizesPodiumSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
    padding: 2rem 0;
    position: relative;
    width: 100%;

    @media (max-width: 48rem) {
        gap: 0.75rem;
        padding: 1rem 0;
    }
`;

export const PrizePodiumPlace = styled.div<{ $position: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({ $position }) => {
        if ($position === 1) return 2;
        if ($position === 2) return 1;
        return 3;
    }};
`;

export const PrizePodiumImage = styled.div<{ $position: number }>`
    position: relative;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
    animation: float 3s ease-in-out infinite;
    animation-delay: ${({ $position }) => $position * 0.2}s;

    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    img {
        width: ${({ $position }) => ($position === 1 ? "200px" : "150px")};
        height: auto;
        object-fit: contain;
        border-radius: 0.5rem;

        @media (max-width: 48rem) {
            width: ${({ $position }) => ($position === 1 ? "120px" : "100px")};
        }
    }
`;

export const PrizePodiumInfo = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 150px;
    width: 100%;

    @media (max-width: 48rem) {
        max-width: 100px;
    }
`;

export const PrizePodium = styled.div<{ $position: number }>`
    width: 120px;
    height: ${({ $position }) => {
        if ($position === 1) return "150px";
        if ($position === 2) return "120px";
        return "90px";
    }};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}40, ${({ theme }) => theme.colors.secondary}40);
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.5rem 0.5rem 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ $position }) => {
        if ($position === 1) return "3rem";
        if ($position === 2) return "2.5rem";
        return "2rem";
    }};
    transition: all 0.3s ease;

    @media (max-width: 48rem) {
        width: 70px;
        height: ${({ $position }) => {
            if ($position === 1) return "90px";
            if ($position === 2) return "75px";
            return "60px";
        }};
        font-size: ${({ $position }) => {
            if ($position === 1) return "1.8rem";
            if ($position === 2) return "1.5rem";
            return "1.2rem";
        }};
    }
`;

export const PrizePodiumPlaceSkeleton = styled.div<{ $position: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    order: ${({ $position }) => {
        if ($position === 1) return 2;
        if ($position === 2) return 1;
        return 3;
    }};
`;

export const SkeletonPodium = styled.div<{ $position: number }>`
    width: 120px;
    height: ${({ $position }) => {
        if ($position === 1) return "150px";
        if ($position === 2) return "120px";
        return "90px";
    }};
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 0.5rem 0.5rem 0 0;

    @keyframes shimmer {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }

    @media (max-width: 48rem) {
        width: 70px;
        height: ${({ $position }) => {
            if ($position === 1) return "90px";
            if ($position === 2) return "75px";
            return "60px";
        }};
    }
`;

export const PrizeCard = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transition: all 0.2s ease;
    box-sizing: border-box;
    flex: 1;
    max-width: 300px;

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary}80;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 0.75rem;
        max-width: 100%;
    }
`;

export const PrizePosition = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    flex-shrink: 0;
    min-width: 50px;

    @media (max-width: 48rem) {
        font-size: 1.25rem;
        min-width: 40px;
    }
`;

export const PrizeImage = styled.img`
    width: 100%;
    max-width: 200px;
    height: auto;
    object-fit: contain;
    border-radius: 0.5rem;

    @media (max-width: 48rem) {
        max-width: 150px;
    }
`;

export const PrizeName = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: white;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
    flex: 1;
    line-height: 1.4;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;

export const PrizeCardSkeleton = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    flex: 1;
    max-width: 300px;

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 0.75rem;
        max-width: 100%;
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

export const SkeletonImage = styled(SkeletonText)`
    border-radius: 0.5rem;
`;

export const SkeletonPodiumImage = styled.div<{ $position: number }>`
    width: ${({ $position }) => ($position === 1 ? "200px" : "150px")};
    height: ${({ $position }) => ($position === 1 ? "200px" : "150px")};
    border-radius: 0.5rem;
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
        width: ${({ $position }) => ($position === 1 ? "120px" : "100px")};
        height: ${({ $position }) => ($position === 1 ? "120px" : "100px")};
    }
`;
