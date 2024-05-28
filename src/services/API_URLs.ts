const API_URL = "http://the-plate-front.sts-sio-caen.info/";

export const API_URLs = {
    base: API_URL,
    auth: API_URL + "auth/login",
    restos: API_URL + "restaurant",
    users: API_URL + "users",
    tickets: API_URL + "ticket",
    Message: API_URL + "Message",
    ticketById: (id: string) => API_URL + "ticket/" + id,
    findByTicketId: (id: string) => API_URL + "Message/search/findByTicketId?ticketId=" + id,
    findTicketByUserId: (id: string) => API_URL + "users/" + id + "/Ticket",
    restaurant: API_URL + "restaurant?size=1240",
    restoById: (id: string) => API_URL + "restaurants/" + id,
}
