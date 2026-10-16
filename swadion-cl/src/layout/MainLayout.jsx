import { Outlet } from "react-router-dom"
import { SideNavBar } from "../components/SideNavBar/SideNavBar"
import "./MainLayout.css"

export const MainLayout = ()=>{
    return(
        <div>
            <div>
                <SideNavBar/>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
    )
}