import { Navigate } from "react-router-dom";
import { logged } from "../basic/loginLogic";

export const PrivateRoute = ({ Element, ...rest }) => {
    return (
        logged() ?
            Element
            :
            <Navigate to="/login" />
    );
}

export default PrivateRoute;