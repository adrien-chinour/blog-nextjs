import ArticleHeader from "@/components/article/article-header";
import ArticleContent from "@/components/article/article-content";
import ArticleTags from "@/components/article/article-tags";
import {Article} from "@/types/types";
import ArticleRecommendations from "@/components/article/article-recommendations";
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
