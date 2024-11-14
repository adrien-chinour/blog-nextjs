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
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "https://faro-collector-prod-eu-west-0.grafana.net, https://cloud.umami.is, https://*.udfn.fr" },
                    { key: "Content-Security-Policy", value: "default-src 'self' https://*.udfn.fr"},
                ]
            }
        ]
    }
};

export default nextConfig;
