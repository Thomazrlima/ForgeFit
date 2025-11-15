import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonStyleProps {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

const getButtonPadding = (size: string) => {
    switch (size) {
        case "sm":
            return "0.5rem 1rem";
        case "lg":
            return "0.875rem 2rem";
        default:
            return "0.75rem 1.5rem";
    }
};

const getButtonFontSize = (size: string) => {
    switch (size) {
        case "sm":
            return "0.875rem";
        case "lg":
            return "1rem";
        default:
            return "1rem";
    }
};

const getButtonMinWidth = (size: string) => {
    switch (size) {
        case "sm":
            return "100px";
        case "lg":
            return "140px";
        default:
            return "120px";
    }
};

const getButtonStyles = (variant: string, theme: any) => {
    if (variant === "primary") {
        return `
            background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
            color: white;

            &:hover:not(:disabled) {
                box-shadow: 
                    0 0 10px rgba(239, 68, 68, 0.6),
                    0 0 10px rgba(249, 115, 22, 0.4),
                    0 6px 20px rgba(171, 37, 34, 0.4);
            }

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
                box-shadow: none;
            }
        `;
    } else {
        return `
            background: transparent;
            color: ${theme.colors.text};
            border: 2px solid ${theme.colors.primary};

            &:hover:not(:disabled) {
                background: ${theme.colors.primary}20;
                box-shadow: 
                    0 0 10px rgba(239, 68, 68, 0.3),
                    0 0 10px rgba(249, 115, 22, 0.2);
            }

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
                background: transparent;
            }
        `;
    }
};

export const StyledButton = styled.button<ButtonStyleProps>`
    padding: ${({ size = "md" }) => getButtonPadding(size)};
    border-radius: 0.5rem;
    font-size: ${({ size = "md" }) => getButtonFontSize(size)};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: ${({ size = "md" }) => getButtonMinWidth(size)};

    ${({ variant = "primary", theme }) => getButtonStyles(variant, theme)}

    @media (max-width: 48rem) {
        width: 100%;
        min-width: auto;
        padding: 0.75rem 1.5rem;
    }
`;

export const StyledLinkButton = styled(Link)<ButtonStyleProps>`
    padding: ${({ size = "md" }) => getButtonPadding(size)};
    border-radius: 0.5rem;
    font-size: ${({ size = "md" }) => getButtonFontSize(size)};
    font-weight: 500;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    min-width: ${({ size = "md" }) => getButtonMinWidth(size)};

    ${({ variant = "primary", theme }) => getButtonStyles(variant, theme)}

    @media (max-width: 48rem) {
        width: 100%;
        min-width: auto;
        padding: 0.75rem 1.5rem;
    }
`;
