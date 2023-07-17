import { changeArchive, changeRead } from "./messagesSlice";
import { useAppDispatch } from "../store";

export const useChangeRead = (id: number) => {
    const dispatch = useAppDispatch();

    return () => {
        dispatch(changeRead(id));
    };
}

export const useChangeArchive = (id) => {
    const dispatch = useAppDispatch();
    
    return () => {
        dispatch(changeArchive(id));
    };
}