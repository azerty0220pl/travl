import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
