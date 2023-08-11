import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Options, Status } from "../store";

export interface User {
    _id?: string,
    name: string,
    email: string,
    joined: string,
    description: string,
    phone: string,
    role: number,
    status: boolean,
    password: string
};

export interface UserState {
    status: Status,
    users: User[],
    count: number
};

const initialState: UserState = {
    status: "idle",
    users: [],
    count: 0
};

export const fetchUsers = createAsyncThunk('getUsers', async (options: Options) => {
    const res = await fetch(
        process.env.REACT_APP_API +
        "/users?page=" + options.page +
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

export const newUser = createAsyncThunk('newUser', async (user: User) => {
    const res = await fetch(
        process.env.REACT_APP_API + "/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token") || ""
            },
            body: JSON.stringify({ user: user })
        });

    return res.json();
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.users = action.payload.user;
                state.count = action.payload.count;
            })
            .addCase(fetchUsers.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = "rejected";
                state.users = [];
                state.count = 0;
            })
    }
});

export const { changeStatus } = usersSlice.actions;
export default usersSlice.reducer;