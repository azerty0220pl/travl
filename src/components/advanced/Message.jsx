import { Context } from "../../App";
import { Box } from "../basic/Box";
import Text from "../basic/Text";
import { useContext } from "react";

const Message = ({ x }) => {
    const modal = useContext(Context).modal;

    return (
        <Box width="100%" height="100%" border='1px solid #EBEBEB'>
            <Box as="button" onClick={() => { modal({ subject: x.subject, message: x.message }) }} height="1.25rem" width="100%" margin="0" padding="0" radius="0">
                <Text weight="600" line="1.25rem">{x.subject}</Text>
            </Box>
            <Box as="button" onClick={() => { modal({ subject: x.subject, message: x.message }) }} height="3.75rem" width="100%" margin="1rem 0" padding="0" radius="0">
                <Text line="1.25rem">{x.message}</Text>
            </Box>
            <Text weight="600">{x.name}</Text>
            <Text margin="0.5rem" size="0.75rem" color="#799283">{x.email}</Text>
        </Box>
    );
};

export default Message;