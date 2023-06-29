import { Box, Entry } from "../components/basic/Box";
import Text from "../components/basic/Text";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if(event.target.user.value === "admin" && event.target.password.value === "password") {
            localStorage.setItem("session", "admin");
            navigate("/");
        }
    }

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