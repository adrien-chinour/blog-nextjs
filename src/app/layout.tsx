import type {Metadata, Viewport} from "next";
import {ReactNode} from "react";
import {cookies} from "next/headers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {ThemeProvider} from "@/contexts/theme-context";
import {HistoryProvider} from "@/contexts/history-context";
import {GoogleTagManager} from '@next/third-parties/google'

import "@/app/globals.css";
import Script from "next/script";
import Head from "next/head";

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
                <Script src="/_scripts/faro.js" strategy="lazyOnload" />
                <Script src="https://cloud.umami.is/script.js" defer strategy="lazyOnload" data-website-id="c9dc8a8a-8633-40bb-9cc6-652b36aa87da" />
            </body>
        </html>
    );
}
