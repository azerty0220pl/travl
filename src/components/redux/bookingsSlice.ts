import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data/bookings.json";
import { Status } from "./store";

export interface Book {
    id: number,
    name: string,
    order: string,
    in: string,
    out: string,
    request: string,
    room:  "Single Bed" | "Double Bed" | "Superior Double" | "Suite",
    status: "Booked" | "Refund" | "In Progress"
};

export interface BookingsState {
    bookings: Partial<Book>[],
    status: Status
}

const initialState: BookingsState = {
    bookings: [],
    status: "none"
};

export const fetchBookings = createAsyncThunk('getBookings', () => {
    return new Promise<Partial<Book>[]>((resolve) => {
        setTimeout(() => {
            resolve(data as Partial<Book>[]);
        }, 200);
    });
});

const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = "success";
                state.bookings = action.payload;
            });
    }
});

export default bookingsSlice.reducer;

