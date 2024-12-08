/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: "/your-repo-name", // Replace with your GitHub repo name
    assetPrefix: "/your-repo-name", // Ensures assets are correctly prefixed
};

export default nextConfig;
