'use client'
import {signOut, useSession} from "next-auth/react";
import {Button} from "@nextui-org/react";

function Logout() {
    const {data: session} = useSession();

    if (session) {
        return (
            <div className="flex justify-center mt-4">
                <Button onClick={() => signOut()}>Déconnexion</Button>
            </div>
        );
    }

    return null;
}

export default Logout;
