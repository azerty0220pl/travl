import { useState } from 'react';
import { styled } from "styled-components";
import { Entry } from "../basic/Box";
import Text from "../basic/Text";

const dict = {
    "All Bookings": "none",
    "In Progress": "progress",
    "All Rooms": "none",
    "Available": "available",
    "Booked": "booked",
    "All Users": "none",
    "Active Users": "active",
    "Inactive Users": "inactive",
    "All Contacts": "published",
    "Archived": "archived"
}

const Button = styled(Text)`
    border: none;
    border-bottom: ${props => props.$border || "3px solid #6E6E6E"};
    padding: 1rem 0;
    background-color: transparent;
`;

const Container = styled(Entry)`
    position: relative;
    height: 3rem;
    width: 50%;
`;

const SlidingMenu = ({ fields, handleChange }) => {
    let [cur, setCur] = useState(0);

    return (
        <Container $color="transparent" $radius="0" $margin="0" $padding="1rem 0" $justify="space-between" $gap="0">
            {
                fields.map((el, i) => {
                    return (
                        <Button
                            as='button'
                            key={i}
                            $color={cur === i ? "#135846" : "#6E6E6E"}
                            $border={cur === i ? "4px solid #135846" : "3px solid #6E6E6E"}
                            $align="center"
                            $weight={cur === i ? "600" : "400"}
                            onClick={() => {
                                handleChange(dict[el]);
                                setCur(i);
                            }}
                        >
                            {el}
                        </Button>
                    );
                })
            }
        </Container>
    );
}

export default SlidingMenu;