import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/index.tsx";
import { LayoutContainer, MainContent } from "./styles.ts";

const FullWidthLayout = () => {
    return (
        <LayoutContainer>
            <Sidebar />
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutContainer>
    );
};

export default FullWidthLayout;
