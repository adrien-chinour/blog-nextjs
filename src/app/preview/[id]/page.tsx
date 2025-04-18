import {getArticleById} from "@/services/api";
import {notFound} from "next/navigation";
import ArticleLayout from "@/components/article/article-layout";

import "@/stylesheets/content.css";
import "@/stylesheets/highlight.css";

type Props = {
    params: Promise<{ id: string }>
}

export default async function Page({params}: Props) {
    const article = await getArticleById((await params).id, true)

    if (article === null) {
        notFound();
    }

    return (
        <main className="px-4">
            <hr/>
            <ArticleLayout article={article}/>
        </main>
    )
}
