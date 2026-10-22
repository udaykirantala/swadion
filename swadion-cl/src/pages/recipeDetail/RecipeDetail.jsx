
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchRecipes } from "../../redux/recipesRedux/RecipesSlice";
import { Nutrition } from "../../components/nutrition/Nutrition";
import backIcon from ".././../assets/back.png"
import videoIcon from "../../assets/video.png"
import "./RecipeDetail.css";

export const RecipeDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {
        items: recipes,
        status,
        error,
    } = useSelector((state) => state.recipes);

    const recipe = recipes.find((r) => r._id === id);

    const [servings, setServings] = useState(
        () => Number(recipe?.baseServings) || 1
    );

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchRecipes());
        }
    }, [status, dispatch]);

    useEffect(() => {
        if (recipe) {
            setServings(Number(recipe.baseServings) || 1);
        }
    }, [id, recipe?.baseServings]);
    if (status === "idle" || status === "loading") {
        return <p>Loading recipe...</p>;
    }

    if (status === "failed") {
        return <p>Error: {error}</p>;
    }

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    const baseServings = Number(recipe.baseServings) || 1;

    const scaledIngredients = recipe.ingredients.map((ingredient) => ({
        ...ingredient,
        amount:
            (Number(ingredient.amount) * servings) / baseServings,
    }));

    const goBack = () => {
        if (location.key !== "default") navigate(-1);
        else navigate(recipe.category?.slug ? `/category/${recipe.category.slug}` : "/browse");
    };
    return (
        <div className="recipe_details_container">

            <div className="recipes_details_img_container">
                <p className="rd_back inter-regular" onClick={goBack}>
                    <img src={backIcon} alt="" />
                    Back to results
                </p>
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="recipes_details_image"
                />
                {recipe.videoUrl && (
                    <a className="rd_video_link inter-regular" href={recipe.videoUrl} target="_blank" rel="noopener noreferrer">
                        <img src={videoIcon} alt="" />
                        Watch video tutorial
                    </a>
                )}
            </div>

            <div className="recipes_details_container">
                <div className="recipe_meta inter-semibold">
                    <span
                        style={{
                            backgroundColor: `var(--ramp-${recipe.category?.colorTheme}-bg)`,
                            color: `var(--ramp-${recipe.category?.colorTheme}-dot)`
                        }}
                    >
                        {recipe.category?.name}
                    </span>
                    <span className="recipe_meta_country">{recipe.country?.name}</span>
                </div>

                <h1 className="recipe_dish_name fraunces-medium">{recipe.name}</h1>

                <p className="recipe_description inter-regular">
                    {recipe.description}
                </p>
                <section className="recipe_nutrition">
                    <Nutrition nutrition={recipe.nutrition} />
                </section>
                <div className="recipe_times">
                    <div className="recipes_times_card">
                        <p className="recipes_times_name inter-regular">Prep Time</p>
                        <p className="recipes_times_value ibm-plex-mono-medium">{recipe.prepTimeMinutes} minutes</p>
                    </div>

                    <div className="recipes_times_card">
                        <p className="recipes_times_name inter-regular">Cook Time</p>
                        <p className="recipes_times_value ibm-plex-mono-medium">{recipe.cookTimeMinutes} minutes</p>
                    </div>

                    <div className="recipes_times_card">
                        <p className="recipes_times_name inter-regular">Total Time</p>
                        <p className="recipes_times_value ibm-plex-mono-medium">{recipe.totalTimeMinutes} minutes</p>
                    </div>
                </div>
                <div className="serbings_tags_continer">
                    <div className="servings_control_continer">
                        <p className="servings_control_heading inter-regular">Servings</p>
                        <div className="servings_control inter-regular">
                            <button
                                type="button"
                                onClick={() =>
                                    setServings((prev) =>
                                        Math.max(1, prev - 1)
                                    )
                                }
                                disabled={servings <= 1}
                                aria-label="Decrease servings"
                            >
                                -
                            </button>

                            <p className="servings_control_number ibm-plex-mono-medium">{servings}</p>

                            <button
                                type="button"
                                onClick={() =>
                                    setServings((prev) => prev + 1)
                                }
                                aria-label="Increase servings"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    {recipe.tags?.length > 0 && (
                        <section className="recipe_tags inter-regular">
                            <p className="tags_heading">Tags</p>

                            <div className="tags_list inter-regular">
                                {recipe.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
                <section className="recipes_ingredients_instructions_continer">
                    <div className="recipe_ingredients">

                        <h2 className="servings_header inter-semibold">INGREDIENTS</h2>

                        <div className="ingredients_list_continer">
                            {scaledIngredients.map((ingredient, index) => (
                                <div className="ingredients_list">
                                    <p className="ingredients_list_name inter-regular">{ingredient.name}</p>
                                    <p className="ingredients_list_count ibm-plex-mono-medium">{Number(ingredient.amount.toFixed(2))} {ingredient.unit}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="recipe_instructions">
                        <h2 className="servings_header inter-semibold">INSTRUCTIONS</h2>

                        {recipe.instructions.map((instruction, index) => (
                            <div key={instruction.step} className="recipe_instructions_continer">
                                <p className="recipe_instructions_step ibm-plex-mono-medium">{index + 1}</p>
                                <p className="recipe_instructions_name inter-regular">{instruction.text}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
