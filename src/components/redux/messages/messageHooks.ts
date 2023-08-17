import { Message, changeMessagesStatus } from "./messagesSlice";
import { useAppDispatch } from "../store";
import { toast } from "react-toastify";

export const useUpdateMessage = () => {
    const reduxDispatch = useAppDispatch();

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
                toast.success("Message updated.");
                reduxDispatch(changeMessagesStatus("idle"));
            } else {
                toast.error("Couldn't update message...");
            }
        } catch {
            toast.error("Couldn't update message...");
        }
    };
}