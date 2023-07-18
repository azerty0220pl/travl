import React, { ChangeEvent, SyntheticEvent } from "react";
import empty from "../assets/empty.png";
import { Icon, Entry, Box } from "../components/basic/Box";
import Text from "../components/basic/Text";
import Select from "../components/basic/Select";
import { useContext, useState } from "react";
import { Context } from "../App";
import { useRelocation } from "../components/basic/hooks";
import { useNavigate } from "react-router";

const UserEdit = () => {
    useRelocation("Edit User");

    const state = useContext(Context);
    const navigate = useNavigate();
    const dispatch = state.dispatch;

    const [username, setUsername] = useState(state.username);

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();

        dispatch!({
            type: "user",
            user: username,
            mail: (document.getElementById("mail") as HTMLInputElement).value
        });

        navigate("/dashboard");
    };

    return (
        <Entry $margin="1rem" $padding="2rem" $justify="space-around" data-cy="page-userEdit">
            <Box as="form" onSubmit={handleSubmit} $margin="0" $padding="1rem" $border="1px solid #EBEBEB" $width="50%">
                <label id="user-label" htmlFor="user">
                    <Text $weight="600">Full Name:</Text>
                    <Text
                        as="input"
                        type="text"
                        id="user"
                        placeholder="username"
                        $margin="0.5rem"
                        value={username}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }}
                        required
                    />
                </label>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <Box
                        as="label"
                        id="mail-label"
                        htmlFor="mail"
                        $margin="0"
                        $padding="0"
                        $radius="0"
                        $height="100%"
                        $width="100%"
                    >
                        <Text $weight="600">Email:</Text>
                        <Text
                            as="input"
                            type="mail"
                            id="mail"
                            placeholder="mail@mail.mail"
                            $margin="0.5rem"
                            value={state.email}
                            required
                        />
                    </Box>
                    <Box
                        as="label"
                        id="phone-label"
                        htmlFor="phone"
                        $margin="0"
                        $padding="0"
                        $radius="0"
                        $height="100%"
                        $width="100%"
                    >
                        <Text $weight="600">Phone:</Text>
                        <Text as="input" type="number" id="phone" placeholder="987654321" $margin="0.5rem" required />
                    </Box>
                </Entry>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="role-label" htmlFor="role">
                        <Text $weight="600">Role:</Text>
                        <Select as="select" id="role" $color="#135846" $weight="600" $margin="0.5rem 0 0 0">
                            <Text as='option' value="manager" $color="#135846" $weight="400">Manager</Text>
                            <Text as='option' value="reception" $color="#135846" $weight="400">Reception</Text>
                            <Text as='option' value="service" $color="#135846" $weight="400">Room Service</Text>
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
                            as="textarea"
                            id="description"
                            placeholder="Short description..."
                            $height="3rem"
                            $line="1.25rem"
                            $margin="0.5rem" />
                    </Box>
                </Entry>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="status-label" htmlFor="status">
                        <Text $weight="600">Status:</Text>
                        <Select as="select" id="status" $color="#135846" $weight="600" $margin="0.5rem 0 0 0">
                            <Text as='option' value="active" $color="#135846" $weight="400">Active</Text>
                            <Text as='option' value="inactive" $color="#135846" $weight="400">Inactive</Text>
                        </Select>
                    </label>
                    <Box
                        as="label"
                        id="date-label"
                        htmlFor="date"
                        $margin="0"
                        $padding="0"
                        $radius="0"
                        $height="100%"
                        $width="100%"
                    >
                        <Text $weight="600">Start Date:</Text>
                        <Text as="input" type="date" id="date" $height="3rem" $align="center" $margin="0.5rem" required />
                    </Box>
                </Entry>
                <label id="password-label" htmlFor="password">
                    <Text $weight="600" $margin="1rem">Password:</Text>
                    <Text as="input" type="text" id="password" placeholder="9assword!" $margin="0.5rem" required />
                </label>
                <Box as="button" $color="#EEF9F2" $margin="1rem 0 0 0" $padding="1rem 2rem">
                    <Text $weight="600" $align="center">Save</Text>
                </Box>
            </Box>
            <Icon as="img" $dim="30rem" src={empty} $margin="0" $padding="0" />
        </Entry>
    );
};

export default UserEdit;