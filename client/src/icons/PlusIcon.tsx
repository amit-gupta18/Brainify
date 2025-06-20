import { iconSizeVariants, type IconProps } from "."

export const PlusIcon = (props : IconProps) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={iconSizeVariants[props.size]}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

        </div>
    )
}

