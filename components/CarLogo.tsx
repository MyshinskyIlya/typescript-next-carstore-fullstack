import Image from "next/image";
import React from "react";

function CarLogo({ width, height }: { width: number; height: number }) {
    return (
        <Image
            src={"/logo.svg"}
            alt="Car Hub Logo"
            width={width}
            height={height}
            className="object-contain"
        ></Image>
    );
}

export default CarLogo;
