import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Button} from '@nextui-org/react';
import {signOut} from "@/auth";

const PageComponent = () => {
    const [isBrowser, setIsBrowser] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Cette vérification garantit que nous sommes dans un environnement de navigateur
        if (typeof window !== 'undefined') {
            setIsBrowser(true);
        }
    }, []);

    const handleSignOut = () => {
        if (isBrowser) {
            signOut().then(() => {
                router.push('/login');
            });
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <Button onClick={handleSignOut}>Déconnexion</Button>
        </div>
    );
};

export default PageComponent;
