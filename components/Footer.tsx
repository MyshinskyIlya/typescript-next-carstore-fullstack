import React from "react";
import { CarLogo } from ".";
import { footerLinks } from "@/constants";
import Link from "next/link";

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
                <div className="footer__links">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="footer__link">
                            <h3 className="font-bold">{link.title}</h3>
                            {link.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.url}
                                    className="text-[#666666]"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer__copyrights flex items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 sm:gap-2">
                <div className="sm:mr-0 mr-8">
                    @2023 CarHub. All Rights Reserved
                </div>
                <div className="footer__copyrights-link">
                    <Link href={"/"} className="text-[#666666]">
                        Privacy Policy
                    </Link>
                    <Link href={"/"} className="text-[#666666]">
                        Terms of Use
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
