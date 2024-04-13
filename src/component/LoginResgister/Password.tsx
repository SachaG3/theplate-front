'use client'
import React from "react";

import {EyeFilledIcon, EyeSlashFilledIcon} from "@nextui-org/shared-icons";
import {Input} from "@nextui-org/react";

function password({...props}: { placeholder: string }) {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            variant="bordered"
            placeholder={props.placeholder}
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

export default password;