import { cn } from "../../lib/utils"
import { buttonTypes } from "./types/buttonTypes"

export const Button:React.FC<buttonTypes> = ({ children, className }) => {
    return(
        <button className={cn("inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-[5px] border border-offGrey p-2 text-sm font-medium transition-all outline-none", className)}>
            {children}
        </button>
    )
}