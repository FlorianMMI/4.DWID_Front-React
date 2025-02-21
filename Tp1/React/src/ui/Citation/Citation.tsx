import React from "react";


interface CitationProps {
    children?: string;
    className?: string;
}


export default function Citation(props: CitationProps) {
    if (props.children == undefined || props.children == "") {
    
        return null;

    }
    return (
        <span className={`text-sm text-left text-black ${props.className}`}>{props.children}</span>
    );
}