import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./UnderDevelopment.css";

// Placeholder for any page that's routed but not built yet.
// <Route path="/saved" element={<UnderDevelopment title="Saved recipes" />} />
// When the real page is ready, swap the element — nothing else changes.
export const UnderDevelopment = ({
    title = "This page",
    message = "We're still cooking this one up. Check back soon.",
}) => {
    const navigate = useNavigate();

    return (
        <div className="underdev_container page-enter">
            <img src={Logo} alt="" className="underdev_logo" />
            <span className="underdev_badge inter-semibold">Coming soon</span>
            <h1 className="underdev_title fraunces-medium">{title} is under development</h1>
            <p className="underdev_message inter-regular">{message}</p>
            <button className="underdev_btn inter-semibold" onClick={() => navigate("/")}>
                Back to home
            </button>
        </div>
    );
};