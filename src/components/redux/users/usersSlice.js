import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data/users.json";

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

export const newUser = createAsyncThunk('newUser', (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user);
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
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "success";
                state.users = action.payload;
            })
            .addCase(newUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            });
    }
});

export default usersSlice.reducer;

