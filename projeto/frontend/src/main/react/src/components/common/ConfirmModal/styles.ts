import styled from "styled-components";

export const ModalContent = styled.div`
    padding: 1.5rem;
`;

export const Message = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
