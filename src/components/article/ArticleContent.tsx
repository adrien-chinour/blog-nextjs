import {Article} from "@/types/models";
import AskOpenAi from "@/components/openai/AskOpenAi";

export default function ArticleContent({article}: {article: Article}) {
    const html = {__html: article.content};

    return (
        <AskOpenAi>
            <div id="article-content" className="container-fit" dangerouslySetInnerHTML={html}/>
        </AskOpenAi>
    )
}
