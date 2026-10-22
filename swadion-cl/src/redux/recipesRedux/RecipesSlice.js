import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "../restApis";


export const fetchRecipes = createAsyncThunk(
    "recipes/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            return getRecipes();
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const RecipesSlice = createSlice({
    name: "recipes",
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
})

export default RecipesSlice.reducer;