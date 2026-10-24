import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/homePage/Home";
import { Browse } from "../pages/browsePage/Browse";
import { Saved } from "../pages/saved/Saved"
import { UnderDevelopment } from "../components/underdevelopment/Underdevelopment";
import { RecipeDetail } from "../pages/recipeDetail/RecipeDetail";
import { NotFound } from "../components/NotFound/NotFound";
import { CollectionsComponet } from "../components/collections/CollectionsComponet";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/category/:categorySlug" element={<Browse />} />
                <Route path="/country/:countrySlug" element={<Browse />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
                <Route path="/collections" element={<CollectionsComponet />} />
                <Route path="/search" element={<Browse />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}