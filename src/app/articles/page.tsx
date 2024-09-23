import {getArticles} from "@/services/api";
import ArticleCard from "@/components/article/article-card";

export const dynamic = 'force-dynamic';

export default async function Page() {
    const articles = await getArticles(20)

    return (
        <main className="px-4 container-fit">
            {articles.map((article, index) =>
                <ArticleCard key={article.id} article={article} variant='inline' asyncImage={index !== 0}/>
            )}
        </main>
    )
}
