import { Room, newRoom } from "./roomsSlice";
import { useAppDispatch } from "../store";

export const useNewRoom = () => {
    const dispatch = useAppDispatch();

    return (data: Partial<Room>) => {
        dispatch(newRoom(data));
    };
}