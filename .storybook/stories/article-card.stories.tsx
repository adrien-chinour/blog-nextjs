import type {Meta, StoryObj} from '@storybook/react';
import ArticleCard from "../../src/components/article/article-card";

const article = {
    id: 'id',
    title: 'Gestion de messages asynchrones avec Cloud Tasks et Cloud Pub/Sub',
    description: 'Google Cloud Platform propose deux services permettant de traiter des messages de manière asynchrones. La philosophie des deux produits est très différente et ne répond pas du tout au même besoin.',
    content: 'empty',
    imageUrl: 'https://images.ctfassets.net/0c7qlubj8id5/1iwVXiNhUXg7WfMpJiX2mJ/5c62bc09b33f85efb4252d5fec70188d/jezael-melgoza-layMbSJ3YOE-unsplash.webp',
    slug: 'gestion-de-messages-asyn…-tasks-et-cloud-pub-sub',
    publicationDate: new Date(),
    tags: [],
    recommendations: [],
}

const meta: Meta<typeof ArticleCard> = {
    component: ArticleCard,
}

export default meta;

type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
    args: {
        article: article,
        variant: 'default',
    },
}

export const Inline: Story = {
    args: {
        article: article,
        variant: 'inline',
    },
}

