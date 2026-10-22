import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../../redux/categoryRedux/CategorySlice";
import { CategoryIcon } from "../categoryIcon/CategoryIcon";
import './BrowseByCategory.css'
import { fetchRecipes } from "../../redux/recipesRedux/RecipesSlice";
import { useNavigate } from "react-router-dom";
export const BrowseByCategory = () => {
    const dispatch = useDispatch();
    const { items: categories, status, error } = useSelector((state) => state.categories);
    const { items: recipes, status: recipesStatus } = useSelector((state) => state.recipes);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCategories())
        }
        if (recipesStatus == 'idle') {
            dispatch(fetchRecipes())
        }
    }, [status, dispatch])

    const recipesCount = useMemo(() => {
        const counts = {};
        for (const r of recipes) {
            const id = r.category?._id || r.category;
            if (id) counts[id] = (counts[id] || 0) + 1;
        }
        return counts;
    }, [recipes]);
    const countLabel = (catId) => {
        if (recipesStatus !== "succeeded") return "";
        const n = recipesCount[catId] || 0;
        return `${n} ${n === 1 ? "recipe" : "recipes"}`;
    };
    return (
        <div>
            <div className="category_heading fraunces-medium">
                <h2>Browse by category</h2>
            </div>
            {status === 'loading' ? (
                <h2>Loading</h2>
            ) : (
                <div className="category_continer">
                    {categories.map((cat) => (
                        <div key={cat._id} className="cat_tile" onClick={() => navigate(`/category/${cat.slug}`)}>
                            <div
                                className="cat_tile_jar"
                                style={{
                                    background: `var(--ramp-${cat.colorTheme}-bg)`,
                                    "--category-border": `var(--ramp-${cat.colorTheme}-border)`
                                }}
                            >
                                <CategoryIcon icon={cat.icon} name={cat.name} size={22} />
                            </div>
                            <div>
                                <p className="cat_tile_name fraunces-medium">{cat.name}</p>
                                <p className="cat_tile_count ibm-plex-mono-medium">{countLabel(cat._id)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}