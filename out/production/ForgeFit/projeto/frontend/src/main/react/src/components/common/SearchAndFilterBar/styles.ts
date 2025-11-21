import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 64rem) {
        padding: 0 0.5rem;
        gap: 1.5rem;
    }

    @media (max-width: 48rem) {
        gap: 1.5rem;
        padding: 0;
    }
`;
