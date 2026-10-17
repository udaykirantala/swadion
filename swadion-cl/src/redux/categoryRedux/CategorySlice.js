import { getCategories } from "../restApis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



export const fetchCategories = createAsyncThunk(
    "categories/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            return await getCategories();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const categorySlice = createSlice({
    name: "categories",
    initialState: {
        items: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
})


export default categorySlice.reducer;