import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.3125rem;
    font-size: 0.875rem;
    font-weight: 600;
`;

export const Input = styled.input`
    padding: 0.75rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary}) 1;
    border-radius: 0.25rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    transition: all 0.3s ease;

    &::placeholder {
        color: ${({ theme }) => theme.colors.text}80;
    }

    &:focus {
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
`;
