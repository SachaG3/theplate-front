import CreateTicket from "@/component/support/CreateTicket";
import Header from "@/component/Header";
import TicketSvg from "@/component/svg/TicketSvg";
import React from "react";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col" style={{minHeight: "100vh"}}>
            <Header returnText={"Support"} returnLink={"/"}/>
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-sm">
                    <div className="flex flex-col items-center p-4">
                        <TicketSvg height={"200px"} width={"200px"}/>
                        <CreateTicket/>
                    </div>
                </div>
            </div>
        </div>
    );
}