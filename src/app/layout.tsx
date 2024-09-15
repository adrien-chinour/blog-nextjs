import type {Metadata} from "next";
import React from "react";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/app/globals.css";
import {VercelToolbar} from "@vercel/toolbar/next";

export const metadata: Metadata = {
    title: "Undefined Blog",
    description: "Undefined Blog",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    const shouldInjectToolbar = process.env.NODE_ENV === 'development';

    return (
        <html lang="fr">
            <body className={`container mx-auto max-w-7xl`}>
                <Header/>
                {children}
                <Footer/>

                <SpeedInsights/>
                <Analytics/>
                {shouldInjectToolbar && <VercelToolbar/>}
            </body>
        </html>
    );
}
