import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleContent from "@/components/article/ArticleContent";
import ArticleTags from "@/components/article/ArticleTags";
import {Article} from "@/types/models";

export default function ArticleLayout({article}: { article: Article }) {
    return (
        <article>
            <ArticleHeader article={article}/>
            <ArticleContent article={article}/>
            <aside className="container-fit">
                <hr/>
                <ArticleTags tags={article.tags}/>
            </aside>
        </article>
    )
}
