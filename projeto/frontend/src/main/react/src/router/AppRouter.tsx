import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import LoadingScreen from "../components/common/LoadingScreen";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Aulas from "../pages/Aulas";
import Ranking from "../pages/Ranking";
import Evolucao from "../pages/Evolucao";
import Guilda from "../pages/Guilda";
import GuildaDetalhes from "../pages/GuildaDetalhes";
import FullWidthLayout from "../components/layout/FullWidthLayout";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user, loading } = useUser();

    if (loading) {
        return <LoadingScreen />;
    }

    return user ? <>{children}</> : <Navigate to="/login" replace />;
};

const PublicRoute = ({ children }: ProtectedRouteProps) => {
    const { user, loading } = useUser();

    if (loading) {
        return <LoadingScreen />;
    }

    return user ? <Navigate to="/aulas" replace /> : <>{children}</>;
};

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    element={
                        <ProtectedRoute>
                            <FullWidthLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/aulas" element={<Aulas />} />
                    <Route path="/treinos" element={<div style={{ padding: "2rem", color: "white" }}>Treinos em construção</div>} />
                    <Route path="/torneio" element={<div style={{ padding: "2rem", color: "white" }}>Torneio em construção</div>} />
                    <Route path="/ranking" element={<Ranking />} />
                    <Route path="/evolucao" element={<Evolucao />} />
                    <Route path="/guilda" element={<Guilda />} />
                    <Route path="/guilda/:id" element={<GuildaDetalhes />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
