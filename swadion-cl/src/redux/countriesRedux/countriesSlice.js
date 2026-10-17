import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCountries } from "../restApis";



export const fetchCountries = createAsyncThunk(
    "countries/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            return await getCountries();
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
    }
})

export default countriesSlice.reducer;