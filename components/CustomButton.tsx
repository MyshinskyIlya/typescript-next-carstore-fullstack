"use client";

import React, { FC } from "react";
import { CustomButtonProps } from "@/types";

const CustomButton: FC<CustomButtonProps> = ({
    children,
    containerStyles,
    handleClick,
    btnType,
}) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={"flex-1"}>{children}</span>
        </button>
    );
};

export default CustomButton;
