import {Button} from "@nextui-org/react";
import MailValidation from "@/component/LoginResgister/MailValidation";
import React from "react";
import RestosSvg from "@/component/svg/RestosSvg";

interface Props {
    userData: { email: string; [key: string]: any };
    updateUserData: (data: { email: string }) => void;
    className: string;

    onNext(): void;
}

const RegisterStep1: React.FC<Props> = ({userData, updateUserData, className, onNext}) => {
    const handleChange = (e: string) => {
        updateUserData({email: e});
    };

    return (
        <section className={className}>
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="card w-full max-w-sm ">
                    <div className="flex flex-col items-center p-4">
                        <RestosSvg height={"350px"} width={"350px"}/>
                        <h2 className="card-title">Inscription</h2>  {/* Changed from "Se connecter" to "Inscription" */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <MailValidation placeholder="Enter your email address" value={userData.email}
                                            onChange={handleChange}/>
                        </div>
                        <div className="card w-full max-w-sm mt-2">
                            <Button className={"w-full"} size={"md"} onClick={onNext}>Suivant</Button>
                        </div>
                        <div className="flex justify-between w-full py-2">
                            <a href="/login" className="link link-hover">Se connecter</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterStep1;
