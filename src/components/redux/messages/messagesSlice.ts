import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data/messages.json";
import { Status } from "../store";

export interface Message {
    id: number,
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string,
    archived: boolean,
    read: boolean,
    date: string
};

interface MsgState {
    messages: Object,
    status: Status
};

const initialState: MsgState = {
    messages: {},
    status: "none"
};

export const fetchMessages = createAsyncThunk('getMessages', () => {
    return new Promise<Object>((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 200);
    });
});

export const changeRead = createAsyncThunk('setRead', (id: number) => {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(id);
        }, 200);
    });
});

export const changeArchive = createAsyncThunk('setArchive', (id: number) => {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(id);
        }, 200);
    });
});

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.status = "success";
                state.messages = action.payload;
            })
            .addCase(changeRead.fulfilled, (state, action) => {
                state.messages[action.payload].read = true;
            })
            .addCase(changeArchive.fulfilled, (state, action) => {
                state.messages[action.payload].archived = !state.messages[action.payload].archived;
            });
    }
});

export default messagesSlice.reducer;