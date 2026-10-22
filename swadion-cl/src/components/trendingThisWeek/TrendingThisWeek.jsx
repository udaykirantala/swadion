import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchRecipes } from "../../redux/recipesRedux/RecipesSlice";
import "./TrendingThisWeek.css"
import { RecipeCard } from "../recipeCard/Recipecard";
export const TrendingThisWeek = () => {
    const dispatch = useDispatch();
    const { items: recipes, status, error } = useSelector((state) => state.recipes);

    const trendingRecipes = recipes.filter(recip => recip.isTrending === true)


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchRecipes());
        }
    }, [status, dispatch])


    console.log(trendingRecipes);


    return (
        <div>
            <div className="trending_heading fraunces-medium">
                <h2>Trending this week</h2>
            </div>
            {status === "loading" || status === "idle" ? (
                <p className="trending_loading inter-regular">Loading recipes...</p>
            ) : (
                <div className="trending_grid">
                    {trendingRecipes.map((recipe) => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
            )}
        </div>
    )
}