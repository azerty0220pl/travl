import React from "react";
import { Row, Cell } from "../basic/Table";
import Text from "../basic/Text";
import { Entry, Box } from "../basic/Box";
import empty from "../../assets/empty.png";
import { Room } from "../redux/rooms/roomsSlice";

const RoomsTableRow = ({ x, i }: { x: Room, i: number }) => {
    const status = (y: boolean) => {
        if (y)
            return (
                <Box $margin="0" $padding="1rem" $height="3rem" $color="#5AD07A">
                    <Text $align="center" $color="#FFFFFF">Available</Text>
                </Box>
            );
        else
            return (
                <Box $margin="0" $padding="1rem" $height="3rem" $color="#E23428">
                    <Text $align="center" $color="#FFFFFF">Booked</Text>
                </Box>
            );
    }

    const types = (type) => {
        switch (type) {
            case 0:
                return "Single Bed";
            case 1:
                return "Double Bed";
            case 2:
                return "Double Superior";
            case 3:
                return "Suite";
            default:
                return "";
        }
    }

    return (
        <Row key={i}>
            <Cell>
                <Box $display="inline" as="img" $padding="0" $margin="0" $width="5rem" $height="3rem" src={empty} />
            </Cell>
            <Cell>
                <Text data-cy={"room-" + x._id + "name"}>{x.name}</Text>
            </Cell>
            <Cell>
                <Text>{x._id!.slice(-6)}</Text>
            </Cell>
            <Cell>
                <Text>{types(x.type)}</Text>
            </Cell>
            <Cell>
                <Box $margin="0" $padding="0" $radius="0">
                    <Text $line="1.25rem">{x.ammenities}</Text>
                </Box>
            </Cell>
            <Cell>
                <Entry $gap="0" $padding="0 1rem 0 0" $radius="0">
                    <Text $width="fit-content">{x.price}</Text>
                    <Text $size="0.75rem" $color="#799283">/Night</Text>
                </Entry>
            </Cell>
            <Cell>
                <Entry $gap="0" $padding="0 1rem 0 0" $radius="0">
                    <Text $width="fit-content">{x.price! * (100 - x.offer!) / 100}</Text>
                    <Text $size="0.75rem" $color="#799283">/Night</Text>
                </Entry>
            </Cell>
            <Cell>
                {
                    status(true)
                }
            </Cell>
        </Row>
    );
}

export default RoomsTableRow;