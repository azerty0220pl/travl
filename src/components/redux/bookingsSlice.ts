import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Options, Status } from "./store";
import { toast } from "react-toastify";

export interface Book {
    _id?: string,
    name: string,
    order: Date,
    in: Date,
    out: Date,
    request: string,
    status: number,
    room: string
};

export interface BookingsState {
    status: Status,
    bookings: Book[],
    count: number
}

const initialState: BookingsState = {
    status: "idle",
    bookings: [],
    count: 0
};

export const fetchBookings = createAsyncThunk('getBookings', async (options: Options) => {
    const res = await fetch(
        process.env.REACT_APP_API +
        "/bookings?page=" + options.page +
        "&limit=" + options.limit +
        "&filter=" + options.filter +
        "&order=" + options.order,
        {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token") || ""
            }
        });

    if (!res.ok)
        throw new Error(await res.json());
    else
        return res.json();
});

const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        changeBookingsStatus: (state, action) => {
            state.status = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.bookings = action.payload.booking;
                state.count = action.payload.count;
            })
            .addCase(fetchBookings.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchBookings.rejected, (state) => {
                state.status = "rejected";
                state.bookings = [];
                state.count = 0;
                toast.error("Couldn't load bookings list...");
            });
    }
});

export const { changeBookingsStatus } = bookingsSlice.actions;
export default bookingsSlice.reducer;

