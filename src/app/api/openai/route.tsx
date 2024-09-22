import {NextRequest} from "next/server";
import {OpenAI} from 'openai';

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function explain(term: string): Promise<string | null> {
    try {
        const resp = await client.chat.completions.create({
            messages: [{role: 'user', content: `Explique-moi ce terme "${term}" en 1 phrase. En général le terme a un rapport avec un sujet tech.`}],
            model: 'gpt-3.5-turbo',
        });

        console.debug(resp.choices[0].message.content);

        return resp.choices[0].message.content;
    } catch (e) {
        console.error("Error occured on OpenAI explain feature", e);
        return null;
    }
}

export async function GET(request: NextRequest) {
    const term = request.nextUrl.searchParams.get('term');
    if (term === null) {
        return Response.json(null, {
            status: 400,
            statusText: 'Missing query param "term" on request.',
        })
    }

    const result = await explain(term);
    if (result === null) {
        return Response.json(null, {
            status: 500,
            statusText: 'An error occurred on OpenAI service.'
        })
    }

    return Response.json({output: result}, {status: 200})
}
