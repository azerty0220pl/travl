import React, { useContext } from "react";
import { Box } from "../basic/Box";
import { Cell, Row } from "../basic/Table";
import Text from "../basic/Text";
import { Context } from "../../App";
import dateFormat from "../basic/dateFormat";
import { Book } from "../redux/bookingsSlice";

type Status = "Booked" | "Refund" | "In Progress";

const BookingTableRow = ({ x, i }: { x: Partial<Book>, i: number }) => {
    const modal = useContext(Context).modal;

    const status = (x: Status): React.JSX.Element => {
        switch (x) {
            case "Booked":
                return (
                    <Box $margin="0" $padding="1rem" $height="3rem" $color="#E8FFEE">
                        <Text $align="center" $color="#5AD07A">{x}</Text>
                    </Box>
                );
            case "Refund":
                return (
                    <Box $margin="0" $padding="1rem" $height="3rem" $color="#FFEDEC">
                        <Text $align="center" $color="#E23428">{x}</Text>
                    </Box>
                );
            case "In Progress":
                return (
                    <Box $margin="0" $padding="1rem" $height="3rem" $color="#FFFEEC">
                        <Text $align="center" $color="#dfe228">{x}</Text>
                    </Box>
                );
            default:
                return <></>;
        }
    }

    return (
        <Row key={i}>
            <Cell>
                <Text $weight="600">{x.name!}</Text>
            </Cell>
            <Cell>
                <Text>{dateFormat(x.order!)}</Text>
            </Cell>
            <Cell>
                <Text>{dateFormat(x.in!)}</Text>
            </Cell>
            <Cell>
                <Text>{dateFormat(x.out!)}</Text>
            </Cell>
            <Cell>
                {
                    (x.request!).length === 0 ?
                        <Box $margin="0" $padding="1rem" $height="3rem" $border="2px solid #799283" $width="14rem">
                            <Text $align="center" $color="#799283">View Notes</Text>
                        </Box>
                        :
                        <Box
                            as="button"
                            onClick={() => { modal!({ subject: x.name, message: x.request }) }}
                            $margin="0"
                            $width="14rem"
                            $padding="1rem"
                            $height="3rem"
                            $color="#EEF9F2"
                        >
                            <Text $align="center">View Notes</Text>
                        </Box>
                }
            </Cell>
            <Cell>
                <Text>{x.room}</Text>
            </Cell>
            <Cell>
                {
                    status(x.status!)
                }
            </Cell>
        </Row>
    );
}

export default BookingTableRow;