import { Box } from "../basic/Box";
import Text from "../basic/Text";

const Message = ({ name, mail, subject, message, modal }) => {
    return (
        <Box width="100%" height="100%" border='1px solid #EBEBEB'>
            <Text weight="600">{subject}</Text>
            <Box as="button" onClick={() => { modal(message) }} height="3.75rem" width="100%" margin="1rem 0" padding="0" radius="0">
                <Text line="1.25rem">{message}</Text>
            </Box>
            <Text weight="600">{name}</Text>
            <Text margin="0.5rem" size="0.75rem" color="#799283">{mail}</Text>
        </Box>
    );
};

export default Message;