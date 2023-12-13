"use client";

import { CustomFilterProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, Fragment, useState } from "react";

const CustomFilter: FC<CustomFilterProps> = ({ title, options }) => {
    const [selected, setSelected] = useState(options[0]);
    const router = useRouter();
    const handleUpdateParams = (e: { title: string; value: string }) => {
        const updateFilterSearchParams = (type: string, value: string) => {
            const searchParams = new URLSearchParams(window.location.search);

            searchParams.set(type, value);

            const newPathname = `${
                window.location.pathname
            }?${searchParams.toString()}#discover`;

            return newPathname;
        };

        const newPathName = updateFilterSearchParams(
            title!,
            e.value.toLowerCase()
        );

        router.push(newPathName);
    };

    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    handleUpdateParams(e);
                }}
            >
                <div className="relative w-fit z -10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate">{selected.title}</span>
                        <Image
                            src={"/chevron-up-down.svg"}
                            alt="Up Down Icon"
                            width={20}
                            height={20}
                            className="ml-4 object-contain"
                        ></Image>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="custom-filter__options z-10">
                            {options.map((option, index) => (
                                <Listbox.Option
                                    disabled={index === 0}
                                    key={option.title}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active && index !== 0
                                                ? "bg-primary-blue text-white"
                                                : "text-[#666666]"
                                        } ${index === 0 && "bg-gray-100"}`
                                    }
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected && index !== 0
                                                        ? "font-semibold"
                                                        : "font-normal"
                                                }`}
                                            >
                                                {option.title}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black"></span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default CustomFilter;
