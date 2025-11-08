import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const MainContent = styled.main`
    flex: 1;
    margin-left: 280px;
    min-height: 100vh;

    @media (max-width: 48rem) {
        margin-left: 0;
    }
`;
