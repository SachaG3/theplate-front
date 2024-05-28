'use client'
import {useState} from 'react';
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import {useSession} from "next-auth/react";
import {Button, Textarea} from '@nextui-org/react';

export function CreateMessageTicket({ticketId}: { ticketId: string }) {
    const [contenu, setContenu] = useState('');
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
        <div className="w-full max-w-sm mt-4">
            <h2 className="text-center text-xl font-bold mb-4">Créer un message</h2>
            <form onSubmit={handleSubmit} className="form-control w-full">
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Contenu:</span>
                    </label>
                    <Textarea placeholder="Contenu" value={contenu} onChange={(e) => setContenu(e.target.value)}
                              fullWidth/>
                </div>
                <Button type="submit" className="w-full">Créer</Button>
            </form>
        </div>
    );
}

export default CreateMessageTicket;