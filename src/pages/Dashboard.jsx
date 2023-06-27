import Menu from "../components/Menu";
import { Entry, Icon } from "../components/Box";
import Text from "../components/Text";
import { LiaBedSolid, LiaCalendarCheck } from 'react-icons/lia';
import { BiLogIn, BiLogOut } from 'react-icons/bi';

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
        </div>
    );
}

export default Dashboard;