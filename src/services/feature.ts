"use server";

import {z} from "zod";

export type FeatureName =
    'aside_comments'
    | 'aside_recommendations'
    | 'allow_comments'
    | 'script_faro'
    | 'script_umami'
    | 'transition_image'
    | 'transition_title'
    ;

export default async function feature(name: FeatureName, fallback: boolean = false): Promise<boolean> {
    return (await features()).find((feat) => feat.name === name)?.enable ?? fallback;
}

async function features(): Promise<Feature[]> {
    const response = await fetch(`${process.env.BLOG_API}/features`, {
        next: {revalidate: 30},
        headers: {'Content-Type': 'application/json'}
    });

    if (!response.ok) {
        return [];
    }

    const parsed = z.array(FeatureModel).safeParse(await response.json())

    return parsed.success ? parsed.data : [];
}

const FeatureModel = z.object({
    name: z.string(),
    enable: z.boolean(),
});

type Feature = z.infer<typeof FeatureModel>;
