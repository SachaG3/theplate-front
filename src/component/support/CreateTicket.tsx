'use client'
import {useState} from 'react';
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import {useSession} from "next-auth/react";

const CreerTicket = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Utiliser useSession au niveau supérieur du composant
    const {data: session} = useSession();
    const userId = session?.user?.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userId) {
            console.error('Aucun utilisateur connecté.');
            return;
        }

        try {
            const newTicket = await HttpService.post(API_URLs.tickets, {
                title,
                statut: 0,
                description,
                user_id: {id: userId}
            });
            console.log('Ticket créé:', newTicket);
            setTitle('');
            setDescription('');
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
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button type="submit">Créer</button>
            </form>
        </div>
    );
};

export default CreerTicket;
