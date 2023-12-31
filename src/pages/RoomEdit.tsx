import React, { SyntheticEvent } from "react";
import empty from "../assets/empty.png";
import { Entry, Box } from "../components/basic/Box";
import Text from "../components/basic/Text";
import Select from "../components/basic/Select";
import { useRelocation } from "../components/basic/hooks";
import { useNewRoom } from "../components/redux/rooms/roomsHooks";
import { useNavigate } from "react-router";

const RoomEdit = () => {
    useRelocation("New Room");

    const navigate = useNavigate();
    const newRoom = useNewRoom();

    const handleSubmit = (form: SyntheticEvent) => {
        form.preventDefault();
        newRoom({
            "name": (document.getElementById("name") as HTMLInputElement).value,
            "type": parseInt((document.getElementById("type") as HTMLInputElement).value),
            "ammenities": [],
            "price": parseInt((document.getElementById("price") as HTMLInputElement).value),
            "offer": parseInt((document.getElementById("offer") as HTMLInputElement).value),
            "cancel": (document.getElementById("cancel") as HTMLInputElement).value,
            "bookings": [],
            "description": (document.getElementById("description") as HTMLInputElement).value
        });
        navigate("/rooms");
    }

    return (
        <Entry $margin="1rem" $padding="2rem" $justify="space-between" data-cy="page-roomedit">
            <Box as="form" $margin="0" $padding="1rem" $border="1px solid #EBEBEB" $width="50%" onSubmit={handleSubmit}>
                <Box as="label" id="name-label" htmlFor="name" $margin="0" $padding="0" $radius="0" $height="100%" $width="100%">
                    <Text $weight="600">Room Number:</Text>
                    <Text
                        data-cy="newroom-number"
                        as="input"
                        type="text"
                        id="name"
                        placeholder="A - 303"
                        $margin="0.5rem"
                        required
                    />
                </Box>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="type-label" htmlFor="type">
                        <Text $weight="600">Type:</Text>
                        <Select
                            data-cy="newroom-type"
                            as="select"
                            id="type"
                            $color="#135846"
                            $weight="600"
                            $margin="0.5rem 0 0 0"
                        >
                            <Text as='option' value="0" $color="#135846" $weight="400">Single Bed</Text>
                            <Text as='option' value="1" $color="#135846" $weight="400">Double Bed</Text>
                            <Text as='option' value="2" $color="#135846" $weight="400">Double Superior</Text>
                            <Text as='option' value="3" $color="#135846" $weight="400">Suite</Text>
                        </Select>
                    </label>
                    <Box
                        as="label"
                        id="description-label"
                        htmlFor="description"
                        $margin="0"
                        $padding="0"
                        $radius="0"
                        $height="100%"
                        $width="100%"
                    >
                        <Text $weight="600">Description:</Text>
                        <Text
                            data-cy="newroom-description"
                            as="textarea"
                            id="description"
                            $margin="0.5rem"
                            placeholder="Short description..."
                            $height="3rem"
                            $line="1.25rem"
                            required
                        />
                    </Box>
                </Entry>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="discount-label" htmlFor="discount">
                        <Select data-cy="newroom-offer" as="select" id="discount" $color="#135846" $weight="600">
                            <Text as='option' value="yes" $color="#135846" $weight="400">Offer</Text>
                            <Text as='option' value="no" $color="#135846" $weight="400">Regular</Text>
                        </Select>
                    </label>
                    <Box
                        as="label"
                        id="price-label"
                        htmlFor="price"
                        $margin="0"
                        $padding="0"
                        $radius="0"
                        $height="100%"
                        $width="100%"
                    >
                        <Text $weight="600">Price:</Text>
                        <Text data-cy="newroom-price"
                            as="input"
                            type="number"
                            id="price"
                            placeholder="145.01"
                            required
                            $margin="0.5rem"
                        />
                    </Box>
                    <Box
                        as="label"
                        id="offer-label"
                        htmlFor="offer"
                        $margin="0"
                        $padding="0"
                        $radius="0"
                        $height="100%"
                        $width="100%"
                    >
                        <Text $weight="600">Discount:</Text>
                        <Text
                            data-cy="newroom-discount"
                            as="input"
                            type="number"
                            id="offer"
                            placeholder="49.99%"
                            $margin="0.5rem"
                            required
                        />
                    </Box>
                </Entry>
                <label id="cancel-label" htmlFor="cancel">
                    <Text $weight="600" $margin="1rem">Cancellation policy:</Text>
                    <Text
                        data-cy="newroom-policy"
                        as="textarea"
                        id="cancel"
                        $margin="0.5rem"
                        $height="3rem"
                        $line="1.25rem"
                        placeholder="To cancel, book the most expensive room first. Then, realize that it is impossible..."
                        required
                    />
                </label>
                <Box data-cy="newroom-submit" as="button" $color="#EEF9F2" $margin="1rem 0 0 0" $padding="1rem 2rem">
                    <Text $weight="600" $align="center">Save</Text>
                </Box>
            </Box>
            <Box $width="50%" $height="50rem" $radius="0" $margin="-2rem" $padding="0">
                <Box as="img" src={empty} $width="100%" $height="100%" $margin="0" $padding="0" $radius="0" />
            </Box>
        </Entry>
    );
};

export default RoomEdit;