/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
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
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=60, s-maxage=300, stale-while-revalidate=86400, must-revalidate',
                    }
                ],
            },
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, must-revalidate',
                    }
                ],
            },
            {
                source: '/_scripts/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, must-revalidate',
                    }
                ],
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/_scripts/faro-sdk.js',
                destination: 'https://unpkg.com/@grafana/faro-web-sdk@1.18.2/dist/bundle/faro-web-sdk.iife.js',
            },
            {
                source: '/_scripts/umami-sdk.js',
                destination: 'https://cloud.umami.is/script.js',
            }
        ]
    }

};

export default nextConfig;
