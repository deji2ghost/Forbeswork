import { cn } from "../../lib/utils"
import { buttonTypes } from "./types/buttonTypes"

export const Button:React.FC<buttonTypes> = ({ children, className, handleClick, disabled }) => {
    return(
        <button disabled={disabled} onClick={handleClick} className={cn("inline-flex w-full items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-[5px] border border-offGrey p-2 text-sm font-medium bg-offGrey hover:bg-grey text-white transition-all outline-none", className)}>
            {children}
        </button>
    )
}