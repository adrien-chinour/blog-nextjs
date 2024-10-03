import {Article} from "@/types/types";
import AskOpenai from "@/components/openai/ask-openai";

export default function ArticleContent({article}: {article: Article}) {
    const html = {__html: article.content};

    return (
        <AskOpenai>
            <div id="article-content" className="container-fit" dangerouslySetInnerHTML={html}/>
        </AskOpenai>
    )
}
