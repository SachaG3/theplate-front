import React from 'react';

import RestosSvg from "@/component/svg/RestosSvg";
import Header from "@/component/Header";
import {signIn} from "@/auth";
import LoginForm from "@/component/LoginResgister/loginForm";

export default function Login() {


    return (
        <div className="min-h-screen flex flex-col" style={{minHeight: "100vh"}}>
            <Header returnText={"Login"} returnLink={"/"}/>
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="card w-full max-w-sm">
                    <div className="flex flex-col items-center p-4">
                        <RestosSvg height={"300px"} width={"300px"}/>
                        <h2 className="card-title">Se connecter</h2>
                        <form className="form-control w-full" action={async (formData) => {
                            "use server"
                            await signIn("credentials", formData, {redirectTo: "/"})
                        }}>
                            <LoginForm/>

                        </form>
                        <div className="flex justify-between w-full py-2">
                            <a href="/register" className="link link-hover">S'inscrire</a>
                            <a href="#" className="link link-hover">Forgot your password</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
