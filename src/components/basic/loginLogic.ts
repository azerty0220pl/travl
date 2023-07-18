export const logged = () => {
    return localStorage.getItem("session") === "admin";
}

export const login = (user: string, pass: string) => {
    if (user === "admin" && pass === "password") {
        return true;
    }
    return false;
}