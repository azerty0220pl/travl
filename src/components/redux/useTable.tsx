import React from "react";
import RoomsTableRow from "../advanced/RoomsTableRow";
import BookingTableRow from "../advanced/BookingTableRow";
import UserTableRow from "../advanced/UserTableRow";
import MessageTableRow from "../advanced/MessageTableRow";
import { RootState, useAppSelector } from "./store";
import { Book } from "./bookingsSlice";
import { User } from "./users/usersSlice";
import { Room } from "./rooms/roomsSlice";
import { Message } from "./messages/messagesSlice";
import MessageElement from "../advanced/Message";

interface Orders { [index: string]: (a: any, b: any) => number };
const orders: Orders = {
    order: (a: Book, b: Book) => {
        //return Date.parse(a.order) < Date.parse(b.order) ? -1 : 1;
        return 1;
    },
    name: (a: Room | Book | User | Message, b: Room | Book | User | Message) => {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    },
    in: (a: Book, b: Book) => {
        //return Date.parse(a.in) < Date.parse(b.in) ? -1 : 1;
        return 1;
    },
    out: (a: Book, b: Book) => {
        //return Date.parse(a.out) < Date.parse(b.out) ? -1 : 1;
        return 1;
    },
    number: (a: Room | Book | User | Message, b: Room | Book | User | Message) => {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
    },
    ascending: (a: Room, b: Room) => {
        if (a.price === b.price)
            return 0;
        return a.price < b.price ? -1 : 1;
    },
    descending: (a: Room, b: Room) => {
        if (a.price === b.price)
            return 0;
        return a.price < b.price ? 1 : -1;
    },
    status: (a: Room, b: Room) => {
        if (a.status === b.status)
            return 0;
        return a.status === "Available" ? -1 : 1;
    },
    joined: (a: User, b: User) => {
        return Date.parse(a.joined) < Date.parse(b.joined) ? -1 : 1;
    },
    date: (a: Message, b: Message) => {
        return Date.parse(a.date) < Date.parse(b.date) ? -1 : 1;
    },
};

interface Filters { [index: string]: (x: any) => boolean };
const filters: Filters = {
    none: () => true,
    progress: (x: Book) => {
        //return x.status === "In Progress";
        return true;
    },
    available: (x: Room) => {
        return x.status === "Available";
    },
    booked: (x: Room) => {
        return x.status === "Booked";
    },
    active: (x: User) => {
        return x.status === true //"Active";
    },
    inactive: (x: User) => {
        return x.status === false //"Inactive";
    },
    published: (x: Message) => {
        return !x.archived;
    },
    archived: (x: Message) => {
        return x.archived;
    },
    read: (x: Message) => {
        return !x.read && !x.archived;
    }
}

interface Selector {
    [index: string]: {
        data: (state: RootState) => any,
        count: (state: RootState) => any
    }
};

const selectors: Selector = {
    users: {
        data: (state: RootState) => state.users.users,
        count: (state: RootState) => state.users.count
    }
}

interface Elems { [index: string]: Function };
const elems: Elems = {
    rooms: RoomsTableRow,
    bookings: BookingTableRow,
    users: UserTableRow,
    messages: MessageElement,
    messagesAlt: MessageTableRow
}

export const useTable = (sel: string): { data: React.JSX.Element[], count: number } => {
    const aux = useAppSelector(selectors[sel].data) as Object | Array<any>;
    const count = useAppSelector(selectors[sel].count);
    let data = Object.values(aux);

    const Elem = elems[sel] as ({ x, i }: { x: any, i: number }) => React.JSX.Element;
    return {
        data: data.map((el, i) => {
            return <Elem key={sel + el._id} x={el} i={i} />;
        }),
        count: count
    }
}