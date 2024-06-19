import {Article} from "@/types/models";

export default function ArticleContent({article}: {article: Article}) {
    const html = {__html: article.content};

    return (
        <div id="article-content" className="container-fit" dangerouslySetInnerHTML={html} />
    )
}
