import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data/rooms.json";

const initialState = {
    rooms: [],
    status: "none"
};

export const fetchRooms = createAsyncThunk('getRooms', async () => {
    return data;
});

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchRooms.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = "success";
                state.rooms = action.payload;
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.status = "error";
            });
    }
});

export default roomsSlice.reducer;

