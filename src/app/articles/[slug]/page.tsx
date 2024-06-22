import {getArticle} from "@/services/api";
import NotFound from "next/dist/client/components/not-found-error";
import ArticleLayout from "@/components/article/ArticleLayout";
import type {Metadata} from 'next'
import {Article} from "@/types/models";

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
        },
    }
}

export default async function Page({params}: Props) {
    const article = await getArticle(params.slug)

    if (article === null) {
        return <NotFound/>
    }

    return (
        <main className="px-4">
            <hr/>
            <ArticleLayout article={article}/>
            <BlogPostingSchema article={article}/>
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
        articleBody: article.content,
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
