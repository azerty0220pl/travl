import fetch from "cross-fetch";
import { ActionInterface } from "../../App";

export const logged = () => {
    return localStorage.getItem("session") === "admin";
}

export const login = async (user: string, pass: string, dispatch: React.Dispatch<ActionInterface>) => {
    try {
        const res = await fetch(process.env.REACT_APP_API + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
            return "Logged in";
        }
    } catch {
        return "Server Error";
    }

    return "Wrong credentials";
}