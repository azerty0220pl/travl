import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./rooms/roomsSlice";
import bookingsSlice from "./bookingsSlice";
import usersSlice from "./users/usersSlice";
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