import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryRedux/CategorySlice";
import countriesReducer from "./countriesRedux/countriesSlice";

export const store = configureStore({
    reducer:{
        categories:categoryReducer,
        countries:countriesReducer,
    }
})