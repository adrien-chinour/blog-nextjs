import type {Metadata, Viewport} from "next";
import {ReactNode} from "react";
import {cookies} from "next/headers";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";
import feature from "@/services/feature";

import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Undefined Blog",
    description: "Undefined Blog",
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default async function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    const theme = (await cookies()).get('theme')?.value || 'light';
    const [enableFaro, enableUmami, enablePosthog] = await Promise.all([
        feature('script_faro'),
        feature('script_umami'),
        feature('script_posthog'),
    ])

    return (
        <html lang="fr" className={theme}>
            <body className="min-h-screen">
                <div className={`container mx-auto max-w-7xl min-h-screen flex flex-col`}>
                    <Header/>
                    <div role="main" className="grow">
                        {children}
                    </div>
                    <Footer/>
                </div>
                {
                    enableFaro && process.env.NODE_ENV === 'production' &&
                    <Script src="/_scripts/faro.js" strategy="lazyOnload"/>
                }
                {
                    enableUmami && process.env.NODE_ENV === 'production' &&
                    <Script
                        src="/_scripts/umami-sdk.js"
                        defer
                        strategy="lazyOnload"
                        data-website-id="c9dc8a8a-8633-40bb-9cc6-652b36aa87da"
                    />
                }
                {
                    enablePosthog && process.env.NODE_ENV === 'production' &&
                    <Script
                        id="posthog"
                        dangerouslySetInnerHTML={{
                            __html: `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);posthog.init('phc_ytR4uzL5w9JvkIX5utA3MCcgZbmqGNR1dB0VEJ8KOzx',{api_host:'https://eu.i.posthog.com', person_profiles: 'identified_only'})`
                        }}
                    />
                }
                <Script src="/_scripts/events.js" strategy="lazyOnload"/>
            </body>
        </html>
    );
}
