import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ Element, ...rest }) => {
    return (
        localStorage.getItem("session") === "admin" ?
            <Element />
            :
            <Navigate to="/login" />
    );
}

export default PrivateRoute;