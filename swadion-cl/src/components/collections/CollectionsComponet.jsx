
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipes } from "../../redux/recipesRedux/RecipesSlice";
import { buildCollections } from "./Collections";
import { RecipeCardComponent } from "../recipeCardCom/RecipeCardComponent";

import Loading from "../common/loadingCom/Loading";
import ErrorState from "../common/errorStateCom/ErrorState";

import "./Collections.css";

const PREVIEW = 4;

export const CollectionsComponet = () => {
    const dispatch = useDispatch();

    const {
        items: recipes,
        status,
        error
    } = useSelector((state) => state.recipes);

    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchRecipes());
        }
    }, [status, dispatch]);

    const collections = useMemo(
        () => buildCollections(recipes),
        [recipes]
    );

    const handleRetry = () => {
        dispatch(fetchRecipes());
    };

    return (
        <div className="collections_page page-enter">

            <h1 className="collections_title fraunces-medium">
                Collections
            </h1>

            <p className="collections_desc inter-regular">
                Quick ways to find your next meal, built from each
                recipe's time, nutrition and diet.
            </p>

            {status === "idle" || status === "loading" ? (
                <Loading
                    message="Preparing your collections..."
                    description="We're organizing delicious recipes for you."
                    size="large"
                />
            ) : status === "failed" ? (

                <ErrorState
                    title="Unable to load collections"
                    message={
                        error ||
                        "We couldn't load your collections. Please try again."
                    }
                    onRetry={handleRetry}
                    retryText="Try Again"
                />

            ) : collections.length === 0 ? (

                <p className="collections_empty inter-regular">
                    No recipes yet. Check back soon.
                </p>

            ) : (

                collections.map((col) => {
                    const open = !!expanded[col.id];

                    const shown = open
                        ? col.recipes
                        : col.recipes.slice(0, PREVIEW);

                    return (
                        <section
                            key={col.id}
                            className="collections_section"
                        >
                            <div className="collections_head">
                                <div>
                                    <h2 className="collections_name fraunces-medium">
                                        {col.title}
                                    </h2>

                                    <p className="collections_sub inter-regular">
                                        {col.description}
                                    </p>
                                </div>

                                {col.recipes.length > PREVIEW && (
                                    <button
                                        className="collections_toggle inter-semibold"
                                        onClick={() =>
                                            setExpanded((prev) => ({
                                                ...prev,
                                                [col.id]: !open
                                            }))
                                        }
                                    >
                                        {open
                                            ? "Show less"
                                            : `Show all ${col.recipes.length}`}
                                    </button>
                                )}
                            </div>

                            <div className="collections_grid">
                                {shown.map((recipe) => (
                                    <RecipeCardComponent
                                        key={recipe._id}
                                        recipe={recipe}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })
            )}
        </div>
    );
};
