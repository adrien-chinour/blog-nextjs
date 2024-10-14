import {getArticleComments} from "@/services/api";
import LocalizedTime from "@/components/localized-time";

export default async function ArticleComments({articleId}: Readonly<{ articleId: string }>) {
    const comments = (await getArticleComments(articleId)).map((comment) => {
        return (
            <li key={comment.id} className="my-4 p-4 rounded border border-zinc-400">
                <p className="mb-2">
                    <span className="text-lg font-bold">{comment.username}</span>
                    <span className="font-bold text-muted"> • </span>
                    <LocalizedTime className="text-muted" dateTime={comment.publishedAt}></LocalizedTime>
                </p>
                <p className="text-justify">{comment.message}</p>
            </li>
        )
    });

    return (
        <>
            {
            comments.length > 0 &&
            <>
                <p className="text-xl font-bold mb-1">Commentaires ({comments.length})</p>
                <ul className="mt-4">{comments}</ul>
            </>
        }
        </>
    )
}
