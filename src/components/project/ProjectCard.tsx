import {Project} from "@/types/models";
import Tag from "@/components/Tag";

export default function ProjectCard({project}: { project: Project }) {
    return (
        <section className="justify-self-auto border border-zinc-400 p-4 rounded">
            <a className="font-bold hover:underline text-blue-500 hover:text-blue-600"
               href={project.url} target="_blank" rel="nofollow">
                {project.name}
            </a>
            <p className="text-sm my-3 line-clamp-1 text-ellipsis">{project.description ?? '...'}</p>
            {project.language != null && <Tag label={project.language}/>}
        </section>
    )
}
