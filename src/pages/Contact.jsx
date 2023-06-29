import Menu from "../components/advanced/Menu";
import { Box, Entry } from "../components/basic/Box";
import { SwiperComponents, SwiperNavigation } from "../components/advanced/Swiper";
import { useState } from "react";
import Message from "../components/advanced/Message";
import SlidingMenu from "../components/advanced/SlidingMenu";
import Text from "../components/basic/Text";
import { Table, Row, Cell } from "../components/basic/Table";
import Select from "../components/basic/Select";

const Page = () => {

    let data = [
        <Message
            name="name1"
            mail="mail1"
            subject="subject1"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name2"
            mail="mail2"
            subject="subject2"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name3"
            mail="mail3"
            subject="subject3"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name4"
            mail="mail4"
            subject="subject4"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name5"
            mail="mail5"
            subject="subject5"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name6"
            mail="mail6"
            subject="subject6"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name7"
            mail="mail7"
            subject="subject7"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />
    ];
    let data2 = [
        <Row>
            <Cell>
                <Text>#ididid - 12/12/21</Text>
            </Cell>
            <Cell>
                <Entry padding="0" margin="0" radius="0">
                    <Text width="auto" weight="600">Full Name</Text>
                    <Box padding="0" margin="0" radius="0">
                        <Text line="1.5rem" width="auto">email@email.email</Text>
                        <Text line="1.5rem" width="auto">9 8 0 77 3</Text>
                    </Box>
                </Entry>
            </Cell>
            <Cell>
                <Entry padding="0" margin="0 0 0 -0.25rem" radius="0" gap="0" width="10erm">
                    <Text space="pre" width="auto"> </Text>
                    <Box padding="0" margin="0" radius="0" height="3rem">
                        <Text line="1.5rem" width="auto" weight="600">Subject 1</Text>
                        <Text line="1.5rem" width="15rem">Very long message you probably don't wan't to read. So probably you also won't notice all the ortographic mistakes in it :)</Text>
                    </Box>
                </Entry>
            </Cell>
            <Cell>
                <Box padding="1rem" margin="0 1rem 0 0" color="#FFEDEC">
                    <Text color="#E23428" align="center">Archive</Text>
                </Box>
            </Cell>
        </Row>
    ];
    const title = ["ID & Date", "Customer", "Comment", "Action"];

    let [cur, setCur] = useState(0);
    let [cur2, setCur2] = useState(0);

    return (
        <>
            <Box margin="1rem">
                <Entry padding="0" justify="space-between" gap="1rem">
                    <SwiperComponents data={data} count={3} cur={cur} />
                </Entry>
                <Box padding="0" margin="1rem 0 0 0">
                    <SwiperNavigation data={data} count={3} cur={cur} setCur={setCur} />
                </Box>
            </Box>
            <Entry margin="0 1rem" padding="1rem" color="transparent" justify="space-between">
                <SlidingMenu fields={["All Contacts", "Archived"]} handleChange={() => { }} />
                <Select as="select" color="#135846" weight="600" line="1.5rem">
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
                    <SwiperComponents data={data2} cur={cur2} count={10} />
                </Table>
            </Box>
            <Box margin="1rem" color="transparent" padding="0">
                <SwiperNavigation cur={cur2} setCur={setCur2} count={10} data={data} />
            </Box>
        </>
    );
}

const Contact = () => {
    return (
        <div>
            <Menu title="Contact" Page={Page} />
        </div>
    );
}

export default Contact;