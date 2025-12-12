import styled from "styled-components";

export const ModalContent = styled.div`
    /* Padding now comes from ModalBody */
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
    padding-top: 1.5rem;
    margin-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
