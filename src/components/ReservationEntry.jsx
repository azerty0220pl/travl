import { Entry, Box } from "./Box";
import Text from "./Text";

const ReservationEntry = ({ room, number, name, from, to }) => {

    <Entry padding="0" margin="0 0 1rem 0" justify="space-between">
        <Entry padding="0" margin="0">
            <Box margin="0" padding="0" height="5rem" width="7rem" as="img" src={empty} />
            <div>
                <Text weight="600" size="1.25rem">{room} - {number}</Text>
                <Text>{name}</Text>
            </div>
        </Entry>
        <Text width="fit-content">{from} - {to}</Text>
    </Entry>
}

export default ReservationEntry;