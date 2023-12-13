"use client";

import { Combobox, Transition } from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import React, { FC, Fragment, useState } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer: FC<SearchManufacturerProps> = ({
    manufacturer,
    setManufacturer,
}) => {
    const [query, setQuery] = useState("");

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                  item
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""))
              );

    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src={"/car-logo.svg"}
                            alt="Car Logo"
                            width={20}
                            height={20}
                            className="ml-4"
                        ></Image>
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input relative"
                        placeholder="Volkswagen"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                    ></Combobox.Input>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="oppacity-100"
                        leaveTo="oppacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options
                            className={
                                "absolute top-12 left-0 bg-white rounded-lg shadow-xl w-full z-10 max-h-52 overflow-y-scroll"
                            }
                        >
                            {filteredManufacturers.map((item) => (
                                <Combobox.Option
                                    key={item}
                                    value={item}
                                    className={({ active }) =>
                                        `search-manufacturer__option relative ${
                                            active
                                                ? "bg-primary-blue text-white"
                                                : "text-[#666666]"
                                        }`
                                    }
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected
                                                        ? "font-medium"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {item}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                        active
                                                            ? "text-white"
                                                            : "text-teal-600"
                                                    }`}
                                                ></span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;
