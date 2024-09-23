import {getProjects} from "@/services/api";
import ProjectCard from "@/components/project/project-card";

export const dynamic = 'force-dynamic';

export default async function Page() {
    const projects = await getProjects(20)

    return (
        <main className="px-4 container-fit grid grids-col-1 md:grid-cols-2 gap-6">
            {projects.map((project) => <ProjectCard key={project.url} project={project}/>)}
        </main>
    )
}
