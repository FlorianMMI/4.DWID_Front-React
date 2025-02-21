import React from "react";

interface EmailProps {
    children?: string;
    className?: string;
}

function checkEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export default function Email(props: EmailProps) {
    if (props.children == undefined || props.children == "") {
        return null;
    }
    if (checkEmail(props.children) == false){
        console.error("Invalid email" + props.children);
        return null;
    }

    return (
        <span className={`text-xl text-green-500 ${props.className}`}>{props.children}</span>
    )
}

 