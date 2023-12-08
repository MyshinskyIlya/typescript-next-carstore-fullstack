import React from "react";
import { CarLogo } from ".";

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
                <div className="flex flex-col items-start justify-start gap-6">
                    <CarLogo width={118} height={18}></CarLogo>
                    <p className="text-base text-[#666666]">
                        CarHub 2023 <br />
                        All rights reserved &copy;
                    </p>
                </div>
                <div className="footer__links"></div>
            </div>
        </footer>
    );
};

export default Footer;
