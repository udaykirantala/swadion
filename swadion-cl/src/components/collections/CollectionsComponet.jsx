import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../redux/recipesRedux/RecipesSlice";
import "./Collections.css";
import { buildCollections } from "./Collections";
import { RecipeCard } from "../recipeCard/Recipecard";

const PREVIEW = 4;   // cards shown per collection before "Show all"

export const CollectionsComponet = () => {
    const dispatch = useDispatch();
    const { items: recipes, status } = useSelector((state) => state.recipes);
    const [expanded, setExpanded] = useState({});          // { collectionId: true }

    useEffect(() => {
        if (status === "idle") dispatch(fetchRecipes());
    }, [status, dispatch]);

    const collections = useMemo(() => buildCollections(recipes), [recipes]);

    if (status === "idle" || status === "loading") {
        return <p className="collections_loading inter-regular">Loading collections...</p>;
    }

    return (
        <div className="collections_page page-enter">
            <h1 className="collections_title fraunces-medium">Collections</h1>
            <p className="collections_desc inter-regular">
                Quick ways to find your next meal, built from each recipe's time, nutrition and diet.
            </p>

            {collections.length === 0 && (
                <p className="collections_empty inter-regular">No recipes yet. Check back soon.</p>
            )}

            {collections.map((col) => {
                const open = !!expanded[col.id];
                const shown = open ? col.recipes : col.recipes.slice(0, PREVIEW);
                return (
                    <section key={col.id} className="collections_section">
                        <div className="collections_head">
                            <div>
                                <h2 className="collections_name fraunces-medium">{col.title}</h2>
                                <p className="collections_sub inter-regular">{col.description}</p>
                            </div>
                            {col.recipes.length > PREVIEW && (
                                <button
                                    className="collections_toggle inter-semibold"
                                    onClick={() => setExpanded((prev) => ({ ...prev, [col.id]: !open }))}
                                >
                                    {open ? "Show less" : `Show all ${col.recipes.length}`}
                                </button>
                            )}
                        </div>
                        <div className="collections_grid">
                            {shown.map((recipe) => (
                                <RecipeCard key={recipe._id} recipe={recipe} />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};