import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data/bookings.json";

const initialState = {
    bookings: [],
    status: "none"
};

export const fetchBookings = createAsyncThunk('getBookings', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 200);
    });
});

const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchBookings.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = "success";
                state.bookings = action.payload;
            })
            .addCase(fetchBookings.rejected, (state, action) => {
                state.status = "error";
            });
    }
});

export default bookingsSlice.reducer;

