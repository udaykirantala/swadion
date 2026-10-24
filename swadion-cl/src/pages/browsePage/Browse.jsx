import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./Browse.css";
import {fetchRecipes } from "../../redux/recipesRedux/RecipesSlice";
import { NotFound } from "../../components/NotFound/NotFound";
import { RecipeCard } from "../../components/recipeCard/Recipecard";
import { fetchCategories } from "../../redux/categoryRedux/CategorySlice";
import { fetchCountries } from "../../redux/countriesRedux/countriesSlice";
import { clearSearchResults, fetchsearchRecipes } from "../../redux/recipesRedux/SearchRecipesSlice";
export const Browse = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categorySlug, countrySlug } = useParams();

    const { items: recipes, status } = useSelector((state) => state.recipes);
    const { items: categories, status: categoryStatus } = useSelector((state) => state.categories);
    const { items: countries, status: countryStatus } = useSelector((state) => state.countries);
    const { items: searchResults, status: searchStatus, error: searchError } = useSelector((state) => state.search);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";

    console.log(query);

    useEffect(() => {
        if (status === "idle") dispatch(fetchRecipes());
        if (status === "idle") dispatch(fetchCategories());
        if (status === "idle") dispatch(fetchCountries());

    }, [status, dispatch]);
    useEffect(() => {
        if (query.trim()) {
            dispatch(fetchsearchRecipes(query.trim()));
        } else {
            dispatch(clearSearchResults());
        }
    }, [query, dispatch])


    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [categorySlug, countrySlug]);

    const activeCategory = categories.find((c) => c.slug === categorySlug);
    const activeCountry = countries.find((c) => c.slug === countrySlug);
    const filtered = useMemo(() => {
        if (query) {
            return searchResults;
        }
        return recipes.filter((recipe) => {
            if (
                categorySlug &&
                recipe.category?.slug !== categorySlug
            ) {
                return false;
            }

            if (
                countrySlug &&
                recipe.country?.slug !== countrySlug
            ) {
                return false;
            }

            return true;
        });
    }, [
        query,
        searchResults,
        recipes,
        categorySlug,
        countrySlug,
    ]);
    if (status === "idle" || status === "loading") {
        return <p className="browse_loading inter-regular">Loading recipes...</p>;
    }

    if ((categorySlug && !activeCategory) || (countrySlug && !activeCountry)) {
        return <NotFound title="Nothing found here" message="That category or country doesn't exist (yet)." />;
    }

    const title = activeCategory ? `${activeCategory.name} dishes` : activeCountry ? `${activeCountry.name} dishes` : "All dishes";
    const description =
        activeCategory?.description ||
        activeCountry?.description ||
        `Every recipe in the book — ${recipes.length} dishes. Pick a category or country to narrow it down.`;

    return (
        <div className="browse_layout page-enter">
            <aside className="browse_sidebar">
                <div>
                    <p className="browse_side_label inter-semibold">Categories</p>
                    <div className="browse_side_list">
                        <div
                            className={`browse_side_item inter-regular ${!categorySlug && !countrySlug ? "browse_side_item_on inter-semibold" : ""}`}
                            onClick={() => navigate("/browse")}
                        >
                            All dishes
                        </div>
                        {categories.map((c) => (
                            <div
                                key={c._id}
                                className={`browse_side_item inter-regular ${c.slug === categorySlug ? "browse_side_item_on inter-semibold" : ""}`}
                                onClick={() => navigate(`/category/${c.slug}`)}
                            >
                                <span className="browse_side_dot" style={{ background: `var(--ramp-${c.colorTheme}-dot)` }} />
                                {c.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="browse_side_label inter-semibold">Countries</p>
                    <div className="browse_side_list">
                        {countries.map((c) => (
                            <div
                                key={c._id}
                                className={`browse_side_item inter-regular ${c.slug === countrySlug ? "browse_side_item_on inter-semibold" : ""}`}
                                onClick={() => navigate(`/country/${c.slug}`)}
                            >
                                {c.name}
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            <main>
                <p className="browse_back inter-regular" onClick={() => navigate("/")}>← Back to home</p>
                <h1 className="browse_title fraunces-medium">{title}</h1>
                <p className="browse_desc inter-regular">{description}</p>

                {filtered.length === 0 ? (
                    <p className="browse_empty inter-regular">No recipes here yet. Check back soon.</p>
                ) : (
                    <div className="browse_grid">
                        {filtered.map((recipe) => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};