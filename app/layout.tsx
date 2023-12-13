import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";
import Head from "next/head";

export const metadata: Metadata = {
    title: "Car Hub",
    description: "Discover the best cars in the word.",
};

{
    /* <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1 maximum-scale-1"
                /> */
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <title>Моя Страница</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1 maximum-scale-1"
                />
            </Head>
            <body className="relative">
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
