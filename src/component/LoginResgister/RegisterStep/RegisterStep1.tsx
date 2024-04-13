import {Button} from "@nextui-org/react";
import Mailvalidation from "@/component/LoginResgister/MailValidation";
import React from "react";
import RestosSvg from "@/component/svg/RestosSvg";

function RegisterStep1({...props}: { className: string, onNext(): void }) {
    return (
        <section className={props.className}>
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="card w-full max-w-sm ">
                    <div className="flex flex-col items-center p-4">
                        <RestosSvg height={"350px"} width={"350px"}/>
                        <h2 className="card-title">Se connecter</h2>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <Mailvalidation placeholder={"email"}/>
                        </div>
                        <div className="card w-full max-w-sm mt-2">
                            <Button className={"w-full"} size={"md"} onClick={props.onNext}>Suivant</Button>
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