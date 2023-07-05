import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./roomsSlice";
import bookingsSlice from "./bookingsSlice";
import usersSlice from "./usersSlice";
import messagesSlice from "./messages/messagesSlice";

const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        bookings: bookingsSlice,
        users: usersSlice,
        messages: messagesSlice
    }
});

export default store;