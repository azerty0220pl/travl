import { User, newUser } from "./usersSlice";
import { useAppDispatch } from "../store";

export const useNewUser = () => {
    const dispatch = useAppDispatch();

    return (data: Partial<User>) => {
        dispatch(newUser(data));
    };
}