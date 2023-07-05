import { useSelector } from "react-redux";
import RoomsTableRow from "../advanced/RoomsTableRow";
import BookingTableRow from "../advanced/BookingTableRow";
import UserTableRow from "../advanced/UserTableRow";
import Message from "../advanced/Message";
import MessageTableRow from "../advanced/MessageTableRow";

const orders = {
    order:  (a, b) => {
        return Date.parse(a.order) < Date.parse(b.order) ? -1 : 1;
    },
    name: (a, b) => {
        return a.name < b.name ? -1 : 1;
    },
    in:  (a, b) => {
        return Date.parse(a.in) < Date.parse(b.in) ? -1 : 1;
    },
    out:  (a, b) => {
        return Date.parse(a.out) < Date.parse(b.out) ? -1 : 1;
    },
    number: (a, b) => {
        return a.name < b.name ? -1 : 1;
    },
    ascending: (a, b) => {
        if (a.price === b.price)
            return 0;
        return a.price < b.price ? -1 : 1;
    },
    descending: (a, b) => {
        if (a.price === b.price)
            return 0;
        return a.price < b.price ? 1 : -1;
    },
    status: (a, b) => {
        if (a.status === b.status)
            return 0;
        return a.status === "Available" ? -1 : 1;
    },
    joined: (a, b) => {
        return Date.parse(a.joined) < Date.parse(b.joined) ? -1 : 1;
    },
    date: (a, b) => {
        return Date.parse(a.date) < Date.parse(b.date) ? -1 : 1;
    },
};

const filters = {
    none: () => true,
    progress: (x) => {
        return x.status === "In Progress";
    },
    available: (x) => {
        return x.status === "Available";
    },
    booked: (x) => {
        return x.status === "Booked";
    },
    active: (x) => {
        return x.status === "Active";
    },
    inactive: (x) => {
        return x.status === "Inactive";
    },
    published: (x) => {
        return !x.archived;
    },
    archived: (x) => {
        return x.archived;
    }
}

const selectors = {
    rooms: state => state.rooms.rooms,
    bookings: state => state.bookings.bookings,
    users: state => state.users.users,
    messages: state => state.messages.messages,
    messagesAlt: state => state.messages.messages
}

const elems = {
    rooms: RoomsTableRow,
    bookings: BookingTableRow,
    users: UserTableRow,
    messages: Message,
    messagesAlt: MessageTableRow
}

export const useTable = (sel, filter, order) => {
    let data = useSelector(selectors[sel]);

    data = data.filter(el =>
        filters[filter](el)
    );

    data.sort(orders[order]);

    const X = elems[sel];
    return data.map((el, i) => {
        return <X key={sel + el.id} x={el} i={i} />
    });
}