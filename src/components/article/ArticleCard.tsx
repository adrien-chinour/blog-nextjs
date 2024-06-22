import {Article} from "@/types/models";
import Image from "next/image";
import LocalizedTime from "@/components/LocalizedTime";

export default function ArticleCard({article, variant, asyncImage}: {
    article: Article,
    variant?: 'default' | 'inline' | undefined,
    asyncImage?: boolean | undefined
}) {
    switch (variant) {
        case 'inline':
            return <ArticleCardInline article={article} asyncImage={asyncImage}/>
        default:
            return <ArticleCardDefault article={article} asyncImage={asyncImage}/>
    }
}

function ArticleCardDefault({article, asyncImage}: { article: Article, asyncImage?: boolean }) {
    return (
        <article className="mb-6 md:mb-0 md:flex-1 max-w-max">
            <a href={`/articles/${article.slug}`} className="group">
                <Image
                    className="rounded mb-2 aspect-video"
                    src={article.imageUrl} alt={article.title}
                    width="600"
                    height="337"
                    priority={asyncImage !== undefined && !asyncImage}
                />
                <div className="px-2 md:px-0">
                    <ArticlePublicationDate publicationDate={article.publicationDate}/>
                    <ArticleTitle title={article.title}/>
                    <ArticleDescription description={article.description}/>
                </div>
            </a>
        </article>
    )
}

function ArticleCardInline({article, asyncImage}: { article: Article, asyncImage?: boolean }) {
    return (
        <article className="mb-6">
            <a href={`/articles/${article.slug}`} className="group sm:flex">
                <Image
                    className="rounded aspect-video sm:w-64"
                    src={article.imageUrl}
                    alt={article.title}
                    width="600"
                    height="377"
                    priority={asyncImage !== undefined && !asyncImage}
                />
                <div className="p-2">
                    <ArticlePublicationDate publicationDate={article.publicationDate}/>
                    <ArticleTitle title={article.title}/>
                    <ArticleDescription description={article.description}/>
                </div>
            </a>
        </article>
    )
}

function ArticleTitle({title}: { title: string }) {
    return (
        <p className="text-xl title my-1 group-hover:underline">{title}</p>
    )
}

function ArticleDescription({description}: { description: string }) {
    return (
        <p className="line-clamp-3">{description}</p>
    )
}

function ArticlePublicationDate({publicationDate}: { publicationDate: Date }) {
    return (
        <p className="uppercase text-muted text-xs font-bold">
            <LocalizedTime dateTime={publicationDate}/>
        </p>
    )
}
