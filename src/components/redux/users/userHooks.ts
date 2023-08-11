import { User, changeStatus, newUser } from "./usersSlice";
import { useAppDispatch } from "../store";
import { ActionInterface } from "../../../App";

export const useNewUser = () => {
    const reduxDispatch = useAppDispatch();
    const dispatch = useAppDispatch();

    return (data: User) => {
        dispatch(newUser(data));
        reduxDispatch({type: changeStatus, payload: "idle"});
    };
}

export const useUpdateUser = () => {
    const reduxDispatch = useAppDispatch();

    return async (user: User, dispatch: React.Dispatch<ActionInterface>) => {
        const res = await fetch(
            process.env.REACT_APP_API +
            "/users/" + user._id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("token") || ""
                },
                body: JSON.stringify({ user: user })
            }
        );

        const data = await res.json();

        if (!data.error) {
            dispatch({
                type: "user",
                user: user
            });

            reduxDispatch({type: changeStatus, payload: "idle"});
        }
    };
}