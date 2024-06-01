const API_URL = "http://the-plate-back.sts-sio-caen.info/api/";

export const API_URLs = {
    base: API_URL,
    auth: API_URL + "auth/login",
    restos: API_URL + "restaurant",

    users: API_URL + "users",
    findByUserId: (id: string) => API_URL + "users/" + id,
    tickets: API_URL + "ticket",
    Message: API_URL + "Message",
    ticketById: (id: string) => API_URL + "ticket/" + id,
    findByTicketId: (id: string) => API_URL + "Message/search/findByTicketId?ticketId=" + id,
    findTicketByUserId: (id: string) => API_URL + "users/" + id + "/Ticket",
    restaurant: API_URL + "restaurant?size=1240",
    restoById: (id: string) => API_URL + "restaurant/" + id,
    findRestaurantById: (id: string) => API_URL + "plat/search/findByRestaurantId?restaurantId=" + id,
}
