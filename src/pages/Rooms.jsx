import { Box, Entry } from "../components/basic/Box";
import Menu from "../components/advanced/Menu";
import SlidingMenu from "../components/advanced/SlidingMenu";
import Text from "../components/basic/Text";
import { Table, Row, Cell } from "../components/basic/Table";
import { SwiperNavigation, SwiperComponents } from "../components/advanced/Swiper";
import { useState } from "react";
import empty from '../assets/empty.png';
import Select from "../components/basic/Select";

const Page = () => {
    let data = [
        [empty, "numero01", "id01", "type01", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero02", "id02", "type02", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Available"],
        [empty, "numero03", "id03", "type03", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero04", "id04", "type04", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero05", "id05", "type05", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero06", "id06", "type06", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Available"],
        [empty, "numero07", "id07", "type07", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Available"],
        [empty, "numero08", "id08", "type08", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Available"],
        [empty, "numero09", "id09", "type09", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero10", "id10", "type10", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Available"],
        [empty, "numero11", "id11", "type11", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero12", "id12", "type12", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero13", "id13", "type13", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero14", "id14", "type14", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Available"],
        [empty, "numero15", "id15", "type15", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero16", "id16", "type16", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Available"],
        [empty, "numero17", "id17", "type17", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Available"],
        [empty, "numero18", "id18", "type18", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"],
        [empty, "numero19", "id19", "type19", "AC, Shower, Double Bed, Towel, Bathtup, Coffee Set, LED TV, WiFi", "145", "145", "Booked"]
    ];

    let Status = (x) => {
        switch (x) {
            case "Available":
                return (
                    <Box margin="0" padding="1rem" height="3rem" color="#5AD07A">
                        <Text align="center" color="#FFFFFF">{x}</Text>
                    </Box>
                );
            case "Booked":
                return (
                    <Box margin="0" padding="1rem" height="3rem" color="#E23428">
                        <Text align="center" color="#FFFFFF">{x}</Text>
                    </Box>
                );
        }
    }

    data = data.map((el, i) => {
        return (
            <Row key={i}>
                <Cell>
                    <Entry padding="0" margin="0 0 0 -0.25rem" radius="0" gap="0" width="10erm">
                        <Text space="pre" width="auto"> </Text>
                        <Box as="img" padding="0" margin="0" width="5rem" height="3rem" src={empty} />
                    </Entry>
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
                    <Box margin="0" padding="0" radius="0">
                        <Text line="1.25rem">{el[4]}</Text>
                    </Box>
                </Cell>
                <Cell>
                    <Entry gap="0" padding="0 1rem 0 0" radius="0">
                        <Text width="fit-content">{el[5]}</Text>
                        <Text size="0.75rem" color="#799283">/Night</Text>
                    </Entry>
                </Cell>
                <Cell>
                    <Entry gap="0" padding="0 1rem 0 0" radius="0">
                        <Text width="fit-content">{el[6]}</Text>
                        <Text size="0.75rem" color="#799283">/Night</Text>
                    </Entry>
                </Cell>
                <Cell>
                    {
                        Status(el[7])
                    }
                </Cell>
            </Row>
        );
    })

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

    let [cur, setCur] = useState(0);

    return (
        <div>
            <Entry margin="0" padding="1rem" color="transparent" justify="space-between">
                <SlidingMenu fields={["All Rooms", "Available", "Booked"]} handleChange={() => { }} />
                <Select as="select" color="#135846" weight="600">
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

const Rooms = () => {
    return (
        <Menu title="Rooms" Page={Page} />
    );
}

export default Rooms;