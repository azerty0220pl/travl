import { Room, changeRoomStatus, newRoom } from "./roomsSlice";
import { useAppDispatch } from "../store";

export const useNewRoom = () => {
    const reduxDispatch = useAppDispatch();
    const dispatch = useAppDispatch();

    return (data: Partial<Room>) => {
        dispatch(newRoom(data));
        reduxDispatch({type: changeRoomStatus, payload: "idle"});
    };
}