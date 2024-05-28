'use client';
import React, {useEffect, useState} from "react";
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import Link from "next/link";
import Header from "@/component/Header";
import {useSession} from "next-auth/react";

export default function UserTicketsPage() {
    const [tickets, setTickets] = useState([]);
    const {data: session} = useSession();
    const userId = session?.user?.email;

    useEffect(() => {
        if (userId) {
            const fetchTickets = async () => {
                try {
                    const response = await HttpService.get(API_URLs.findTicketByUserId(userId));
                    const ticketsData = response?._embedded?.ticket;
                    if (ticketsData) {
                        setTickets(ticketsData);
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des tickets:", error);
                }
            };

            fetchTickets();
        }
    }, [userId]);

    if (!Array.isArray(tickets)) {
        return (
            <>
                <Header returnText={"Accueil"} returnLink={"/"}/>
                <div className="min-h-screen flex flex-col items-center p-4">
                    <h2 className="text-center text-2xl font-bold mb-4">Tickets de l'utilisateur</h2>
                    <p>Les données reçues ne sont pas valides.</p>
                </div>
            </>
        );
    }

    return (
        <div style={{minHeight: "100vh"}}>
            <Header returnText={"Accueil"} returnLink={"/"}/>
            <div className=" flex flex-col items-center p-4">
                <div className="w-full max-w-sm">
                    <h2 className="text-center text-2xl font-bold mb-4">Tickets de l'utilisateur</h2>
                    <ul className="w-full">
                        {tickets.map((ticket) => (
                            <li key={ticket["id"]} className="border p-2 my-2 rounded">
                                <Link href={`/ticket/${ticket["id"]}`} className="text-blue-600 hover:underline">
                                    {ticket["title"]}
                                </Link>
                            </li>
                        ))}
                        <p>{userId}</p>
                    </ul>
                </div>
            </div>
        </div>
    );
}