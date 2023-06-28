import { Entry, Box } from "../basic/Box";
import Text from "../basic/Text";

const ReservationEntry = ({ room, number, name, from, to, photo, last }) => {

    return (
        <Entry padding="0" margin={last ? "0" : "0 0 1rem 0"} justify="space-between">
            <Entry padding="0" margin="0">
                <Box margin="0" padding="0" height="5rem" width="7rem" as="img" src={photo} />
                <div>
                    <Text weight="600" size="1.25rem">{room} - {number}</Text>
                    <Text margin="1rem">{name}</Text>
                </div>
            </Entry>
            <Text width="fit-content">{from} - {to}</Text>
        </Entry>
    );
}

export default ReservationEntry;