import { Row, Cell } from "../basic/Table";
import Text from "../basic/Text";
import { Entry, Box } from "../basic/Box";

const RoomsTableRow = ({ x, i }) => {
    let status = (y) => {
        switch (y) {
            case "Available":
                return (
                    <Box margin="0" padding="1rem" height="3rem" color="#5AD07A">
                        <Text align="center" color="#FFFFFF">{y}</Text>
                    </Box>
                );
            case "Booked":
                return (
                    <Box margin="0" padding="1rem" height="3rem" color="#E23428">
                        <Text align="center" color="#FFFFFF">{y}</Text>
                    </Box>
                );
        }
    }

    return (
        <Row key={i}>
            <Cell>
                <Box display="inline" as="img" padding="0" margin="0" width="5rem" height="3rem" src={x[0]} />
            </Cell>
            <Cell>
                <Text>{x[1]}</Text>
            </Cell>
            <Cell>
                <Text>{x[2]}</Text>
            </Cell>
            <Cell>
                <Text>{x[3]}</Text>
            </Cell>
            <Cell>
                <Box margin="0" padding="0" radius="0">
                    <Text line="1.25rem">{x[4]}</Text>
                </Box>
            </Cell>
            <Cell>
                <Entry gap="0" padding="0 1rem 0 0" radius="0">
                    <Text width="fit-content">{x[5]}</Text>
                    <Text size="0.75rem" color="#799283">/Night</Text>
                </Entry>
            </Cell>
            <Cell>
                <Entry gap="0" padding="0 1rem 0 0" radius="0">
                    <Text width="fit-content">{x[6]}</Text>
                    <Text size="0.75rem" color="#799283">/Night</Text>
                </Entry>
            </Cell>
            <Cell>
                {
                    status(x[7])
                }
            </Cell>
        </Row>
    );
}

export default RoomsTableRow;