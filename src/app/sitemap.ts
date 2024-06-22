import type {MetadataRoute} from 'next';
import {getArticles} from "@/services/api";
import {Article} from "@/types/models";

const hostname = process.env.HOSTNAME;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = (await getArticles()).map(function (article: Article) {
        return {
            url: `${hostname}/articles/${article.slug}`,
            lastModified: article.publicationDate,
        }
    })

    return [
        {
            url: `${hostname}`,
            lastModified: new Date(),
        },
        {
            url: `${hostname}/articles`,
            lastModified: new Date(),
        },
        {
            url: `${hostname}/projets`,
            lastModified: new Date(),
        },
        ...articles
    ]
}
