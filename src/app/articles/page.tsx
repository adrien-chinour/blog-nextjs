import {getArticles} from "@/services/api";
import ArticleCard from "@/components/article/ArticleCard";

export default async function Page() {
    const articles = await getArticles(20)

    return (
        <main className="px-4">
            <div className="container-fit">
                {articles.map((article) => <ArticleCard key={article.id} article={article} variant='inline'/>)}
            </div>
        </main>
    )
}
