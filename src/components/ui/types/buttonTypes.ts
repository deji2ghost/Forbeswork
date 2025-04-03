import { ReactNode } from "react";

export interface buttonTypes{
    children: ReactNode,
    className?: string,
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean
}