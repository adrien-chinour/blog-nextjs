import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default withSentryConfig(nextConfig, {
    org: "webandwell",
    project: "blog-next",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    tunnelRoute: '/_errors'
});
