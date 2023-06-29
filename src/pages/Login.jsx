import { Box, Entry } from "../components/basic/Box";
import Text from "../components/basic/Text";
import { useNavigate } from "react-router-dom";
import { login, logged } from "../components/basic/loginLogic";
import { useState, useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();
    let [err, setErr] = useState(false);

    useEffect(() => {
        if (logged()) {
            navigate("/");
        }
    })

    const handleSubmit = (event) => {
        if (login(event.target.user.value, event.target.password.value)) {
            navigate("/");
            setErr(false);
        }
        else
            setErr(true);
    }

    if (localStorage)

        return (
            <Entry justify="center" margin="0" padding="0" color="transparent" height="100vh" width="100%">
                <Box margin="auto" width="fit-content">
                    <Text weight="600">Login:</Text>
                    <Box margin="1rem 0 0 0" padding="1rem" border="1px solid #EBEBEB">
                        <form onSubmit={handleSubmit}>
                            <label id="user-label" htmlFor="user">
                                <Text>Username:</Text>
                                <Text as="input" margin="0.5rem" type="text" id="user" placeholder="admin" required />
                            </label>
                            <label id="password-label" htmlFor="password">
                                <Text margin="1rem">Password:</Text>
                                <Text as="input" margin="0.5rem" type="password" id="password" placeholder="password" required />
                            </label>
                            {
                                err ?
                                    <Text color="red" size="0.75rem" margin="0.5rem">Incorrect password</Text>
                                    :
                                    <></>
                            }
                            <Box as="button" color="#EEF9F2" margin="1rem auto 0 auto" padding="1rem">
                                <Text align="center">Login</Text>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Entry>
        );
}

export default Login;