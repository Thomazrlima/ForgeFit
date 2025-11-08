import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";
import AppRouter from "./router/AppRouter";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
