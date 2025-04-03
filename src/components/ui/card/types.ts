import { JSX } from "react";

export interface CardProps{
    className?: string,
    text?: number,
    header: string,
    icon: JSX.Element,
    loading: boolean,
    error?: string
}