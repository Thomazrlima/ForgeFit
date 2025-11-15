import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/index.tsx";
import { LayoutContainer, MainContent } from "./Layout/styles.ts";

const Layout = () => {
    return (
        <LayoutContainer>
            <Sidebar />
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutContainer>
    );
};

export default Layout;
