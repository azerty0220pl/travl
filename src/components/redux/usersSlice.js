import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data/users.json";

const initialState = {
    users: [],
    status: "none"
};

export const fetchUsers = createAsyncThunk('getUsers', () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 200);
    });
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "success";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "error";
            });
    }
});

export default usersSlice.reducer;

