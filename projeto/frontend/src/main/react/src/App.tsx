import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme, GlobalStyle } from "./styles";
import AppRouter from "./router/AppRouter";
import { UserProvider } from "./contexts/UserContext";
import ToastProvider from "./contexts/ToastContext";

// Criar instância do QueryClient
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
            staleTime: 5 * 60 * 1000, // 5 minutos
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <ToastProvider>
                    <UserProvider>
                        <AppRouter />
                    </UserProvider>
                </ToastProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
