import React, {useState} from "react";
import {Button} from "@nextui-org/react";
import Password from "@/component/LoginResgister/Password";

interface Props {
    userData: { password: string; [key: string]: any };
    updateUserData: (data: { password: string }) => void;
    className: string;

    onRegister(): void;
}

const RegisterStep3: React.FC<Props> = ({userData, updateUserData, className, onRegister}) => {
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegistration = () => {
        if (userData.password === confirmPassword) {
            onRegister();
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <section className={className}>
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="card w-full max-w-sm">
                    <div className="flex flex-col items-center p-4">
                        <h2 className="card-title">Set Your Password</h2>
                        <Password placeholder="Password" value={userData.password}
                                  onChange={(value) => updateUserData({password: value})}/>
                        <Password placeholder="Confirm Password" value={confirmPassword} onChange={setConfirmPassword}/>
                        <div className="card w-full max-w-sm mt-2">
                            <Button className={"w-full"} size={"md"} onClick={handleRegistration}>Register</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterStep3;
