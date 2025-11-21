import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Montserrat", sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        line-height: 1.6;
        overflow-x: hidden;
        max-width: 100vw;
        width: 100%;
        position: relative;
    }

    #root {
        overflow-x: hidden;
        max-width: 100vw;
        width: 100%;
        position: relative;
    }
    
    html {
        overflow-x: hidden;
        max-width: 100vw;
        width: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
    }

    input, textarea, select {
        font-family: inherit;
    }

        /* Custom Scrollbar */
    ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.background};
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
        border-radius: 6px;
        border: 2px solid ${({ theme }) => theme.colors.background};
    }

    ::-webkit-scrollbar-thumb:hover {
        box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
    }



`;
