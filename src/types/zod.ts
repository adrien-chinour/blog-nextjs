import {z} from "zod";

export const Tag = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
})

export const TagCollection = z.array(Tag)

export const Project = z.object({
    name: z.string(),
    url: z.string(),
    language: z.string().nullable(),
    description: z.string().nullable(),
})

export const ProjectCollection = z.array(Project)

export const Article = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    content: z.string(),
    imageUrl: z.string(),
    imageDescription: z.string().nullable().optional(),
    slug: z.string(),
    publicationDate: z.string().datetime({offset: true}).pipe(z.coerce.date()),
    tags: TagCollection,
    recommendations: z.array(z.string()),
})

export const ArticleCollection = z.array(Article)

export const Comment = z.object({
    id: z.string(),
    username: z.string(),
    message: z.string(),
    publishedAt: z.string().datetime({offset: true}).pipe(z.coerce.date()),
})

export const CommentCollection = z.array(Comment)
