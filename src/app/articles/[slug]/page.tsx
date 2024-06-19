import {getArticle} from "@/services/api";
import NotFound from "next/dist/client/components/not-found-error";
import ArticleLayout from "@/components/article/ArticleLayout";

export default async function Page({params}: { params: { slug: string } }) {
    const article = await getArticle(params.slug)

    if (article === null) {
        return <NotFound/>
    }

    return (
        <main className="px-4">
            <hr/>
            <ArticleLayout article={article}/>
        </main>
    )
}
