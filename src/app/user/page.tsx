'use client'
import Header from "@/component/Header";
import {useSession} from "next-auth/react";
import Logout from "@/component/UserLog/logout";
import {useRouter} from "next/navigation";

export default function Page() {
    const {data: session, status} = useSession();
    const userId = session?.user?.id;
    const router = useRouter();
    if (!userId) {
        router.push("/login")
        return null;
    }
    return (
        <div style={{minHeight: "100vh"}}>
            <Header returnText={"Compte"} returnLink={"/"}/>
            <Logout></Logout>
        </div>
    )
}
