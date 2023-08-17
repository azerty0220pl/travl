import React, { ChangeEvent, SyntheticEvent } from "react";
import empty from "../assets/empty.png";
import { Icon, Entry, Box } from "../components/basic/Box";
import Text from "../components/basic/Text";
import Select from "../components/basic/Select";
import { useContext, useState } from "react";
import { Context } from "../App";
import { useRelocation } from "../components/basic/hooks";
import { useNavigate } from "react-router";
import { useUpdateUser } from "../components/redux/users/userHooks";

const UserEdit = () => {
    useRelocation("Edit User");

    const state = useContext(Context);
    const navigate = useNavigate();
    const dispatch = state.dispatch;
    const update = useUpdateUser();

    const [username, setUsername] = useState(state.user!.name);
    const [email, setEmail] = useState(state.user!.email);
    const [phone, setPhone] = useState(state.user!.phone);
    const [role, setRole] = useState(state.user!.role);
    const [description, setDescription] = useState(state.user!.description);
    const [status, setStatus] = useState(state.user!.status);
    const [joined, setJoined] = useState(dateFormat(state.user!.joined));
    const [password, setPassword] = useState("");

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();

        update({
            _id: state.user!._id,
            name: username,
            email: email,
            phone: phone,
            role: role,
            description: description,
            status: status,
            joined: joined,
            password: password
        }, dispatch!);

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
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
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
                            as="input"
                            type="number"
                            id="phone"
                            placeholder="987654321"
                            $margin="0.5rem"
                            value={phone}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setPhone(e.target.value) }}
                            required
                        />
                    </Box>
                </Entry>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="role-label" htmlFor="role">
                        <Text $weight="600">Role:</Text>
                        <Select
                            as="select"
                            id="role"
                            $color="#135846"
                            $weight="600"
                            $margin="0.5rem 0 0 0"
                            value={role}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => { setRole(parseInt(e.target.value)) }}
                        >
                            <Text as='option' value="2" $color="#135846" $weight="400">Manager</Text>
                            <Text as='option' value="1" $color="#135846" $weight="400">Reception</Text>
                            <Text as='option' value="0" $color="#135846" $weight="400">Room Service</Text>
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
                            $margin="0.5rem"
                            value={description}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { setDescription(e.target.value) }}
                        />
                    </Box>
                </Entry>
                <Entry $margin="1rem 0 0 0" $padding="0" $radius="0" $justify="space-between">
                    <label id="status-label" htmlFor="status">
                        <Text $weight="600">Status:</Text>
                        <Select
                            as="select"
                            id="status"
                            $color="#135846"
                            $weight="600"
                            $margin="0.5rem 0 0 0"
                            value={status ? "1" : "0"}
                            onChange={(e: ChangeEvent<HTMLSelectElement>) => { setStatus(e.target.value === "1") }}
                        >
                            <Text as='option' value="1" $color="#135846" $weight="400">Active</Text>
                            <Text as='option' value="0" $color="#135846" $weight="400">Inactive</Text>
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
                        <Text
                            as="input"
                            type="date"
                            id="date"
                            $height="3rem"
                            $align="center"
                            $margin="0.5rem"
                            value={joined}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => { setJoined(e.target.value) }}
                            required
                        />
                    </Box>
                </Entry>
                <label id="password-label" htmlFor="password">
                    <Text $weight="600" $margin="1rem">Password:</Text>
                    <Text
                        as="input"
                        type="password"
                        id="password"
                        placeholder="9assword!"
                        $margin="0.5rem"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
                        required
                    />
                </label>
                <Box as="button" $color="#EEF9F2" $margin="1rem 0 0 0" $padding="1rem 2rem">
                    <Text $weight="600" $align="center">Save</Text>
                </Box>
            </Box>
            <Icon as="img" $dim="30rem" src={empty} $margin="0" $padding="0" />
        </Entry>
    );
};

const dateFormat = (x: string) => {
    const date = new Date(x);
    return date.getFullYear() + "-" + (date.getMonth() <= 8 ? "0" : "") + (date.getMonth() + 1) + "-" + (date.getDate() <= 9 ? "0" : "") + date.getDate();
}

export default UserEdit;