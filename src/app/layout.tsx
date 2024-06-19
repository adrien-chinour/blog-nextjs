import type {Metadata} from "next";
import React from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {inter, serif} from "@/config/fonts";

import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Undefined Blog",
    description: "Undefined Blog",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
        <body
            className={`container mx-auto max-w-7xl ${inter.variable} ${serif.variable}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
