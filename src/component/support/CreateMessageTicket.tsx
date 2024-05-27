'use client'
import {useState} from 'react';
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import {useSession} from "next-auth/react";

export function CreerTicket({ticketId}: {
    ticketId: string
}) {
    {
        const [contenu, setContenu] = useState('');

        // Utiliser useSession au niveau supérieur du composant
        const {data: session} = useSession();
        const userId = session?.user?.id;

        const handleSubmit = async (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            if (!userId) {
                console.error('Aucun utilisateur connecté.');
                return;
            }

            try {
                const newTicket = await HttpService.post(API_URLs.Message, {
                    contenu,
                    ticket: "/api/ticket/" + ticketId,
                    user: "/api/users/" + userId,
                });
                console.log('Ticket créé:', newTicket);
                setContenu('');
            } catch (error) {
                console.error('Erreur lors de la création du ticket:', error);
            }
        };

        return (
            <div>
                <h2>Créer un ticket</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Titre:</label>
                        <input type="text" value={contenu} onChange={(e) => setContenu(e.target.value)}/>
                    </div>
                    <button type="submit">Créer</button>
                </form>
            </div>
        );
    }
}

export default CreerTicket;
