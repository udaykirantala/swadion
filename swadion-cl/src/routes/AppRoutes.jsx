import { Route, Routes } from "react-router-dom"
import { MainLayout } from "../layout/MainLayout"
import { Home } from "../pages/homePage/Home"
import { Browse } from "../pages/browsePage/Browse"
import { Saved } from "../pages/saved/Saved"
import { UnderDevelopment } from "../components/underdevelopment/Underdevelopment"
import { NotFound } from "../components/notfound/Notfound"

export const AppRoutes = ()=>{
    return(
        <Routes>
            <Route element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/browse" element={<Browse/>}/>
                <Route path="/saved" element={<UnderDevelopment/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}