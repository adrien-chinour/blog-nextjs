import type {MetadataRoute} from 'next'

const hostname = process.env.HOSTNAME;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: '*',
        },
        sitemap: `${hostname}/sitemap.xml`,
    }
}
