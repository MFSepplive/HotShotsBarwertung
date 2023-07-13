import { Header } from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "HotShots Barwertung",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-300 w-screen pt-10 pb-10 flex">
                <div className="container max-w-screen-md mx-auto bg-white drop-shadow-lg rounded-md flex flex-col">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
