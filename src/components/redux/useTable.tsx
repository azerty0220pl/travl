import React from "react";
import RoomsTableRow from "../advanced/RoomsTableRow";
import BookingTableRow from "../advanced/BookingTableRow";
import UserTableRow from "../advanced/UserTableRow";
import MessageTableRow from "../advanced/MessageTableRow";
import { RootState, useAppSelector } from "./store";
import MessageElement from "../advanced/Message";

interface Selector {
    [index: string]: {
        data: (state: RootState) => any,
        count: (state: RootState) => any
    }
};

const selectors: Selector = {
    messages: {
        data: (state: RootState) => state.messages.messages,
        count: (state: RootState) => state.messages.count
    },
    messagesAlt: {
        data: (state: RootState) => state.messages.messagesAlt,
        count: (state: RootState) => state.messages.count
    },
    rooms: {
        data: (state: RootState) => state.rooms.rooms,
        count: (state: RootState) => state.rooms.count
    },
    users: {
        data: (state: RootState) => state.users.users,
        count: (state: RootState) => state.users.count
    },
    bookings: {
        data: (state: RootState) => state.bookings.bookings,
        count: (state: RootState) => state.bookings.count
    }
}

interface Elems { [index: string]: Function };
const elems: Elems = {
    rooms: RoomsTableRow,
    bookings: BookingTableRow,
    users: UserTableRow,
    messages: MessageTableRow,
    messagesAlt: MessageElement
}

export const useTable = (sel: string): { data: React.JSX.Element[], count: number } => {
    const data = useAppSelector(selectors[sel].data) as Array<any> || [];
    const count = useAppSelector(selectors[sel].count);

    const Elem = elems[sel] as ({ x, i }: { x: any, i: number }) => React.JSX.Element;
    return {
        data: data.map((el, i) => {
            return <Elem key={sel + el._id} x={el} i={i} />;
        }),
        count: count
    }
}