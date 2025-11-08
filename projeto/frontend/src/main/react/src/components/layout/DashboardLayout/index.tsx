import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import { LayoutContainer, MainContent } from "./styles.ts";

const DashboardLayout = () => {
    return (
        <LayoutContainer>
            <Sidebar />
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutContainer>
    );
};

export default DashboardLayout;
