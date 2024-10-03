import type {Metadata, Viewport} from "next";
import {ReactNode} from "react";
import {cookies} from "next/headers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Faro from "@/components/system/faro/faro";
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

export const viewport: Viewport = {
    width: 'width-device',
    maximumScale: 1,
    minimumScale: 1,
    initialScale: 1,
}

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    const theme = cookies().get('theme')?.value || 'light';

    return (
        <html lang="fr" className={theme}>
            <GoogleTagManager gtmId="GTM-PZBJNQCM"/>
            <body className="min-h-screen">
                <ThemeProvider>
                    <HistoryProvider>
                        <div className={`container mx-auto max-w-7xl min-h-screen flex flex-col`}>
                            <Header/>
                            <div role="main" className="flex-grow">
                                {children}
                            </div>
                            <Footer/>
                        </div>
                    </HistoryProvider>
                </ThemeProvider>
                <SpeedInsights/>
                <Analytics/>
                <Faro/>
            </body>
        </html>
    );
}
