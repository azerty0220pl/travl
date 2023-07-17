import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data/rooms.json";
import { Status } from "../store";

export interface Room  {
    id: number,
    name: string,
    type: "Single Bed" | "Double Bed" | "Superior Double" | "Suite",
    ammenities: string,
    price: number,
    offer: number,
    status: "Booked" | "Available"
};

interface RoomState {
    rooms: Partial<Room>[],
    status: Status
};

const initialState: RoomState = {
    rooms: [],
    status: "none"
};

export const fetchRooms = createAsyncThunk('getRooms', () => {
    return new Promise<Partial<Room>[]>((resolve) => {
        setTimeout(() => {
            resolve(data as Partial<Room>[]);
        }, 200);
    });
});

export const newRoom = createAsyncThunk('newRoom', (room: Partial<Room>) => {
    return new Promise<Partial<Room>>((resolve) => {
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
    extraReducers: builder => {
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

