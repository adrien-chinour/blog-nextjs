import {getArticle} from "@/services/api";
import ArticleLayout from "@/components/article/article-layout";
import type {Metadata} from 'next'
import {Article} from "@/types/types";
import {notFound} from "next/navigation";

import "@/stylesheets/content.css";
import "@/stylesheets/highlight.css";
import HistoryLogger from "@/components/history-logger";

type Props = {
    params: { slug: string }
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    const article = await getArticle(params.slug)

    if (article === null) {
        return {}
    }

    return {
        title: article.title,
        description: article.description,
        openGraph: {
            images: [article.imageUrl],
            siteName: 'udfn.fr',
            url: `/articles/${params.slug}`,
        },
    }
}

export default async function Page({params}: Props) {
    const article = await getArticle(params.slug)

    if (article === null) {
        notFound();
    }

    return (
        <main className="px-4">
            <hr/>
            <ArticleLayout article={article}/>
            <BlogPostingSchema article={article}/>
            <HistoryLogger title={article.title} href={`/articles/${params.slug}`} />
        </main>
    )
}

function BlogPostingSchema({article}: { article: Article }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        name: article.title,
        headline: article.title,
        description: article.description,
        datePublished: article.publicationDate.toDateString(),
        articleSection: 'Development',
        keywords: article.tags.map((tag) => tag.name),
        image: {
            '@id': article.imageUrl,
            '@type': 'ImageObject',
            'url': article.imageUrl,
        }
    }

    return <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
    />
}
