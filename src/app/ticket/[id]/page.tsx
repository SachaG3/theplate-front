import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import CreateMessageTicket from "@/component/support/CreateMessageTicket";

export default async function Page({params}: { params: { id: string } }) {
    const data = await HttpService.get(API_URLs.ticketById(params.id));
    const dataMessage = (await HttpService.get(API_URLs.findByTicketId(params.id)))._embedded.Message;
    console.log(dataMessage);
    return (
        <>
            <h2>Restaurant Details</h2>
            <p>Ticket Name: {data.title}</p>
            <p>Ticket Description: {data.description}</p>
            <p>Message :</p>
            <ul>
                {dataMessage.map((Message: { id: string, contenu: string }) => (
                    <li key={Message.id}>{Message.contenu}</li>
                ))}
            </ul>
            <CreateMessageTicket ticketId={params.id}/>
        </>
    );
}
