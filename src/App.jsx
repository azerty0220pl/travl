import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import Users from "./pages/Users";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/Bookings">
        <Bookings />
        </Route>
      <Route path="/Rooms">
        <Rooms />
        </Route>
      <Route path="/Contact">
        <Contact />
        </Route>
      <Route path="/Users">
        <Users />
        </Route>
    </Routes>
  );
}

export default App;
