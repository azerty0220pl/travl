import { User, changeStatus, newUser } from "./usersSlice";
import { useAppDispatch } from "../store";
import { ActionInterface } from "../../../App";

const reduxDispatch = useAppDispatch();

export const useNewUser = () => {
    return (data: User) => {
        reduxDispatch(newUser(data));
        reduxDispatch({ type: changeStatus, payload: "idle" });
    };
}

export const useUpdateUser = () => {
    return async (user: User, dispatch: React.Dispatch<ActionInterface>) => {
        let res: Response;
        try {
            res = await fetch(
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

                reduxDispatch({ type: changeStatus, payload: "idle" });
            }
        } catch { }
    };
}