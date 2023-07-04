import { useSelector } from "react-redux";

const orderFunct = {
    "order":  (a, b) => {
        return Date.parse(a.order) < Date.parse(b.order) ? -1 : 1;
    },
    "guest": (a, b) => {
        return a.name < b.name ? -1 : 1;
    },
    "in":  (a, b) => {
        return Date.parse(a.in) < Date.parse(b.in) ? -1 : 1;
    },
    "out":  (a, b) => {
        return Date.parse(a.out) < Date.parse(b.out) ? -1 : 1;
    },
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
    "progress": (x) => {
        return x.status === "In Progress";
    },
    "available": (x) => {
        return x.status === "Available";
    },
    "booked": (x) => {
        return x.status === "Booked";
    }
}

export const useTable = (sel, filter, order, Elem) => {
    let data = useSelector(sel);

    data = data.filter(el =>
        filters[filter](el)
    );

    data.sort(orderFunct[order]);

    return data.map((el, i) => {
        return <Elem x={el} i={i} />
    });
}