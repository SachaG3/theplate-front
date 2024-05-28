// src/app/ticket/all/page.tsx
'use client'
import React, {useEffect, useState} from "react";
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import Link from "next/link";
import Header from "@/component/Header";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Page() {
    const {data: session, status} = useSession();
    const [data, setData] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if (status === 'loading') return;

        // @ts-ignore
        if (!session || session.user?.role !== 'ROLE_ADMIN') {
            router.push('/403');
            return;
        }

        async function fetchData() {
            const ticketData = (await HttpService.get(API_URLs.tickets))._embedded.ticket;
            setData(ticketData);
        }

        fetchData();
    }, [status, session]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!Array.isArray(data)) {
        return (
            <>
                <Header returnText={"Accueil"} returnLink={"/"}/>
                <div className="min-h-screen flex flex-col items-center p-4">
                    <h2 className="text-center text-2xl font-bold mb-4">Tickets</h2>
                    <p>Les données reçues ne sont pas valides.</p>
                </div>
            </>
        );
    }

    return (
        <div style={{minHeight: "100vh"}}>
            <Header returnText={"Assistance"} returnLink={"/"}/>
            <div className="flex flex-col items-center p-4">
                <div className="w-full max-w-sm">
                    <h2 className="text-center text-2xl font-bold mb-4">Tickets</h2>
                    <ul className="w-full">
                        {data.map((ticket: { id: string; title: string }) => (
                            <li key={ticket.id} className="border p-2 my-2 rounded">
                                <Link href={`/ticket/${ticket.id}`} className="text-blue-600 hover:underline">
                                    {ticket.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}