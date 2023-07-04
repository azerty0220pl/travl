import { useContext, useState } from "react";
import { styled } from "styled-components";
import { Box, BoxAbsolute, Entry, Icon } from "../basic/Box";
import { MdOutlineDashboard, MdCalendarMonth, MdKey, MdContactSupport } from 'react-icons/md';
import { BiEnvelope, BiLogOut, BiBell, BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import Text from "../basic/Text";
import logo from '../../assets/logo.png';
import empty from "../../assets/empty.png";
import { Context } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../redux/roomsSlice";

const TopBar = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: ${props => props.sideBar ? "85vw" : "100vw"};
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
    width: 15vw;
    background-color: white;
    transition: all 0.5s;
`;

const Content = styled.div`
    position: absolute;
    top: 4rem;
    right: 0;
    width: ${props => props.sideBar ? "85vw" : "100vw"};
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

const Menu = ({ Page }) => {
    const navigate = useNavigate();
    const title = useContext(Context).page;
    const dispatch = useContext(Context).dispatch;

    const edit = () => {
        navigate("/users/edit");
    }

    const logout = () => {
        dispatch({ type: "login", success: false });
    }

    const handlePage = (x) => {
        navigate(x);
    };

    let [sideBar, setSidebar] = useState(true);
    let [modal, setModal] = useState("");

    //Redux management
    const reduxDispatch = useDispatch();
    const roomsStatus = useSelector(state => state.rooms.status);

    if(roomsStatus === 'none')
        reduxDispatch(fetchRooms());

    return (
        <Container>
            <SideBar sideBar={sideBar}>
                <Entry padding="0 2rem" margin="2rem 0 1rem 0" width="100%" gap="0.5rem">
                    <Icon as="img" padding="0" dim="4rem" src={logo} radius="0" />
                    <Box padding="0" margin="0" radius="0">
                        <Text weight="600" size="1.5rem">travl</Text>
                        <Text color="#5D5449" size="0.75rem">Hotel Admin Dashboard</Text>
                    </Box>
                </Entry>
                <Box padding="0">
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/dashboard") }}
                    >
                        <MdOutlineDashboard size="1.5rem" color={title === "Dashboard" ? "#E23428" : "#799283"} />
                        <Text
                            weight={title === "Dashboard" ? "600" : "400"}
                            color={title === "Dashboard" ? "#E23428" : "#799283"}>
                            Dashboard
                        </Text>
                    </Entry>
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/bookings") }}
                    >
                        <MdCalendarMonth size="1.5rem" color={title === "Bookings" ? "#E23428" : "#799283"} />
                        <Text
                            weight={title === "Bookings" ? "600" : "400"}
                            color={title === "Bookings" ? "#E23428" : "#799283"}>
                            Bookings
                        </Text>
                    </Entry>
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/rooms") }}
                    >
                        <MdKey size="1.5rem" color={title === "Rooms" ? "#E23428" : "#799283"} />
                        <Text
                            weight={title === "Rooms" ? "600" : "400"}
                            color={title === "Rooms" ? "#E23428" : "#799283"}>
                            Rooms
                        </Text>
                    </Entry>
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/contact") }}
                    >
                        <MdContactSupport size="1.5rem" color={title === "Contact" ? "#E23428" : "#799283"} />
                        <Text
                            weight={title === "Contact" ? "600" : "400"}
                            color={title === "Contact" ? "#E23428" : "#799283"}>
                            Contact
                        </Text>
                    </Entry>
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/users") }}
                    >
                        <FaRegUser size="1.5rem" color={title === "Users" ? "#E23428" : "#799283"} />
                        <Text
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
                            <Icon as="button" dim="2rem" padding="0" onClick={() => { setSidebar(!sideBar) }}>
                                <BiLeftArrowAlt size="1.5rem" />
                            </Icon>
                            :
                            <Icon as="button" dim="2rem" padding="0" onClick={() => { setSidebar(!sideBar) }}>
                                <Text size="1.5rem">
                                    <BiRightArrowAlt />
                                </Text>
                            </Icon>
                    }
                    <Text weight="600" size="2rem">{title}</Text>
                </Entry>
                <Entry padding="1rem">
                    <Icon radius="0" padding="0">
                        <BiEnvelope size="1.5rem" color="#135846" />
                        <BoxAbsolute color="#E23428" width="50%" height="50%" top="0" right="0">
                            <Text color="white" size="0.5rem" align="center">28</Text>
                        </BoxAbsolute>
                    </Icon>
                    <Icon radius="0" padding="0">
                        <BiBell size="1.5rem" color="#135846" />
                    </Icon>
                    <Icon as="button" onClick={logout} radius="0" padding="0">
                        <BiLogOut size="1.5rem" color="#135846" />
                    </Icon>
                </Entry>
            </TopBar>
            <Content sideBar={sideBar}>
                <Page modal={setModal} />
            </Content>
            {
                modal.length > 0 ?
                    <BoxAbsolute as="button" onClick={() => { setModal("") }} width="100%" height="100%" top="0" left="0" color="rgba(0, 0, 0, 0.25)">
                        <Entry color="transparent" width="100%" height="100%">
                            <Box width="fit-content" margin="auto">
                                <Text>{modal}</Text>
                                <Box as="button" onClick={() => { setModal("") }} color="#FFEDEC" margin="1rem 0 0 0" padding="1rem">
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