import Menu from "../components/advanced/Menu";
import empty from "../assets/empty.png";
import { Icon, Entry, Box, BoxAbsolute } from "../components/basic/Box";
import Text from "../components/basic/Text";

const Page = () => {
    return (
        <Entry margin="1rem" padding="2rem" justify="space-between">
            <Box margin="0" padding="1rem" width="50%">
                <Text weight="600">Full Name Here</Text>
                <Text color="#799283" size="0.75rem" margin="0.5rem">#idididid</Text>
                <Entry margin="1rem 0 0 0" padding="0" radius="0" justify="space-between">
                    <Box margin="0" padding="0" width="50%" radius="0">
                        <Text size="0.875" color="#6E6E6E">Check In:</Text>
                        <Text margin="0.5rem" weight="600">12/12/21</Text>
                    </Box>
                    <Box margin="0" padding="0" width="50%" radius="0">
                        <Text size="0.875" color="#6E6E6E">Check Out:</Text>
                        <Text margin="0.5rem" weight="600">12/12/12</Text>
                    </Box>
                </Entry>
                <Entry margin="1rem 0 0 0" padding="0" radius="0" justify="space-between">
                    <Text weight="600" width="50%" margin="1rem">Minimal Duplex Deluxe - A098</Text>
                    <Entry margin="0" padding="0" gap="0" radius="0" justify="space-between">
                        <Text margin="1rem">$145</Text>
                        <Text margin="1rem" size="0.75rem" color="#6E6E6E">/night</Text>
                    </Entry>
                </Entry>
                <Text margin="0.5rem" line='1.25rem'>
                    Very long and nonsensical text so I can check out if actually long messages and requests from annoying customers will be displayed correctly. It would be sad if they weren't. Normal customers would not care, of course, but this stupid one would. And they are the real problem for the poor hotel staff.
                </Text>
                <Text weight="600" width="50%" margin="1rem">Amenitites</Text>
                <Entry margin="1rem 0 0 0" padding="0" wrap="wrap">
                    <Box margin="0" padding="1rem" color="#E8FFEE">
                        <Text color="#5AD07A">3 Bed Space</Text>
                    </Box>
                    <Box margin="0" padding="1rem" color="#E8FFEE">
                        <Text color="#5AD07A">3 Bed Space</Text>
                    </Box>
                    <Box margin="0" padding="1rem" color="#E8FFEE">
                        <Text color="#5AD07A">3 Bed Space</Text>
                    </Box>
                    <Box margin="0" padding="1rem" color="#E8FFEE">
                        <Text color="#5AD07A">3 Bed Space</Text>
                    </Box>
                    <Box margin="0" padding="1rem" color="#E8FFEE">
                        <Text color="#5AD07A">3 Bed Space</Text>
                    </Box>
                    <Box margin="0" padding="1rem" color="#E8FFEE">
                        <Text color="#5AD07A">3 Bed Space</Text>
                    </Box>
                    <Box margin="0" padding="1rem" color="#E8FFEE">
                        <Text color="#5AD07A">3 Bed Space</Text>
                    </Box>
                </Entry>
            </Box>
            <Box width="50%" height="50rem" radius="0" margin="-2rem" padding="0" >
                <Box as="img" src={empty} width="100%" height="100%" margin="0" padding="0" radius="0" />
            </Box>
        </Entry>
    );
}

const RoomEdit = () => {
    return (
        <Menu title="New Room" Page={Page} />
    );
}

export default RoomEdit;