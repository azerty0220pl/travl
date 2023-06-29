export const logged = () => {
    return localStorage.getItem("session") === "admin";
}

export const login = (user, pass) => {
    if (user === "admin" && pass === "password") {
        localStorage.setItem("session", user);
        return true;
    }
    return false;
}