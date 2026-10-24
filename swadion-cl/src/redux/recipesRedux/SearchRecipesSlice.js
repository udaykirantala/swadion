import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getQueryRecipes } from "../restApis";

export const fetchsearchRecipes = createAsyncThunk(
    "search/searchRecipes",
    async (query, { rejectWithValue }) => {
        try {
            return await getQueryRecipes(query);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const SearchSlice = createSlice({
    name: "search",

    initialState: {
        items: [],
        status: "idle",
        error: null,
    },

    reducers: {
        clearSearchResults: (state) => {
            state.items = [];
            state.status = "idle";
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchsearchRecipes.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchsearchRecipes.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchsearchRecipes.rejected, (state, action) => {
                state.status = "failed";
                state.error =
                    action.payload || "Something went wrong";
            });
    },
});

export const { clearSearchResults } = SearchSlice.actions;

export default SearchSlice.reducer;