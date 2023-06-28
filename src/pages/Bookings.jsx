import { styled } from "styled-components";
import { Box, Entry } from "../components/basic/Box";
import Menu from "../components/advanced/Menu";
import SlidingMenu from "../components/advanced/SlidingMenu";
import Text from "../components/basic/Text";
import { Table, Row, Cell } from "../components/basic/Table";
import { SwiperNavigation, SwiperComponents } from "../components/advanced/Swiper";
import { useState } from "react";

const Select = styled(Text)`
    border: 2px solid #135846;
    width: auto;
    border-radius: 0.75rem;
    height: 3rem;
    padding: 0.875rem;
    weight: 500;
    &:focus {
        outline: none;
    }
`;

const Page = () => {
    let data = [
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "hello", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "hello", "Deluxe Duplex Bed", "Refund"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "hello", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "", "Deluxe Duplex Bed", "In Progress"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "hello", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "hello", "Deluxe Duplex Bed", "In Progress"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "hello", "Deluxe Duplex Bed", "Refund"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "", "Deluxe Duplex Bed", "Refund"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "hello", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "", "Deluxe Duplex Bed", "Refund"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "hello", "Deluxe Duplex Bed", "Refund"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "", "Deluxe Duplex Bed", "Booked"],
        ["Orlando Bloom", "18/07/2023", "27/07/2023", "29/07/2023", "hello", "Deluxe Duplex Bed", "In Progress"]
    ];

    let Status = (x) => {
        switch (x) {
            case "Booked":
                return (
                    <Box margin="0" padding="1rem" height="3rem" color="#E8FFEE">
                        <Text align="center" color="#5AD07A">{x}</Text>
                    </Box>
                );
            case "Refund":
                return (
                    <Box margin="0" padding="1rem" height="3rem" color="#FFEDEC">
                        <Text align="center" color="#E23428">{x}</Text>
                    </Box>
                );
            case "In Progress":
                return (
                    <Box margin="0" padding="1rem" height="3rem" color="#FFFEEC">
                        <Text align="center" color="#dfe228">{x}</Text>
                    </Box>
                );
        }
    }

    data = data.map((el, i) => {
        return (
            <Row key={i}>
                <Cell>
                    <Text weight="600">{el[0]}</Text>
                </Cell>
                <Cell>
                    <Text>{el[1]}</Text>
                </Cell>
                <Cell>
                    <Text>{el[2]}</Text>
                </Cell>
                <Cell>
                    <Text>{el[3]}</Text>
                </Cell>
                <Cell>
                    {
                        el[4].length === 0 ?
                            <Box margin="0 2rem 0 0" padding="1rem" height="3rem" border="2px solid #799283">
                                <Text align="center" color="#799283">View Notes</Text>
                            </Box>
                            :
                            <Box margin="0 2rem 0 0" padding="1rem" height="3rem" color="#EEF9F2">
                                <Text align="center">View Notes</Text>
                            </Box>
                    }
                </Cell>
                <Cell>
                    <Text>{el[5]}</Text>
                </Cell>
                <Cell>
                    {
                        Status(el[6])
                    }
                </Cell>
            </Row>
        );
    })

    const title = [
        "Guest",
        "Order Date",
        "Check In",
        "Check Out",
        "Special Request",
        "Room Type",
        "Status"
    ];

    let [cur, setCur] = useState(0);

    return (
        <div>
            <Entry margin="0" padding="1rem" color="transparent" justify="space-between">
                <SlidingMenu fields={["All Bookings", "Checking In", "Checking Out", "In Progress"]} handleChange={() => { }} />
                <Select as="select" color="#135846" weight="600">
                    <Text as='option' value="order" color="#135846" weight="400">Order Date</Text>
                    <Text as='option' value="guest" color="#135846" weight="400">Guest</Text>
                    <Text as='option' value="in" color="#135846" weight="400">Check In</Text>
                    <Text as='option' value="out" color="#135846" weight="400">Check Out</Text>
                </Select>
            </Entry>
            <Box margin="0 1rem">
                <Table>
                    <Row>
                        {
                            title.map((el, i) => {
                                return (
                                    <Cell>
                                        <Text key={(i + 1) * - 1} weight="600">{el}</Text>
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

const Bookings = () => {
    return (
        <Menu title="Bookings" Page={Page} />
    );
}

export default Bookings;