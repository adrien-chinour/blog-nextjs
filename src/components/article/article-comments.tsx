import {getArticleComments} from "@/services/api";
import LocalizedTime from "@/components/localized-time";

export default async function ArticleComments({articleId, allowPostComment}: Readonly<{
    articleId: string,
    allowPostComment: boolean
}>) {
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
            <p className="text-xl font-bold mb-1">Commentaires ({comments.length})</p>
            {
                allowPostComment &&
                <form>
                    <textarea
                        className="mt-4 p-2 w-full rounded dark:bg-zinc-700 bg-zinc-100 border"
                        rows={5}
                        placeholder="Participe à la discussion 💬">
                    </textarea>
                    <div className="mt-2 mb-4 flex gap-2">
                        <input
                            type="text"
                            placeholder="Pseudonyme 👻"
                            className="p-2 rounded dark:bg-zinc-700 bg-zinc-100 min-w-0 border"
                        />
                        <button
                            className="rounded bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50 p-2 text-white font-bold ms-auto">
                            Partager
                        </button>
                    </div>
                </form>
            }
            {
                comments.length > 0 &&
                <ul className="mt-4">{comments}</ul>
            }
        </>
    )
}
