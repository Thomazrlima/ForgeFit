import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label<{ variant?: "gradient" | "classic" }>`
    color: ${({ theme, variant }) => (variant === "classic" ? "theme.colors.text" : theme.colors.text)};
    margin-bottom: 0.3125rem;
    font-size: 0.875rem;
    font-weight: 600;
`;

export const Input = styled.input<{ variant?: "gradient" | "classic" }>`
    padding: 0.75rem;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;

    background-color: ${({ theme, variant }) => (variant === "classic" ? "#fff" : theme.colors.background)};
    color: ${({ theme, variant }) => (variant === "classic" ? "#0f172a" : theme.colors.text)};
    border-radius: ${({ variant }) => (variant === "classic" ? "0.5rem" : "0.25rem")};
    border: ${({ variant, theme }) => (variant === "classic" ? `1px solid ${theme.colors.primary}33` : "2px solid")};
    ${({ variant, theme }) => (variant === "gradient" ? `border-image: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary}) 1;` : "")}

    &::placeholder {
        color: ${({ theme, variant }) => (variant === "classic" ? "#0f172a80" : `${theme.colors.text}80`)};
    }

    &:focus {
        box-shadow: ${({ variant, theme }) => (variant === "classic" ? `0 6px 18px rgba(15, 23, 42, 0.08)` : `0 0 0 3px ${theme.colors.primary}22`)};
    }
`;
