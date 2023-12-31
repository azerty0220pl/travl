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
import { useNavigate } from "react-router-dom";
import { useLoad } from "../components/redux/useLoad";
import { useAppDispatch } from "../components/redux/store";
import { changeUserStatus } from "../components/redux/users/usersSlice";

const Users = () => {
    const dispatch = useAppDispatch();
    useRelocation("Users");

    const [filter, setFilter] = useState("all");
    const [order, setOrder] = useState("name");
    const [cur, setCur] = useState(0);

    useLoad("users", cur, 10, filter, order);

    const { data, count } = useTable("users");

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

    const navigate = useNavigate();

    return (
        <div data-cy="page-users">
            <Entry $margin="0" $padding="1rem" $color="transparent" $justify="space-between">
                <SlidingMenu
                    fields={["All Users", "Active Users", "Inactive Users"]}
                    handleChange={(x: string) => {
                        setCur(0);
                        setFilter(x);
                        dispatch(changeUserStatus("idle"));
                    }}
                />
                <Entry $margin="0" $padding="0" $radius="0" $color="transparent">
                    <Box
                        data-cy="users-newuser"
                        as="button"
                        onClick={() => { navigate("/users/new") }}
                        $padding="1rem"
                        $margin="0"
                        $radius="0.75rem"
                        $color="#135846"
                    >
                        <Text $color="white">+ New User</Text>
                    </Box>
                    <Select
                        data-cy="users-order"
                        as="select"
                        $color="#135846"
                        $weight="600"
                        value={order}
                        onChange={
                            (e: ChangeEvent<HTMLSelectElement>) => {
                                setOrder(e.target.value);
                                dispatch(changeUserStatus("idle"));
                            }
                        }
                    >
                        <Text as='option' value="name" $color="#135846" $weight="400">Name</Text>
                        <Text as='option' value="joined" $color="#135846" $weight="400">Start Date</Text>
                    </Select>
                </Entry>
            </Entry>
            <Box $margin="0 1rem">
                <Table>
                    <Row>
                        {
                            title.map((el, i) => {
                                return (
                                    <Cell key={(i + 1) * - 1}>
                                        <Text $weight="600">{el}</Text>
                                    </Cell>
                                );
                            })
                        }
                    </Row>
                    <SwiperComponents data={data} />
                </Table>
            </Box>
            <Box $margin="1rem" $color="transparent" $padding="0">
                <SwiperNavigation cur={cur} setCur={setCur} limit={10} count={count} action={changeUserStatus} />
            </Box>
        </div>
    );
};

export default Users;