import {getPage} from "@/services/api";
import {notFound} from "next/navigation";

export const dynamic = 'force-dynamic';

type Props = {
    params: { slug: string[] }
}

export default async function Page({params}: Props) {
    const page = await getPage(`/${params.slug.join('/')}`);
    if (page === null) {
        return notFound();
    }

    return (
        <main className="px-4 container-fit">
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{__html: page.content}}></div>
        </main>
    );
}
