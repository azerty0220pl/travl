import { Row, Cell } from "../basic/Table";
import Text from "../basic/Text";
import { Box } from "../basic/Box";
import empty from '../../assets/empty.png'
import dateFormat from "../basic/dateFormat";
import { useContext } from "react";
import { Context } from "../../App";

const UserTableRow = ({ x, i }) => {
    const modal = useContext(Context).modal;

    const status = (y) => {
        switch (y) {
            case "Active":
                return (
                    <Box $margin="0" $padding="1rem" $height="3rem" $color="#5AD07A">
                        <Text $align="center" $color="#FFFFFF">{y}</Text>
                    </Box>
                );
            case "Inactive":
                return (
                    <Box $margin="0" $padding="1rem" $height="3rem" $color="#E23428">
                        <Text $align="center" $color="#FFFFFF">{y}</Text>
                    </Box>
                );
            default:
                return <></>;
        }
    }

    return (
        <Row key={i}>
            <Cell>
                <Box as="img" $display="inline" $padding="0" $margin="0" $width="3rem" $height="3rem" src={empty} />
            </Cell>
            <Cell>
                <Text>{x.name}</Text>
            </Cell>
            <Cell>
                <Text>{x.id}</Text>
            </Cell>
            <Cell>
                <Text>{x.email}</Text>
            </Cell>
            <Cell>
                <Text>{dateFormat(x.joined)}</Text>
            </Cell>
            <Cell>
                {
                    x.description.length === 0 ?
                        <Box $margin="0 2rem 0 0" $padding="1rem" $height="3rem" $border="2px solid #799283" $width="14rem">
                            <Text $align="center" $color="#799283">View Description</Text>
                        </Box>
                        :
                        <Box as="button" onClick={() => { modal({ subject: x.name, message: x.description }) }} $margin="0 2rem 0 0" $width="14rem" $padding="1rem" $height="3rem" $color="#EEF9F2">
                            <Text $align="center">View Description</Text>
                        </Box>
                }
            </Cell>
            <Cell>
                <Text>{x.phone}</Text>
            </Cell>
            <Cell>
                {
                    status(x.status)
                }
            </Cell>
        </Row>
    );
}

export default UserTableRow;