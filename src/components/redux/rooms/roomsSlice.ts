import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Options, Status } from "../store";

export type RoomType = "Single Bed" | "Double Bed" | "Superior Double" | "Suite";

export interface Room  {
    _id?: string,
    name: string,
    type: RoomType,
    ammenities: string,
    price: number,
    offer: number,
    cancel: string,
    description: string,
    status: boolean
};

export interface RoomState {
    rooms: Room[],
    status: Status,
    count: number
};

const initialState: RoomState = {
    rooms: [],
    status: "idle",
    count: 0
};

export const fetchRooms = createAsyncThunk('getRooms', async (options: Options) => {
    const res = await fetch(
        process.env.REACT_APP_API +
        "/rooms?page=" + options.page +
        "&limit=" + options.limit +
        "&filter=" + options.filter +
        "&order=" + options.order,
        {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("token") || ""
            }
        });

    return res.json();
});

export const newRoom = createAsyncThunk('newRoom', async (room: Room) => {
    const res = await fetch(
        process.env.REACT_APP_API + "/rooms",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token") || ""
            },
            body: JSON.stringify({ room: room })
        });

    return res.json();
});

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload;
        }
    },
    extraReducers: builder => {
        builder
        .addCase(fetchRooms.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.rooms = action.payload.rooms;
            state.count = action.payload.count;
        })
        .addCase(fetchRooms.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchRooms.rejected, (state) => {
            state.status = "rejected";
            state.rooms = [];
            state.count = 0;
        })
    }
});

export const { changeStatus } = roomsSlice.actions;
export default roomsSlice.reducer;

