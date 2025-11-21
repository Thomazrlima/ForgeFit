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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    gap: 2rem;

    @media (max-width: 64rem) {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
    }

    @media (max-width: 48rem) {
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

export const FilterSection = styled.div`
    display: flex;
    gap: 1rem;
    flex-shrink: 0;

    @media (max-width: 48rem) {
        gap: 0.5rem;
    }
`;

export const FilterButton = styled.button<{ $active: boolean }>`
    padding: 0.75rem 2rem;
    border: 2px solid;
    border-image: ${({ $active, theme }) => ($active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}) 1` : "none")};
    border-color: ${({ $active, theme }) => ($active ? "transparent" : theme.colors.primary)};
    background: ${({ $active, theme }) => ($active ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` : "transparent")};
    color: ${({ $active }) => ($active ? "white" : ({ theme }) => theme.colors.text)};
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary}40;
    }

    @media (max-width: 48rem) {
        padding: 0.5rem 1.5rem;
        font-size: 0.9rem;
    }
`;

export const ContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const PodiumSection = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;
    padding: 2rem;

    @media (max-width: 48rem) {
        gap: 1rem;
        padding: 1rem;
        margin-bottom: 3rem;
    }
`;

export const PodiumPlace = styled(motion.div)<{ $position: number }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
    order: ${({ $position }) => ($position === 1 ? 2 : $position === 2 ? 1 : 3)};

    @media (max-width: 48rem) {
        gap: 0.5rem;
    }
`;

export const PodiumAvatar = styled.div<{ $position: number }>`
    position: relative;
    overflow: visible;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-radius: 50%;

    @media (max-width: 48rem) {
        & > div {
            width: ${({ $position }) => ($position === 1 ? "90px" : "75px")} !important;
            height: ${({ $position }) => ($position === 1 ? "90px" : "75px")} !important;
            font-size: ${({ $position }) => ($position === 1 ? "2rem" : "1.8rem")} !important;
        }
    }
`;

export const Crown = styled.div`
    position: absolute;
    top: -49px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.5rem;
    z-index: 10;

    @media (max-width: 48rem) {
        top: -25px;
        font-size: 2rem;
    }
`;

export const PodiumInfo = styled.div`
    text-align: center;
`;

export const PodiumName = styled.h3<{ $position: number }>`
    font-size: ${({ $position }) => ($position === 1 ? "1.3rem" : "1.1rem")};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: ${({ $position }) => ($position === 1 ? "1rem" : "0.9rem")};
    }
`;

export const PodiumScore = styled.p<{ $position: number }>`
    font-size: ${({ $position }) => ($position === 1 ? "1.5rem" : "1.2rem")};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0.5rem 0 0 0;
    font-weight: bold;

    @media (max-width: 48rem) {
        font-size: ${({ $position }) => ($position === 1 ? "1.2rem" : "1rem")};
    }
`;

export const Podium = styled.div<{ $position: number }>`
    width: 120px;
    height: ${({ $position }) => ($position === 1 ? "140px" : $position === 2 ? "110px" : "80px")};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}60, ${({ theme }) => theme.colors.secondary}60);
    border-radius: 8px 8px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);

    @media (max-width: 48rem) {
        width: 90px;
        height: ${({ $position }) => ($position === 1 ? "100px" : $position === 2 ? "80px" : "60px")};
        font-size: 1.5rem;
    }
`;

export const RankingList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;

    @media (max-width: 48rem) {
        padding: 0;
    }
`;

export const RankingItem = styled(motion.div)<{ $position: number }>`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
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
        padding: 1rem;
        gap: 1rem;
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
`;

export const PlayerName = styled.h3`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: 1rem;
    }
`;

export const PlayerLevel = styled.span`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;

    @media (max-width: 48rem) {
        font-size: 0.8rem;
    }
`;

export const Score = styled.div`
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

export const EmptyState = styled.div`
    text-align: center;
    padding: 4rem 2rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1rem;
    }
`;
