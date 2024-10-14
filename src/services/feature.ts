"use server";

import {z} from "zod";

export type FeatureName = 'aside_comments' | 'aside_recommendations' | 'allow_comments';

export default async function feature(name: FeatureName, fallback: boolean = false): Promise<boolean> {
    return (await features()).find((feat) => feat.name === name)?.enable ?? fallback;
}

async function features(): Promise<Feature[]> {
    const response = await fetch(`${process.env.BLOG_API}/api/features`, {
        next: {revalidate: 60},
        headers: {'Content-Type': 'application/json'}
    });

    if (!response.ok) {
        return [];
    }

    const parsed = z.array(FeatureModel).safeParse(await response.json())
    console.log("features :", parsed)

    return parsed.success ? parsed.data : [];
}

const FeatureModel = z.object({
    name: z.string(),
    enable: z.boolean(),
});

type Feature = z.infer<typeof FeatureModel>;
