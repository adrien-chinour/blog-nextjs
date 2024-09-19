import type {Metadata} from "next";
import React from "react";

import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/app/globals.css";
import {VercelToolbar} from "@vercel/toolbar/next";
import {ThemeProvider} from "@/contexts/ThemeContext";
import {cookies} from "next/headers";

export const metadata: Metadata = {
    title: "Undefined Blog",
    description: "Undefined Blog",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    const shouldInjectToolbar = process.env.NODE_ENV === 'development';

    // Theme is initialized on server side to fix flicker problem on theme switch
    // ThemeProvider will handle cookie and toggle effect
    const theme = cookies().get('theme')?.value || 'light';

    return (
        <html lang="fr" className={theme}>
            <body className={`container mx-auto max-w-7xl`}>
                <ThemeProvider>
                    <Header/>
                    {children}
                    <Footer/>
                </ThemeProvider>
                <SpeedInsights/>
                <Analytics/>
                {shouldInjectToolbar && <VercelToolbar/>}
            </body>
        </html>
    );
}
