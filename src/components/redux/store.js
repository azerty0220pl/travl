import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./roomsSlice";
import bookingsSlice from "./bookingsSlice";

const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        bookings: bookingsSlice
    }
});

export default store;