import ArticleHeader from "@/components/article/article-header";
import ArticleContent from "@/components/article/article-content";
import ArticleTags from "@/components/article/article-tags";
import {Article} from "@/types/types";
import ArticleRecommendations from "@/components/article/article-recommendations";
import {Suspense} from "react";
import ArticleComments from "@/components/article/article-comments";
import feature from "@/services/feature";

export default async function ArticleLayout({article}: { article: Article }) {
    const [enableComments, enableRecommendation, allowPostComment] = await Promise.all([
        feature("aside_comments"),
        feature("aside_recommendations"),
        feature("allow_comments")
    ]);

    return (
        <article>
            <ArticleHeader article={article}/>
            <ArticleContent article={article}/>

            <div className="container-fit flex flex-col gap-8 border-t mt-2">
                <aside id="aside-tags">
                    <ArticleTags tags={article.tags}/>
                </aside>
                {
                    enableRecommendation &&
                    <aside id="aside-recommendations">
                        <Suspense>
                            <ArticleRecommendations articleId={article.id}/>
                        </Suspense>
                    </aside>
                }
                {
                    enableComments &&
                    <aside id="aside-comments">
                        <Suspense>
                            <ArticleComments articleId={article.id} allowPostComment={allowPostComment}/>
                        </Suspense>
                    </aside>
                }
            </div>
        </article>
    )
}
