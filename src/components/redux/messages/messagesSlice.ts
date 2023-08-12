import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Options, Status } from "../store";

export interface Message {
    _id?: string,
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string,
    archived: boolean,
    read: boolean,
    date: string
};

export interface MsgState {
    messages: Message[],
    status: Status,
    count: number
};

const initialState: MsgState = {
    messages: [],
    status: "idle",
    count: 0
};

export const fetchMessages = createAsyncThunk('getMessages', async (options: Options) => {
    const res = await fetch(
        process.env.REACT_APP_API +
        "/messages?page=" + options.page +
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

export const updateMessage = createAsyncThunk('updateMessage', async (message: Message) => {
    const res = await fetch(
        process.env.REACT_APP_API + "/messages",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token") || ""
            },
            body: JSON.stringify({ message: message })
        });

    return res.json();
});

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.messages = action.payload.messages;
            })
            .addCase(fetchMessages.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchMessages.rejected, (state, action) => {
                state.status = "rejected";
                state.messages = [];
                state.count = 0;
            });
    }
});

export const { changeStatus } = messagesSlice.actions;
export default messagesSlice.reducer;