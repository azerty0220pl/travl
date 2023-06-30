import { Box, Entry, Icon } from "../components/basic/Box";
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
        [empty, "name01", "id01", "mail01", "date01", "Description", "123456789", "Active"],
        [empty, "name02", "id02", "mail02", "date02", "Description", "123456789", "Active"],
        [empty, "name03", "id03", "mail03", "date03", "Description", "123456789", "Inactive"],
        [empty, "name04", "id04", "mail04", "date04", "Description", "123456789", "Active"],
        [empty, "name05", "id05", "mail05", "date05", "Description", "123456789", "Active"],
        [empty, "name06", "id06", "mail06", "date06", "Description", "123456789", "Active"],
        [empty, "name07", "id07", "mail07", "date07", "Description", "123456789", "Inactive"],
        [empty, "name08", "id08", "mail08", "date08", "Description", "123456789", "Active"],
        [empty, "name09", "id09", "mail09", "date09", "Description", "123456789", "Active"],
        [empty, "name10", "id10", "mail10", "date10", "Description", "123456789", "Active"],
        [empty, "name11", "id11", "mail11", "date11", "Description", "123456789", "Inactive"],
        [empty, "name12", "id12", "mail12", "date12", "Description", "123456789", "Inactive"],
        [empty, "name13", "id13", "mail13", "date13", "Description", "123456789", "Active"],
        [empty, "name14", "id14", "mail14", "date14", "Description", "123456789", "Inactive"],
        [empty, "name15", "id15", "mail15", "date15", "Description", "123456789", "Active"],
        [empty, "name16", "id16", "mail16", "date16", "Description", "123456789", "Active"],
        [empty, "name17", "id17", "mail17", "date17", "Description", "123456789", "Active"],
        [empty, "name18", "id18", "mail18", "date18", "Description", "123456789", "Active"],
        [empty, "name19", "id19", "mail19", "date19", "Description", "123456789", "Inactive"]
    ];

    let Status = (x) => {
        switch (x) {
            case "Active":
                return (
                    <Box margin="0" padding="1rem" height="3rem" color="#5AD07A">
                        <Text align="center" color="#FFFFFF">{x}</Text>
                    </Box>
                );
            case "Inactive":
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
                        <Icon as="img" padding="0" margin="0" dim="3rem" src={empty} />
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
                    <Text>{el[4]}</Text>
                </Cell>
                <Cell>
                    <Text>{el[5]}</Text>
                </Cell>
                <Cell>
                    <Text>{el[6]}</Text>
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
        "Full Name",
        "ID",
        "e-mail",
        "Start Date",
        "Description",
        "Contact",
        "Status"
    ];

    let [cur, setCur] = useState(0);

    return (
        <div>
            <Entry margin="0" padding="1rem" color="transparent" justify="space-between">
                <SlidingMenu fields={["All Users", "Active Users", "Inactive Users"]} handleChange={() => { }} />
                <Select as="select" color="#135846" weight="600">
                    <Text as='option' value="name" color="#135846" weight="400">Name</Text>
                    <Text as='option' value="date" color="#135846" weight="400">Start Date</Text>
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

const Users = () => {
    return (
        <Menu title="Users" Page={Page} />
    );
}

export default Users;