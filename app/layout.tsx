import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
    title: "Car Hub",
    description: "Discover the best cars in the word.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
