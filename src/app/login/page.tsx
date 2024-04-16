'use client'
import React, {useState} from 'react';
import Password from "@/component/LoginResgister/Password";
import {Button} from "@nextui-org/react";
import MailValidation from "@/component/LoginResgister/MailValidation";
import RestosSvg from "@/component/svg/RestosSvg";
import HttpService from "@/services/HttpService";
import Header from "@/component/Header";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const data = {email: email, password: password};
            const response = await HttpService.post('auth/login', data);
            if (response.success) {
                console.log("Utilisateur connecté avec succès!");
            } else {
                console.log("Erreur de connexion : identifiants invalides.");
            }
        } catch (error) {
            console.error("Une erreur est survenue lors de la connexion:", error);
        }
    };


    return (
        <div className="min-h-screen flex flex-col" style={{minHeight: "100svh"}}>
            <Header returnText={"Login"} returnLink={"/"}/>
            <div className="flex-grow flex items-center justify-center p-4">
                
                <div className="card w-full max-w-sm">
                    <div className="flex flex-col items-center p-4">
                        <RestosSvg height={"300px"} width={"300px"}/>
                        <h2 className="card-title">Se connecter</h2>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <MailValidation placeholder="email" value={email} onChange={setEmail}/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your password</span>
                            </label>
                            <Password placeholder="Mot de passe" value={password} onChange={setPassword}/>
                        </div>
                        <div className="card w-full max-w-sm mt-2">
                            <Button className="w-full" size="md" onClick={handleLogin}>Se connecter</Button>
                        </div>
                        <div className="flex justify-between w-full py-2">
                            <a href="/register" className="link link-hover">S'inscrire</a>
                            <a href="#" className="link link-hover">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
