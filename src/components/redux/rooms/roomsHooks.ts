import { Room, changeStatus, newRoom } from "./roomsSlice";
import { useAppDispatch } from "../store";

export const useNewRoom = () => {
    const reduxDispatch = useAppDispatch();
    const dispatch = useAppDispatch();

    return (data: Room) => {
        dispatch(newRoom(data));
        reduxDispatch({type: changeStatus, payload: "idle"});
    };
}