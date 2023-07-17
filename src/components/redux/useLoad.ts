import { useEffect } from "react";
import { fetchRooms } from "./rooms/roomsSlice";
import { fetchMessages } from "./messages/messagesSlice";
import { fetchUsers } from "./users/usersSlice";
import { fetchBookings } from "./bookingsSlice";
import { RootState, useAppDispatch, useAppSelector } from "./store";
import { AsyncThunk } from "@reduxjs/toolkit";

interface Slices {[index: string]: {sel: (state: RootState) => any, fetch: AsyncThunk<any, void, any>}};
const slices: Slices = {
    rooms: { sel: (state: RootState) => state.rooms.status, fetch: fetchRooms },
    bookings: { sel: (state: RootState) => state.bookings.status, fetch: fetchBookings },
    users: { sel: (state: RootState) => state.users.status, fetch: fetchUsers },
    messages: { sel: (state: RootState) => state.messages.status, fetch: fetchMessages }
}

export const useLoad = (s: string): void => {
    const dispatch = useAppDispatch();
    const slice = slices[s];
    const status = useAppSelector(slice.sel);

    useEffect(() => {
        if (status === 'none')
            dispatch(slice.fetch());
    }, [status, slice, dispatch]);
}