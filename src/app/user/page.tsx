'use client'
import Header from "@/component/Header";
import {useSession} from "next-auth/react";
import UserInfo from "@/component/UserLog/UserInfo";
import Logout from "@/component/UserLog/logout";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Page() {
    const {data: session, status} = useSession();
    const userId = session?.user?.id;
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push("/login");
        }
    }, [status, router]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!userId) {
        return null;
    }

    return (
        <div style={{minHeight: "100vh"}}>
            <Header returnText={"Compte"} returnLink={"/"}/>
            <UserInfo userId={userId}></UserInfo>
            <Logout></Logout>
        </div>
    )
}
