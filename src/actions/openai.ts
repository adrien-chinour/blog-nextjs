"use server"

import {OpenAI} from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function explain(term: string): Promise<string | null> {
    try {
        const resp = await client.chat.completions.create({
            messages: [{
                role: 'user',
                content: `Explique-moi ce terme "${term}" en 1 phrase. En général le terme a un rapport avec un sujet tech.`
            }],
            model: 'gpt-3.5-turbo',
        });

        console.debug(resp.choices[0].message.content);

        return resp.choices[0].message.content;
    } catch (e) {
        console.error("Error occurred on OpenAI explain feature", e);
        return null;
    }
}
