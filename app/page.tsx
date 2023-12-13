import { CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Head from "next/head";
import type { Viewport } from "next";
import dynamic from "next/dynamic";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

const DynamicCars = dynamic(() => import("../components/CarCard"), {
    ssr: false,
    loading: () => (
        <div className="border border-blue-300 shadow rounded-xl p-6 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex flex-col justify-center">
                <div className="flex-1 justify-center align-super mt-1 ">
                    <div className=" bg-slate-300 py-4 rounded-xl mb-6"></div>
                    <div className="rounded-full bg-slate-300 h-14 w-24 mt-2 p-2 text-start"></div>

                    <div className="rounded-xl bg-slate-300 h-28 w-full mt-6 p-2 text-center"></div>
                    <div className="mt-8 h-14 bg-slate-300 py-6 rounded-xl"></div>
                </div>
            </div>
        </div>
    ),
});

export default async function Home({ searchParams }: HomeProps) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 30,
        model: searchParams.model || "",
    });

    const isDataEmpty =
        !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <div>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1 maximum-scale-1 user-scalable=no"
                />
            </Head>
            <main className="overflow-hidden">
                <Hero></Hero>
                <div
                    className="mt-12 padding-x padding-y max-width"
                    id="discover"
                >
                    <div className="home__text-container">
                        <h1 className="text-4xl font-extrabold">
                            Car Catalogue
                        </h1>
                        <p className="text-[#666666]">
                            Explorer the cars you might like
                        </p>
                    </div>

                    <div className="home__filters">
                        <SearchBar></SearchBar>
                        <div className="home__filter-container">
                            <CustomFilter
                                title="fuel"
                                options={fuels}
                            ></CustomFilter>
                            <CustomFilter
                                title="year"
                                options={yearsOfProduction}
                            ></CustomFilter>
                        </div>
                    </div>

                    {!isDataEmpty ? (
                        <section>
                            <div className="home__cars-wrapper">
                                {allCars?.map((car, index, arr) => (
                                    <DynamicCars
                                        key={index}
                                        car={car}
                                        index={index}
                                        limit={arr.length - 1}
                                    ></DynamicCars>
                                ))}
                            </div>
                            <ShowMore
                                pageNumber={searchParams.limit || 10}
                                isNext={
                                    (searchParams.limit || 10) > allCars.length
                                }
                            ></ShowMore>
                        </section>
                    ) : (
                        <div className="home__error-container">
                            <h2 className="text-black text-xl font-bold">
                                Oops, no results
                            </h2>
                            <p>{allCars?.message}</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
