'use client'

import {Input} from "@nextui-org/react";
import React from "react";

function MailValidation({...props}: { placeholder: string }) {
    const [value, setValue] = React.useState("");

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);

    return (
        <Input
            value={value}
            type="email"
            variant="bordered"
            placeholder={props.placeholder}
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "success"}
            errorMessage={isInvalid && "Please enter a valid email"}
            onValueChange={setValue}
        />
    );

}

export default MailValidation;