import { User, changeUserStatus, newUser } from "./usersSlice";
import { useAppDispatch } from "../store";
import { ActionInterface } from "../../../App";
import { toast } from "react-toastify";

export const useNewUser = () => {
    const reduxDispatch = useAppDispatch();

    return (data: User) => {
        reduxDispatch(newUser(data));
        reduxDispatch({ type: changeUserStatus, payload: "idle" });
    };
}

export const useUpdateUser = () => {
    const reduxDispatch = useAppDispatch();

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

                reduxDispatch({ type: changeUserStatus, payload: "idle" });
                toast.success("User updated succesfully.");
            }
        } catch {
            toast.error("Couldn't update user...");
        }
    };
}