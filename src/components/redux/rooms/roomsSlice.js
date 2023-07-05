import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data/rooms.json";

const initialState = {
    rooms: [],
    status: "none"
};

export const fetchRooms = createAsyncThunk('getRooms', () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 200);
    });
});

export const newRoom = createAsyncThunk('newRoom', (room) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(room);
        }, 200);
    });
});

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = "success";
                state.rooms = action.payload;
            })
            .addCase(newRoom.fulfilled, (state, action) => {
                state.rooms.push(action.payload);
            });
    }
});

export default roomsSlice.reducer;

