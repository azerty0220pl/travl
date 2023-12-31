import React from "react";
import { useContext } from "react";
import { Box } from "../basic/Box";
import { Cell, Row } from "../basic/Table";
import Text from "../basic/Text";
import { Context } from "../../App";
import dateFormat from "../basic/dateFormat";
import { Message } from "../redux/messages/messagesSlice";
import { useUpdateMessage } from "../redux/messages/messageHooks";

const MessageTableRow = ({ x, i }: { x: Message, i: number }) => {
    const modal = useContext(Context).modal;

    const handleArchive = useUpdateMessage();

    return (
        <Row>
            <Cell>
                <Box $display="inline-block" $margin="0" $padding="0" $radius="0">
                    <Text $line="1.25rem" >{x._id!.slice(-6)}</Text>
                    <Text $line="1.25rem" $margin="0.5rem" $color="#787878">{dateFormat(x.date!)}</Text>
                </Box>
            </Cell>
            <Cell>
                <Box $display="inline-block" $margin="0" $padding="0" $radius="0">
                    <Text $line="1.25rem">{x.name}</Text>
                    <Text
                        $line="1.25rem"
                        $margin="0.5rem"
                        $color="#787878"
                        $space="break-spaces"
                    >
                        {x.email + " - " + x.phone}
                    </Text>
                </Box>
            </Cell>
            <Cell>
                <Box
                    as="button"
                    onClick={() => {
                        modal!({ subject: x.subject, message: x.message })
                    }}
                    $display="inline-block"
                    $height="3rem"
                    $width="40vw"
                    $margin="0"
                    $padding="0"
                    $radius="0"
                >
                    <Text $line="1.25rem" $weight="600">{x.subject}</Text>
                    <Text $line="1.25rem" $margin="0.5rem">{x.message}</Text>
                </Box>
            </Cell>
            <Cell>
                {
                    x.archived ?
                        <Box
                            as="button"
                            onClick={() => {
                                const aux = { ...x, archived: false };
                                handleArchive(aux);
                            }}
                            $display="inline-block"
                            $height="3rem"
                            $padding="1rem"
                            $margin="0"
                            $color="#E8FFEE"
                        >
                            <Text $color="#5AD07A" $align="center">Unarchive</Text>
                        </Box>
                        :
                        <Box
                            as="button"
                            onClick={() => {
                                const aux = { ...x, archived: true };
                                handleArchive(aux);
                            }}
                            $display="inline-block"
                            $height="3rem"
                            $padding="1rem"
                            $margin="0"
                            $color="#FFEDEC"
                        >
                            <Text $color="#E23428" $align="center">Archive</Text>
                        </Box>
                }
            </Cell>
        </Row>
    );
}

export default MessageTableRow;