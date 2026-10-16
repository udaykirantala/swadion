import { useNavigate } from "react-router-dom";
import "./NotFound.css";

// Used in two places:
//   1. The catch-all route (path="*") for any URL that doesn't exist.
//   2. Inside a page when its data isn't found, e.g. /recipe/some-slug that
//      isn't in the database:  if (!recipe) return <NotFound title="Recipe not found" />
export const NotFound = ({
    title = "Page not found",
    message = "The page you're looking for doesn't exist, or may have been moved.",
}) => {
    const navigate = useNavigate();

    return (
        <div className="notfound_container page-enter">
            <p className="notfound_code ibm-plex-mono-medium">404</p>
            <h1 className="notfound_title fraunces-medium">{title}</h1>
            <p className="notfound_message inter-regular">{message}</p>
            <div className="notfound_actions">
                <button className="notfound_btn_primary inter-semibold" onClick={() => navigate("/")}>
                    Back to home
                </button>
                <button className="notfound_btn_ghost inter-semibold" onClick={() => navigate("/browse")}>
                    Browse dishes
                </button>
            </div>
        </div>
    );
};