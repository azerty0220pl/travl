import React, { useContext, useEffect, useState } from "react";
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

interface Props {
    $sidebar: string | undefined
}

const TopBar = styled.div<Props>`
    position: absolute;
    top: 0;
    right: 0;
    width: ${props => props.$sidebar ? "85vw" : "100vw"};
    background-color: white;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s;
    box-shadow: 0px 3px 10px #00000005;
`;

const SideBar = styled.div<Props>`
    position: absolute;
    top: 0;
    left: ${props => props.$sidebar ? "0" : "-15vw"};
    height: 100vh;
    width: 15vw;
    background-color: white;
    transition: all 0.5s;
    box-shadow: 0px 3px 10px #00000005;
`;

const Content = styled.div<Props>`
    position: absolute;
    top: 4rem;
    right: 0;
    width: ${props => props.$sidebar ? "85vw" : "100vw"};
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

const Red = styled.div`
    position: absolute;
    background-color: #E23428;
    border-radius: 0 0.5rem 0.5rem 0;
    height: 100%;
    width: 0.25rem;
    top: 0;
    left: 0;
`;

const Menu = ({ Page }: { Page: () => React.JSX.Element }) => {
    const navigate = useNavigate();
    const title = useContext(Context).page;
    const dispatch = useContext(Context).dispatch;

    const edit = () => {
        navigate("/users/edit");
    }

    const logout = () => {
        dispatch!({ type: "login", success: false });
    }

    const handlePage = (x: string) => {
        navigate(x);
    };

    const [sideBar, setSidebar] = useState(true);
    const [modal, setModal] = useState({ subject: "", message: "" });

    useEffect(() => {
        dispatch!({ type: "modal", modal: setModal });
    }, [dispatch]);

    return (
        <Container data-cy="menu">
            <SideBar data-cy="sidebar" $sidebar={sideBar ? "true" : undefined}>
                <Entry $padding="0 2rem" $margin="2rem 0 1rem 0" $width="100%" $gap="0.5rem">
                    <Icon as="img" $padding="0" $dim="4rem" src={logo} $radius="0" />
                    <Box $padding="0" $margin="0" $radius="0">
                        <Text $weight="600" $size="1.5rem">travl</Text>
                        <Text $color="#5D5449" $size="0.75rem">Hotel Admin Dashboard</Text>
                    </Box>
                </Entry>
                <Box $padding="0" $radius="0">
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/dashboard") }}
                        data-cy="menu-dashboard"
                        $radius="0"
                        $margin="0.5rem 0"
                        $padding="0.5rem 2rem"
                    >
                        {
                            title === "Dashboard" ?
                                <Red />
                                :
                                <></>
                        }
                        <MdOutlineDashboard size="2.5rem" color={title === "Dashboard" ? "#E23428" : "#799283"} />
                        <Text
                            $weight={title === "Dashboard" ? "600" : "400"}
                            $color={title === "Dashboard" ? "#E23428" : "#799283"}
                        >
                            Dashboard
                        </Text>
                    </Entry>
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/bookings") }}
                        data-cy="menu-bookings"
                        $radius="0"
                        $margin="0.5rem 0"
                        $padding="0.5rem 2rem"
                    >
                        {
                            title === "Bookings" ?
                                <Red />
                                :
                                <></>
                        }
                        <MdCalendarMonth size="2.5rem" color={title === "Bookings" ? "#E23428" : "#799283"} />
                        <Text
                            $weight={title === "Bookings" ? "600" : "400"}
                            $color={title === "Bookings" ? "#E23428" : "#799283"}
                        >
                            Bookings
                        </Text>
                    </Entry>
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/rooms") }}
                        data-cy="menu-rooms"
                        $radius="0"
                        $margin="0.5rem 0"
                        $padding="0.5rem 2rem"
                    >
                        {
                            title === "Rooms" ?
                                <Red />
                                :
                                <></>
                        }
                        <MdKey size="2.5rem" color={title === "Rooms" ? "#E23428" : "#799283"} />
                        <Text
                            $weight={title === "Rooms" ? "600" : "400"}
                            $color={title === "Rooms" ? "#E23428" : "#799283"}
                        >
                            Rooms
                        </Text>
                    </Entry>
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/contact") }}
                        data-cy="menu-contact"
                        $radius="0"
                        $margin="0.5rem 0"
                        $padding="0.5rem 2rem"
                    >
                        {
                            title === "Contact" ?
                                <Red />
                                :
                                <></>
                        }
                        <MdContactSupport size="2.5rem" color={title === "Contact" ? "#E23428" : "#799283"} />
                        <Text
                            $weight={title === "Contact" ? "600" : "400"}
                            $color={title === "Contact" ? "#E23428" : "#799283"}
                        >
                            Contact
                        </Text>
                    </Entry>
                    <Entry
                        as="button"
                        onClick={() => { handlePage("/users") }}
                        data-cy="menu-users"
                        $radius="0"
                        $margin="0.5rem 0"
                        $padding="0.5rem 2rem"
                    >
                        {
                            title === "Users" ?
                                <Red />
                                :
                                <></>
                        }
                        <FaRegUser size="2.5rem" color={title === "Users" ? "#E23428" : "#799283"} />
                        <Text
                            $weight={title === "Users" ? "600" : "400"}
                            $color={title === "Users" ? "#E23428" : "#799283"}
                        >
                            Users
                        </Text>
                    </Entry>
                </Box>
                <Box $padding="0.5rem" $margin="auto" $width="80%">
                    <Icon as="img" $dim="5rem" $radius="1rem" $margin="1rem auto" src={empty} />
                    <Text $align="center" $weight="600">Szymon Kokot</Text>
                    <Text
                        $align="center"
                        $color="#797979"
                        $size="0.75rem"
                    >
                        szymonekokot@gmail.com
                    </Text>
                    <Box
                        as="button"
                        $width='50%'
                        $margin="1rem auto"
                        $padding="0.5rem 1rem"
                        $color="#EBF1EF"
                        $radius="0.5rem"
                        onClick={edit}
                    >
                        <Text $weight="600" $color="#135846" $align="middle">Edit</Text>
                    </Box>
                </Box>
                <Box>
                    <Text $weight="600">Travl Hotel Admin Dashboard</Text>
                    <Text $color="#797979" $size="0.75rem"> 2020 All Rights Reserved</Text>
                </Box>
            </SideBar>
            <TopBar $sidebar={sideBar ? "true" : undefined}>
                <Entry $padding="1rem">
                    {
                        sideBar ?
                            <Icon
                                data-cy="hide-sidebar"
                                as="button"
                                $dim="2rem"
                                $padding="0"
                                onClick={() => { setSidebar(!sideBar) }}
                            >
                                <BiLeftArrowAlt size="1.5rem" />
                            </Icon>
                            :
                            <Icon
                                data-cy="show-sidebar"
                                as="button"
                                $dim="2rem"
                                $padding="0"
                                onClick={() => { setSidebar(!sideBar) }}
                            >
                                <Text $size="1.5rem">
                                    <BiRightArrowAlt />
                                </Text>
                            </Icon>
                    }
                    <Text $weight="600" $size="2rem">{title}</Text>
                </Entry>
                <Entry $padding="1rem">
                    <Icon $radius="0" $padding="0">
                        <BiEnvelope size="1.5rem" color="#135846" />
                        <BoxAbsolute $color="#E23428" $width="50%" $height="50%" $top="0" $right="0">
                            <Text $color="white" $size="0.5rem" $align="center">28</Text>
                        </BoxAbsolute>
                    </Icon>
                    <Icon $radius="0" $padding="0">
                        <BiBell size="1.5rem" color="#135846" />
                    </Icon>
                    <Icon as="button" onClick={logout} $radius="0" $padding="0">
                        <BiLogOut size="1.5rem" color="#135846" />
                    </Icon>
                </Entry>
            </TopBar>
            <Content $sidebar={sideBar ? "true" : undefined}>
                <Page />
            </Content>
            {
                modal.message.length > 0 ?
                    <BoxAbsolute
                        data-cy="modal"
                        $display="flex"
                        $width="100%"
                        $height="100%"
                        $top="0"
                        $left="0"
                        $color="transparent"
                    >
                        <BoxAbsolute
                            as="button"
                            onClick={() => { setModal({ subject: "", message: "" }) }}
                            $width="100%"
                            $height="100%"
                            $top="0"
                            $left="0"
                            $color="rgba(0, 0, 0, 0.25)"
                            $radius="0"
                            $zindex="15"
                        />
                        <Entry $width="50%" $zindex="20" $margin="auto" $direction="column" $align="start">
                            <Text data-cy="modal-subject" $margin="0.5rem" $weight="600" $line="1.25rem">{modal.subject}</Text>
                            <Text data-cy="modal-message" $margin="0.5rem">{modal.message}</Text>
                            <Box
                                data-cy="modal-close"
                                as="button"
                                onClick={() => { setModal({ subject: "", message: "" }) }}
                                $color="#FFEDEC"
                                $margin="1rem 0 0 0"
                                $padding="1rem"
                            >
                                <Text $color="#E23428" $align="center" $line="1.25rem">Close</Text>
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