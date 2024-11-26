import React from 'react';
import {Button} from "@nextui-org/react";

interface Props {
    children: React.ReactNode;
    color?: "primary" | "transparent" | "danger";
    className?: string;
}

function MyButton({children,color, className}: Props) {
    if (color === "primary") {
        className += ` text-white bg-[#1560BD] hover:bg-[#0f488e]`
    }else if (color === "transparent") {
        className += ` text-black bg-transparent border border-transparent hover:border-[#1560BD] hover:text-[#1560BD]`
    }else if (color === "danger") {
        className += ` text-red-500 bg-transparent border border-transparent hover:border-red-500`
    }
    console.log("color", color)
    return (
        <Button className={`${className} rounded px-4 transition ${color}`}>
            {children}
        </Button>
    );
}

export default MyButton;
