import { useSelector } from "react-redux";
import RoomsTableRow from "../advanced/RoomsTableRow";

const orderFunct = {
    "number": (a, b) => {
        return a.name < b.name ? -1 : 1;
    },
    "ascending": (a, b) => {
        if (a.price === b.price)
            return 0;
        return a.price < b.price ? -1 : 1;
    },
    "descending": (a, b) => {
        if (a.price === b.price)
            return 0;
        return a.price < b.price ? 1 : -1;
    },
    "status": (a, b) => {
        if (a.status === b.status)
            return 0;
        return a.status === "Available" ? -1 : 1;
    }
};

const filters = {
    "none": () => true,
    "available": (x) => {
        return x.status === "Available";
    },
    "booked": (x) => {
        return x.status === "Booked";
    }
}

export const useTable = (sel, filter, order) => {
    let data = useSelector(state => state.rooms.rooms);

    data = data.filter(el =>
        filters[filter](el)
    );

    data.sort(orderFunct[order]);

    return data.map((el, i) => {
        return <RoomsTableRow x={el} i={i} />
    });
}