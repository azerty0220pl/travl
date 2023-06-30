import { Row, Cell } from "../basic/Table";
import Text from "../basic/Text";
import { Box } from "../basic/Box";

const UserTableRow = ({ x, i }) => {
    let status = (y) => {
        switch (y) {
            case "Active":
                return (
                    <Box margin="0" padding="1rem" height="3rem" color="#5AD07A">
                        <Text align="center" color="#FFFFFF">{y}</Text>
                    </Box>
                );
            case "Inactive":
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
                <Box as="img" display="inline" padding="0" margin="0" width="3rem" height="3rem" src={x[0]} />
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
                <Text>{x[4]}</Text>
            </Cell>
            <Cell>
                <Text>{x[5]}</Text>
            </Cell>
            <Cell>
                <Text>{x[6]}</Text>
            </Cell>
            <Cell>
                {
                    status(x[7])
                }
            </Cell>
        </Row>
    );
}

export default UserTableRow;