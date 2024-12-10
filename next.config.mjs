/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/Post-Leaderboard", // Replace with your repository name
    assetPrefix: "/Post-Leaderboard", // Prefix for assets like favicon
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
