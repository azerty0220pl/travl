import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Dashboard from "../../pages/Dashboard";
import Bookings from "../../pages/Bookings";
import Rooms from "../../pages/Rooms";
import Contact from "../../pages/Contact";
import Users from "../../pages/Users";
import UserEdit from "../../pages/UsersEdit";
import BookingDetails from "../../pages/BookingDetails";
import RoomEdit from "../../pages/RoomEdit";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
            <Route path="/bookings">
                <Route index element={<PrivateRoute element={<Bookings />} />} />
                <Route path="details" element={<PrivateRoute element={<BookingDetails />} />} />
            </Route>
            <Route path="/rooms" >
                <Route index element={<PrivateRoute element={<Rooms />} />} />
                <Route path="edit" element={<PrivateRoute element={<RoomEdit />} />} />
            </Route>
            <Route path="/contact" element={<PrivateRoute element={<Contact />} />} />
            <Route path="/users" >
                <Route index element={<PrivateRoute element={<Users />} />} />
                <Route path="edit" element={<PrivateRoute element={<UserEdit />} />} />
            </Route>
        </Routes>
    );
}

export default RoutesComponent;