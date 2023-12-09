"use client";

import React from "react";
import { CustomButton } from ".";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find, book or rent a car — quickly and easily!
                </h1>
                <p className="hero__subtitle">
                    Streamline your car rental experience with our effortles
                    booking process.
                </p>

                <Link href={"#discover"}>
                    <CustomButton containerStyles="bg-primary-blue text-white rounded-full mt-10">
                        Explore Cars
                    </CustomButton>
                </Link>
            </div>
            <div className="hero__image-container block">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="hero icon"
                        fill
                        className="object-contain"
                    ></Image>
                </div>
                <div className="hero__image-overlay"></div>
            </div>
        </section>
    );
};

export default Hero;
