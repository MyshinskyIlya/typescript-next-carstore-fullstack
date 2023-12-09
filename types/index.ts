import { MouseEventHandler, ReactNode } from "react";

export interface CustomButtonProps {
    children: ReactNode;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "submit" | "reset" | "button" | undefined;
}

export interface CustomFilterProps {
    title?: "fuel" | "year";
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
