import { Message, changeStatus } from "./messagesSlice";
import { useAppDispatch } from "../store";

const reduxDispatch = useAppDispatch();

export const useUpdateMessage = () => {
    return async (message: Message) => {
        let res: Response;
        try {
            res = await fetch(
                process.env.REACT_APP_API +
                "/messages/" + message._id,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: localStorage.getItem("token") || ""
                    },
                    body: JSON.stringify({ message: message })
                }
            );

            const data = await res.json();

            if (!data.error) {
                reduxDispatch({ type: changeStatus, payload: "idle" });
            }
        } catch { }
    };
}