import styled from "styled-components";

export const AvatarContainer = styled.div<{ $hasImage: boolean; $size: number }>`
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ $size }) => $size * 0.4}px;
    font-weight: bold;
    color: white;
    background: ${({ $hasImage }) => ($hasImage ? "transparent" : "linear-gradient(135deg, #AB2522, #EF752B)")};
    flex-shrink: 0;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;
