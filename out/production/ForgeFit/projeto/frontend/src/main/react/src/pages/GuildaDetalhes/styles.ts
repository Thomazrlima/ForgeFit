import styled from "styled-components";

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

    @media (max-width: 48rem) {
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }

    @media (max-width: 48rem) {
        padding: 1rem 0.75rem;
    }
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 48rem) {
        flex-direction: row;
        text-align: left;
        width: auto;
        gap: 0.75rem;
        flex: 1;
    }
`;

export const GuildAvatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    @media (max-width: 48rem) {
        width: 60px;
        height: 60px;
    }
`;

export const GuildInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    @media (max-width: 48rem) {
        align-items: center;
    }
`;

export const GuildName = styled.h1`
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

export const GuildCode = styled.span`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
`;

export const CodeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`;

export const CopyButton = styled.button<{ $copied?: boolean }>`
    background: transparent;
    border: none;
    color: ${({ theme, $copied }) => ($copied ? theme.colors.success : theme.colors.primary)};
    padding: 0.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    border-radius: 0.25rem;
    position: relative;

    &:hover {
        background: ${({ theme, $copied }) => ($copied ? theme.colors.success : theme.colors.primary)}20;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const Tooltip = styled.span`
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.success};
    color: white;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    animation: fadeIn 0.2s ease-in;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 4px solid transparent;
        border-top-color: ${({ theme }) => theme.colors.success};
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-4px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;

export const HeaderActions = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    button {
        width: 10rem;
        height: 3.5rem;
    }

    @media (max-width: 48rem) {
        width: auto;
        flex-direction: column;
        gap: 0.4rem;
        align-items: flex-end;

        button {
            width: 7.5rem;
            height: 2.5rem;
            font-size: 0.75rem;
            padding: 0.4rem 0.6rem;
        }
    }
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

import { motion } from "framer-motion";

export const MessagesContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 2rem;
    background: #1a1a1a;
    border-radius: 0.5rem;
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    min-height: 0;

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

    @media (max-width: 48rem) {
        padding: 1rem;
        gap: 0.75rem;
    }
`;

export const MessageWrapper = styled.div<{ $isCurrentUser: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    flex-direction: ${({ $isCurrentUser }) => ($isCurrentUser ? "row-reverse" : "row")};
    margin-bottom: 0.375rem;

    @media (max-width: 48rem) {
        gap: 0.375rem;
    }
`;

export const CheckinCard = styled.div<{ $isCurrentUser: boolean }>`
    background: ${({ $isCurrentUser, theme }) => ($isCurrentUser ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` : `${theme.colors.background}`)};
    border: ${({ $isCurrentUser, theme }) => ($isCurrentUser ? "none" : `2px solid ${theme.colors.primary}40`)};
    border-radius: ${({ $isCurrentUser }) => ($isCurrentUser ? "1rem 1rem 0.25rem 1rem" : "1rem 1rem 1rem 0.25rem")};
    padding: 1rem;
    max-width: 65%;
    transition: all 0.2s ease;
    color: ${({ $isCurrentUser }) => ($isCurrentUser ? "white" : "inherit")};
    box-sizing: border-box;
    overflow: hidden;

    @media (max-width: 48rem) {
        max-width: 85%;
        padding: 0.75rem;
    }
`;

export const CheckinHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    margin-bottom: 0.375rem;
`;

export const CheckinUserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`;

export const CheckinUserName = styled.span<{ $isCurrentUser?: boolean }>`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${({ $isCurrentUser }) => ($isCurrentUser ? "rgba(255, 255, 255, 0.9)" : "inherit")};
`;

export const CheckinTime = styled.span<{ $isCurrentUser?: boolean }>`
    font-size: 0.75rem;
    color: ${({ $isCurrentUser }) => ($isCurrentUser ? "rgba(255, 255, 255, 0.7)" : "inherit")};
    opacity: 0.7;

    &::before {
        content: "\u2022";
        margin-right: 0.5rem;
    }
`;

export const CheckinContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const CheckinWorkout = styled.div<{ $isCurrentUser?: boolean }>`
    display: inline-block;
    background: ${({ $isCurrentUser }) => ($isCurrentUser ? "linear-gradient(135deg, #1a1a1a, #292929ff)" : "linear-gradient(135deg, rgba(171, 37, 34, 1), rgba(239, 117, 43, 1))")};
    padding: 0.35rem 0.85rem;
    border-radius: 1.5rem;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
    color: ${({ $isCurrentUser }) => ($isCurrentUser ? "rgba(255, 255, 255, 0.9)" : "white")};
    box-shadow: none;
`;

export const CheckinDescription = styled.p<{ $isCurrentUser?: boolean }>`
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({ $isCurrentUser }) => ($isCurrentUser ? "rgba(255, 255, 255, 0.95)" : "inherit")};
    margin: 0;
    word-wrap: break-word;
`;

export const CheckinImage = styled.img`
    width: 100%;
    max-width: 100%;
    max-height: 250px;
    border-radius: 0.5rem;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    margin-top: 0.5rem;
    display: block;

    @media (max-width: 48rem) {
        max-height: 200px;
    }
`;

// Ranking container
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

// Skeleton styles
export const SkeletonCard = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.primary}40;
    border-radius: 1rem 1rem 1rem 0.25rem;
    padding: 1rem;
    max-width: 65%;

    @media (max-width: 48rem) {
        max-width: 80%;
        padding: 0.875rem;
    }
`;

export const SkeletonAvatar = styled.div<{ $position: number }>`
    width: ${({ $position }) => ($position === 1 ? "120px" : "100px")};
    height: ${({ $position }) => ($position === 1 ? "120px" : "100px")};
    border-radius: 50%;
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
    background-size: 200% 100%;
    flex-shrink: 0;
    animation: shimmer 1.5s infinite;
    flex-shrink: 0;

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
