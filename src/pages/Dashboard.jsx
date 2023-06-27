import Menu from "../components/Menu";
import { Box, Entry } from "../components/Box";
import { LiaBedSolid, LiaCalendarCheck } from 'react-icons/lia';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import empty from "../assets/empty.png";
import ReservationEntry from "../components/ReservationEntry";
import KPI from "../components/KPI";
import Swiper from "../components/Swiper";

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
            <Box margin="1rem">
                <Swiper data={[<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div>, <div>6</div>, <div>7</div>]} direction="row" count={3} />
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