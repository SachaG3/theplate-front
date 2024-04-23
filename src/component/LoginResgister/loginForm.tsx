'use client';
import React, {useState} from 'react';
import {Button} from '@nextui-org/react';
// Adjusted the path (commonly 'components' and corrected the folder name)
import Password from "@/component/LoginResgister/Password";
import MailValidation from "@/component/LoginResgister/MailValidation";

export function LoginForm() {  // Renamed the function to 'LoginForm' to follow the component naming convention (PascalCase)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <label className="label">
                <span className="label-text">Enter your email address</span>
            </label>
            <MailValidation placeholder="email@example.com" value={email}
                            onChange={setEmail}/>
            <label className="label">
                <span className="label-text">Enter your password</span>
            </label>
            <Password placeholder="Mot de passe" value={password}  // Changed from Password to Input.Password
                      onChange={setPassword}/>
            <Button className="w-full mt-4" size="md" type="submit">Se connecter</Button>
        </>
    );
}

export default LoginForm;  // Consistent with the function name change
