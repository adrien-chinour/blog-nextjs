import {getArticles, getProjects} from "@/services/api";
import ArticleCard from "@/components/article/article-card";
import ProjectCard from "@/components/project/project-card";
import RowContent from "@/components/row-content";
import React from "react";

export const dynamic = 'force-dynamic';

export default async function Home() {
    const [articles, projects] = await Promise.all([getArticles(3), getProjects(3)]);

    return (
        <main className="px-4">
            <RowContent title="Les derniers articles." moreLink="/articles/">
                <div className="md:flex gap-8 my-2">
                    {articles.map((article, index) => <ArticleCard key={article.id} article={article} asyncImage={index !== 0}/>)}
                </div>
            </RowContent>

            <div className="py-4"></div>

            <RowContent title="Les derniers projets." moreLink="/projets/">
                <div className="grid grids-col-1 lg:grid-cols-3 gap-6 my-2">
                    {projects.map((project) => <ProjectCard key={project.url} project={project}/>)}
                </div>
            </RowContent>
        </main>
    );
}
