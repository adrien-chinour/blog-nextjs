import {Tag} from "@/types/models";
import {default as TagItem} from "@/components/Tag"

export default function ArticleTags({tags}: { tags: Tag[] }) {
    return (
        <ul className="flex gap-2 mt-3 px-0">
            {tags.map((tag) => <li key={tag.id}><TagItem label={tag.name}/></li>)}
        </ul>
    )
}
