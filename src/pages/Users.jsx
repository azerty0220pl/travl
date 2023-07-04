import { Box, Entry } from "../components/basic/Box";
import SlidingMenu from "../components/advanced/SlidingMenu";
import Text from "../components/basic/Text";
import { Table, Row, Cell } from "../components/basic/Table";
import { SwiperNavigation, SwiperComponents } from "../components/advanced/Swiper";
import { useState } from "react";
import Select from "../components/basic/Select";
import UserTableRow from "../components/advanced/UserTableRow";
import { useRelocation } from "../components/basic/hooks";
import { useTable } from "../components/redux/reduxHooks";

const Users = () => {
    useRelocation("Users");

    const [filter, setFilter] = useState("none");
    const [order, setOrder] = useState("number");
    const [cur, setCur] = useState(0);

    const data = useTable(state => state.users.users, filter, order, UserTableRow);

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


    return (
        <div>
            <Entry margin="0" padding="1rem" color="transparent" justify="space-between">
                <SlidingMenu fields={["All Users", "Active Users", "Inactive Users"]} handleChange={(x) => { setCur(0); setFilter(x); }} />
                <Select as="select" color="#135846" weight="600" value={order} onChange={(e) => { setOrder(e.target.value) }}>
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

export default Users;