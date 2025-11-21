import styled from "styled-components";

export const LayoutContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    overflow-x: hidden;
    max-width: 100vw;
    width: 100%;
    position: relative;
    box-sizing: border-box;
`;

export const MainContent = styled.main`
    flex: 1;
    margin-left: 280px;
    min-height: 100vh;
    width: calc(100% - 280px);
    max-width: calc(100vw - 280px);
    overflow-x: hidden;
    box-sizing: border-box;
    position: relative;
    padding: 0;

    @media (max-width: 48rem) {
        margin-left: 0;
        width: 100%;
        max-width: 100vw;
        padding: 0;
    }
`;
