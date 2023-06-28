import Menu from "../components/Menu";
import { Box, Entry } from "../components/Box";
import { LiaBedSolid, LiaCalendarCheck } from 'react-icons/lia';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import empty from "../assets/empty.png";
import ReservationEntry from "../components/ReservationEntry";
import KPI from "../components/KPI";
import { SwiperNavigation, SwiperComponents } from "../components/Swiper";
import Message from "../components/Message";
import { useState } from "react";

const Page = () => {
    let data = [
        <Message
            name="name1"
            mail="mail1"
            subject="subject1"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name2"
            mail="mail2"
            subject="subject2"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name3"
            mail="mail3"
            subject="subject3"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name4"
            mail="mail4"
            subject="subject4"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name5"
            mail="mail5"
            subject="subject5"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name6"
            mail="mail6"
            subject="subject6"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />,
        <Message
            name="name7"
            mail="mail7"
            subject="subject7"
            message="I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent"
        />
    ];

    let [cur, setCur] = useState(0);

    return (
        <div>
            <Entry justify="space-between" color="none" padding="1rem" margin="0">
                <KPI Ico={LiaBedSolid} number="8,461" title="New Bookings" />
                <KPI Ico={LiaCalendarCheck} number="95%" title="Scheduled Room" />
                <KPI Ico={BiLogIn} number="753" title="Check In" />
                <KPI Ico={BiLogOut} number="516" title="Check Out" />
            </Entry>
            <Box margin="0 1rem">
                <ReservationEntry
                    room="Deluxe Duplex Room"
                    number="001"
                    photo={empty}
                    name="Orlando Bloom"
                    from="27/07/2023"
                    to="29/07/2023" />
                <ReservationEntry
                    room="Minimal Monplex Room"
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
            <Box margin="1rem">
                <Entry padding="0" justify="space-between" gap="1rem">
                    <SwiperComponents data={data} count={3} cur={cur} />
                </Entry>
                <Box padding="0" margin="1rem 0">
                    <SwiperNavigation data={data} count={3} cur={cur} setCur={setCur} />
                </Box>
            </Box>
        </div>
    );
}

const Dashboard = () => {
    return (
        <Menu
            title="Dashboard"
            Page={Page}
        />
    );
}

export default Dashboard;