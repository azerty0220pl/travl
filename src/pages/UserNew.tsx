import React, { SyntheticEvent } from "react";
import empty from "../assets/empty.png";
import { Icon, Entry, Box } from "../components/basic/Box";
import Text from "../components/basic/Text";
import Select from "../components/basic/Select";
import { useRelocation } from "../components/basic/hooks";
import { useNewUser } from "../components/redux/users/userHooks";
import { useNavigate } from "react-router";

const UserNew = () => {
    useRelocation("New User");
    const navigate = useNavigate();
    const newUser = useNewUser();

    const handleSubmit = (form: SyntheticEvent) => {
        form.preventDefault();
        newUser({
            "name": (document.getElementById("name") as HTMLInputElement).value,
            "email": (document.getElementById("email") as HTMLInputElement).value,
            "phone": (document.getElementById("phone") as HTMLInputElement).value,
            "role": parseInt((document.getElementById("role") as HTMLInputElement).value),
            "description": (document.getElementById("description") as HTMLInputElement).value,
            "status": (document.getElementById("status") as HTMLInputElement).value === "1",
            "joined": (document.getElementById("joined") as HTMLInputElement).value,
            "password": (document.getElementById("password") as HTMLInputElement).value
        });
        navigate("/users");
    }

    return (
        <Entry $margin="1rem" $padding="2rem" $justify="space-around" data-cy="page-newuser">
            <Box as="form" $margin="0" $padding="1rem" $border="1px solid #EBEBEB" $width="50%" onSubmit={handleSubmit}>
                <label id="user-label" htmlFor="name">
                    <Text $weight="600">Full Name:</Text>
                    <Text
                        data-cy="newuser-name"
                        as="input"
                        type="text"
                        id="name"
                        placeholder="Full Name"
                        $margin="0.5rem"
                        required
                    />
                </label>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <Box
                        as="label"
                        id="email-label"
                        htmlFor="email"
                        $margin="0"
                        $padding="0"
                        $radius="0"
                        $height="100%"
                        $width="100%"
                    >
                        <Text $weight="600">Email:</Text>
                        <Text
                            data-cy="newuser-email"
                            as="input"
                            type="mail"
                            id="email"
                            placeholder="mail@mail.mail"
                            $margin="0.5rem"
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
                        <Text
                            data-cy="newuser-phone"
                            as="input"
                            type="number"
                            id="phone"
                            placeholder="987654321"
                            $margin="0.5rem"
                            required
                        />
                    </Box>
                </Entry>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="role-label" htmlFor="role">
                        <Text $weight="600">Role:</Text>
                        <Select
                            data-cy="newuser-role"
                            as="select"
                            id="role"
                            $color="#135846"
                            $weight="600"
                            $margin="0.5rem 0 0 0"
                        >
                            <Text as='option' value="0" $color="#135846" $weight="400">Manager</Text>
                            <Text as='option' value="1" $color="#135846" $weight="400">Reception</Text>
                            <Text as='option' value="2" $color="#135846" $weight="400">Room Service</Text>
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
                            data-cy="newuser-description"
                            as="textarea"
                            id="description"
                            placeholder="Short description..."
                            $height="3rem"
                            $line="1.25rem"
                            $margin="0.5rem"
                        />
                    </Box>
                </Entry>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="status-label" htmlFor="status">
                        <Text $weight="600">Status:</Text>
                        <Select
                            data-cy="newuser-status"
                            as="select"
                            id="status"
                            $color="#135846"
                            $weight="600"
                            $margin="0.5rem 0 0 0"
                        >
                            <Text as='option' value="1" $color="#135846" $weight="400">Active</Text>
                            <Text as='option' value="0" $color="#135846" $weight="400">Inactive</Text>
                        </Select>
                    </label>
                    <Box
                        as="label"
                        id="date-label"
                        htmlFor="joined"
                        $margin="0"
                        $padding="0"
                        $radius="0"
                        $height="100%"
                        $width="100%"
                    >
                        <Text $weight="600">Start Date:</Text>
                        <Text
                            data-cy="newuser-joined"
                            as="input"
                            type="date"
                            id="joined"
                            $height="3rem"
                            $align="center"
                            $margin="0.5rem"
                            required
                        />
                    </Box>
                </Entry>
                <label id="password-label" htmlFor="password">
                    <Text $weight="600" $margin="1rem">Password:</Text>
                    <Text
                        data-cy="newuser-password"
                        as="input"
                        type="password"
                        id="password"
                        placeholder="9assword!"
                        $margin="0.5rem"
                        required
                    />
                </label>
                <Box data-cy="newuser-submit" as="button" $color="#EEF9F2" $margin="1rem 0 0 0" $padding="1rem 2rem">
                    <Text $weight="600" $align="center">Save</Text>
                </Box>
            </Box>
            <Icon as="img" $dim="30rem" src={empty} $margin="0" $padding="0" />
        </Entry>
    );
};

export default UserNew;