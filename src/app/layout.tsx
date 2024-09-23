import type {Metadata} from "next";
import React from "react";

import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/app/globals.css";
import {VercelToolbar} from "@vercel/toolbar/next";
import {ThemeProvider} from "@/contexts/theme-context";
import {cookies} from "next/headers";
import {HistoryProvider} from "@/contexts/history-context";

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
            <body>
                <ThemeProvider>
                    <HistoryProvider>
                        <div className={`container mx-auto max-w-7xl`}>
                            <Header/>
                            <div role="main">
                                {children}
                            </div>
                            <Footer/>
                        </div>
                    </HistoryProvider>
                </ThemeProvider>
                <SpeedInsights/>
                <Analytics/>
                {shouldInjectToolbar && <VercelToolbar/>}
            </body>
        </html>
    );
}
