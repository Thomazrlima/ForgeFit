import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
`;

interface SkeletonBoxProps {
    width?: string;
    height?: string;
    borderRadius?: string;
}

export const SkeletonBox = styled.div<SkeletonBoxProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: ${({ borderRadius }) => borderRadius};
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.background} 0%, ${({ theme }) => theme.colors.primary}20 25%, ${({ theme }) => theme.colors.secondary}20 50%, ${({ theme }) => theme.colors.primary}20 75%, ${({ theme }) => theme.colors.background} 100%);
    background-size: 1000px 100%;
    animation: ${shimmer} 2s infinite linear;
`;
