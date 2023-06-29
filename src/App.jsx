import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/advanced/PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import UserEdit from "./pages/UsersEdit";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute Element={<Dashboard />} />} />
      <Route path="/bookings" element={<PrivateRoute Element={<Bookings />} />} />
      <Route path="/rooms" element={<PrivateRoute Element={<Rooms />} />} />
      <Route path="/contact" element={<PrivateRoute Element={<Contact />} />} />
      <Route path="/users" >
        <Route index element={<PrivateRoute Element={<Users />} />} />
        <Route path="edit" element={<PrivateRoute Element={<UserEdit />} />} />
      </Route>
    </Routes>
  );
}

export default App;