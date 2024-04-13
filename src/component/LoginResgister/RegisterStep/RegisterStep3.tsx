import React from "react";
import Password from "@/component/LoginResgister/Password";
import PasswordSvg from "@/component/svg/PasswordSvg";
import {Button} from "@nextui-org/react";

function RegisterStep1({...props}: { className: string, onNext(): void }) {
    return (
        <section className={props.className}>
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="card w-full max-w-sm ">

                    <div className="flex flex-col items-center p-4">
                        <PasswordSvg height={"300px"} width={"300px"}/>
                        <h2 className="card-title">Entrer votre mot de passe !</h2>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <Password placeholder={"Password"}/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <Password placeholder={"verify Password"}/>
                        </div>
                        <div className="card w-full max-w-sm mt-2">
                            <Button className={"w-full"} size={"md"}>S'inscrire</Button>
                        </div>
                        <div className="flex justify-between w-full py-2">
                            <a href="/login" className="link link-hover">Se connecter</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterStep1;