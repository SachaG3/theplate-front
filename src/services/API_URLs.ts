const API_URL = "http://127.0.0.1:8080/api/";

export const API_URLs = {
    base: API_URL,
    auth: API_URL + "auth/login",
    restos: API_URL + "restaurants",
    users: API_URL + "users",
    restoById: (id: string) => API_URL + "restaurants/" + id,
}
