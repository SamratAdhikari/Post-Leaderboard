/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enable static export
    reactStrictMode: true,
    basePath: "/your-repo-name", // Replace 'your-repo-name' with your GitHub repository name
    assetPrefix: "/your-repo-name/", // Ensure assets are correctly prefixed
};

export default nextConfig;
