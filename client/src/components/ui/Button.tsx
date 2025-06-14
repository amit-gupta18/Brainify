import type { ReactElement } from "react";


export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string,
    startIcon?: ReactElement | null;
    endIcon?: ReactElement | null;
    onClick: () => void;
}



const VariantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600 ",
}

const defaultStyles = " m-2 p-4 flex justify-center items-center gap-2"

const sizeStyles= {
    "sm" : "px-1 py-1 rounded-sm",
    "md" : "px-2 py-2 rounded-md",
    "lg" : "px-4 py-3 rounded-lg"
}


export const Button = (props: ButtonProps) => {
    console.log(props);
    return (
        <button className={`${VariantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`} >{props.startIcon} {props.text} {props.endIcon}</button>
    )
}   
  