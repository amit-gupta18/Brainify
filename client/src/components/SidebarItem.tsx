import type { ReactElement } from "react"

export function SidebarItem({text , icon} : {
    text : string, 
    icon : ReactElement
}){
    return(
        <div className="flex font-semibold text-md gap-4 m-2 p-2 rounded-lg hover:bg-gray-400  duration-300 transition-all">
             {icon}{text}
        </div>
    )
}