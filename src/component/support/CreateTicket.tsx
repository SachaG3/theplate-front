'use client'
import {useState} from 'react';
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import {useSession} from "next-auth/react";
import {Button, Input, Textarea} from '@nextui-org/react';

const CreateTicket = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
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
                title,
                statut: 0,
                description,
                user: "/api/users/" + userId,
            });
            console.log('Ticket créé:', newTicket);
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Erreur lors de la création du ticket:', error);
        }
    };

    return (
        <div className="w-full max-w-sm">
            <h2 className="text-center">Créer un ticket</h2>
            <form onSubmit={handleSubmit} className="form-control w-full">
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Titre:</span>
                    </label>
                    <Input placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth/>
                </div>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Description:</span>
                    </label>
                    <Textarea placeholder="Description" value={description}
                              onChange={(e) => setDescription(e.target.value)} fullWidth/>
                </div>
                <Button type="submit" className="w-full">Créer</Button>
            </form>
        </div>
    );
};

export default CreateTicket;