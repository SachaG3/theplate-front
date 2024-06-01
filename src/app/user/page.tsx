'use client'
import Header from "@/component/Header";
import {useSession} from "next-auth/react";
import UserInfo from "@/component/UserLog/UserInfo";
import Logout from "@/component/UserLog/logout";

export default function Page() {
    const {data: session, status} = useSession();
    const userId = session?.user?.id;
    if (!userId) {
        return <div>User not logged in</div>;
    }
    return (
        <div style={{minHeight: "100vh"}}>
            <Header returnText={"Compte"} returnLink={"/"}/>
            <UserInfo userId={userId}></UserInfo>
            <Logout></Logout>
        </div>
    )
}
