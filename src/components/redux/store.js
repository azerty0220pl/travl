import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./roomsSlice";
import bookingsSlice from "./bookingsSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        bookings: bookingsSlice,
        users: usersSlice
    }
});

export default store;