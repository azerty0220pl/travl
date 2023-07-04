import { Box, Entry } from "../components/basic/Box";
import SlidingMenu from "../components/advanced/SlidingMenu";
import Text from "../components/basic/Text";
import { Table, Row, Cell } from "../components/basic/Table";
import { SwiperNavigation, SwiperComponents } from "../components/advanced/Swiper";
import { useState } from "react";
import Select from "../components/basic/Select";
import RoomsTableRow from "../components/advanced/RoomsTableRow";
import { useSelector } from "react-redux";
import { useRelocation } from "../components/basic/hooks";

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

const Rooms = () => {
    useRelocation("Rooms");

    let data = useSelector(state => state.rooms.rooms);

    const [filter, setFilter] = useState("none");
    const [order, setOrder] = useState("number");
    const [cur, setCur] = useState(0);

    data = data.filter(el =>
        filter === "none" || (filter === "available" && el.status === "Available") || (filter === "booked" && el.status === "Booked")
    );

    data.sort(orderFunct[order]);

    data = data.map((el, i) => {
        return <RoomsTableRow x={el} i={i} />
    });

    const title = [
        "Photo",
        "Name",
        "ID",
        "Type",
        "Ammenities",
        "Price",
        "Offer",
        "Status"
    ];

    return (
        <div>
            <Entry margin="0" padding="1rem" color="transparent" justify="space-between">
                <SlidingMenu fields={["All Rooms", "Available", "Booked"]} handleChange={(x) => { setCur(0); setFilter(x); }} />
                <Select as="select" color="#135846" weight="600" value={order} onChange={(e) => { setOrder(e.target.value) }}>
                    <Text as='option' value="number" color="#135846" weight="400">Number</Text>
                    <Text as='option' value="status" color="#135846" weight="400">Status</Text>
                    <Text as='option' value="ascending" color="#135846" weight="400">Price Ascending</Text>
                    <Text as='option' value="descending" color="#135846" weight="400">Price Descending</Text>
                </Select>
            </Entry>
            <Box margin="0 1rem">
                <Table>
                    <Row>
                        {
                            title.map((el, i) => {
                                return (
                                    <Cell key={(i + 1) * - 1}>
                                        <Text weight="600">{el}</Text>
                                    </Cell>
                                );
                            })
                        }
                    </Row>
                    <SwiperComponents data={data} cur={cur} count={10} />
                </Table>
            </Box>
            <Box margin="1rem" color="transparent" padding="0">
                <SwiperNavigation cur={cur} setCur={setCur} count={10} data={data} />
            </Box>
        </div>
    );
};

export default Rooms;