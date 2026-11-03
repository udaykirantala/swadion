import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/homePage/Home";
import { Browse } from "../pages/browsePage/Browse";
import { RecipeDetail } from "../pages/recipeDetail/RecipeDetail";
import { CollectionsComponet } from "../components/collections/CollectionsComponet";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { ContactPage } from "../pages/contactPage/ContactPage";
import { PrivacyPolicyPage } from "../pages/privacyPolicyPage/PrivacyPolicyPage";
import { TermsConditionsPage } from "../pages/termsConditionsPage/TermsConditionsPage";
import NotFound from "../components/Notfound/NotFound";

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
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
                <Route path="/termsconditions" element={<TermsConditionsPage />} />
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
    )
}