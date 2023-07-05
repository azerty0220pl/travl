import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data/messages.json";

const initialState = {
    messages: [],
    status: "none"
};

export const fetchMessages = createAsyncThunk('getMessages', async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
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
            .addCase(fetchMessages.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.status = "success";
                state.messages = action.payload;
            })
            .addCase(fetchMessages.rejected, (state, action) => {
                state.status = "error";
            });
    }
});

export default messagesSlice.reducer;

