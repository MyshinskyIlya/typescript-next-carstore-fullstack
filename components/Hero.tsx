"use client";

import React from "react";
import { CustomButton } from ".";
import Image from "next/image";

const Hero = () => {
    const handleScroll = () => {};

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

                <CustomButton
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                >
                    Explore Cars
                </CustomButton>
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image
                        src="/hero.png"
                        alt="hero icon"
                        fill
                        className="object-contain"
                    ></Image>
                    <div className="hero__image-overlay"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
