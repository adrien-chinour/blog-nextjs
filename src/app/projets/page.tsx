import {getProjects} from "@/services/api";
import ProjectCard from "@/components/project/ProjectCard";

export default async function Page() {
    const projects = await getProjects(20)

    return (
        <main className="px-4">
            <div className="container-fit grid grids-col-1 md:grid-cols-2 gap-6">
                {projects.map((project) => <ProjectCard key={project.url} project={project}/>)}
            </div>
        </main>
    )
}
