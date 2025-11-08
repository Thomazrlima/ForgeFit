import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import DashboardLayout from "../components/layout/DashboardLayout";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />

                <Route element={<DashboardLayout />}>
                    <Route path="/aulas" element={<div style={{ padding: '2rem', color: 'white' }}>Aulas em construção</div>} />
                    <Route path="/treinos" element={<div style={{ padding: '2rem', color: 'white' }}>Treinos em construção</div>} />
                    <Route path="/guilda" element={<div style={{ padding: '2rem', color: 'white' }}>Guilda em construção</div>} />
                    <Route path="/torneio" element={<div style={{ padding: '2rem', color: 'white' }}>Torneio em construção</div>} />
                    <Route path="/ranking" element={<div style={{ padding: '2rem', color: 'white' }}>Ranking em construção</div>} />
                    <Route path="/evolucao" element={<div style={{ padding: '2rem', color: 'white' }}>Evolução em construção</div>} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
