import React, { ChangeEvent } from "react";
import { Box, Entry } from "../components/basic/Box";
import SlidingMenu from "../components/advanced/SlidingMenu";
import Text from "../components/basic/Text";
import { Table, Row, Cell } from "../components/basic/Table";
import { SwiperNavigation, SwiperComponents } from "../components/advanced/Swiper";
import { useState } from "react";
import Select from "../components/basic/Select";
import { useRelocation } from "../components/basic/hooks";
import { useTable } from "../components/redux/useTable";
import { useLoad } from "../components/redux/useLoad";

const Bookings = (): React.JSX.Element => {
    useRelocation("Bookings");
    useLoad('bookings');

    const [filter, setFilter] = useState("none");
    const [order, setOrder] = useState("order");
    const [cur, setCur] = useState(0);

    const data = useTable("bookings", filter, order);

    const title = [
        "Guest",
        "Order Date",
        "Check In",
        "Check Out",
        "Special Request",
        "Room Type",
        "Status"
    ];

    return (
        <div data-cy="page-bookings">
            <Entry $margin="0" $padding="1rem" $color="transparent" $justify="space-between">
                <SlidingMenu fields={["All Bookings", "In Progress"]} handleChange={(x: string): void => {  setCur(0); setFilter(x);  }} />
                <Select as="select" $color="#135846" $weight="600" value={order} onChange={(e: ChangeEvent<HTMLSelectElement>) => { setOrder(e.target.value) }}>
                    <Text as='option' value="order" $color="#135846" $weight="400">Order Date</Text>
                    <Text as='option' value="name" $color="#135846" $weight="400">Guest</Text>
                    <Text as='option' value="in" $color="#135846" $weight="400">Check In</Text>
                    <Text as='option' value="out" $color="#135846" $weight="400">Check Out</Text>
                </Select>
            </Entry>
            <Box $margin="0 1rem">
                <Table>
                    <Row>
                        {
                            title.map((el, i) => {
                                return (
                                    <Cell key={"tc" + ((i + 1) * - 1)}>
                                        <Text key={"tc" + ((i + 1) * - 1) + "t1"} $weight="600">{el}</Text>
                                    </Cell>
                                );
                            })
                        }
                    </Row>
                    <SwiperComponents data={data} cur={cur} count={10} />
                </Table>
            </Box>
            <Box $margin="1rem" $color="transparent" $padding="0">
                <SwiperNavigation cur={cur} setCur={setCur} count={10} data={data} />
            </Box>
        </div>
    );
};

export default Bookings;