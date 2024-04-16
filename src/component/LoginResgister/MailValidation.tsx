import {Input} from "@nextui-org/react";
import React from "react";

function MailValidation({value, onChange, placeholder}: {
    value: string,
    onChange: (value: string) => void,
    placeholder: string
}) {

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (value === "") return false;
        return !validateEmail(value);
    }, [value]);

    return (
        <Input
            value={value}
            type="email"
            variant="bordered"
            placeholder={placeholder}
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "success"}
            errorMessage={isInvalid ? "Please enter a valid email" : ""}
            onChange={e => onChange(e.target.value)}
        />
    );
}

export default MailValidation;
