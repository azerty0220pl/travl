import { useDispatch } from "react-redux";
import { newUser } from "./usersSlice";

export const useNewUser = () => {
    const dispatch = useDispatch();

    return (data) => {
        dispatch(newUser(data));
    };
}