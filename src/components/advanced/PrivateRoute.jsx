import { Navigate } from "react-router-dom";
import { logged } from "../basic/loginLogic";

export const PrivateRoute = ({ element }) => {
    return (
        logged() ?
            element
            :
            <Navigate to="/login" />
    );
}

export default PrivateRoute;