import type {MetadataRoute} from 'next'

const hostname = process.env.HOSTNAME;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '*',
            disallow: '/recherche'
        },
        sitemap: `${hostname}/sitemap.xml`,
    }
}
