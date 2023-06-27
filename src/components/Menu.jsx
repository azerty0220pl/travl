import { useState } from "react";
import { styled } from "styled-components";
import { Box, BoxAbsolute, Entry, Icon } from "./Box";
import { MdOutlineDashboard, MdCalendarMonth, MdKey, MdContactSupport } from 'react-icons/md';
import { BiEnvelope, BiLogOut, BiBell, BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import Text from "./Text";
import logo from '../assets/logo.png';

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

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    z-index: 10;
`;

const Menu = ({ title }) => {
    let [sideBar, setSidebar] = useState(false);
    return (
        <Container>
            <SideBar sideBar={sideBar}>
                <Box margin="1rem auto">
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
                    <Icon as="img" width="5rem" height="5rem" radius="100%" margin="1rem auto" />
                    <Text align="middle" weight="600">Szymon Kokot</Text>
                    <Text align="middle" color="#797979" size="0.75rem">szymonekokot@gmail.com</Text>
                    <Box width='50%' margin="1rem auto" padding="0.5rem 1rem" color="#EBF1EF">
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
                    <Icon>
                        <BiEnvelope color="#135846" />
                        <BoxAbsolute color="#E23428">
                            <Text color="white" size="0.5rem" align="center">28</Text>
                        </BoxAbsolute>
                    </Icon>
                    <Icon>
                        <BiBell color="#135846" />
                    </Icon>
                    <Icon>
                        <BiLogOut color="#135846" />
                    </Icon>
                </Entry>
            </TopBar>
        </Container>
    );
}

export default Menu;