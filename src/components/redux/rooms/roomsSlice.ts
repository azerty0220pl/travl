import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data/rooms.json";
import { Status } from "../store";

export type RoomType = "Single Bed" | "Double Bed" | "Superior Double" | "Suite";

export interface Room  {
    id: number,
    name: string,
    type: RoomType,
    ammenities: string,
    price: number,
    offer: number,
    cancel: string,
    description: string,
    status: "Booked" | "Available"
};

export interface RoomState {
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

