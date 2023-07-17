import React from "react";
import { Context } from "../../App";
import { Box, Entry, Icon } from "../basic/Box";
import Text from "../basic/Text";
import { useContext } from "react";
import { FaRegCircleXmark } from 'react-icons/fa6'
import { useChangeRead } from "../redux/messages/messageHooks";
import { Message } from "../redux/messages/messagesSlice";

const MessageElement = ({ x }: {x: Partial<Message>}) : React.JSX.Element => {
    const modal = useContext(Context).modal;
    const handleClick = useChangeRead(x.id!);
    
    return (
        <Box key={"msg" + x.id} $width="100%" $height="100%" $border='1px solid #EBEBEB'>
            <Box key={"msg" + x.id + "b1"} as="button" onClick={() => { modal!({ subject: x.subject, message: x.message }) }} $height="1.25rem" $width="100%" $margin="0" $padding="0" $radius="0">
                <Text key={"msg" + x.id + "t1"} $weight="600" $line="1.25rem">{x.subject}</Text>
            </Box>
            <Box key={"msg" + x.id + "b2"} as="button" onClick={() => { modal!({ subject: x.subject, message: x.message }) }} $height="3.75rem" $width="100%" $margin="1rem 0" $padding="0" $radius="0">
                <Text key={"msg" + x.id + "t2"} $line="1.25rem">{x.message}</Text>
            </Box>
            <Entry key={"msg" + x.id + "e1"} $margin="0" $padding="0" $radius="0" $justify="space-between">
                <Box key={"msg" + x.id + "b3"} $margin="0" $padding="0" $radius="0">
                    <Text key={"msg" + x.id + "t3"} $weight="600">{x.name}</Text>
                    <Text key={"msg" + x.id + "t4"} $margin="0.5rem" $size="0.75rem" $line="1rem" $color="#799283">{x.email}</Text>
                </Box>
                <Icon as="button" $padding="0.25rem" onClick={handleClick}>
                    <FaRegCircleXmark size="1.5rem" color="#E23428" />
                </Icon>
            </Entry>
        </Box>
    );
};

export default MessageElement;