import { useState } from "react";
import { styled } from "styled-components";
import { Box, BoxAbsolute, Entry, Icon } from "../basic/Box";
import { MdOutlineDashboard, MdCalendarMonth, MdKey, MdContactSupport } from 'react-icons/md';
import { BiEnvelope, BiLogOut, BiBell, BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";
import Text from "../basic/Text";
import logo from '../../assets/logo.png';
import empty from "../../assets/empty.png";

const TopBar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: ${props => props.sideBar ? "80vw" : "100vw"};
    background-color: white;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s;
`;

const SideBar = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.sideBar ? "0" : "-20vw"};
    height: 100vh;
    width: 20vw;
    background-color: white;
    transition: all 0.5s;
`;

const Content = styled.div`
    position: absolute;
    top: 4rem;
    right: 0;
    width: ${props => props.sideBar ? "80vw" : "100vw"};
    height: calc(100vh - 4rem);
    transition: all 0.5s;
    overflow-y: auto;
`;

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
`;

const Menu = ({ title, Page }) => {
    let [sideBar, setSidebar] = useState(false);
    const navigate = useNavigate();
    const edit = () => {
        navigate("/users/edit");
    }

    const logout = () => {
        localStorage.removeItem("session");
        navigate("/login");
    }

    let [modal, setModal] = useState("");

    return (
        <Container>
            <SideBar sideBar={sideBar}>
                <Box padding="1rem" margin="0 auto 1rem auto">
                    <img src={logo} />
                </Box>
                <Box padding="0">
                    <Entry>
                        <MdOutlineDashboard color={title === "Dashboard" ? "#E23428" : "#799283"} />
                        <Text
                            as={NavLink}
                            to="/"
                            weight={title === "Dashboard" ? "600" : "400"}
                            color={title === "Dashboard" ? "#E23428" : "#799283"}>
                            Dashboard
                        </Text>
                    </Entry>
                    <Entry>
                        <MdCalendarMonth color={title === "Bookings" ? "#E23428" : "#799283"} />
                        <Text
                            as={NavLink}
                            to="/bookings"
                            weight={title === "Bookings" ? "600" : "400"}
                            color={title === "Bookings" ? "#E23428" : "#799283"}>
                            Bookings
                        </Text>
                    </Entry>
                    <Entry>
                        <MdKey color={title === "Rooms" ? "#E23428" : "#799283"} />
                        <Text
                            as={NavLink}
                            to="/rooms"
                            weight={title === "Rooms" ? "600" : "400"}
                            color={title === "Rooms" ? "#E23428" : "#799283"}>
                            Rooms
                        </Text>
                    </Entry>
                    <Entry>
                        <MdContactSupport color={title === "Contact" ? "#E23428" : "#799283"} />
                        <Text
                            as={NavLink}
                            to="/contact"
                            weight={title === "Contact" ? "600" : "400"}
                            color={title === "Contact" ? "#E23428" : "#799283"}>
                            Contact
                        </Text>
                    </Entry>
                    <Entry>
                        <FaRegUser color={title === "Users" ? "#E23428" : "#799283"} />
                        <Text
                            as={NavLink}
                            to="/users"
                            weight={title === "Users" ? "600" : "400"}
                            color={title === "Users" ? "#E23428" : "#799283"}>
                            Users
                        </Text>
                    </Entry>
                </Box>
                <Box padding="0.5rem" margin="auto" width="80%">
                    <Icon as="img" dim="5rem" radius="1rem" margin="1rem auto" src={empty} />
                    <Text align="middle" weight="600">Szymon Kokot</Text>
                    <Text align="middle" color="#797979" size="0.75rem">szymonekokot@gmail.com</Text>
                    <Box as="button" width='50%' margin="1rem auto" padding="0.5rem 1rem" color="#EBF1EF" radius="0.5rem" onClick={edit}>
                        <Text weight="600" color="#135846" align="middle">Edit</Text>
                    </Box>
                </Box>
                <Box>
                    <Text weight="600">Travl Hotel Admin Dashboard</Text>
                    <Text color="#797979" size="0.75rem"> 2020 All Rights Reserved</Text>
                </Box>
            </SideBar>
            <TopBar sideBar={sideBar}>
                <Entry padding="1rem">
                    {
                        sideBar ?
                            <Icon as="button" onClick={() => { setSidebar(!sideBar) }}><BiLeftArrowAlt /></Icon>
                            : <Icon as="button" onClick={() => { setSidebar(!sideBar) }}><BiRightArrowAlt /></Icon>
                    }
                    <Text weight="600" size="2rem">{title}</Text>
                </Entry>
                <Entry padding="1rem">
                    <Icon radius="0">
                        <BiEnvelope color="#135846" />
                        <BoxAbsolute color="#E23428" width="50%" height="50%" top="0" right="0">
                            <Text color="white" size="0.5rem" align="center">28</Text>
                        </BoxAbsolute>
                    </Icon>
                    <Icon radius="0">
                        <BiBell color="#135846" />
                    </Icon>
                    <Icon as="button" onClick={logout} radius="0">
                        <BiLogOut color="#135846" />
                    </Icon>
                </Entry>
            </TopBar>
            <Content sideBar={sideBar}>
                <Page modal={setModal} />
            </Content>
            {
                modal.length > 0 ?
                    <BoxAbsolute width="100%" height="100%" top="0" left="0" color="rgba(0, 0, 0, 0.25)">
                        <Entry color="transparent" width="100%" height="100%">
                            <Box width="fit-content" margin="auto">
                                <Text>{modal}</Text>
                                <Box as="button" onClick={() => {setModal("")}} color="#FFEDEC" margin="1rem 0 0 0" padding="1rem">
                                    <Text color="#E23428" alig="center">Close</Text>
                                </Box>
                            </Box>
                        </Entry>
                    </BoxAbsolute>
                    :
                    <></>
            }
        </Container>
    );
}

export default Menu;