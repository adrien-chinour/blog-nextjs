import {getArticleRecommendations} from "@/services/api";
import {Article} from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default async function ArticleRecommendations({articleId}: { articleId: string }) {
    const recommendations = (await getArticleRecommendations(articleId)).map((article: Article) => (
        <li key={article.id} className="rounded bg-slate-100 dark:bg-slate-900 border-slate-400 border mb-2">
            <Link className="group sm:flex analytics-suggestions" href={`/articles/${article.slug}`}>
                <Image
                    width="400" height="225" loading="lazy"
                    className="sm:h-16 w-full sm:w-auto aspect-video"
                    src={article.imageUrl}
                    alt={article.title}
                />
                <div className="p-2">
                    <p className="font-serif text-lg group-hover:underline">{article.title}</p>
                    <p className="text-sm line-clamp-1 overflow-ellipsis">{article.description}</p>
                </div>
            </Link>
        </li>
    ));

    return (
        <>
            <p className="text-xl font-bold mb-1">À lire aussi</p>
            <ul>{recommendations}</ul>
        </>

    )
}
