"use client";

import React, { FC, useState } from "react";
import { SearchManufacturer } from ".";
import { SearchButtonProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton: FC<SearchButtonProps> = ({ children, otherClasses }) => {
    return (
        <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
            <Image
                src={"/magnifying-glass.svg"}
                alt="Mag Glass"
                width={40}
                height={40}
                className="object-contain"
            ></Image>
        </button>
    );
};

const SearchBar = () => {
    const router = useRouter();
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer !== "" && model !== "") {
            const updateCarSearchParams = (
                model: string,
                manufacturer: string
            ) => {
                const searchParams = new URLSearchParams(
                    window.location.search
                );

                if (model) {
                    searchParams.set("model", model);
                } else {
                    searchParams.delete("model");
                }

                if (manufacturer) {
                    searchParams.set("manufacturer", manufacturer);
                } else {
                    searchParams.delete("manufacturer");
                }

                const newPathName = `${
                    window.location.pathname
                }?${searchParams.toString()}#discover`;

                router.push(newPathName);
            };

            updateCarSearchParams(
                model.toLowerCase(),
                manufacturer.toLocaleLowerCase()
            );
        }
    };

    return (
        <>
            <form className="searchbar" onSubmit={handleSearch}>
                <div className="searchbar__item">
                    <SearchManufacturer
                        manufacturer={manufacturer}
                        setManufacturer={setManufacturer}
                    ></SearchManufacturer>
                    <SearchButton otherClasses="sm:hidden"></SearchButton>
                </div>
                <div className="searchbar__item">
                    <Image
                        src={"/model-icon.png"}
                        alt="Model Icon"
                        width={25}
                        height={25}
                        className="absolute w-[20px] h-[20px] ml-4"
                    ></Image>
                    <input
                        type="text"
                        name="model"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder="Tiguan"
                        className="searchbar__input"
                        autoComplete="off"
                        required
                    />
                    <SearchButton otherClasses="max-sm:block"></SearchButton>
                </div>
            </form>
        </>
    );
};

export default SearchBar;
