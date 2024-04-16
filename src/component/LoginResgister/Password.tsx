import React from "react";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";
import {Input} from "@nextui-org/react";

// Type props explicitement pour une meilleure intégration avec TypeScript
interface PasswordProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

function Password({placeholder, value, onChange}: PasswordProps) {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
            variant="bordered"
            placeholder={placeholder}
            endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                    ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                    )}
                </button>
            }
            type={isVisible ? "text" : "password"}
        />
    );
}

export default Password;
