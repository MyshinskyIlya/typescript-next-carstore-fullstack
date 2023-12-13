import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Head from "next/head";

export default async function Home({ searchParams }: HomeProps) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || "",
        year: searchParams.year || 2022,
        fuel: searchParams.fuel || "",
        limit: searchParams.limit || 30,
        model: searchParams.model || "",
    });

    console.log(allCars);

    const isDataEmpty =
        !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className="overflow-hidden">
            <Hero></Hero>
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
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
                                <CarCard
                                    car={car}
                                    index={index}
                                    limit={arr.length - 1}
                                ></CarCard>
                            ))}
                        </div>
                        <ShowMore
                            pageNumber={searchParams.limit || 10}
                            isNext={(searchParams.limit || 10) > allCars.length}
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
    );
}
