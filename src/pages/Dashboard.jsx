import Menu from "../components/Menu";
import { Box, Entry, Icon } from "../components/Box";
import Text from "../components/Text";
import { LiaBedSolid, LiaCalendarCheck } from 'react-icons/lia';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import empty from "../assets/empty.png";
import ReservationEntry from "../components/ReservationEntry";

const Dashboard = () => {
    return (
        <div>
            <Menu title="Dashboard" />
            <Entry justify="space-between" color="none" padding="1rem" margin="5rem 0 0 0">
                <Entry width="100%">
                    <Icon dim="4rem" padding="1rem" color="#FFEDEC">
                        <LiaBedSolid size="2rem" color="#E23428" />
                    </Icon>
                    <div>
                        <Text size="2rem" weight="600">8,461</Text>
                        <Text size="0.75rem" weight="300" color="#787878">New Booking</Text>
                    </div>
                </Entry>
                <Entry width="100%">
                    <Icon dim="4rem" padding="1rem" color="#FFEDEC">
                        <LiaCalendarCheck size="2rem" color="#E23428" />
                    </Icon>
                    <div>
                        <Text size="2rem" weight="600">95%</Text>
                        <Text size="0.75rem" weight="300" color="#787878">Scheduled Room</Text>
                    </div>
                </Entry>
                <Entry width="100%">
                    <Icon dim="4rem" padding="1rem" color="#FFEDEC">
                        <BiLogIn size="2rem" color="#E23428" />
                    </Icon>
                    <div>
                        <Text size="2rem" weight="600">753</Text>
                        <Text size="0.75rem" weight="300" color="#787878">Check In</Text>
                    </div>
                </Entry>
                <Entry width="100%">
                    <Icon dim="4rem" padding="1rem" color="#FFEDEC">
                        <BiLogOut size="2rem" color="#E23428" />
                    </Icon>
                    <div>
                        <Text size="2rem" weight="600">516</Text>
                        <Text size="0.75rem" weight="300" color="#787878">Check Out</Text>
                    </div>
                </Entry>
            </Entry>
            <Box margin="0 1rem" >
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
        </div>
    );
}

export default Dashboard;