import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";
import AppRouter from "./router/AppRouter";
import { UserProvider } from "./contexts/UserContext";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <UserProvider>
                <AppRouter />
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
