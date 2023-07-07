import { useDispatch } from "react-redux"
import { changeArchive, changeRead } from "./messagesSlice";

export const useChangeRead = (id) => {
    const dispatch = useDispatch();

    return () => {
        dispatch(changeRead(id));
    }
}

export const useChangeArchive = (id) => {
    const dispatch = useDispatch();
    
    return () => {
        dispatch(changeArchive(id));
    }
}