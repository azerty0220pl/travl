import { useDispatch } from "react-redux"
import { changeArchive, changeRead } from "./messagesSlice";

export const useChangeRead = (id) => {
    const dispacht = useDispatch();

    return () => {
        dispacht(changeRead(id));
    }
}

export const useChangeArchive = (id) => {
    const dispacht = useDispatch();
    
    return () => {
        dispacht(changeArchive(id));
    }
}