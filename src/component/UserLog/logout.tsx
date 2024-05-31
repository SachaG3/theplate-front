'use client'
import {signOut, useSession} from "next-auth/react";
import {Button} from "@nextui-org/react";

function Logout() {
    const {data: session} = useSession();

    if (session) {
        return <Button onClick={() => signOut()}>Déconnexion</Button>;
    }

    return null;
}

export default Logout;
