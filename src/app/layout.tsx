import type {Metadata} from "next";
import {ReactNode} from "react";
import {cookies} from "next/headers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {ThemeProvider} from "@/contexts/theme-context";
import {HistoryProvider} from "@/contexts/history-context";
import {GoogleTagManager} from '@next/third-parties/google'
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"

import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Undefined Blog",
    description: "Undefined Blog",
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    const theme = cookies().get('theme')?.value || 'light';

    return (
        <html lang="fr" className={theme}>
            <GoogleTagManager gtmId="GTM-PZBJNQCM"/>
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
            </body>
        </html>
    );
}
