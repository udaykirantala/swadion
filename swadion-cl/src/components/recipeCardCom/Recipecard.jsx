import { useNavigate } from "react-router-dom";
import { CategoryIcon } from "../categoryIcon/CategoryIcon";
import clockIcon from "../../assets/clock.png";
import flameIcon from "../../assets/flame.png";
import pinIcon from "../../assets/pin.png";
import "./RecipeCard.css";

export const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();
    const theme = recipe.category?.colorTheme || "amber";

    return (
        <div className="recipe_card" onClick={() => navigate(`/recipe/${recipe._id}`)}>
            <div className="recipe_card_image" style={{ background: `var(--ramp-${theme}-bg)` }}>
                <CategoryIcon icon={recipe.category?.icon} name={recipe.category?.name} size={38} />
            </div>
            <div className="recipe_card_body">
                <p className="recipe_card_name fraunces-medium">{recipe.name}</p>
                <div className="recipe_card_meta ibm-plex-mono-medium">
                    <span><img src={clockIcon} alt="" />{recipe.totalTimeMinutes} min</span>
                    <span><img src={flameIcon} alt="" />{recipe.nutrition?.calories ?? 0} kcal</span>
                    {recipe.country?.name && <span><img src={pinIcon} alt="" />{recipe.country.name}</span>}
                </div>
            </div>
        </div>
    );
};