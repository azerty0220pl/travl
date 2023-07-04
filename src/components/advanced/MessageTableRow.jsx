import { useContext } from "react";
import { Box, Entry } from "../basic/Box";
import { Cell, Row } from "../basic/Table";
import Text from "../basic/Text";
import { Context } from "../../App";
import dateFormat from "../basic/dateFormat";

const MessageTableRow = ({ x, i }) => {
    const modal = useContext(Context).modal;

    return (
        <Row>
            <Cell>
                <Text>{x.id}</Text><Text>{dateFormat(x.date)}</Text>
            </Cell>
            <Cell>
                <Box padding="0" margin="0" radius="0">
                    <Text width="auto" weight="600">{x.name}</Text>
                    <Entry padding="0" margin="0" radius="0">
                        <Text width="auto">{x.email}</Text>
                        <Text width="auto">{x.phone}</Text>
                    </Entry>
                </Box>
            </Cell>
            <Cell as="button" onClick={() => { modal(x.message) }}>
                <Text line="1.5rem" width="auto" weight="600">{x.subject}</Text>
                <Text line="1.5rem" width="15rem">{x.message}</Text>
            </Cell>
            <Cell>
                <Box padding="1rem" margin="0 1rem 0 0" color="#FFEDEC">
                    <Text color="#E23428" align="center">Archive</Text>
                </Box>
            </Cell>
        </Row>
    );
}

export default MessageTableRow;