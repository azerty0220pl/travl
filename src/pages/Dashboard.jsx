import Menu from "../components/Menu";
import { Box, Entry, Icon } from "../components/Box";
import Text from "../components/Text";
import { LiaBedSolid, LiaCalendarCheck } from 'react-icons/lia';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import empty from "../assets/empty.png";
import ReservationEntry from "../components/ReservationEntry";
import KPI from "../components/KPI";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

const Page = () => {
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

            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={3}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
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