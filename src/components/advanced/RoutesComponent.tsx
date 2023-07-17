import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Bookings from "../../pages/Bookings";
import Rooms from "../../pages/Rooms";
import Contact from "../../pages/Contact";
import Users from "../../pages/Users";
import UserEdit from "../../pages/UsersEdit";
import BookingDetails from "../../pages/BookingDetails";
import RoomEdit from "../../pages/RoomEdit";
import UserNew from "../../pages/UserNew";

const RoutesComponent = () : React.JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings">
                <Route index element={<Bookings />} />
                <Route path="details" element={<BookingDetails />} />
            </Route>
            <Route path="/rooms" >
                <Route index element={<Rooms />} />
                <Route path="new" element={<RoomEdit />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" >
                <Route index element={<Users />} />
                <Route path="edit" element={<UserEdit />} />
                <Route path="new" element={<UserNew />} />
            </Route>
        </Routes>
    );
}

export default RoutesComponent;