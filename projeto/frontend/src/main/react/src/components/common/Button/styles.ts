import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled.button`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1rem;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow:
            0 0 10px rgba(239, 68, 68, 0.6),
            0 0 10px rgba(249, 115, 22, 0.4);
    }
`;

export const StyledLinkButton = styled(Link)`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    transition: box-shadow 0.3s ease;
    &:hover {
        box-shadow:
            0 0 10px rgba(239, 68, 68, 0.6),
            0 0 10px rgba(249, 115, 22, 0.4);
    }
`;
