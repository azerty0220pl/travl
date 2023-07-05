import empty from "../assets/empty.png";
import { Entry, Box } from "../components/basic/Box";
import Text from "../components/basic/Text";
import Select from "../components/basic/Select";
import { useRelocation } from "../components/basic/hooks";

const RoomEdit = () => {
    useRelocation("Room Edit");

    return (
        <Entry $margin="1rem" $padding="2rem" $justify="space-between">
            <Box as="form" $margin="0" $padding="1rem" $border="1px solid #EBEBEB" $width="50%">
                <Box as="label" id="number-label" htmlFor="number" $margin="0" $padding="0" $radius="0" $height="100%" $width="100%">
                    <Text $weight="600">Room Number:</Text>
                    <Text as="input" type="text" id="number" placeholder="A - 303" $margin="0.5rem" required />
                </Box>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="type-label" htmlFor="type">
                        <Text $weight="600">Role:</Text>
                        <Select as="select" id="type" $color="#135846" $weight="600" $margin="0.5rem 0 0 0">
                            <Text as='option' value="single" $color="#135846" $weight="400">Single Bed</Text>
                            <Text as='option' value="double" $color="#135846" $weight="400">Double Bed</Text>
                            <Text as='option' value="superior" $color="#135846" $weight="400">Double Superior</Text>
                            <Text as='option' value="suite" $color="#135846" $weight="400">Suite</Text>
                        </Select>
                    </label>
                    <Box as="label" id="description-label" htmlFor="description" $margin="0" $padding="0" $radius="0" $height="100%" $width="100%">
                        <Text $weight="600">Description:</Text>
                        <Text as="textarea" id="description" $margin="0.5rem" placeholder="Short description..." $height="3rem" $line="1.25rem" />
                    </Box>
                </Entry>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="offer-label" htmlFor="offer">
                        <Select as="select" id="offer" $color="#135846" $weight="600">
                            <Text as='option' value="yes" $color="#135846" $weight="400">Offer</Text>
                            <Text as='option' value="no" $color="#135846" $weight="400">Regular</Text>
                        </Select>
                    </label>
                    <Box as="label" id="price-label" htmlFor="price" $margin="0" $padding="0" $radius="0" $height="100%" $width="100%">
                        <Text $weight="600">Price:</Text>
                        <Text as="input" type="text" id="price" placeholder="145.01" required $margin="0.5rem" />
                    </Box>
                    <Box as="label" id="discount-label" htmlFor="discount" $margin="0" $padding="0" $radius="0" $height="100%" $width="100%">
                        <Text $weight="600">Discount:</Text>
                        <Text as="input" type="text" id="discount" placeholder="49.99%" $margin="0.5rem" required />
                    </Box>
                </Entry>
                <label id="cancellation-label" htmlFor="cancellation">
                    <Text $weight="600" $margin="1rem">Cancellation policy:</Text>
                    <Text as="textarea" id="cancellation" $margin="0.5rem" $height="3rem" $line="1.25rem" placeholder="To cancel, book the most expensive room first. Then, realize that it is impossible..." required />
                </label>
                <Box as="button" $color="#EEF9F2" $margin="1rem 0 0 0" $padding="1rem 2rem">
                    <Text $weight="600" $align="center">Save</Text>
                </Box>
            </Box>
            <Box $width="50%" $height="50rem" $radius="0" $margin="-2rem" $padding="0" >
                <Box as="img" src={empty} $width="100%" $height="100%" $margin="0" $padding="0" $radius="0" />
            </Box>
        </Entry>
    );
};

export default RoomEdit;