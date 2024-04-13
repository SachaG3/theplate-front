import Header from "@/component/Header";
import React from 'react';

import Password from "@/component/LoginResgister/Password";
import {Button} from "@nextui-org/react";
import MailValidation from "@/component/LoginResgister/MailValidation";
import RestosSvg from "@/component/svg/RestosSvg";


export default function Login() {
    return (
        <div className="min-h-screen flex flex-col" style={{minHeight: "100svh"}}>
            <Header returnLink="/" returnText="Login"/>
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="card w-full max-w-sm ">
                    <div className="flex flex-col items-center p-4">
                        <RestosSvg height={"300px"} width={"300px"}/>
                        <h2 className="card-title">Se connecter</h2>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <MailValidation placeholder={"email"}/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your password</span>
                            </label>
                            <Password placeholder={'Mot de passe'}/>
                        </div>
                        <div className="card w-full max-w-sm mt-2">
                            <Button className="w-full" size="md">Se connecter</Button>
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
