const API_URL = "http://localhost:9090/api/";

export const API_URLs = {
    base: API_URL,
    auth: API_URL + "auth/login",
    restos: API_URL + "restaurant",
    users: API_URL + "users",
    tickets: API_URL + "ticket",
    Message: API_URL + "Message",
    restoById: (id: string | undefined) => API_URL + "restaurant/" + id,
    ticketById: (id: string) => API_URL + "ticket/" + id,
    findByTicketId: (id: string) => API_URL + "Message/search/findByTicketId?ticketId=" + id,
    findTicketByUserId: (id: string) => API_URL + "users/" + id + "/Ticket",
}
