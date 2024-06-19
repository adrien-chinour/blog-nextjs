export type Article = {
    id: string,
    title: string,
    description: string,
    content: string,
    imageUrl: string,
    slug: string,
    publicationDate: Date,
    tags: Tag[],
    recommendations: string[],
}

export type Project = {
    name: string,
    url: string,
    language: string | null,
    description: string | null,
}

export type Tag = {
    id: string,
    name: string,
    slug: string,
}
