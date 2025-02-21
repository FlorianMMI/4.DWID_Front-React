import React from "react";

interface AvatarProps {
    url: string;
    alt: string;
    className?: string;
}

export default function Avatar(props: AvatarProps) {
    return (
        <img src={props.url} alt={props.alt} className={`sepia ${props.className}`} />
    );
}