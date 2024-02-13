import { Outlet } from "react-router-dom";

import { MainMenu } from "components/MainMenu/MainMenu";

export const SharedLayout = () => {
    return (
        <>
            <MainMenu />
            
            <Outlet />
            
        </>
    )
}