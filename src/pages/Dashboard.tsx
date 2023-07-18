import React from "react";
import { Box, Entry } from "../components/basic/Box";
import { LiaBedSolid, LiaCalendarCheck } from 'react-icons/lia';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import empty from "../assets/empty.png";
import ReservationEntry from "../components/advanced/ReservationEntry";
import KPI from "../components/advanced/KPI";
import { SwiperNavigationAlt } from "../components/advanced/Swiper";
import { useState } from "react";
import { useRelocation } from "../components/basic/hooks";
import { useTable } from "../components/redux/useTable";
import { useLoad } from "../components/redux/useLoad";

const Dashboard = () => {
    useRelocation("Dashboard");
    useLoad("messages");

    let data = useTable("messages", "read", "date");

    let [cur, setCur] = useState(0);

    return (
        <div data-cy="page-dashboard">
            <Entry $justify="space-between" $color="none" $padding="1rem" $margin="0">
                <KPI Ico={LiaBedSolid} number="8,461" title="New Bookings" />
                <KPI Ico={LiaCalendarCheck} number="95%" title="Scheduled Room" />
                <KPI Ico={BiLogIn} number="753" title="Check In" />
                <KPI Ico={BiLogOut} number="516" title="Check Out" />
            </Entry>
            <Box $margin="0 1rem">
                <ReservationEntry
                    room="Deluxe Duplex Room"
                    number="001"
                    photo={empty}
                    name="Orlando Bloom"
                    from="27/07/2023"
                    to="29/07/2023" />
                <ReservationEntry
                    room="Minimal Monoplex Room"
                    number="505"
                    photo={empty}
                    name="Amber Heard"
                    from="27/07/2023"
                    to="29/07/2023" />
                <ReservationEntry
                    room="Minimal Quadruplex Room"
                    number="303"
                    photo={empty}
                    name="John Lennon"
                    from="27/07/2023"
                    to="29/07/2023"
                    last />
            </Box>
            <Box $margin="1rem">
                <Entry $padding="0" $justify="space-between" $gap="1rem" $radius="0" $height="14rem">
                    <SwiperNavigationAlt
                        data={data}
                        count={3}
                        cur={cur}
                        setCur={setCur}
                        margin="-2rem"
                        colors={["#575757", "#135846", "#BEBEBE", "#FFF"]}
                    />
                </Entry>
            </Box>
        </div>
    );
};

export default Dashboard;