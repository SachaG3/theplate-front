import {Button, Input} from "@nextui-org/react";
import React from "react";

function RegisterStep1({...props}: { className: string, onNext(): void }) {
    return (
        <section className={props.className}>
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="card w-full max-w-sm ">
                    <div className="flex flex-col items-center p-4">
                        <h2 className="card-title">Information Personnelles</h2>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <Input placeholder={"Nom"}/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <Input placeholder={"Prénom"}/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <Input placeholder={"Date de naissance"}/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <Input placeholder={"Numéro de téléphone"}/>
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