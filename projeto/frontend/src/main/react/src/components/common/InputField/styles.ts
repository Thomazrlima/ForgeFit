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
    border: 0.0625rem solid #ddd;
    border-radius: 0.25rem;
    font-size: 1rem;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
        outline: none;
    }
`;
