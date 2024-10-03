"use server"

import {z, ZodType} from "zod";
import * as T from "@/types/types";
import {Article, ArticleCollection, ProjectCollection} from "@/types/zod";

export const getArticles = async function (limit: number = 20): Promise<T.Article[]> {
    return parse(await api(`/api/articles?limit=${limit}`, 3600), ArticleCollection, []);
}

export const getArticle = async function (slug: string): Promise<T.Article | null> {
    return parse(await api(`/api/articles/${slug}`, 3600), Article);
}

export const getArticleRecommendations = async function (id: string): Promise<T.Article[]> {
    return parse(await api(`/api/articles/${id}/recommendations`, 600), ArticleCollection, []);
}

export const searchArticle = async function (term: string): Promise<T.Article[]> {
    return parse(await api(`/api/search/articles?query=${term}`, 3600), ArticleCollection, []);
}

export const getProjects = async function (limit: number = 10): Promise<T.Project[]> {
    return parse(await api(`/api/projects?limit=${limit}`, 3600), ProjectCollection, []);
}

const api = async function (path: string, ttl: number = 3600): Promise<any> {
    const response = await fetch(`${process.env.BLOG_API}${path}`, {next: {revalidate: ttl}});
    return response.ok ? await response.json() : null;
}

const parse = function <T extends ZodType>(data: unknown, type: T, fallback: any = null): z.infer<T> | typeof fallback {
    const parse = type.safeParse(data);
    return parse.success ? parse.data : fallback;
}
