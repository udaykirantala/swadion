import { categoryIcons } from "../../utils/categoryIcons";
import "./CategoryIcon.css";

export const CategoryIcon = ({ icon, name = "", size = 22 }) => {
    const src = categoryIcons[icon?.trim().toLowerCase()];
    if (!src) {
        return (
            <span className="category_icon_fallback inter-semibold" style={{ width: size, height: size, fontSize: size * 0.6 }}>
                {name.charAt(0).toUpperCase()}
            </span>
        );
    }
    return <img src={src} alt="" width={size} height={size} className="category_icon" />;
};