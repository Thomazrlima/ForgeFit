import styled from "styled-components";

export const PodiumSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
    padding: 2rem 0;
    position: relative;

    @media (max-width: 48rem) {
        gap: 0.75rem;
        padding: 1rem 0;
    }
`;

export const PodiumPlace = styled.div<{ $position: number }>`
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

export const PodiumAvatar = styled.div<{ $position: number }>`
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

    @media (max-width: 48rem) {
        & > div {
            width: ${({ $position }) => ($position === 1 ? "65px" : "55px")} !important;
            height: ${({ $position }) => ($position === 1 ? "65px" : "55px")} !important;
            font-size: ${({ $position }) => ($position === 1 ? "1.5rem" : "1.3rem")} !important;
        }
    }
`;

export const Crown = styled.div`
    position: absolute;
    top: -2.1rem;
    left: 50%;
    font-size: 2rem;
    animation: bounce 2s ease-in-out infinite;

    @keyframes bounce {
        0%,
        100% {
            transform: translateX(-50%) translateY(0) rotate(-10deg);
        }
        50% {
            transform: translateX(-50%) translateY(-5px) rotate(0deg);
        }
    }

    @media (max-width: 48rem) {
        top: -1.5rem;
        font-size: 1.5rem;
        left: 3.1rem;
    }
`;

export const PodiumInfo = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 100%;
`;

export const PodiumName = styled.h3<{ $position: number }>`
    font-size: ${({ $position }) => ($position === 1 ? "1.25rem" : "1.1rem")};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;

    @media (max-width: 48rem) {
        font-size: ${({ $position }) => ($position === 1 ? "0.75rem" : "0.7rem")};
    }
`;

export const PodiumScore = styled.span<{ $position: number }>`
    font-size: ${({ $position }) => ($position === 1 ? "1.5rem" : "1.25rem")};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;

    @media (max-width: 48rem) {
        font-size: ${({ $position }) => ($position === 1 ? "0.9rem" : "0.8rem")};
    }
`;

export const Podium = styled.div<{ $position: number }>`
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
    font-size: 3rem;
    transition: all 0.3s ease;

    @media (max-width: 48rem) {
        width: 70px;
        height: ${({ $position }) => {
            if ($position === 1) return "90px";
            if ($position === 2) return "75px";
            return "60px";
        }};
        font-size: 1.8rem;
    }
`;

// Skeleton styles
export const SkeletonPodiumPlace = styled.div<{ $position: number }>`
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
        width: ${({ $position }) => ($position === 1 ? "65px" : "55px")};
        height: ${({ $position }) => ($position === 1 ? "65px" : "55px")};
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
