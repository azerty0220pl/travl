import Menu from "../components/Menu";
import { Box, Entry, Icon } from "../components/Box";
import Text from "../components/Text";
import { LiaBedSolid, LiaCalendarCheck } from 'react-icons/lia';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import empty from "../assets/empty.png";
import ReservationEntry from "../components/ReservationEntry";
import KPI from "../components/KPI";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Dashboard = () => {
    return (
        <div>
            <Menu title="Dashboard" />
            <Entry justify="space-between" color="none" padding="1rem" margin="5rem 0 0 0">
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
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </Box>
        </div>
    );
}

export default Dashboard;