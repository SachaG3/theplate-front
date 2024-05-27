const API_URL = "http://127.0.0.1:9090/api/";

export const API_URLs = {
    base: API_URL,
    auth: API_URL + "auth/login",
    restos: API_URL + "restaurants",
    users: API_URL + "users",
    restaurant: API_URL + "restaurant?size=1240",
    restoById: (id: string) => API_URL + "restaurants/" + id,
}
