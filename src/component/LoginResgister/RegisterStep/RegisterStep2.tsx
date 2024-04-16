import React from "react";
import {Button, Input} from "@nextui-org/react";

interface Props {
    userData: { name: string; firstName: string; [key: string]: any };
    updateUserData: (data: Partial<{ name: string; firstName: string }>) => void;
    className: string;

    onNext(): void;
}

const RegisterStep2: React.FC<Props> = ({userData, updateUserData, className, onNext}) => {
    return (
        <section className={className}>
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="card w-full max-w-sm">
                    <div className="flex flex-col items-center p-4">
                        <h2 className="card-title">Personal Information</h2>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your name</span>
                            </label>
                            <Input placeholder="Name" value={userData.name}
                                   onChange={(e) => updateUserData({name: e.target.value})}/>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Enter your first name</span>
                            </label>
                            <Input placeholder="First Name" value={userData.firstName}
                                   onChange={(e) => updateUserData({firstName: e.target.value})}/>
                        </div>
                        <div className="card w-full max-w-sm mt-2">
                            <Button className={"w-full"} size={"md"} onClick={onNext}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterStep2;
