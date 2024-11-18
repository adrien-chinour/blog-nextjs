"use server"

import {z, ZodType} from "zod";
import * as T from "@/types/types";
import {Article, ArticleCollection, CommentCollection, ProjectCollection} from "@/types/zod";

export const getArticles = async function (limit: number = 20): Promise<T.Article[]> {
    return parse(await api(`/articles?limit=${limit}`), ArticleCollection, []);
}

export const getArticle = async function (slug: string): Promise<T.Article | null> {
    return parse(await api(`/articles/${slug}`), Article);
}

export const getArticleById = async function (id: string, preview: boolean = false): Promise<T.Article | null> {
    return parse(await api(`/articles/${id}?published=${!preview}`), Article);
}

export const getArticleRecommendations = async function (id: string): Promise<T.Article[]> {
    return parse(await api(`/articles/${id}/recommendations`), ArticleCollection, []);
}

export const getArticleComments = async function (id: string): Promise<T.Comment[]> {
    return parse(await api(`/articles/${id}/comments`, 10), CommentCollection, []);
}

export const searchArticle = async function (term: string): Promise<T.Article[]> {
    return parse(await api(`/search/articles?query=${term}`), ArticleCollection, []);
}

export const getProjects = async function (limit: number = 10): Promise<T.Project[]> {
    return parse(await api(`/projects?limit=${limit}`), ProjectCollection, []);
}

const api = async function (path: string, ttl: number = 60): Promise<any> {
    const response = await fetch(`${process.env.BLOG_API}${path}`, {
        next: {revalidate: ttl},
        headers: {'Content-Type': 'application/json'}
    });
    return response.ok ? await response.json() : null;
}

const parse = function <T extends ZodType>(data: unknown, type: T, fallback: any = null): z.infer<T> | typeof fallback {
    const parse = type.safeParse(data);

    if (!parse.success) {
        console.error(parse.error)

        return fallback
    }

    return parse.data
}
