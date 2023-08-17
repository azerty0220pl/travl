import React from "react";
import { Box, Entry } from "../components/basic/Box";
import { SwiperComponents, SwiperNavigation, SwiperNavigationAlt } from "../components/advanced/Swiper";
import { useState } from "react";
import SlidingMenu from "../components/advanced/SlidingMenu";
import Text from "../components/basic/Text";
import { Table, Row, Cell } from "../components/basic/Table";
import { useRelocation } from "../components/basic/hooks";
import { useTable } from "../components/redux/useTable";
import { useLoad } from "../components/redux/useLoad";
import { useAppDispatch } from "../components/redux/store";
import { changeMessagesStatus } from "../components/redux/messages/messagesSlice";

const Contact = () => {
    const dispatch = useAppDispatch();
    useRelocation("Contact");

    const [filter, setFilter] = useState("all");
    const order = "date";
    const [cur1, setCur1] = useState(0);
    const [cur2, setCur2] = useState(0);

    useLoad("messages", cur1, 10, filter, order);
    useLoad("messagesAlt", cur2, 3, "read", order);

    const mes1 = useTable("messages");
    const mes2 = useTable("messagesAlt");

    const title = ["ID & Date", "Customer", "Comment", "Action"];

    return (
        <div data-cy="page-contact">
            <Box $margin="1rem">
                <Entry $padding="0" $justify="space-between" $height="14rem">
                    <SwiperNavigationAlt
                        data={mes2.data}
                        limit={3}
                        count={mes2.count}
                        cur={cur2}
                        setCur={setCur2}
                        margin="-2rem"
                        colors={["#575757", "#135846", "#BEBEBE", "#FFF"]}
                        action={changeMessagesStatus}
                    />
                </Entry>
            </Box>
            <Entry $margin="0 1rem" $padding="1rem" $color="transparent" $justify="space-between">
                <SlidingMenu fields={["All Contacts", "Archived"]} handleChange={(x: string) => {
                    setCur1(0);
                    setFilter(x);
                    dispatch(changeMessagesStatus("idle"));
                }} />
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
                    <SwiperComponents data={mes1.data} />
                </Table>
            </Box>
            <Box $margin="1rem" $color="transparent" $padding="0">
                <SwiperNavigation cur={cur1} setCur={setCur1} count={mes1.count} limit={10} action={changeMessagesStatus} />
            </Box>
        </div>
    );
};

export default Contact;