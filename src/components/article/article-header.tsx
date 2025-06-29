import {Article} from "@/types/types";
import Image from "next/image";
import LocalizedTime from "@/components/localized-time";
import feature from "@/services/feature";

export default async function ArticleHeader({article}: { article: Article }) {
    const [enableTitleTransition, enableImageTransition] = await Promise.all([
        feature('transition_title'),
        feature('transition_image'),
    ])

    return (
        <header id="article-header" className="my-4">
            <div className="container-fit">
                <p className="uppercase text-muted text-xs font-bold">
                    Publié le <LocalizedTime dateTime={article.publicationDate}/>
                </p>
                <h1 className="title text-3xl md:text-4xl xl:text-5xl mb-2 mt-1"
                    style={enableTitleTransition ? {viewTransitionName: `article-title-${article.id}`} : {}}>
                    {article.title}
                </h1>
                <p className="text-lg text-muted">{article.description}</p>
            </div>

            <Image
                className="rounded mt-4 mx-auto"
                width="1200"
                height="675"
                src={article.imageUrl}
                alt={article.title}
                priority
                style={enableImageTransition ? {viewTransitionName: `article-image-${article.id}`} : {}}
            />
            {
                article.imageDescription &&
                <p className="article-image-description text-center text-muted text-sm"
                   dangerouslySetInnerHTML={{__html: article.imageDescription}}
                />
            }
        </header>
    )
}
