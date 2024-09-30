"use client"

import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';
import {useEffect} from "react";

export default function FaroObservability() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            initializeFaro({
                url: 'https://faro-collector-prod-eu-west-0.grafana.net/collect/8f64d55ee7070b3ec03abe36e2a917df',
                app: {
                    name: 'next.udfn.fr',
                    version: '1.0.0',
                    environment: 'production'
                },
                instrumentations: [
                    ...getWebInstrumentations(),
                    new TracingInstrumentation(),
                ],
            });
        }
    }, []);

    return (
        <></>
    )
}
