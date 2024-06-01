'use client'
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {Button} from "@nextui-org/react";

function Logout() {
    const {data: session} = useSession();
    const router = useRouter();

    const handleSignOut = () => {
        signOut().then(() => {
            router.push('/login');
        });
    };

    if (session) {
        return (
            <div className="flex justify-center mt-4">
                <Button onClick={handleSignOut}>Déconnexion</Button>
            </div>
        );
    }

    return null;
}

export default Logout;
