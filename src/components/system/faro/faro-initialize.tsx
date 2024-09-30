"use client"

import {useEffect} from "react";
import {getWebInstrumentations, initializeFaro} from "@grafana/faro-web-sdk";
import {TracingInstrumentation} from "@grafana/faro-web-tracing";

type FaroInitializeProps = Readonly<{ endpoint: string, name: string, version: string, environment: string }>

export default function FaroInitialize({endpoint, name, version, environment}: FaroInitializeProps) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            initializeFaro({
                url: endpoint,
                app: {
                    name: name,
                    version: version,
                    environment: environment
                },
                instrumentations: [
                    ...getWebInstrumentations(),
                    new TracingInstrumentation(),
                ],
            });
        }
    }, []);

    return <></>
}
