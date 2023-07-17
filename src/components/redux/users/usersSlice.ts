import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../../data/users.json";
import { Status } from "../store";

export interface User {
    name: string,
    id: number,
    email: string,
    joined: string,
    description: string,
    phone: string,
    status: "Inactive" | "Active",
    password: string
};

export interface UserState {
    users: Partial<User>[],
    status: Status
};

const initialState : UserState = {
    users: [],
    status: "none"
};

export const fetchUsers = createAsyncThunk('getUsers', () => {
    return new Promise<Partial<User>[]>((resolve) => {
        setTimeout(() => {
            resolve(data as Partial<User>[]);
        }, 200);
    });
});

export const newUser = createAsyncThunk('newUser', (user: Partial<User>) => {
    return new Promise<Partial<User>>((resolve) => {
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
    extraReducers: builder => {
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

