import { Outlet } from "react-router-dom"
import { SideNavBar } from "../components/SideNavBar/SideNavBar"
import "./MainLayout.css"
import { Footer } from "../components/footer/Footer"

export const MainLayout = ()=>{
    return(
        <div>
            <div>
                <SideNavBar/>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}