"use client";

import React, { FC } from "react";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton: FC<CustomButtonProps> = ({
    children,
    containerStyles,
    handleClick,
    btnType,
    rightIcon,
    isDisable,
}) => {
    return (
        <button
            disabled={isDisable}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={"flex-1"}>{children}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="Right Icon"
                        fill
                        className="object-contain"
                    ></Image>
                </div>
            )}
        </button>
    );
};

export default CustomButton;
