import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: ReactElement;
    click?: () => void; 
}
    
const variantClasses = {
    'primary': 'bg-purple-700 text-white',
    'secondary': 'bg-purple-200 text-purple-400',

}
const defaultStyles = "px-4 py-2 rounded-lg font-light flex justify-center items-center gap-2 cursor-pointer "

export function Button({ variant, text, startIcon , click }: ButtonProps) {
    return (
        <button className={variantClasses[variant] + " " + defaultStyles} onClick = {click}>
            {startIcon}
            {text}
        </button>
    )
}