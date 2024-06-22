import {Article} from "@/types/models";
import Image from "next/image";
import LocalizedTime from "@/components/LocalizedTime";

export default function ArticleHeader({article}: { article: Article }) {
    return (
        <header id="article-header" className="my-4 mx-3">
            <div className="container-fit">
                <p className="uppercase text-muted text-xs font-bold">Publié le <LocalizedTime dateTime={article.publicationDate}/></p>
                <h1 className="title text-5xl mb-2 mt-3">{article.title}</h1>
                <p className="text-lg text-muted">{article.description}</p>
            </div>

            <Image
                className="rounded mt-4 mx-auto"
                width="1200"
                height="675"
                src={article.imageUrl}
                alt={article.title}
                priority
            />
        </header>
    )
}
