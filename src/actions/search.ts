"use server"

import {Article} from "@/types/types";
import {searchArticle} from "@/services/api";

export async function searchArticles(query: string): Promise<Article[]> {
    return searchArticle(query);
}
