import { useDispatch } from "react-redux";
import { newRoom } from "./roomsSlice";

export const useNewRoom = () => {
    const dispatch = useDispatch();

    return (data) => {
        dispatch(newRoom(data));
    }
}