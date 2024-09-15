import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import ArticleTags from "@/components/article/ArticleTags";
import {Article} from "@/types/models";
import ArticleRecommendations from "@/components/article/ArticleRecommendations";
import {Suspense} from "react";

export default function ArticleLayout({article}: { article: Article }) {
    return (
        <article>
            <ArticleHeader article={article}/>
            <ArticleContent article={article}/>
            <aside className="container-fit">
                <ArticleTags tags={article.tags}/>
                <hr className="my-2"/>
            </aside>

            <aside className="container-fit mt-4">
                <Suspense>
                    <ArticleRecommendations articleId={article.id}/>
                </Suspense>
            </aside>
        </article>
    )
}
