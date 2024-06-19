import {z} from "zod";
import {Article, Project} from "@/types/models";

const apiHostname = process.env.BLOG_API;

const TagZodObject = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
})

const ArticleZodObject = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
    imageUrl: z.string(),
    slug: z.string(),
    publicationDate: z.string().datetime({offset: true}).pipe(z.coerce.date()),
    tags: z.array(TagZodObject),
    recommendations: z.array(z.string()),
})

const ProjectZodObject = z.object({
    name: z.string(),
    url: z.string(),
    language: z.string().nullable(),
    description: z.string().nullable(),
})

export const getArticles = async function (limit: number = 20): Promise<Article[]> {
    const response = await fetch(`${apiHostname}/api/articles?limit=${limit}`);
    return response.ok ? z.array(ArticleZodObject).parse(await response.json()) : []
}

export const getArticle = async function (slug: string): Promise<Article | null> {
    const response = await fetch(`${apiHostname}/api/articles/${slug}`);
    return response.ok ? ArticleZodObject.parse(await response.json()) : null
}

export const getProjects = async function (limit: number = 10): Promise<Project[]> {
    const response = await fetch(`${apiHostname}/api/projects?limit=${limit}`);
    return response.ok ? z.array(ProjectZodObject).parse(await response.json()) : []
}
