import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data/messages.json";

const initialState = {
    messages: {},
    status: "none"
};

export const fetchMessages = createAsyncThunk('getMessages', () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 200);
    });
});

export const changeRead = createAsyncThunk('setRead', (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(id);
        }, 200);
    });
});

export const changeArchive = createAsyncThunk('setArchive', (id) => {
    return new Promise((resolve) => {
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
    extraReducers(builder) {
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
            })
    }
});

export default messagesSlice.reducer;