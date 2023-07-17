export const logged = (): boolean => {
    return localStorage.getItem("session") === "admin";
}

export const login = (user: string, pass: string): boolean => {
    if (user === "admin" && pass === "password") {
        return true;
    }
    return false;
}