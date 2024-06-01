'use client'
import Header from "@/component/Header";
import {useSession} from "next-auth/react";
import Logout from "@/component/UserLog/logout";


export default function Page() {
    const {data: session, status} = useSession();
    const userId = session?.user?.id;

    return (
        <div style={{minHeight: "100vh"}}>
            <Header returnText={"Compte"} returnLink={"/"}/>
            <Logout></Logout>
        </div>
    )
}
