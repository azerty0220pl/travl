import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Bookings from "../../pages/Bookings";
import Rooms from "../../pages/Rooms";
import Contact from "../../pages/Contact";
import Users from "../../pages/Users";
import UserEdit from "../../pages/UsersEdit";
import BookingDetails from "../../pages/BookingDetails";
import RoomEdit from "../../pages/RoomEdit";

const RoutesComponent = ({ modal }) => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard modal={modal} />} />
            <Route path="/bookings">
                <Route index element={<Bookings modal={modal} />} />
                <Route path="details" element={<BookingDetails />} />
            </Route>
            <Route path="/rooms" >
                <Route index element={<Rooms />} />
                <Route path="edit" element={<RoomEdit />} />
            </Route>
            <Route path="/contact" element={<Contact modal={modal} />} />
            <Route path="/users" >
                <Route index element={<Users modal={modal} />} />
                <Route path="edit" element={<UserEdit />} />
            </Route>
        </Routes>
    );
}

export default RoutesComponent;