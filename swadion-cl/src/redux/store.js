import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryRedux/CategorySlice";
import countriesReducer from "./countriesRedux/countriesSlice";
import recipesReducer from "./recipesRedux/RecipesSlice"
import searchRecipes from "./recipesRedux/SearchRecipesSlice"

export const store = configureStore({
    reducer:{
        categories:categoryReducer,
        countries:countriesReducer,
        recipes : recipesReducer,
        search:searchRecipes
    }
})