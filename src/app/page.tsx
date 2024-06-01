import React from 'react';
import {Button, Link} from '@nextui-org/react';
import Header from '@/component/Header';
import RestosSvg from "@/component/svg/RestosSvg";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header returnText={"Accueil"} returnLink={"/"}/>
            <div className="flex-grow container mx-auto p-4 flex flex-col items-center">
                <RestosSvg height={"400px"} width={"400px"}/>
                <h1 className="text-xl md:text-2xl font-bold mb-2 text-center">Bienvenue sur notre site de
                    réservation</h1>
                <p className="mb-4 text-center">Réservez facilement votre table dans l'un de nos restaurants
                    partenaires.</p>
                <div
                    className="flex flex-col w-full space-y-2 md:flex-row md:space-y-0 md:space-x-2 justify-center items-center">
                    <Button
                        as={Link}
                        href="/restos"
                        color="primary"
                        className="w-full md:w-auto"
                    >
                        Voir les restaurants
                    </Button>
                    <Button
                        as={Link}
                        href="/about"
                        color="secondary"
                        className="w-full md:w-auto"
                    >
                        À propos de nous
                    </Button>
                    <Button
                        as={Link}
                        href="/ticket"
                        color="secondary"
                        className="w-full md:w-auto"
                    >
                        Support
                    </Button>
                </div>
            </div>
        </div>
    );
}
