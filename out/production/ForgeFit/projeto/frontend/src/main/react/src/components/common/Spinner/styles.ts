import styled, { keyframes } from "styled-components";

export const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;

export const SpinnerCircle = styled.div<{ size?: number; color?: string }>`
    width: ${({ size }) => size || 40}px;
    height: ${({ size }) => size || 40}px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        animation: ${spin} 1s linear infinite;
        width: 100%;
        height: 100%;
    }
`;
