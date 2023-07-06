import { Box, Entry } from "../components/basic/Box";
import { SwiperComponents, SwiperNavigation, SwiperNavigationAlt } from "../components/advanced/Swiper";
import { useState } from "react";
import SlidingMenu from "../components/advanced/SlidingMenu";
import Text from "../components/basic/Text";
import { Table, Row, Cell } from "../components/basic/Table";
import { useRelocation } from "../components/basic/hooks";
import { useTable } from "../components/redux/useTable";

const Contact = () => {
    useRelocation("Contact");

    const [filter, setFilter] = useState("published");
    const [cur1, setCur1] = useState(0);
    const [cur2, setCur2] = useState(0);

    const data1 = useTable("messages", "read", "date");
    const data2 = useTable("messagesAlt", filter, "date");
    
    const title = ["ID & Date", "Customer", "Comment", "Action"];
    
    return (
        <>
            <Box $margin="1rem">
                <Entry $padding="0" $justify="space-between" $gap="1rem" $height="14rem">
                    <SwiperNavigationAlt data={data1} count={3} cur={cur1} setCur={setCur1} margin="0 -1rem" colors={["#575757", "#135846", "#BEBEBE", "#FFF"]} />
                </Entry>
            </Box>
            <Entry $margin="0 1rem" $padding="1rem" $color="transparent" $justify="space-between">
                <SlidingMenu fields={["All Contacts", "Archived"]} handleChange={(x) => { setCur2(0); setFilter(x); }} />
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
                    <SwiperComponents data={data2} cur={cur2} count={10} />
                </Table>
            </Box>
            <Box $margin="1rem" $color="transparent" $padding="0">
                <SwiperNavigation cur={cur2} setCur={setCur2} count={10} data={data2} />
            </Box>
        </>
    );
};

export default Contact;