import { useEffect } from "react";
import { fetchRooms } from "./rooms/roomsSlice";
import { fetchMessages } from "./messages/messagesSlice";
import { fetchUsers } from "./users/usersSlice";
import { fetchBookings } from "./bookingsSlice";
import { useDispatch, useSelector } from "react-redux";

const slices = {
    rooms: { sel: state => state.rooms.status, fetch: fetchRooms },
    bookings: { sel: state => state.bookings.status, fetch: fetchBookings },
    users: { sel: state => state.users.status, fetch: fetchUsers },
    messages: { sel: state => state.messages.status, fetch: fetchMessages }
}

export const useLoad = (s) => {
    const dispatch = useDispatch();
    const slice = slices[s];
    const status = useSelector(slice.sel);

    useEffect(() => {
        if (status === 'none')
            dispatch(slice.fetch());
    }, [status, slice, dispatch]);
}