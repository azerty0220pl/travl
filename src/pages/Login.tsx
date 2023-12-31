import React, { SyntheticEvent } from "react";
import { Box, Entry } from "../components/basic/Box";
import Text from "../components/basic/Text";
import { login } from "../components/basic/loginLogic";
import { useContext } from "react";
import { Context } from "../App";
import { toast } from "react-toastify";

const Login = () => {
    const dispatch = useContext(Context).dispatch;

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const nameEl = document.getElementById("user") as HTMLInputElement;
        const passEl = document.getElementById("password") as HTMLInputElement;

        login(nameEl.value, passEl.value, dispatch!).then(res => {
            if (res === "Logged in")
                toast.success("Login successful.");
            else
                toast.error("Login failed.");
        })
    }

    return (
        <Entry data-cy="login" $justify="center" $margin="0" $padding="0" $color="transparent" $height="100vh" $width="100%">
            <Box $margin="auto" $width="fit-content">
                <Text $weight="600">Login:</Text>
                <Box
                    data-cy="login-form"
                    $margin="1rem 0 0 0"
                    $padding="1rem"
                    $border="1px solid #EBEBEB"
                    as="form"
                    onSubmit={handleSubmit}
                >
                    <label id="user-label" htmlFor="user">
                        <Text>Username:</Text>
                        <Text
                            as="input"
                            data-cy="user-input"
                            $margin="0.5rem"
                            type="text"
                            id="user"
                            placeholder="admin"
                            required
                        />
                    </label>
                    <label id="password-label" htmlFor="password">
                        <Text $margin="1rem">Password:</Text>
                        <Text
                            as="input"
                            data-cy="password-input"
                            $margin="0.5rem"
                            type="password"
                            id="password"
                            placeholder="password"
                            required
                        />
                    </label>
                    <Box as="button" data-cy="login-button" $color="#EEF9F2" $margin="1rem auto 0 auto" $padding="1rem">
                        <Text $weight="600" $align="center">Login</Text>
                    </Box>
                </Box>
            </Box>
        </Entry>
    );
}

export default Login;