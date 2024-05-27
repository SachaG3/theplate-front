// pages/tickets/index.tsx
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import Link from "next/link";

export default async function Page() {
    const data = (await HttpService.get(API_URLs.tickets))._embedded.ticket;
    console.log(data);  // Ajoutez cette ligne pour vérifier la structure des données

    if (!Array.isArray(data)) {
        return (
            <>
                <h2>Tickets</h2>
                <p>Les données reçues ne sont pas valides.</p>
            </>
        );
    }

    return (
        <>
            <h2>Tickets</h2>
            <ul>
                {data.map((ticket: { id: string, title: string }) => (
                    // eslint-disable-next-line react/jsx-key
                    <Link href={`${ticket.id}`}>
                        <li key={ticket.id}>{ticket.title}</li>
                    </Link>
                ))}
            </ul>
        </>
    );
}