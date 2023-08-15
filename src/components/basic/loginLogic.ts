import fetch from "cross-fetch";
import { ActionInterface } from "../../App";

export const logged = async (dispatch: React.Dispatch<ActionInterface>) => {
    try {
        const res = await fetch(process.env.REACT_APP_API + "/logged", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token") || "",
            },
            body: JSON.stringify({
                username: localStorage.getItem("username") || ""
            })
        });

        const data = await res.json();
        if (!data.error) {
            dispatch({ type: "login", success: true, user: data.user });
            return true;
        }
    } catch { }

    dispatch({ type: "login", success: false, user: undefined });
    localStorage.clear();
    return false;
}

export const login = async (user: string, pass: string, dispatch: React.Dispatch<ActionInterface>) => {
    try {
        const res = await fetch(process.env.REACT_APP_API + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user,
                password: pass
            })
        });

        const data = await res.json();
        if (data.error === false) {
            dispatch({ type: "login", success: true, user: data.user });
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.user.name);
            return "Logged in";
        }
    } catch {
        dispatch({ type: "login", success: false, user: undefined });
        localStorage.clear();
        return "Server Error";
    }

    dispatch({ type: "login", success: false, user: undefined });
    localStorage.clear();
    return "Wrong credentials";
}