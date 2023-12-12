"use client";

import { CarCardProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { FC, useState } from "react";
import { CustomButton, CarDetails } from ".";

const CarCard: FC<CarCardProps> = ({ car }) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <div className="car-card group">
            <div className="card-car-card__content">
                <h1 className="car-card__content-title">
                    {make} {model}
                </h1>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">$</span>
                {carRent}
                <span className="self-end text-[14px] font-medium">/day</span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src={generateCarImageUrl(car)}
                    alt="Car Model"
                    fill
                    priority
                    className="object-contain"
                ></Image>
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-[#666666]">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/steering-wheel.svg"
                            alt="Steering weel"
                            width={20}
                            height={20}
                        ></Image>
                        <p className="text-[14px]">
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/tire.svg"
                            alt="Tire"
                            width={20}
                            height={20}
                        ></Image>
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/gas.svg"
                            alt="Gas"
                            width={20}
                            height={20}
                        ></Image>
                        <p className="text-[14px]">{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        containerStyles="w-full  py-[16px] bg-primary-blue rounded-full text-[14px] text-white leading-[17px] font-semibold"
                        rightIcon={"/right-arrow.svg"}
                        handleClick={openModal}
                    >
                        View More
                    </CustomButton>
                </div>
                <div>
                    <CarDetails
                        car={car}
                        isOpen={isOpen}
                        closeModal={closeModal}
                    ></CarDetails>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
