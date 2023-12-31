import { CarsProp, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;

    // Set the required headers for the API request
    const headers: HeadersInit = {
        "X-RapidAPI-Key": "15f55c1055msh1b75e052eda9fdcp156a7cjsn1773cf5d8553",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    // Set the required headers for the API request
    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
            headers: headers,
        }
    );

    // Parse the response as JSON
    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 2; // Additional rate per mile driven
    const ageFactor = 0.4; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarsProp, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");

    const { make, year, model } = car;

    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);
    return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set(type, value);

    // Set the specified search parameter to the given value
    const newPathname = `${
        window.location.pathname
    }?${searchParams.toString()}`;

    return newPathname;
};

// export default async function Home({ searchParams }: HomeProps) {
//     const allCars = await fetchCars({
//         manufacturer: searchParams.manufacturer || "",
//         year: searchParams.year || 2022,
//         fuel: searchParams.fuel || "",
//         limit: searchParams.limit || 30,
//         model: searchParams.model || "",
//     });
