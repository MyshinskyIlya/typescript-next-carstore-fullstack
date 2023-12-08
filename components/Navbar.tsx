import Link from "next/link";
import React from "react";
import { CarLogo, CustomButton } from ".";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full h-16 z-10">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href={"/"} className="flex justify-center items-center">
                    <CarLogo width={118} height={18}></CarLogo>
                </Link>
                <CustomButton
                    btnType="button"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                >
                    Sign In
                </CustomButton>
            </div>
        </nav>
    );
};

export default Navbar;
