import { MouseEventHandler, ReactNode } from "react";

export interface HomeProps {
    searchParams: FilterProps;
}

export interface CustomButtonProps {
    children: ReactNode;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "submit" | "reset" | "button" | undefined;
    rightIcon?: string;
    isDisable?: boolean;
}

export interface FuelsProp {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title?: "fuel" | "year";
    options: FuelsProp[];
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarsProp {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CarCardProps {
    car: CarsProp;
}

export interface CarDetailsProps {
    car: CarsProp;
    isOpen: boolean;
    closeModal: () => void;
}

export interface SearchButtonProps {
    children?: ReactNode;
    otherClasses?: string;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
}
