import { MouseEventHandler, ReactNode } from "react";

export interface CustomButtonProps {
    children: ReactNode;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "submit" | "reset" | "button" | undefined;
}
