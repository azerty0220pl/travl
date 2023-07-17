import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./rooms/roomsSlice";
import bookingsSlice from "./bookingsSlice";
import usersSlice from "./users/usersSlice";
import messagesSlice from "./messages/messagesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        bookings: bookingsSlice,
        users: usersSlice,
        messages: messagesSlice
    }
});

export type Status = "none" | "error" | "success";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;