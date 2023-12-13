"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore: FC<ShowMoreProps> = ({ pageNumber, isNext }) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = +pageNumber + 10;
        const newPathName = updateSearchParams("limit", newLimit.toString());

        router.push(newPathName, { scroll: false });
    };
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                >
                    Show More
                </CustomButton>
            )}
        </div>
    );
};

export default ShowMore;
