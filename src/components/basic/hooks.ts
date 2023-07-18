import { useContext, useEffect } from "react";
import { Context } from "../../App";

export const useRelocation = (x: string) => {
    const dispatch = useContext(Context).dispatch;

    useEffect(() => {
        dispatch!({ type: "page", page: x });
    }, [dispatch, x]);
}