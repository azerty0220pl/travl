import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Options, Status } from "../store";
import { toast } from "react-toastify";

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

    if (!res.ok)
        throw new Error(await res.json());
    else
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

    if (!res.ok)
        throw new Error(await res.json());
    else
        return res.json();
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        changeUserStatus: (state, action) => {
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
                toast.error("Couldn't load users list...");
            })
            .addCase(newUser.fulfilled, (_state, _action) => {
                toast.success("User added.");
            })
            .addCase(newUser.rejected, (_state, _action) => {
                toast.error("Couldn't add user...");
            })
    }
});

export const { changeUserStatus } = usersSlice.actions;
export default usersSlice.reducer;