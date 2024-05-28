'use client'
import React, {useEffect, useState} from "react";
import HttpService from "@/services/HttpService";
import {API_URLs} from "@/services/API_URLs";
import Header from "@/component/Header";
import {useSession} from "next-auth/react";
import TicketSvg from "@/component/svg/TicketSvg";
import CreateMessageTicket from "@/component/support/CreateMessageTicket";

interface UserDetail {
    id: string;
    login: string;
}

interface UserDetailMap {
    [key: string]: UserDetail;
}

export default function Page({params}: { params: { id: string } }) {
    const [data, setData] = useState<any>(null);
    const [dataMessage, setDataMessage] = useState<any[]>([]);
    const [userDetails, setUserDetails] = useState<UserDetailMap>({});
    const {data: session} = useSession();
    const userId = session?.user?.id;

    useEffect(() => {
        async function fetchData() {
            const ticketData = await HttpService.get(API_URLs.ticketById(params.id));
            setData(ticketData);
            const messageData = (await HttpService.get(API_URLs.findByTicketId(params.id)))._embedded.Message;
            setDataMessage(messageData);

            const userDetailPromises = messageData.map(async (message: {
                _links: { user: { href: string; }; };
                id: string;
            }) => {
                const userData = await HttpService.get(message._links.user.href);
                return {messageId: message.id, userData: userData};
            });

            const userDetailsArray = await Promise.all(userDetailPromises);
            const userDetailsObject = userDetailsArray.reduce((acc: UserDetailMap, detail) => {
                acc[detail.messageId] = detail.userData;
                return acc;
            }, {});
            setUserDetails(userDetailsObject);
        }

        fetchData();
    }, [params.id]);

    return (
        <div className="min-h-screen flex flex-col" style={{minHeight: "100vh"}}>
            <Header returnText={"Support"} returnLink={"/"}/>
            <div className="flex-grow flex flex-col items-center p-4">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col items-center p-4">
                        <TicketSvg height={"200px"} width={"200px"}/>
                        {data && (
                            <>
                                <h2 className="text-center text-2xl font-bold mb-4">{data["title"]}</h2>
                                <p className="text-center mb-4">{data["description"]}</p>
                            </>
                        )}
                        <p className="text-center font-semibold">Messages :</p>
                        <ul className="w-full">
                            {dataMessage.map((Message: { id: string; contenu: string }) => (
                                <li key={Message.id} className="border p-2 my-2 rounded">
                                    {Message.contenu} - {userDetails[Message.id]?.login || "Chargement..."}
                                    {userDetails[Message.id]?.id === userId && " (moi)"}
                                </li>
                            ))}
                        </ul>
                        <CreateMessageTicket ticketId={params.id}/>
                    </div>
                </div>
            </div>
        </div>
    );
}